import "dotenv/config";

import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import moment from "moment";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import {
  checkPhoneExist,
  checkPhoneIfNotExist,
  checkOtpErrorIfSameDate,
  checkOtpPhone,
  checkUser,
} from "./../utils/auth";

import {
  getUserByPhone,
  getOtpByPhone,
  createOtp,
  updateOtp,
  createUser,
  updateUser,
} from "../services/authService";
import { getUserById } from "../services/userService";
import { generateOTP, generateToken } from "../utils/generate";
import { createError } from "../utils/error";
import { errorCode } from "../config";

/*
 * POST localhost:8080/api/v1/register
 * Register a new user using Phone & password only
 * In real world, OTP should be used to verify phone number
 * But in this app, we will simulate fake OTP - 123456
 */

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const phone = req.body.phone;
  const user = await getUserByPhone(phone);
  checkPhoneExist(user);

  // OTP processing eg. Sending OTP request to Operator
  const otpCheck = await getOtpByPhone(phone);
  const token = generateToken();
  let result;
  let otp = "123456";

  if (!otpCheck) {
    const otpData = {
      phone, // phone
      otp, // fake OTP
      rememberToken: token,
      count: 1,
    };

    result = await createOtp(otpData);
  } else {
    const lastRequest = new Date(otpCheck.updatedAt).toLocaleDateString();
    const isSameDate = lastRequest == new Date().toLocaleDateString();

    checkOtpErrorIfSameDate(isSameDate, otpCheck);

    if (!isSameDate) {
      const otpData = {
        otp,
        rememberToken: token,
        count: 1,
        error: 0,
      };
      result = await updateOtp(otpCheck.id, otpData);
    } else {
      if (otpCheck.count === 3) {
        return next(
          createError(
            "OTP is allowed to request 3 times per day",
            405,
            errorCode.overLimit
          )
        );
      } else {
        const otpData = {
          otp,
          rememberToken: token,
          count: {
            increment: 1,
          },
        };
        result = await updateOtp(otpCheck.id, otpData);
      }
    }
  }

  res.status(200).json({
    message: `We are sending OTP to 09${result.phone}.`,
    phone: result.phone,
    token: result.rememberToken,
  });
};

/*
 * POST localhost:8080/api/v1/verify-otp
 * Verify OTP app sent recently
 */

export const verifyOTP = [
  // Validate and sanitize fields.
  body("token", "Token must not be empty.").trim().notEmpty().escape(),
  body("phone", "Invalid Phone Number.")
    .trim()
    .notEmpty()
    .matches("^[0-9]+$")
    .isLength({ min: 5, max: 12 })
    .escape(),
  body("otp", "OTP is not invalid.")
    .trim()
    .notEmpty()
    .matches("^[0-9]+$")
    .isLength({ min: 6, max: 6 })
    .escape(),

  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    if (errors.length > 0) {
      // There are errors. Render form again with sanitized values/error messages.
      return next(createError(errors[0].msg, 400, errorCode.invalid));
    }

    const { token, phone, otp } = req.body;

    const user = await getUserByPhone(phone);
    checkPhoneExist(user);

    const otpCheck = await getOtpByPhone(phone);
    checkOtpPhone(otpCheck);

    // Wrong OTP allowed 5 times per day
    const lastRequest = new Date(otpCheck!.updatedAt).toLocaleDateString();
    const isSameDate = lastRequest == new Date().toLocaleDateString();
    checkOtpErrorIfSameDate(isSameDate, otpCheck);

    let result;

    if (otpCheck!.rememberToken !== token) {
      const otpData = {
        error: 5,
      };
      result = await updateOtp(otpCheck!.id, otpData);

      return next(createError("Invalid token", 400, errorCode.invalid));
    }

    // OTP is expired
    const isExpired = moment().diff(otpCheck!.updatedAt, "minutes") > 2;
    if (isExpired) {
      return next(createError("OTP is expired.", 403, errorCode.otpExpired));
    }

    if (otpCheck!.otp !== otp) {
      // ----- Starting to record wrong times --------
      if (!isSameDate) {
        const otpData = {
          error: 1,
        };
        result = await updateOtp(otpCheck!.id, otpData);
      } else {
        const otpData = {
          error: {
            increment: 1,
          },
        };
        result = await updateOtp(otpCheck!.id, otpData);
      }
      // ----- Ending -----------
      return next(createError("OTP is incorrect.", 401, errorCode.invalid));
    }

    const randomToken = generateToken();
    const otpData = {
      verifyToken: randomToken,
      count: 1,
      error: 1,
    };
    result = await updateOtp(otpCheck!.id, otpData);

    res.status(200).json({
      message: "Successfully OTP is verified",
      phone: result.phone,
      token: result.verifyToken,
    });
  },
];

/*
 * POST localhost:8080/api/v1/confirm-password
 * Verify Token and set up password
 */

export const confirmPassword = [
  // Validate and sanitize fields.
  body("token", "Token must not be empty.").trim().notEmpty().escape(),
  body("phone", "Invalid Phone Number.")
    .trim()
    .notEmpty()
    .matches("^[0-9]+$")
    .isLength({ min: 5, max: 12 })
    .escape(),
  body("password", "Password must be 8 digits.")
    .trim()
    .notEmpty()
    .matches("^[0-9]+$")
    .isLength({ min: 8, max: 8 })
    .escape(),

  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    if (errors.length > 0) {
      // There are errors. Render form again with sanitized values/error messages.
      return next(createError(errors[0].msg, 400, errorCode.invalid));
    }

    const { token, phone, password } = req.body;

    const user = await getUserByPhone(phone);
    checkPhoneExist(user);

    const otpCheck = await getOtpByPhone(phone);
    checkOtpPhone(otpCheck);

    if (otpCheck!.error === 5) {
      return next(
        createError("This request may be an attack.", 400, errorCode.attack)
      );
    }

    let result;

    if (otpCheck!.verifyToken !== token) {
      const otpData = {
        error: 5,
      };
      result = await updateOtp(otpCheck!.id, otpData);

      return next(createError("Invalid token", 400, errorCode.invalid));
    }

    // request is expired
    const isExpired = moment().diff(otpCheck!.updatedAt, "minutes") > 10;
    if (isExpired) {
      return next(
        createError(
          "Your request is expired. Please try again.",
          403,
          errorCode.requestExpired
        )
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const randToken = generateToken();

    const userData = {
      phone: req.body.phone,
      password: hashPassword,
      randToken: randToken,
    };
    const newUser = await createUser(userData);

    // jwt token
    let payload = { id: newUser.id };
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, {
      expiresIn: "7d",
    });

    const jwtToken = jwt.sign(payload, process.env.TOKEN_SECRET!, {
      expiresIn: 60 * 15, // 15 mins
    });

    res.status(201).json({
      message: "Successfully created an account.",
      token: jwtToken,
      user_id: newUser.id,
      randToken: randToken,
      refreshToken: refreshToken,
    });
  },
];

/*
 * POST localhost:8080/api/v1/login
 * Login using phone and password
 */

export const login = [
  // Validate and sanitize fields.
  body("password", "Password must be 8 digits.")
    .trim()
    .notEmpty()
    .matches("^[0-9]+$")
    .isLength({ min: 8, max: 8 })
    .escape(),

  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    if (errors.length > 0) {
      // There are errors. Render form again with sanitized values/error messages.
      return next(createError(errors[0].msg, 400, errorCode.invalid));
    }

    const { phone, password } = req.body;

    const user = await getUserByPhone(phone);

    checkPhoneIfNotExist(user);

    // Wrong Password allowed 3 times per day
    if (user!.status === "freeze") {
      return next(
        createError(
          "Your account is temporarily locked. Please contact us.",
          401,
          errorCode.accountFreeze
        )
      );
    }

    let result;

    const isEqual = await bcrypt.compare(password, user!.password);
    if (!isEqual) {
      // ----- Starting to record wrong times --------
      const lastRequest = new Date(user!.updatedAt).toLocaleDateString();
      const isSameDate = lastRequest == new Date().toLocaleDateString();

      if (!isSameDate) {
        const userData = {
          error: 1,
        };
        result = await updateUser(user!.id, userData);
      } else {
        if (user!.error >= 2) {
          const userData = {
            status: "freeze",
          };
          result = await updateUser(user!.id, userData);
        } else {
          const userData = {
            error: {
              increment: 1,
            },
          };
          result = await updateUser(user!.id, userData);
        }
      }
      // ----- Ending -----------
      return next(createError("Password is wrong.", 401, errorCode.invalid));
    }

    const randToken = generateToken();

    if (user!.error >= 1) {
      const userData = {
        error: 0,
        randToken: randToken,
      };
      result = await updateUser(user!.id, userData);
    } else {
      const userData = {
        randToken: randToken,
      };
      result = await updateUser(user!.id, userData);
    }

    let payload = { id: user!.id };
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, {
      expiresIn: "7d",
    });

    const jwtToken = jwt.sign(payload, process.env.TOKEN_SECRET!, {
      expiresIn: 60 * 3, // "3 mins"
    });

    res.status(200).json({
      message: "Successfully Logged In.",
      token: jwtToken,
      user_id: user!.id,
      randToken: randToken,
      refreshToken: refreshToken,
    });
  },
];

export const refreshToken = [
  // Validate and sanitize fields.
  body("refreshToken", "RefreshToken must not be empty.")
    .trim()
    .notEmpty()
    .escape(),
  body("randToken", "RandToken must not be empty.").trim().notEmpty().escape(),

  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    if (errors.length > 0) {
      // There are errors. Render form again with sanitized values/error messages.
      return next(createError(errors[0].msg, 400, errorCode.invalid));
    }

    const authHeader = req.get("Authorization");
    if (!authHeader) {
      return next(
        createError(
          "You are not an authenticated user!.",
          401,
          errorCode.unauthenticated
        )
      );
    }
    const { refreshToken, randToken } = req.body;

    // Refresh Token Verification
    let decodedToken;
    try {
      decodedToken = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET!
      ) as {
        id: number;
      };
    } catch (error: any) {
      return next(
        createError("App needs to be logged out.", 401, errorCode.attack)
      );
    }
    const userId = decodedToken.id;

    const user = await getUserById(userId);
    checkUser(user);

    if (user!.randToken !== randToken) {
      const userData = {
        error: 5,
      };
      await updateUser(userId, userData);

      return next(
        createError(
          "This request may be an attack. Please contact the user team.",
          400,
          errorCode.attack
        )
      );
    }

    const randTokenNew = generateToken();

    const userData = {
      randToken: randTokenNew,
    };
    await updateUser(userId, userData);

    // jwt token
    let payload = { id: userId };
    const refreshTokenNew = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    const jwtToken = jwt.sign(payload, process.env.TOKEN_SECRET!, {
      expiresIn: 60 * 15, // "15 mins"
    });

    res.status(200).json({
      message: "Successfully sent a new token.",
      token: jwtToken,
      user_id: userId,
      randToken: randTokenNew,
      refreshToken: refreshTokenNew,
    });
  },
];

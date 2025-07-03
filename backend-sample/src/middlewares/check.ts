import { Request, Response, NextFunction } from "express";
import { createError } from "../utils/error";
import { errorCode } from "../config";

export const validatePhone = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let phone = req.body.phone.replace(/\s/g, "");

  if (phone.match("^[0-9]+$") == null) {
    return next(
      createError(
        "Invalid phone number. Please enter the correct one.",
        400,
        errorCode.invalid
      )
    );
  }
  if (phone.slice(0, 2) == "09") {
    phone = phone.substring(2, phone.length);
  }
  if (phone.length < 5 || phone.length > 12) {
    return next(
      createError(
        "Invalid phone number. Please enter the correct one.",
        400,
        errorCode.invalid
      )
    );
  }
  req.body.phone = phone;
  next();
};

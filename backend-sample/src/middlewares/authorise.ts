/*
 * Authorization - middleware
 * These two functions are same
 * authorise(true, "super", "manager", "editor") === authorise(false, "user")
 * true means that his role must be one of these.
 * false means that his role must not be one of these.
 */
import { Request, Response, NextFunction } from "express";
import { getUserById } from "../services/userService";
import { createError } from "../utils/error";
import { errorCode } from "../config";

interface CustomRequest extends Request {
  userId?: number; // or string, depending on your ID type
  user?: any;
}

const authorise = (permission: boolean, ...roles: string[]) => {
  return async function (
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) {
    const id = req.userId;
    const user = await getUserById(id!);
    if (!user) {
      return next(
        createError(
          "This account has not registered!",
          401,
          errorCode.unauthenticated
        )
      );
    }

    const result = roles.includes(user.role);

    if (!permission && result) {
      return next(
        createError("This action is not allowed.", 403, errorCode.unauthorised)
      );
    }

    if (permission && !result) {
      return next(
        createError("This action is not allowed.", 403, errorCode.unauthorised)
      );
    }
    req.user = user;
    next();
  };
};

export default authorise;

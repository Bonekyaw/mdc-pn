import { Request, Response, NextFunction } from "express";

import { getAllCategories } from "../services/categoryService";
import { getUserById } from "../services/userService";
import { checkUser } from "../utils/auth";

interface CustomRequest extends Request {
  userId?: number; // or string, depending on your ID type
}

export const getCategoryList = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const userId = req.userId;
  const user = await getUserById(userId!);
  checkUser(user);

  const categories = await getAllCategories();
  res.status(200).json(categories);
};

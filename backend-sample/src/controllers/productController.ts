import { Request, Response, NextFunction } from "express";
import { body, query, param, validationResult } from "express-validator";

import {
  getAllProducts,
  getProductById,
  addProductToFavourite,
  removeProductFromFavourite,
} from "../services/productService";
import { createError } from "../utils/error";
import { errorCode } from "../config";
import { getUserById } from "../services/userService";
import { checkUser } from "../utils/auth";

interface CustomRequest extends Request {
  userId?: number; // or string, depending on your ID type
}

export const index = [
  // Validate and sanitize fields.
  query("limit", "Limit number must be integer.").isInt({ gt: 0 }).optional(),
  query("cursor", "Cursor must be integer.").isInt({ gt: 0 }).optional(),
  query("category", "category id must be integer.").isInt({ gt: 0 }).optional(),

  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    if (errors.length > 0) {
      // There are errors. Render form again with sanitized values/error messages.
      return next(createError(errors[0].msg, 400, errorCode.invalid));
    }

    const userId = req.userId;
    const user = await getUserById(userId!);
    checkUser(user);

    const limit = req.query.limit || 4; // Be aware of error overtaking db rows;
    const cursor = req.query.cursor;

    const where = req.query.category ? { categoryId: +req.query.category } : {};

    const options = {
      where,
      take: +limit + 1,
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: +cursor } : undefined,
      select: {
        id: true,
        brand: true,
        title: true,
        star: true,
        quantity: true,
        price: true,
        discount: true,
        image: true,
        categoryId: true,
        users: {
          where: {
            id: userId,
          },
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    };

    const products = await getAllProducts(options);
    const hasNextPage = products.length > +limit;

    if (hasNextPage) {
      products.pop();
    }

    const newCursor =
      products.length > 0 ? products[products.length - 1].id : null;

    res.status(200).json({
      message: "Get All infinite products",
      hasNextPage,
      newCursor,
      products,
    });
  },
];

export const show = [
  // Validate and sanitize fields.
  param("id", "Product ID must be integer.").isInt({ gt: 0 }).toInt(),

  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    if (errors.length > 0) {
      // There are errors. Render form again with sanitized values/error messages.
      return next(createError(errors[0].msg, 400, errorCode.invalid));
    }

    const userId = req.userId;
    const user = await getUserById(userId!);
    checkUser(user);

    const productId = req.params.id;

    const product = await getProductById(+productId, +userId!);

    res.status(200).json(product);
  },
];

export const toggleFavourite = [
  // Validate and sanitize fields.
  body("productId", "Product ID must not be empty.").isInt({ gt: 0 }),
  body("favourite", "Favourite must not be empty.").isBoolean(),

  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    if (errors.length > 0) {
      // There are errors. Render form again with sanitized values/error messages.
      return next(createError(errors[0].msg, 400, errorCode.invalid));
    }

    const userId = req.userId;
    const user = await getUserById(userId!);
    checkUser(user);

    const productId = req.body.productId;
    const favourite = req.body.favourite;

    let result;

    if (favourite) {
      await addProductToFavourite(+productId, +userId!);
      result = { productId, userId };
    } else {
      await removeProductFromFavourite(+productId, +userId!);
      result = { productId, userId: null };
    }

    res.status(200).json(result);
  },
];

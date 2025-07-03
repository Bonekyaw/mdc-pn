import { Request, Response, NextFunction } from "express";
import { unlink } from "node:fs/promises";
import path from "path";
import { body, query, validationResult } from "express-validator";

import { updateUser } from "../services/authService";
import { checkUploadFile } from "../utils/file";

// Extend the Request interface to include the userId property
interface CustomRequest extends Request {
  userId?: number; // or string, depending on your ID type
  file?: any;
  user?: any;
}

export const uploadProfile = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  // const id = req.params.id;
  const id = req.userId;
  const image = req.file;
  // console.log("Multiple Images array", req.files);  // For multiple files uploaded

  const user = req.user;

  checkUploadFile(image);
  const imageUrl = image.path.replace("\\", "/");

  if (user!.profile) {
    // await unlink(user!.profile); // Delete an old profile image because it accepts just one.
    try {
      await unlink(path.join(__dirname, "../..", user!.profile));
    } catch (error) {
      const userData = {
        profile: imageUrl,
      };
      await updateUser(id!, userData);
    }
  }

  const userData = {
    profile: imageUrl,
  };
  await updateUser(id!, userData);

  res
    .status(200)
    .json({ message: "Successfully uploaded the image.", profile: imageUrl });
};

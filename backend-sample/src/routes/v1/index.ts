import express from "express";

import isAuth from "../../middlewares/isAuth";
import authorise from "../../middlewares/authorise";
import adminRoutes from "./admin";
import authRoutes from "./auth";
import userRoutes from "./user";

const router = express.Router();

router.use("/api/v1", authRoutes);
router.use("/api/v1/admins", isAuth, authorise(false, "admin"), adminRoutes); // authorise() is just an example for authorization
router.use("/api/v1/users", isAuth, userRoutes);

export default router;

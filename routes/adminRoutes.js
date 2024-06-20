import adminController from "../controllers/adminController.js";
import express from "express";
import { expressjwt } from "express-jwt";
import "dotenv/config";
import upload from "../config/multer.config.js";
import adminValidations from "../middlewares/validateAdmin.js";
import errorIsEmpty from "../middlewares/errorsIsEmpty.js";

const router = express.Router();

router.post("/admin", adminValidations, errorIsEmpty, adminController.createAdmin);
router.patch("/admin/:id", upload.single("profileImage"),expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),adminValidations, errorIsEmpty, adminController.editAdmin);
router.delete("/admin/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),adminController.deleteAdmin);
router.post("/admin/login", adminController.loginAdmin);

export default router

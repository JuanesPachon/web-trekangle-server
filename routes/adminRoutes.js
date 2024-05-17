import adminController from "../controllers/adminController.js";
import express from "express";
import { expressjwt } from "express-jwt";
import "dotenv/config";

const router = express.Router();

router.post("/admin", adminController.createAdmin);
router.patch("/admin/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),adminController.editAdmin);
router.delete("/admin/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),adminController.deleteAdmin);
router.post("/admin/login", adminController.loginAdmin);

export default router

import adminController from "../controllers/adminController";
import express from "express";
import { expressjwt } from "express-jwt";
import "dotenv/config";

const router = express.Router();

router.post("/admin", adminController.createAdmin);
router.delete("/admin/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),adminController.deleteAdmin);
router.post("/admin/login", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),adminController.loginAdmin);
router.patch("/users/:id",adminController.editAdmin);

export default router

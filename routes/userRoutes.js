import userController from "../controllers/userController.js";
import express from "express";
import { expressjwt } from "express-jwt";
import "dotenv/config";

const router = express.Router();

router.get("/users", userController.listUser);
router.get("/users/:id", userController.findUser);
router.post("/users", userController.createUser);
router.patch("/users/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),userController.editUser);
router.delete("/users/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}), userController.deleteUser);
router.post("/users/login", userController.loginUser);

export default router;


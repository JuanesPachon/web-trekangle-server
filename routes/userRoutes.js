import userController from "../controllers/userController.js";
import express from "express";
import { expressjwt } from "express-jwt";
import "dotenv/config";
import { userEditValidations, userValidations } from "../middlewares/validateUser.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js";
import { upload, uploadToSupabase } from "../config/multer.config.js"

const router = express.Router();

router.get("/users", userController.listUser);
router.get("/users/:id", userController.findUser);
router.post("/users", userValidations, errorsIsEmpty,userController.createUser);
router.patch("/users/:id", upload.single("profileImage"), uploadToSupabase,userEditValidations,errorsIsEmpty, expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}), userController.editUser);
router.delete("/users/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}), userController.deleteUser);
router.post("/users/login", userController.loginUser);

export default router;


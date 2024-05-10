import userController from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.get("/users", userController.listUser);
router.get("/users/:id", userController.findUser);
router.post("/users", userController.createUser);
router.patch("/users/:id", userController.editUser);
router.delete("/users/:id", userController.deleteUser);

export default router;


import experienceController from "../controllers/experienceController.js";
import express from "express"
import { expressjwt } from "express-jwt";
import "dotenv/config";
import upload from "../config/multer.config.js"

const router = express.Router();

router.get("/experiences", experienceController.listExperience); // ver
router.get("/experiences/:id", experienceController.findExperience); // encontrar
router.post("/experiences", upload.array("images", 4),expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),experienceController.createExperience); // crear
router.patch("/experiences/:id", upload.array("images", 4),expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),experienceController.editExperience); // editar
router.delete("/experiences/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),experienceController.deleteExperience); // eliminar

export default router;


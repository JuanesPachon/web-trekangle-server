import experienceController from "../controllers/experienceController.js";
import express from "express"

const router = express.Router();

router.get("/experiences", experienceController.listExperience);
router.get("/experiences/:id", experienceController.findExperience);
router.post("/experiences", experienceController.createExperience);
router.patch("/experiences/:id", experienceController.editExperience)
router.delete("experiences/:id", experienceController.deleteExperience);

export default router;
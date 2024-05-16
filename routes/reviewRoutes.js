import reviewController from "../controllers/reviewController.js";
import express from "express"
import { expressjwt } from "express-jwt";
import "dotenv/config";

const router = express.Router();

router.get("/reviews", reviewController.listReview);
router.get("/revies/:id", reviewController.findReview);
router.post("/reviews", reviewController.createReview);
router.patch("/reviews/:id", reviewController.editReview);
router.delete("/reviews/:id", reviewController.deleteReview);

export default router;
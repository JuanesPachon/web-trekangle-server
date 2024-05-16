import reviewController from "../controllers/reviewController.js";
import express from "express"
import { expressjwt } from "express-jwt";
import "dotenv/config";

const router = express.Router();

router.get("/reviews", reviewController.listReview);
router.get("/revies/:id", reviewController.findReview);
router.post("/reviews", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),reviewController.createReview);
router.patch("/reviews/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),reviewController.editReview);
router.delete("/reviews/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),reviewController.deleteReview);

export default router;
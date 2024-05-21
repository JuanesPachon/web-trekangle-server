import reviewController from "../controllers/reviewController.js";
import express from "express"
import { expressjwt } from "express-jwt";
import "dotenv/config";
import ValidateReview from "../middlewares/validateReview.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js"

const router = express.Router();

router.get("/reviews", reviewController.listReview); 
router.get("/reviews/:id", reviewController.findReview);
router.post("/reviews", ValidateReview, errorsIsEmpty, expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),reviewController.createReview);
router.patch("/reviews/:id", ValidateReview, errorsIsEmpty, expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),reviewController.editReview);
router.delete("/reviews/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),reviewController.deleteReview);

export default router;
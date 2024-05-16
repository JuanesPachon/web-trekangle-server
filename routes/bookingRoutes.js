import bookingController from "../controllers/bookingController.js";
import express from "express";
import { expressjwt } from "express-jwt";
import "dotenv/config";

const router = express.Router();

router.get("/bookings", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}), bookingController.listBooking);
router.get("/bookings/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}), bookingController.findBooking);
router.post("/bookings", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}), bookingController.createBooking);
router.patch("/bookings/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}), bookingController.editBooking);
router.delete("/bookings/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}), bookingController.deleteBooking);

export default router;
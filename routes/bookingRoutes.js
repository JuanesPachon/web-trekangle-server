import bookingController from "../controllers/bookingController.js";
import express from "express";

const router = express.Router();

router.get("/bookings", bookingController.listBooking);
router.get("/bookings/:id", bookingController.findBooking);
router.post("/bookings", bookingController.createBooking);
router.patch("/bookings/:id", bookingController.editBooking);
router.delete("/bookings/:id", bookingController.deleteBooking);

export default router;
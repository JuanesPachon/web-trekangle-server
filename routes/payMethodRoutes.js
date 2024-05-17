import payMethodController from "../controllers/payMethodController.js";
import express from "express";
import { expressjwt } from "express-jwt";
import "dotenv/config";

const router = express.Router();

router.get("/payMethod", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),payMethodController.listpayMethod);
router.post("/payMethod", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),payMethodController.createpayMethod);
router.get("/payMethod/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),payMethodController.findpayMethod);
router.patch("/payMethod/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),payMethodController.editpayMethod);
router.delete("/payMethod/:id", expressjwt({algorithms: ["HS256"], secret: process.env.JWT_KEY}),payMethodController.deletepayMethod);

export default router;
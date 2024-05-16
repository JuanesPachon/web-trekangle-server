import payMethodController from "../controllers/payMethodController";
import express from "express";
import { expressjwt } from "express-jwt";
import "dotenv/config";

const router = express.Router();

router.get("/payMethod", payMethodController.listpayMethod);
router.post("/payMethod",  payMethodController.createpayMethod);
router.get("/payMethod/:id",  payMethodController.findpayMethod);
router.patch("/payMethod/:id",  payMethodController.editpayMethod);
router.delete("/payMethod/:id",  payMethodController.deletepayMethod);

export default router;
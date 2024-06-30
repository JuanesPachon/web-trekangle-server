import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import payMethodRoutes from "./routes/payMethodRoutes.js";
import path from "path";

const port = process.env.PORT || 3000;

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(express.static(path.join(path.dirname(import.meta.filename), './public')));
app.use(express.json());

app.use("/", userRoutes);
app.use("/", bookingRoutes);
app.use("/", experienceRoutes);
app.use("/", adminRoutes);
app.use("/", reviewRoutes);
app.use("/", payMethodRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

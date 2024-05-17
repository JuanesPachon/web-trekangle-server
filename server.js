import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import payMethodRoutes from "./routes/payMethodRoutes.js";
import "dotenv/config";

const port = process.env.PORT

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", userRoutes);
app.use("/", bookingRoutes);
app.use("/", experienceRoutes);
app.use("/", adminRoutes);
app.use("/", reviewRoutes);
app.use("/", payMethodRoutes);

app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});

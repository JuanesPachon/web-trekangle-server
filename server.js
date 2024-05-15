import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import "dotenv/config";

const port = process.env.PORT

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", userRoutes);
app.use("/", bookingRoutes);
app.use("/", experienceRoutes);

app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});

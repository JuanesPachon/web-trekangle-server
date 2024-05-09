import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect("mongodb://localhost:27017/trekangleDB");

app.use(express.json());
app.listen(3000, () => {
  console.log("El servidor esta corriendo en el puerto 3000");
});

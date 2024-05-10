import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/trekangleDB"); // connection string

export default mongoose;
import mongoose from "mongoose";

const experienceSchema = mongoose.Schema({
name: String,
place: String,
price: Number,
});

const experience = mongoose.model("Experience", experienceSchema);

export default experience;
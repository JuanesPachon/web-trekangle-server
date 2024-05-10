import mongoose from "../config/mongoose.config.js";

const experienceSchema = mongoose.Schema({
  name: String,
  place: String,
  price: Number,
});

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
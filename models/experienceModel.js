import mongoose from "../config/mongoose.config.js";

const experienceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
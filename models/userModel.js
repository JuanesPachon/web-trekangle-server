import mongoose from "../config/mongoose.config.js";

const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

export default User;
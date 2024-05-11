import mongoose from "../config/mongoose.config.js";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
});

userSchema.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 10);
  return;
});

const User = mongoose.model("User", userSchema);

export default User;
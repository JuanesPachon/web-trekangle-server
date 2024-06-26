import mongoose from "../config/mongoose.config.js";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  userName: {type: String},
  name: {type: String},
  email: {type: String},
  password: {type: String},
  profileImage: { type: String },
  deleteAt: {
    type: Date,
    default: null,
  }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  return;
});

const User = mongoose.model("User", userSchema);

export default User;
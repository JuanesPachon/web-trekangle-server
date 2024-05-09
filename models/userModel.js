import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

export default User;
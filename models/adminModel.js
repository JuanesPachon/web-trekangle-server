import mongoose from "../config/mongoose.config.js";
import bcrypt from "bcryptjs";

const adminSchema = mongoose.Schema({
  name: { type: String },
  surname: { type: String },
  email: { type: String },
  password: { type: String },
});

adminSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
  return;
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;

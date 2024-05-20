import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

async function createAdmin(req, res) {
  try {
    const newAdmin = await Admin.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      profileImage: req.file.filename
    });
    res.json(newAdmin);
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function editAdmin(req, res) {
  try {
    const { id } = await Admin.findById(req.auth.sub);
    const foundAdmin = await Admin.findById(req.params.id);

    if (id === foundAdmin.id) {
      foundAdmin.name = req.body.name ?? foundAdmin.name;
      foundAdmin.surname = req.body.surname ?? foundAdmin.surname;
      foundAdmin.email = req.body.email ?? foundAdmin.email;
      foundAdmin.password = req.body.password ?? foundAdmin.password;
      foundAdmin.profileImage = req.file.filename ?? foundAdmin.profileImage;

      await foundAdmin.save();

      res.json(foundAdmin);
    } else {
      res.json("You cannot edit this Admin, check again");
    }
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function deleteAdmin(req, res) {
  try {
    const { id } = await Admin.findById(req.auth.sub);
    const foundAdmin = await Admin.findById(req.params.id);

    if (id === foundAdmin.id) {
      const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
      res.json("The Admin was deleted");
    } else {
      res.json("You cannot delete this Admin, check again");
    }
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function loginAdmin(req, res) {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (admin !== null) {
      const validHash = await bcrypt.compare(req.body.password, admin.password);
      if (validHash) {
        const tokenPayLoad = {
          sub: admin.id,
          iat: Date.now(),
        };
        const token = jwt.sign(tokenPayLoad, process.env.JWT_KEY);
        res.json({ token: token });
      } else {
        res.json("invalid credentials");
      }
    } else {
      res.json("invalid credentials");
    }
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

export default {
  editAdmin,
  createAdmin,
  deleteAdmin,
  loginAdmin,
}

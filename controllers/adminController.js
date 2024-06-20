import adminHandler from "../utils/errorHandler.js";
import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

async function createAdmin(req, res) {
  try {
    const existingAdmin = await Admin.findOne({ email: req.body.email });
    if (existingAdmin) {
      adminHandler.handleDuplicateError(res, "The email is already registered");
      return;
    }

    const newAdmin = await Admin.create({
      adminName: req.body.adminName,
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(newAdmin);
  } catch (error) {
    if (error.name === "ValidationError") {
      adminHandler.handleValidationError(res, error.message);
    } else {
      adminHandler.handleServerError(res);
    }
  }
}

async function editAdmin(req, res) {
  try {
    const { id } = await Admin.findById(req.auth.sub);
    const foundAdmin = await Admin.findById(req.params.id);

    if (!foundAdmin) {
      adminHandler.handleNotFoundError(res, "Admin");
      return;
    }

    if (id === foundAdmin.id) {
      foundAdmin.adminName = req.file.adminName ?? foundAdmin.adminName;
      foundAdmin.name = req.body.name ?? foundAdmin.name;
      foundAdmin.surname = req.body.surname ?? foundAdmin.surname;
      foundAdmin.email = req.body.email ?? foundAdmin.email;
      foundAdmin.password = req.body.password ?? foundAdmin.password;
      foundAdmin.profileImage = req.file.filename ?? foundAdmin.profileImage;

      await foundAdmin.save();

      res.json(foundAdmin);
    } else {
      adminHandler.handleAuthError(res);
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      adminHandler.handleValidationError(res, error.message);
    } else {
      adminHandler.handleServerError(res);
    }
  }
}

async function deleteAdmin(req, res) {
  try {
    const { id } = await Admin.findById(req.auth.sub);
    const foundAdmin = await Admin.findById(req.params.id);

    if (!foundAdmin) {
      adminHandler.handleNotFoundError(res, "Admin");
      return;
    }

    if (id === foundAdmin.id) {
      await Admin.findByIdAndDelete(req.params.id);
      res.json("The Admin was deleted");
    } else {
      adminHandler.handleAuthError(res);
    }
  } catch (error) {
    adminHandler.handleServerError(res);
  }
}

async function loginAdmin(req, res) {
  try {
    const admin = await Admin.findOne({ email: req.body.email });

    if (!admin) {
      adminHandler.handleAuthError(res);
      return;
    }

    const validHash = await bcrypt.compare(req.body.password, admin.password);
    
    if (validHash) {
      const tokenPayLoad = {
        sub: admin.id,
        iat: Date.now(),
      };
      const token = jwt.sign(tokenPayLoad, process.env.JWT_KEY);
      res.json({ token: token });
    } else {
      adminHandler.handleAuthError(res, "Invalid credentials");
    }
  } catch (error) {
    adminHandler.handleServerError(res);
  }
}

export default {
  editAdmin,
  createAdmin,
  deleteAdmin,
  loginAdmin,
};

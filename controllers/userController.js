import userHandler from "../utils/errorHandler.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import Admin from "../models/adminModel.js";

async function listUser(req, res) {
  try {
    const userList = await User.find({ deleteAt: null }).populate();
    res.json(userList);
  } catch (error) {
    userHandler.handleServerError(res);
  }
}

async function findUser(req, res) {
  try {
    const userId = req.params.id;
    const foundUser = await User.findById(userId);
    if (!foundUser) {
      userHandler.handleNotFoundError(res, "Usuario");
      return;
    }
    res.json(foundUser);
  } catch (error) {
    userHandler.handleServerError(res);
  }
}

async function createUser(req, res) {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      userHandler.handleDuplicateError(res, "Email is already in use");
      return;
    }

    const newUser = await User.create({
      userName: req.body.userName,
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      profileImage: req.body.profileImage ?? "",
    });
    res.json(newUser);
  } catch (error) {
    if (error.name === "ValidationError") {
      userHandler.handleValidationError(res);
    } else {
      userHandler.handleServerError(res);
    }
  }
}

async function editUser(req, res) {
  try {

    const foundUser = await User.findById(req.params.id);

    if (!foundUser) {
      userHandler.handleNotFoundError(res, "User");
      return;
    }

    if (await User.findById(req.auth.sub) || await Admin.findById(req.auth.sub)) {

      foundUser.userName = req.body.userName ?? foundUser.userName;
      foundUser.name = req.body.name ?? foundUser.name;
      foundUser.surname = req.body.surname ?? foundUser.surname;
      foundUser.email = req.body.email ?? foundUser.email;
      foundUser.password = req.body?.password ?? foundUser.password;
      foundUser.profileImage = req.file?.filename ?? foundUser.profileImage;

      await foundUser.save();

      res.json(foundUser);
    } else {
      userHandler.handleAuthError(res);
    }
  } catch (error) {
    console.log(error);
    userHandler.handleServerError(res);
  }
}

async function deleteUser(req, res) {
  try {

    const foundUser = await User.findById(req.params.id);

    if (!foundUser) {
      userHandler.handleNotFoundError(res, "User");
      return;
    }

    if (await User.findById(req.auth.sub)) {
      const { userId } = await User.findById(req.auth.sub);

      if (userId === foundUser._id) {
        await User.findByIdAndUpdate(req.params.id, {
          deleteAt: Date.now(),
        });
        res.json("The user was deleted");
  
      } 
    }
    
    if(await Admin.findById(req.auth.sub)) {
      await User.findByIdAndUpdate(req.params.id, {
        deleteAt: Date.now(),
      });
      res.json("The user was deleted");
    }

    else {
      userHandler.handleAuthError(res);
    }
  } catch (error) {
    console.log(error);
    userHandler.handleServerError(res);
  }
}

async function loginUser(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      userHandler.handleAuthError(res);
      return;
    }

    const validHash = await bcrypt.compare(req.body.password, user.password);
    if (validHash) {
      const tokenPayLoad = {
        sub: user.id,
        iat: Date.now(),
      };
      const token = jwt.sign(tokenPayLoad, process.env.JWT_KEY);
      res.json({ token: token });
    } else {
      userHandler.handleAuthError(res);
    }
  } catch (error) {
    userHandler.handleServerError(res);
  }
}

export default {
  listUser,
  findUser,
  createUser,
  editUser,
  deleteUser,
  loginUser,
};

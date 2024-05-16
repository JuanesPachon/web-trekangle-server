
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

async function listUser(req, res) {
  try {
    const userList = await User.find().populate();
    res.json(userList);
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function findUser(req, res) {
  try {
    const userId = req.params.id;
    const foundUser = await User.findById(userId);
    res.json(foundUser);
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function createUser(req, res) {
  try {
    const newUser = await User.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function editUser(req, res) {
  try {
    const {id} = await User.findById(req.auth.sub);
    const foundUser = await User.findById(req.params.id);

    if(id === foundUser.id) {
      foundUser.name = req.body.name ?? foundUser.name;
      foundUser.surname = req.body.surname ?? foundUser.surname;
      foundUser.email = req.body.email ?? foundUser.email;
      foundUser.password = req.body.password ?? foundUser.password;

    await foundUser.save();

    res.json(foundUser);
    } else {
      res.json("You cannot edit this user, check again")
    }
    
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function deleteUser(req, res) {
  try {
    const {id} = await User.findById(req.auth.sub)
    const foundUser = await User.findById(req.params.id)
    
    if (id === foundUser.id) {
      const deleteUser = await User.findByIdAndDelete(req.params.id);
      res.json("The user was deleted");
    } else {
      res.json("You cannot delete this user, check again")
    }

  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function loginUser(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (user !== null) {
      const validHash = await bcrypt.compare(req.body.password, user.password);
      if (validHash) {
        const tokenPayLoad = {
          sub: user.id,
          iat: Date.now(),
        }
        const token = jwt.sign(tokenPayLoad, process.env.JWT_KEY);
        res.json({token: token})
      } else {
        res.json("invalid credentials")
      }
    } else {
      res.json("invalid credentials")
    }
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

export default {
    listUser,
    findUser,
    createUser,
    editUser,
    deleteUser,
    loginUser
}


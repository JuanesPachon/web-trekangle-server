
import User from "../models/userModel.js";

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
    const foundUser = await User.findById(req.params.id);

    foundUser.name = req.body.name ?? foundUser.name;
    foundUser.surname = req.body.surname ?? foundUser.surname;
    foundUser.email = req.body.email ?? foundUser.email;
    foundUser.password = req.body.password ?? foundUser.password;

    await foundUser.save();

    res.json(foundUser);
  } catch (error) {
    res.status(500).json("The server had an error");
  }
}

async function deleteUser(req, res) {
  try {
    const foundUser = await User.findByIdAndDelete(req.params.id);
    res.json("The user was deleted");
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
}


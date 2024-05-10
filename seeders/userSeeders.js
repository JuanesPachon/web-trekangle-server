import User from "../models/userModel.js";

async function userSeeders() {
  await User.create({
    name: "John",
    surname: "Doe",
    email: "johndoe@example.com",
    password: "password123",
  });

  await User.create({
    name: "Jane",
    surname: "Smith",
    email: "janesmith@example.com",
    password: "abcde12345"
  });

  await User.create({
    name: "Michael",
    surname: "Johnson",
    email: "michaeljohnson@example.com",
    password: "qwerty123"
  });

  await User.create({
    name: "Emily",
    surname: "Davis",
    email: "emilydavis@example.com",
    password: "password456"
  });

  await User.create({
    name: "David",
    surname: "Wilson",
    email: "davidwilson@example.com",
    password: "12345678"
  });
}

userSeeders()

import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Route to add new user
router.post("/create/", async (request, response) => {
  try {
    const { userName, email, password } = request.body;

    if (!userName || !email || !password) {
      return response.status(400).send({
        message: "username & email & password are required",
      });
    }

    const userNameCheck = await User.findOne({ userName: userName });
    if (userNameCheck) {
      return response.json({ msg: "userName already exist", status: false });
    }

    const gmailCheck = await User.findOne({ gmail: email });
    if (gmailCheck) {
      return response.json({ msg: "email already exist", status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 16);
    const newUser = {
      userName,
      gmail: email,
      password: hashedPassword,
    };

    const user = await User.create(newUser);
    delete user.password;
    return response.status(201).send({ user, status: true });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: "Internal Server Error" });
  }
});

// Route for Get User
router.post("/get/:userName", async (request, response) => {
  try {
    const { userName, password } = request.body;

    const user = await User.findOne({ userName: userName });

    if (!user) {
      return response.json({ msg: "Incorrect userName!", status: false });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return response.json({ msg: "Incorrect password!", status: false });
    } else {
      // Remove password before sending user data to the client
      delete user.password;

      return response.status(200).json({ user, status: true });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: "Internal Server Error" });
  }
});

export default router;

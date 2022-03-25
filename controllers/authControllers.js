import User from "../models/userModel.js";
import { BadRequestError } from "../errors/index.js";
import "express-async-errors";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const existEmail = await User.findOne({ email });

  if (existEmail) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password });

  const token = user.createJWT();

  res.status(201).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
    },
    token,
    location: user.location,
  });
};

const login = (req, res) => {
  res.send("login");
};

const updateUser = (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };

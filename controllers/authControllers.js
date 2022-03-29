import User from "../models/userModel.js";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";
import "express-async-errors";

const register = async (req, res, next) => {
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

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  user.password = undefined;
  const token = user.createJWT();

  res.status(200).json({
    user,
    token,
    location: user.location,
  });
};

const updateUser = async (req, res) => {
  const { name, email, lastName, location } = req.body;
  if (!name || !email || !lastName || !location) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.name = name;
  user.email = email;
  user.lastName = lastName;
  user.location = location;

  await user.save();
  const token = user.createJWT();

  res.status(200).json({ user, token, location: user.location });
};

export { register, login, updateUser };

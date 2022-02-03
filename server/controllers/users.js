const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

dotenv.config({
  path: "./config/config.env",
});

// @desc    Get user by id
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    return user
      ? res.status(200).json({ _id: user._id, username: user.username })
      : res.status(404).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Server Error",
    });
  }
};

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, "-password").sort({ createdAt: -1 });

    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Server Error",
    });
  }
};

// @desc    Sign up user
// @route   POST /api/v1/users
// @access  Public
exports.signUp = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      return res.status(400).json({
        error: "Please enter a username",
      });
    }

    if (username.length < 3) {
      return res.status(400).json({
        error: "Username must be greater than 2 characters",
      });
    }

    if (password.length < 5) {
      return res.status(400).json({
        error: "Password must greater than 4 characters",
      });
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
      return res.status(500).send();
    }

    const createdUser = new User({
      username,
      password: hashedPassword,
    });

    try {
      await createdUser.save();
    } catch (err) {
      return res.status(500).send();
    }

    return res.status(201).json({ username: createdUser.username });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      console.log(error);
      return res.status(400).json({
        error: messages,
      });
    } else {
      console.log(error);
      return res.status(500).json({
        error: `Server Error: ${error}`,
      });
    }
  }
};

// @desc    Log in user
// @route   GET /api/v1/users
// @access  Public
exports.logIn = async (req, res, next) => {
  let existingUser;
  const { username, password } = req.body;

  try {
    existingUser = await User.findOne({ username: username });
  } catch (error) {
    console.log(error);
  }

  if (!existingUser) {
    return res.status(403).send();
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (error) {
    return res.status(403).json({ message: error });
  }

  if (!isValidPassword) {
    return res.status(403).send();
  }

  let token;
  try {
    token = jwt.sign(
      { username: existingUser.username, email: existingUser.email },
      process.env.PRIVATE_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    return res.status(500).json({ message: error });
  }

  return res.status(200).json({
    username: existingUser.username,
    token: token,
  });
};

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.params.id });

    if (!user) {
      return res.status(404).send();
    }

    await user.remove();

    return res.status(200).json({ _id: user._id, username: user.username });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Server Error",
    });
  }
};

// @desc    Delete all users
// @route   DELETE /api/v1/users
// @access  Public
exports.deleteAllUsers = async (req, res, next) => {
  try {
    await User.deleteMany({});

    return res.status(200).json({
      data: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Server Error",
    });
  }
};

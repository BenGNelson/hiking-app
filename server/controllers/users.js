const User = require("../models/User");

// @desc    Get user by id
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add user
// @route   POST /api/v1/users
// @access  Public
exports.addUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      return res.status(400).json({
        success: false,
        error: "Please enter a username",
      });
    }

    if (username.length < 3) {
      return res.status(400).json({
        success: false,
        error: "Username must be greater than 2 characters",
      });
    }

    if (password.length < 5) {
      return res.status(400).json({
        success: false,
        error: "Password must greater than 4 characters",
      });
    }

    const user = await User.create(req.body);

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      console.log(error);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: `Server Error: ${error}`,
      });
    }
  }
};

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await Hike.user(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "No user found",
      });
    }

    await user.remove();

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
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
      success: true,
      data: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
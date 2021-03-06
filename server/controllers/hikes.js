const Hike = require("../models/Hike");

// @desc    Get hike by id
// @route   GET /api/v1/hikes/:id
// @access  Public
exports.getHike = async (req, res, next) => {
  try {
    const hike = await Hike.findById(req.params.id);

    return res.status(200).json(hike);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Get all hikes
// @route   GET /api/v1/hikes
// @access  Public
exports.getHikes = async (req, res, next) => {
  try {
    const hikes = await Hike.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: hikes.length,
      data: hikes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Get user hikes
// @route   GET /api/v1/hikes
// @access  Public
exports.getUserHikes = async (req, res, next) => {
  try {
    const hikes = await Hike.find({ hiker: req.params.username }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: hikes.length,
      data: hikes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add hike
// @route   POST /api/v1/hikes
// @access  Public
exports.addHike = async (req, res, next) => {
  try {
    const { hikeName, hikeLength, hikeRating } = req.body;

    if (!hikeName) {
      return res.status(400).json({
        success: false,
        error: "Hike must have a name",
      });
    }

    if (hikeLength < 0 || hikeLength > 99) {
      return res.status(400).json({
        success: false,
        error: "Length must be between 0 99",
      });
    }

    if (hikeRating < 0 || hikeRating > 5) {
      return res.status(400).json({
        success: false,
        error: "Rank must be between 1 and 5",
      });
    }

    const hike = await Hike.create(req.body);

    return res.status(201).json({
      success: true,
      data: hike,
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

// @desc    Delete hike
// @route   DELETE /api/v1/hikes/:id
// @access  Public
exports.deleteHike = async (req, res, next) => {
  try {
    const hike = await Hike.findById(req.params.id);

    if (!hike) {
      return res.status(404).json({
        success: false,
        error: "No hike found",
      });
    }

    await hike.remove();

    return res.status(200).json({
      success: true,
      data: hike,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Delete all hike
// @route   DELETE /api/v1/hikes
// @access  Public
exports.deleteAllHikes = async (req, res, next) => {
  try {
    await Hike.deleteMany({});

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

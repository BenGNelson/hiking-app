const mongoose = require("mongoose");

const HikeSchema = new mongoose.Schema({
  hikeName: {
    type: String,
    trim: true,
    required: [true, "Please add a name"],
  },
  hikeLength: {
    type: Number,
    required: [true, "Please add a length"],
  },
  hikeRating: {
    type: Number,
    required: [true, "Please add a rating"],
  },
  hiker: {
    type: String,
    required: [true, "Hike needs a hiker"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Hike", HikeSchema);

// Maybe add altitude/elevation change

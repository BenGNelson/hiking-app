const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique : true,
    trim: true,
    required: [true, "Please add a username"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);

const express = require("express");
const router = express.Router();
const {
  getUser,
  getUsers,
  addUser,
  deleteUser,
  deleteAllUsers,
  logInUser,
} = require("../controllers/users");

router.route("/").get(getUsers).post(addUser);

router.route("/").delete(deleteAllUsers);

router.route("/login").post(logInUser);

router.route("/:username").get(getUser).delete(deleteUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getUser,
  getUsers,
  signUp,
  deleteUser,
  deleteAllUsers,
  logIn,
} = require("../controllers/users");

router.route("/").get(getUsers).post(signUp);

router.route("/").delete(deleteAllUsers);

router.route("/login").post(logIn);

router.route("/:username").get(getUser).delete(deleteUser);

module.exports = router;

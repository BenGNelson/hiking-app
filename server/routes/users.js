const express = require("express");
const router = express.Router();
const {
  getUser,
  getUsers,
  addUser,
  deleteUser,
  deleteAllUsers,
} = require("../controllers/users");

router.route("/").post(addUser);

router.route("/").delete(deleteAllUsers);

router.route("/all").get(getUsers);

router.route("/:username").get(getUser).delete(deleteUser);

module.exports = router;

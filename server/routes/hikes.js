const express = require("express");
const router = express.Router();
const {
  getHike,
  getHikes,
  getUserHikes,
  addHike,
  deleteHike,
  deleteAllHikes,
} = require("../controllers/hikes");

router.route("/user-hikes/:username").get(getUserHikes);
router.route("/").get(getHikes).post(addHike);
router.route("/").delete(deleteAllHikes);
router.route("/:id").get(getHike).delete(deleteHike);

module.exports = router;

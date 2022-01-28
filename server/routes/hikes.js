const express = require("express");
const router = express.Router();
const { getHike, getHikes, addHike, deleteHike, deleteAllHikes } = require("../controllers/hikes");

router.route("/").get(getHikes).post(addHike);

router.route("/").delete(deleteAllHikes);

router.route("/:id").get(getHike).delete(deleteHike);

module.exports = router;
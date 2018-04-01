var mongoose = require("mongoose");
var express = require("express"),
    router = express.Router(),
    db = require("../models/index"),
    helpers = require("../helpers/videos")

router.route("/")
    .get(helpers.getVideos)
    .post(helpers.addVideo)
router.route("/:category")
    .get(helpers.getByCategory)
// router.route("/:todoId")
//     .get(helpers.getTodo)
//     .put(helpers.updateTodos)
//     .delete(helpers.deleteTodos)

module.exports = router;
var mongoose = require("mongoose");

mongoose.set("debug",true);
mongoose.connect("mongodb://localhost/youthoomine_v_category");
mongoose.Promise = Promise;
module.exports.Video = require("./videos.js")
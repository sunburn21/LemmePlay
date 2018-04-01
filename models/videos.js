var mongoose = require("mongoose");
var videoSchema = new mongoose.Schema({
    link:{
        type:String,
        required: "link cannot be empty"
    },
    watched:{
        type: Boolean,
        default: false
    },
    created_date:{
        type:Date,
        default:Date.now
    },
    category:{
        type: String,
        required:"Enter the category"
    }
});

var Video = mongoose.model("Video",videoSchema);
module.exports = Video;
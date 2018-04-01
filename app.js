var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser"),
    todosRoutes = require("./routes/videos"),
    path = require("path");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/videos",todosRoutes);
app.use(express.static("./views"));
app.use(express.static("./public"));
app.get("/",function(req,res){
    res.render("index.html");
});

app.get("/admin",function(req,res){
    res.sendFile(path.join(__dirname + '/views/vidForm.html'));
});




app.listen(3000,function(){
    console.log("App has started!");
});

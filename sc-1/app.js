var express = require("express");
var app = express();
//---------------------------------------------------------
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(cookieParser());
app.use(bodyParser.json());
//---------------------------------------------------------
// view engine setup
//app.set('views', express.static(__dirname + "/views"));
app.set('views', __dirname + "/views");
//app.set('view engine', 'jade');
app.set('view engine', "html");
app.engine("html", require("ejs").renderFile);
//---------------------------------------------------------
app.use(express.static(__dirname + "/public"));
app.use("/upload", express.static(__dirname + "/upload"));
//=========================================================
app.get("/", function(req, res, next){  
//    console.log("-------- req.cookies --------");
//    console.log(req.cookies);
//    console.log("----- req.headers.cookie -----");
//    console.log(req.headers.cookie);
//    
//    res.send("<html><head></head><body>Hello !!</body></html>");
    res.render("home", {
        title : "Hello World."
    });
});
//---------------------------------------------------------
app.get("/upload/:name", function(req, res, next){
    res.send("Upload Route "+ req.params.name);
});
//=========================================================
app.listen(3000);

const express 	= require("express");
bodyParser  	= require("body-parser"),
methodOverride 	= require("method-override");
mongoose 		= require("mongoose"),
routes			= require("./routes"),
seedDB			= require("./seeds.js");
PORT			= 3001,
TITLE			= "Simple CMS",
app 			= express();
    
mongoose.connect("mongodb://localhost/SimpleCMS");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

const site = {
	title: TITLE,
	pageName: "Home Page"
};

// Middleware for settings variables
app.use(function(req, res, next){
    res.locals.site = site;
    next();
});

seedDB();

app.use("/", routes);

app.listen(PORT, "localhost", function(){
	console.log(TITLE + " started on Port: " + PORT);
});

const express 	= require("express");
	PORT		= 3001,
	TITLE		= "Simple CMS",
	app 		= express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const site = {
	title: TITLE,
	pageName: "Home Page"
};
// Middleware for settings variables
app.use(function(req, res, next){
    res.locals.site = site;
    next();
});

app.get("/", function(req, res){
	res.render("index");
});

app.listen(PORT, "localhost", function(){
	console.log(TITLE + " started on Port: " + PORT);
});
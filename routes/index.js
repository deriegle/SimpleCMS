const router = require("express").Router();
const Post = require("../models/post.js");
const User = require("../models/user.js");

router.get("/", function(req, res){
	res.render("index");
});

module.exports = router;
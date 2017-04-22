const router = require("express").Router();
const Post = require("../models/post.js");
const User = require("../models/user.js");
const dateFormat = require("dateformat");

router.get("/", function(req, res){
	res.render("admin/index");
});

module.exports = router;
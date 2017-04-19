const router = require("express").Router();
const Post = require("../models/post.js");
const User = require("../models/user.js");
const dateFormat = require("dateformat");

router.get("/", function(req, res){
	Post.find({}, function(err, allPosts){
		if(err){
			console.error(err);
			res.send("Error loading main page");
		} else {
			allPosts.sort(function(a, b) { return (a.date < b.date) ? 1 : ((a.date > b.date) ? -1 : 0); });
			res.render("index", {posts: allPosts, dateFormat: dateFormat});
		}
	});
});

router.get("/:postid", function(req, res){
	var postId = req.params.postid;
	Post.findById(postId, function(err, post){
		if(err){
			console.error(err);
			res.redirect("/");
		} else {
			res.render("post.ejs", {post: post, dateFormat: dateFormat});
		}
	});
});

module.exports = router;
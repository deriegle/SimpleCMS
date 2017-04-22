const router = require("express").Router();
const Post = require("../models/post.js");
const User = require("../models/user.js");
const adminRoutes = require("./admin.js");
const dateFormat = require("dateformat");

router.get("/", function(req, res){
	Post.find({}, function(err, allPosts){
		if(err){
			res.send("Error loading main page");
		} else {
			allPosts.sort(function(a, b) { return (a.date < b.date) ? 1 : ((a.date > b.date) ? -1 : 0); });
			res.render("index", {posts: allPosts, dateFormat: dateFormat});
		}
	});
});

router.get("/about", function(req, res){
	res.render("about");
});

router.get("/contact", function(req, res){
	res.render("contact");
});

router.get("/new", function(req, res){
    res.render("new");
});

router.use("/admin", adminRoutes);

//Create Post Route
router.post("/", function(req, res){
    Post.create(req.body.post, function(err, newPost){
        if(err){
           res.send("Error creating new blog post");
        } else {
            res.redirect("/");        
        }
    });
});

//Edit Post Route
router.get("/:id/edit", function(req, res){
    Post.findById(req.params.id, function(err, foundPost){
        if(err){
           res.redirect("/");
        } else {
            res.render("edit", {post: foundPost});
        }
    });
});

//Update Edited Post Route
router.put("/:id", function(req, res){
    Post.findByIdAndUpdate(req.params.id, req.body.post, function(err, updatedPost){
        if(err){
            res.send("Error updating blog post");
        } else {
            res.redirect("/" + req.params.id);
        }
    });
});


router.get("/:postid", function(req, res){
	var postId = req.params.postid;
	Post.findOne({_id: postId}, function(err, post){
		if(err){
			console.error(err);
			res.redirect("/");
		} else {
			if(post){
				res.render("post", {post: post, dateFormat: dateFormat});
			} else {
				res.redirect("/");
			}
			
		}
	});
});

module.exports = router;

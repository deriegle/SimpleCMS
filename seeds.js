var Post = require("./models/post.js");
var User = require("./models/user.js");
var loremPost = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var data = [
	{
		title: "Man must explore, and this is exploration at its finest",
		subtitle: "Problems look small from 150 miles up",
		content: loremPost,
		user: {
			username: "admin"
		}
	},
	{
		title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
		subtitle: "Time is better spent having fun",
		content: loremPost,
		user: {
			username: "admin"
		}
	},
	{
		title: "Failure is not an option",
		subtitle: "Many say exploration is not our problem, but it's actually our duty for future generations.",
		content: loremPost,
		user: {
			username: "admin"
		}
	}
];

function seedDB(){
	//createUser({username: "admin", passport: "helloworld", admin: true});
	removePosts();
	createPosts();
}

function createUser(userinfo){
	User.create(userinfo, function(err, user){
		if(err){
			console.error(err);
		} else {
			console.log("Created user");
		}
	});
};

function removePosts(){
	Post.remove({}, function(err){
		if(err){
			console.error(err);
		} else {
			console.log("Removed all Posts");
		}
	});
}

function createPosts(){
	data.forEach(function(seed){
		Post.create(seed, function(err, post){
			if(err){
				console.error(err);
			} else {
				console.log("Created Post");
			}
		});
	});
}

module.exports = seedDB;
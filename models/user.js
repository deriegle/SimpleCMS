const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
	username: String,
	passport: String,
	joinDate: {type: Date, default: Date.now},
	admin: Boolean
});

module.exports = mongoose.model("User", userSchema);
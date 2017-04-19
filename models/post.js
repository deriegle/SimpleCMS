const mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
	title: String,
	subtitle: String,
	date: {type: Date, default: Date.now},
	content: String,
	user: {
		/*id: {
		 type: Mongoose.Schema.Types.ObjectId,
		 ref: "User"
		},*/
		username: String
	}
});

module.exports = mongoose.model("Post", postSchema);
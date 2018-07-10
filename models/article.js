//Dependencies
const mongoose = require('mongoose');

//Schema Constructor
const Schema = mongoose.Schema;

//Article Schema
const articleSchema = new Schema({
	title: { 
		type: String,
		required: true
	},
	datePublished: { 
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true,
		unique: true
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

//Article Model Creation
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

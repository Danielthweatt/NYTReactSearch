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
	date: { 
		type: Date,
		required: true
	},
	url: {
		type: String,
		required: true,
		unique: true
	}
});

//Article Model Creation
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

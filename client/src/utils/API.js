import axios from 'axios';

const API = {
	// Search for articles
	searchArticles: function(topic, startYear, endYear){
		// query url
		const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' +
		// api key
		'?api-key=3b2b55ae2d3a400d8190c646040681af' +
		// topic
		'&q=' + topic +
			// start year
    	'&begin_date=' + startYear + '0101' + 
			// end year
		'&end_date=' + endYear + '0101';
		return axios.get(queryURL);
	},
	getArticles: function(){
		return axios.get('/api/articles');
	},
	saveArticle: function(article){
		return axios.post('/api/articles', article);
	},
	deleteArticle: function(id){
		return axios.delete('/api/articles/' + id);
	}
};

export default API;
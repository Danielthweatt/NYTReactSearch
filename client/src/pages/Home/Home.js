import React, { Component } from 'react';
import './Home.css';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Home extends Component {
			
	state = {
		articles: [],
		topic: "",
		startYear: "",
		endYear: ""
	};

	style = {
		linkStyles: {
			color: 'black',
			textDecoration: 'none'
		}
	};
			
	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
			
	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.topic && this.state.startYear && this.state.endYear) {
			API.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
			.then(response => {
				const responses = [];
				const urls = [];
				response.data.response.docs.forEach(item => {
					if ((responses.length) < 5 && (item.document_type === 'article') && (urls.indexOf(item.web_url) === -1)) {
						responses.push({
							title: item.headline.main,
							url: item.web_url,
							datePublished: item.pub_date
						});
						urls.push(item.web_url);
					}
				});
				this.setState({
					articles: responses
				});
			})
			.catch(err => {console.log(`Oh boy, it broke: ${err}`);});
		}
	};

	saveArticle = article => {
		API.saveArticle(article)
		.then(response => {
			console.log(`Succesfully saved article. ID: ${response.data._id}`);
		})
      	.catch(err => {console.log(`Oh boy, it broke: ${err}`);});
	};
			
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-12">
						<h1 id="page-title" className="text-center">NYT React Search</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-1 col-md-2"></div>
					<div className="col-sm-10 col-md-8">
						<form>
							<div className="form-group">
    							<label htmlFor="topic">Topic:</label>
								<input 
									type="text" 
									className="form-control" 
									name="topic" 
									value={this.state.topic} 
									onChange={this.handleInputChange} 
									placeholder="Topic (required)"
								/>
  							</div>
							<div className="form-group">
    							<label htmlFor="startYear">Start Year:</label>
								<input 
									type="text" 
									className="form-control" 
									name="startYear" 
									value={this.state.startYear} 
									onChange={this.handleInputChange} 
									placeholder="Start Year (required; format: YYYY)"
								/>
  							</div>
							<div className="form-group">
    							<label htmlFor="endYear">End Year:</label>
								<input 
									type="text" 
									className="form-control" 
									name="endYear" 
									value={this.state.endYear} 
									onChange={this.handleInputChange} 
									placeholder="End Year (required; format: YYYY)"
								/>
  							</div>
							<button
								type="submit" 
								disabled={!(this.state.topic && this.state.startYear && this.state.endYear)} 
								onClick={this.handleFormSubmit}
								className="btn btn-primary" 
							>
								Search
							</button>
						</form>
					</div>
				</div>
				<div className="list-display-div">
					{(this.state.articles.length > 0) ? (
						<div>
							<h3 className="text-center">Top 5 Search Results</h3>
              				<List>
                				{this.state.articles.map(article => (
                  					<ListItem key={article.url}>
										<a 
											href={article.url} 
											style={this.style.linkStyles} 
											target="_blank"
										>
											<h4>{article.title}</h4>
										</a>
										<button 
											type="button" 
											className="btn btn-outline-success saveButton"
											onClick={() => this.saveArticle(article)}
										>
                                    		Save
                                		</button>
                  					</ListItem>
                				))}
              				</List>
						</div>
            		) : (
              			<h3 className="text-center">No Results to Display</h3>
					)}
				</div>
			</div>
		);
	}
}

export default Home;

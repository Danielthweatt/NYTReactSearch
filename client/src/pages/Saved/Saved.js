import React, { Component } from 'react';
import './Saved.css';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Saved extends Component {
	
	state = {
		articles: []
	};

	style = {
		linkStyles: {
			color: 'black',
			textDecoration: 'none'
		}
	};

	componentDidMount() {
		this.getArticles();
	}
	
	getArticles = () => {
		API.getArticles()
		.then(response => {
			this.setState({
				articles: response.data
			});
		})
      	.catch(err => {console.log(`Oh boy, it broke: ${err}`);});
	};

	deleteArticle = id => {
		API.deleteArticle(id)
		.then(() => this.getArticles())
      	.catch(err => {console.log(`Oh boy, it broke: ${err}`);});
	};

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-12">
						<h1 id="page-title" className="text-center">Saved Articles</h1>
					</div>
				</div>
				<div className="list-display-div">
					{(this.state.articles.length > 0) ? (
						<div>
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
											className="btn btn-outline-danger saveButton"
											onClick={() => this.deleteArticle(article._id)}
										>
                                    		Delete Article
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

export default Saved;

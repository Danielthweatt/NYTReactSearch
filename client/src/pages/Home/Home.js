import React, { Component } from 'react';

class Home extends Component {
			
	state = {
		articles: [],
		topic: "",
		startYear: "",
		endYear: ""
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
			
		}
	};
			
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-12">
						<h1 className="text-center">NYT React Search</h1>
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
									placeholder="Start Year (required)"
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
									placeholder="End Year (required)"
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
						{/* {this.state.books.length ? (
						  <List>
							{this.state.books.map(book => (
							  <ListItem key={book._id}>
								<Link to={"/books/" + book._id}>
								  <strong>
									{book.title} by {book.author}
								  </strong>
								</Link>
								<DeleteBtn onClick={() => this.deleteBook(book._id)} />
							  </ListItem>
							))}
						  </List>
						) : (
						  <h3>No Results to Display</h3>
						)} */}
			</div>
		);
	}
}

export default Home;

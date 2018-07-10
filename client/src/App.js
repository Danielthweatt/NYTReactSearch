import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container-fluid">
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/saved" component={Saved} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
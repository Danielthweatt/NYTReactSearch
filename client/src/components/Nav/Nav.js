import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
	<nav className="navbar bg-dark navbar-dark">
		<Link to="/home" className="navbar-brand">NYT React Search</Link>
		<ul className="navbar-nav">
			<li className="nav-item">
				<Link to="/saved" className="nav-link">Saved Articles</Link>
			</li>
		</ul>
	</nav>
);

export default Nav;

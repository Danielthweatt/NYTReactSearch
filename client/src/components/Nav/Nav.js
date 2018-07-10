import React from 'react';

const Nav = () => (
	<nav className="navbar bg-dark navbar-dark">
		<a className="navbar-brand" href="/home">
      NYT React Search
		</a>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href="/saved">Saved Articles</a>
			</li>
		</ul>
	</nav>
);

export default Nav;

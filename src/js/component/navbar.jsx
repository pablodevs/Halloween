import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark sticky-top border border-light">
			<img src="../../img/halloween.png" alt="" />

			<div className="collapse navbar-collapse gb-" id="navbarText">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Castle <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							How to escape!
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Owners
						</a>
					</li>
				</ul>
				<span className="navbar-text ml-auto text-right">
					Welcome to our spookie Night Party!
				</span>
			</div>
		</nav>
	);
};

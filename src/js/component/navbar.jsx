import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg" id="nav">
			<div className="container">
				<a className="navbar-brand" href="#home">
					<img
						className="me-2"
						src="skull.png"
						alt="logo"
						width="30"
						height="30"
					/>
					Halloween
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<i className="fas fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="#services">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#spidersGame">
								Spiders
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#ticTacToe">
								TicTacToe
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">
								Contact
							</a>
						</li>
					</ul>
					{/* <span className="d-flex align-items-center ms-auto float-end">
						<button
							id="theme-button"
							type="button"
							className="d-flex align-items-center justify-content-center">
							<i
								className="far fa-moon"
								style={{ fontSize: "1.3rem" }}></i>
						</button>
					</span> */}
				</div>
			</div>
		</nav>
	);
};

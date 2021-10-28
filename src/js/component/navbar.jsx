import React from "react";
import ReactAudioPlayer from "react-audio-player";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg" id="nav">
			<div className="container">
				<img
					id="navLogo"
					className="me-2"
					src="skull.png"
					alt="logo"
					width="30"
					height="30"
				/>
				The Halloween Land!
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
							<a className="nav-link" href="#todo">
								Things before Die
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
						<li>
							{/* ===== AUDIO ===== */}
							<ReactAudioPlayer
								src="https://halloween.jmanvel.es/terror.ogg"
								className="color-dark opacity"
								type="audio/ogg"
								volume={0.01}
								autoPlay
								loop
							/>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

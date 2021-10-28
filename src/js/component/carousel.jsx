import React from "react";
import img1 from "../../img/carousel1.jpg";
import img2 from "../../img/carousel2.jpg";
import img3 from "../../img/carousel3.jpg";

export const Carousel = () => {
	return (
		<div
			id="carouselExampleCaptions"
			className="carousel slide"
			data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={img1} className="d-block w-100" alt="..." />
					<div className="carousel-caption">
						<h2 className="h-carousel-1">
							Welcome to the Halloween Land!
						</h2>
					</div>
				</div>
				<div className="carousel-item">
					<img src={img2} className="d-block w-100" alt="..." />
					<div className="carousel-content">
						<h2 className="h-carousel mb-4">
							Have a Spooky Good Time
						</h2>
						<h4 className="text-carousel">
							Prepare for halloween with our{" "}
							<a className="carousel-a" href="#todo">
								To Do List
							</a>{" "}
							and don&apos;t forget to subscribe to our{" "}
							<a className="carousel-a" href="#news">
								Newsletter
							</a>
						</h4>
					</div>
				</div>
				<div className="carousel-item">
					<img src={img3} className="d-block w-100" alt="..." />
					<div className="carousel-content">
						<h2 className="h-carousel mb-4 h-carousel">
							Happy Haunting!
						</h2>
						<h4 className="text-carousel">
							Feeling brave? Try kill all the spider in the <br />
							<a className="carousel-a" href="#spidersGame">
								Spiders Game
							</a>{" "}
							or play{" "}
							<a className="carousel-a" href="#ticTacToe">
								Tic Tac Toe
							</a>{" "}
							with a friend{" "}
						</h4>
					</div>
					<div className="carousel-caption"></div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev">
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next">
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

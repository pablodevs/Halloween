import React from "react";
import { Newsletter } from "./newsletter.jsx";
import { Input } from "./input.jsx";
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
					<div className="carousel-content-1">
						<h1>TÍTULO DE BIENVENIDA</h1>
					</div>
				</div>
				<div className="carousel-item">
					<img src={img2} className="d-block w-100" alt="..." />
					<div className="carousel-content-2">{/* <Input /> */}</div>
				</div>
				<div className="carousel-item">
					<img src={img3} className="d-block w-100" alt="..." />
					<div className="carousel-content-3">
						{/* <Newsletter /> */}
					</div>
					<div className="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>
							Some representative placeholder content for the
							third slide.
						</p>
					</div>
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

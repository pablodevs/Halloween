import React from "react";
// import espiritu from "../../img/espiritu.jpg";
// import manos from "../../img/abandonado_light.jpg";
// import zombies from "../../img/manos_zombies.jpg";

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
					<img
						src="https://via.placeholder.com/1320x700"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>
							Some representative placeholder content for the
							first slide.
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://via.placeholder.com/1320x700"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>
							Some representative placeholder content for the
							second slide.
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://via.placeholder.com/1320x700"
						className="d-block w-100"
						alt="..."
					/>
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
{
	/* <div className="container-fluid section" id="home">
			<div
				id="carouselExampleCaptions"
				className="carousel slide"
				data-ride="carousel">
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleCaptions"
						data-slide-to="0"
						className="active"></li>
					<li
						data-target="#carouselExampleCaptions"
						data-slide-to="1"></li>
					<li
						data-target="#carouselExampleCaptions"
						data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active d-flex justify-content-center align-items-center">
						<img src={manos} className="carPictures" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>
								Some representative placeholder content for the
								first slide.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src={espiritu}
							className="d-block carPictures"
							alt="..."
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>
								Some representative placeholder content for the
								second slide.
							</p>
						</div>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleCaptions"
					role="button"
					data-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleCaptions"
					role="button"
					data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div> */
}

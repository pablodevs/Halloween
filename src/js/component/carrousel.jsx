import React from "react";
import espiritu from "../../img/espiritu.jpg";
import moon from "../../img/moon.jpg";

export const Carrousel = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-6">
					<h2 className="text-center p-5 mt-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Molestias sequi et consequatur cum dolore aliquid.
						Corporis cupiditate minus consequatur itaque aliquam
						officia earum? Fugit, tenetur molestiae! Nulla facilis
						culpa cum?
					</h2>
				</div>
				<div className="col-6 p-5 rounded rounded-pill">
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
							<div className="carousel-item active">
								<img
									src={espiritu}
									className="d-block w-100 carPictures"
									alt="..."
								/>
								<div className="carousel-caption d-none d-md-block">
									<h5>First slide label</h5>
									<p>
										Some representative placeholder content
										for the first slide.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src={moon}
									className="d-block w-100 carPictures"
									alt="..."
								/>
								<div className="carousel-caption d-none d-md-block">
									<h5>Second slide label</h5>
									<p>
										Some representative placeholder content
										for the second slide.
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
				</div>
			</div>
		</div>
	);
};

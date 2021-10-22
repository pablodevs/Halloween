import React from "react";
import { SpiderApp } from "./spiderGame/spiderApp.jsx";

//create your first component
const Home = () => {
	return (
		<div className="global-wrapper container d-flex justify-content-center align-items-center">
			<div className="example">
				<SpiderApp />
			</div>
		</div>
	);
	// return (
	// 	<>
	// 		<header
	// 			className="sticky-top text-light border border-light border-start-0 border-end-0 p-3 d-flex justify-content-start align-items-center"
	// 			style={{ height: "70px" }}>
	// 			I will be the navbar
	// 		</header>
	// 		<main className="container-xxl pt-5 border border-light border-top-0 border-bottom-0">
	// 			<div>
	// 				<h1>Hola, soy un Título</h1>
	// 			</div>
	// 			<hr />{" "}
	// 			{/* IMPORTANTE: incluir siempre la etiqueta <hr> para separar contenido */}
	// 			<div>
	// 				<h2>Yo también soy un título</h2>
	// 			</div>
	// 			<hr />
	// 			<div>
	// 				<h3>Yo puedo ser un contact</h3>
	// 			</div>
	// 		</main>
	// 		<footer className="sticky-bottom text-light p-5 text-center border border-light border-start-0 border-end-0">
	// 			Copyright &copy;{" "}
	// 			<a
	// 				target="_blank"
	// 				rel="noreferrer"
	// 				href="https://www.eventbrite.com/e/a-coding-halloween-challenge-tickets-191279822097">
	// 				#ACodingHalloween
	// 			</a>{" "}
	// 			Challenge! 2021
	// 		</footer>
	// 	</>
	// );
};

export default Home;

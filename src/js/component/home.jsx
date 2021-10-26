import React from "react";
import { Navbar } from "./navbar.jsx";
import { SmokyText } from "./smokyText.jsx";
import { SpiderApp } from "./spiderApp.jsx";

const Home = () => {
	return (
		<>
			<header className="l-header" id="header">
				<Navbar />
			</header>
			<main className="l-main"></main>
			<footer className="footer section bd-container"></footer>
		</>
	);
};

export default Home;

//	HOME PREVIO:

// <>
// 			<header
// 				className="sticky-top text-light border border-light border-start-0 border-end-0 p-3 d-flex justify-content-start align-items-center"
// 				style={{ height: "70px" }}>
// 				I will be the navbar
// 			</header>
// 			<SmokyText /> {/* Smoke effect */}
// 			<main className="container-xxl pt-5 border border-light border-top-0 border-bottom-0">
// 				<div>
// 					<h1>Hola, soy un Título</h1>
// 				</div>
// 				<hr />{" "}
// 				{/* IMPORTANTE: incluir siempre la etiqueta <hr> para separar contenido */}
// 				<div>
// 					<h2>Yo también soy un título</h2>
// 				</div>
// 				<hr />
// 				<div id="spiderAppContainer">
// 					<SpiderApp />
// 				</div>
// 			</main>
// 			<footer className="sticky-bottom text-light p-5 text-center border border-light border-start-0 border-end-0">
// 				Copyright &copy;{" "}
// 				<a
// 					className="hashtag"
// 					target="_blank"
// 					rel="noreferrer"
// 					href="https://www.eventbrite.com/e/a-coding-halloween-challenge-tickets-191279822097">
// 					#ACodingHalloween
// 				</a>{" "}
// 				Challenge! 2021
// 			</footer>
// 		</>

<<<<<<< HEAD
import React, { useState } from "react";
import { Box } from "./box.jsx";
import swal from "sweetalert";
import { Navbar } from "./navbar.jsx";
import { Newsletter } from "./newsletter.jsx";
import ReactPlayer from "react-player";

//include images into your bundle
import halloween from "../../img/halloween.png";
import { Carrousel } from "./carrousel.jsx";

//create your first component
const Home = () => {
	const [turn, setTurn] = useState("skull.png");

	const [arr, setArr] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	]);

	const changeTurn = () => {
		turn == "skull.png" ? setTurn("pumpkin.jpg") : setTurn("skull.png");
		console.log(turn);
	};

	const changeArr = index => {
		let newArr = [...arr];
		arr[index] == null
			? ((newArr = arr.splice(index, 1, turn)),
			  setArr(arr),
			  //Now we are going to see who wins....

			  arr[0] == arr[1] && arr[0] == arr[2] && arr[0] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == "pumpkin.jpg" ? "Pumpkin" : "Skull"
							} " won the game`,
							icon: "success"
					  })
					: "",
			  arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == "pumpkin.jpg" ? "Pumpkin" : "Skull"
							} " won the game`,
							icon: "success"
					  })
					: "",
			  arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == "pumpkin.jpg" ? "Pumpkin" : "Skull"
							} " won the game`,
							icon: "success"
					  })
					: "",
			  arr[0] == arr[3] && arr[0] == arr[6] && arr[0] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == "pumpkin.jpg" ? "Pumpkin" : "Skull"
							} " won the game`,
							icon: "success"
					  })
					: "",
			  arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == "pumpkin.jpg" ? "Pumpkin" : "Skull"
							} " won the game`,
							icon: "success"
					  })
					: "",
			  arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == "pumpkin.jpg" ? "Pumpkin" : "Skull"
							} " won the game`,
							icon: "success"
					  })
					: "",
			  arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == "pumpkin.jpg" ? "Pumpkin" : "Skull"
							} " won the game`,
							icon: "success"
					  })
					: "",
			  arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == "pumpkin.jpg" ? "Pumpkin" : "Skull"
							} " won the game`,
							icon: "success"
					  })
					: "")
			: swal("Esa celda está ocupada");
	};

	let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	let boxes = numbers.map(number => (
		<div
			className="col-4 border-secondary border text-center box"
			key={number.toString()}>
			<Box
				changeTurnFunction={changeTurn}
				actualTurn={turn}
				i={number}
				key={number.toString()}
				theArr={arr}
				changeArrFunction={changeArr}
			/>
		</div>
	));

	return (
		<>
			{/* <Navbar /> */}
			<Newsletter />
			{/* <Carrousel /> */}
			<div className="container-fluid">
				<div className="row mt-1">
					<div className="mx-auto col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
						{/* <img src={halloween} className="header" /> */}
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-lg-4 col-xs-12 col-sm-4 mx-auto board">
						{/* <div className="row">{boxes}</div> */}
						<div className="row">
							{/* <button
								className="col-3 btn btn-dark mt-2 text-danger mx-auto"
								onClick={() => {
									setArr([
										null,
										null,
										null,
										null,
										null,
										null,
										null,
										null,
										null
									]);
								}}>
								PLAY AGAIN!
							</button> */}
							<div></div>
						</div>
					</div>
				</div>
			</div>
=======
import React from "react";
import { SmokyText } from "./smokyText.jsx";
import { SpiderApp } from "./spiderApp.jsx";

const Home = () => {
	return (
		<>
			<header
				className="sticky-top text-light border border-light border-start-0 border-end-0 p-3 d-flex justify-content-start align-items-center"
				style={{ height: "70px" }}>
				I will be the navbar
			</header>
			<SmokyText /> {/* Smoke effect */}
			<main className="container-xxl pt-5 border border-light border-top-0 border-bottom-0">
				<div>
					<h1>Hola, soy un Título</h1>
				</div>
				<hr />{" "}
				{/* IMPORTANTE: incluir siempre la etiqueta <hr> para separar contenido */}
				<div>
					<h2>Yo también soy un título</h2>
				</div>
				<hr />
				<div id="spiderAppContainer">
					<SpiderApp />
				</div>
			</main>
			<footer className="sticky-bottom text-light p-5 text-center border border-light border-start-0 border-end-0">
				Copyright &copy;{" "}
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.eventbrite.com/e/a-coding-halloween-challenge-tickets-191279822097">
					#ACodingHalloween
				</a>{" "}
				Challenge! 2021
			</footer>
>>>>>>> 2eaeb9f3a0b1224b3cd61de87d5154a8750563d0
		</>
	);
};

export default Home;

import React from "react";
import swal from "sweetalert";
import { useState } from "react";
import { Box } from "./box.jsx";
import pumpkin from "../../../img/pumpkin.png";
import skull from "../../../img/skull.png";

export const Board = () => {
	const [turn, setTurn] = useState(skull);

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
		turn == skull ? setTurn(pumpkin) : setTurn(skull);
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
								turn == pumpkin ? "Pumpkin" : "Skull"
							} won the game`,
							icon: "success"
					  })
					: "",
			  arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == pumpkin ? "Pumpkin" : "Skull"
							} won the game`,
							icon: "success"
					  })
					: "",
			  arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == pumpkin ? "Pumpkin" : "Skull"
							} won the game`,
							icon: "success"
					  })
					: "",
			  arr[0] == arr[3] && arr[0] == arr[6] && arr[0] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == pumpkin ? "Pumpkin" : "Skull"
							} won the game`,
							icon: "success"
					  })
					: "",
			  arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == pumpkin ? "Pumpkin" : "Skull"
							} won the game`,
							icon: "success"
					  })
					: "",
			  arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == pumpkin ? "Pumpkin" : "Skull"
							} won the game`,
							icon: "success"
					  })
					: "",
			  arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == pumpkin ? "Pumpkin" : "Skull"
							} won the game`,
							icon: "success"
					  })
					: "",
			  arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != null
					? swal({
							title: "YOU WIN!",
							text: `The  ${
								turn == pumpkin ? "Pumpkin" : "Skull"
							} won the game`,
							icon: "success"
					  })
					: "")
			: swal("Esa celda está ocupada");
	};

	let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	let boxes = numbers.map(number => (
		<div className="col-4 text-center box" key={number.toString()}>
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
			<div className="row mb-3 d-flex justify-content-center">
				<div className="col-auto d-flex align-items-center">
					<img src={skull} width="35" />
				</div>
				<div className="col-auto">
					<h1 className="gameName" style={{ color: "#ed6c2c" }}>
						&nbsp;TicTacToe&nbsp;
					</h1>
				</div>
				<div className="col-auto d-flex align-items-center">
					<img src={pumpkin} width="35" />
				</div>
			</div>
			<div className="container-fluid board">
				<div className="row">{boxes}</div>
			</div>
			<div className="row">
				<button
					style={{ fontSize: "23px" }}
					className="col-auto py-1 px-3 btn btn-dark mt-2 text-danger mx-auto"
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
				</button>
				<div></div>
			</div>
		</>
	);
};

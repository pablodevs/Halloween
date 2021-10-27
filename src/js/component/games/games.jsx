import React from "react";
import { Board } from "./board.jsx";
import { SpiderApp } from "./spiderApp.jsx";

export const Games = () => {
	return (
		<>
			<div className="section games" id="spidersGame">
				<SpiderApp />
			</div>
			<div
				className="section py-4 d-flex flex-column justify-content-center align-items-center"
				id="ticTacToe">
				<Board />
			</div>
		</>
	);
};

import React from "react";
import { GameInstructions } from "./modals/gameInstructions.jsx";
import { DiffModal } from "./modals/difficultyModal.jsx";
import { ResumeModal } from "./modals/resumeModal.jsx";
import { StartModal } from "./modals/startModal.jsx";
import { FaHeart, FaSpider } from "react-icons/fa";

//create your first component
export const SpiderApp = () => {
	let powers = [];
	let lifes = [];
	for (let i = 0; i < 10; i++) {
		powers.push(
			<button className="power">
				<FaSpider id={"power" + i} />
			</button>
		);
	}
	for (let j = 0; j < 10; j++) lifes.push(<FaHeart className="red-heart" />);

	return (
		<div className="spiderApp-wrapper">
			<header className="spiderApp-header"></header>

			<div id="spidersContainer"></div>
			<samp className="spiderApp-samp">Pause: Press Esc</samp>
			<div className="points">
				<strong id="actual-points">0</strong>
				<br />
				POINTS
			</div>
			<div className="spiderAppFooter">
				<div className="powers-container">{powers}</div>
				<div className="lifes-container">{lifes}</div>
			</div>
			<div className="modal-wrapper">
				<GameInstructions />
				<DiffModal />
				<StartModal />
				<ResumeModal />
			</div>
		</div>
	);
};

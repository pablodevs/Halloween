import React from "react";
import { FaHeartBroken, FaSpider } from "react-icons/fa";
import { BsHandIndexThumb } from "react-icons/bs";

export const GameInstructions = () => {
	return (
		<div
			id="instructions"
			className="spiderAppModal container d-flex-column">
			<div className="row mb-2 d-flex justify-content-center align-items-center">
				<div className="col-auto p-2" style={{ color: "#ffb400" }}>
					<BsHandIndexThumb style={{ marginInlineEnd: "1rem" }} />{" "}
					Earn points by killing the spiders
				</div>
			</div>
			<div className="row mb-2 d-flex justify-content-center align-items-center">
				<div className="col-auto p-2" style={{ color: "#aa022e" }}>
					<FaHeartBroken style={{ marginInlineEnd: "1rem" }} />{" "}
					You&apos;ll loose lifes if any spider arrives top
				</div>
			</div>
			<div className="row mb-2 d-flex justify-content-center align-items-center">
				<div className="col-auto p-2" style={{ color: "red" }}>
					<FaSpider
						style={{
							filter:
								"drop-shadow(0px 0px 10px rgba(255, 59, 59))",
							marginInlineEnd: "1rem"
						}}
					/>{" "}
					Get special powers by killing the radioactive spider
				</div>
			</div>
			<div className="row d-flex justify-content-center align-items-center">
				<div className="col-auto">
					<button className="btn game-btn" id="ok-btn">
						UNDERSTOOD
					</button>
				</div>
			</div>
		</div>
	);
};

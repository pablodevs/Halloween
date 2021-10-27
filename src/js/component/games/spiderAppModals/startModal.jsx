import React from "react";

export const StartModal = () => {
	return (
		<div id="spiderAppModal2" className="modal-hidden spiderAppModal">
			<div className="d-flex justify-content-center mb-2">
				<h3>Do you fear death?</h3>
			</div>
			<div className="d-flex justify-content-center mx-md-5 px-lg-5 start-container">
				<button id="start" value="1500" className="btn game-btn">
					Start!
				</button>
			</div>
		</div>
	);
};

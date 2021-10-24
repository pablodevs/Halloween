import React from "react";

export const StartModal = () => {
	return (
		<div id="spiderAppModal2" className="modal-hidden spiderAppModal">
			<div className="d-flex justify-content-center">
				<h3>Do you fear death?</h3>
			</div>
			<div className="d-flex justify-content-center mx-md-5 px-lg-5">
				<button
					id="start"
					value="1500"
					className="btn btn-outline-dark">
					Start!
				</button>
			</div>
		</div>
	);
};

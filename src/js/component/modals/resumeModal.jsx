import React from "react";

export const ResumeModal = () => {
	return (
		<div id="spiderAppPauseModal" className="modal-hidden spiderAppModal">
			<div className="d-flex justify-content-center">
				<h3>Continue when you feel confident...</h3>
			</div>
			<div className="d-flex justify-content-center mx-md-5 px-lg-5">
				<button id="resumeButton" className="btn btn-outline-dark">
					Resume
				</button>
			</div>
		</div>
	);
};

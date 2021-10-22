import React from "react";

//create your first component
export const SpiderApp = () => {
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
				<div className="powers-container"></div>
				<div className="lifes-container"></div>
			</div>

			{/* Modal with difficulties */}
			<div
				className="modal"
				id="spiderAppModal1"
				aria-hidden="true"
				aria-labelledby="spiderAppModal1Label"
				tabIndex="-1">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header justify-content-center">
							<h3
								className="modal-title"
								id="spiderAppModal1Label">
								Choose the difficulty
							</h3>
						</div>
						<div className="modal-footer">
							<div className="container-fluid">
								<div className="row d-flex justify-content-sm-between justify-content-center">
									<div className="col-sm-3 my-sm-0 my-2">
										<button
											value="1500"
											className="btn btn-success btn-lg difficulty"
											data-bs-target="#spiderAppModal2"
											data-bs-toggle="modal">
											Easy
										</button>
									</div>
									<div className="col-sm-3 my-sm-0 my-2">
										<button
											value="1100"
											className="btn btn-info btn-lg difficulty"
											data-bs-target="#spiderAppModal2"
											data-bs-toggle="modal">
											Medium
										</button>
									</div>
									<div className="col-sm-3 my-sm-0 my-2">
										<button
											value="750"
											className="btn btn-danger btn-lg difficulty"
											data-bs-target="#spiderAppModal2"
											data-bs-toggle="modal">
											Hard
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal with Start Game button */}
			<div
				className="modal"
				data-bs-keyboard="false"
				id="spiderAppModal2"
				aria-hidden="true"
				aria-labelledby="mymodalLabel2"
				tabIndex="-1">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header justify-content-center">
							<h3 className="modal-title" id="mymodalLabel2">
								Choose wisely
							</h3>
						</div>
						<div className="modal-footer">
							<div className="container-fluid">
								<div className="row d-flex justify-content-sm-between justify-content-center">
									<div className="col-sm-3 my-sm-0 my-2">
										<button
											className="btn btn-success btn-lg"
											data-bs-target="#spiderAppModal1"
											data-bs-toggle="modal">
											Go back
										</button>
									</div>
									<div className="col-sm-3 my-sm-0 my-2">
										<button
											id="start"
											value="1500"
											className="btn btn-warning btn-lg"
											data-bs-dismiss="modal">
											Start!
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal Pause/Restart */}
			<div
				className="modal fade"
				data-bs-keyboard="false"
				id="spiderAppPauseModal"
				aria-hidden="true"
				aria-labelledby="mymodalLabel3"
				tabIndex="-1">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header justify-content-center">
							<h3 className="modal-title" id="mymodalLabel3">
								Continue when you feel confident...
							</h3>
						</div>
						<div className="modal-footer justify-content-center">
							<button
								id="resumeButton"
								className="btn btn-outline-info btn-lg"
								data-bs-dismiss="modal">
								Resume
							</button>
						</div>
					</div>
				</div>
			</div>
			<script type="text/javascript" src="./spiderApp.js"></script>
		</div>
	);
};

import React from "react";

export const DiffModal = () => {
	return (
		<div id="spiderAppModal1" className="modal-hidden spiderAppModal">
			<div className="d-flex justify-content-center mb-3">
				<h3 className="difficulty-label">Choose difficulty</h3>
			</div>
			<div className="container">
				<div className="row d-flex justify-content-sm-between flex-column flex-md-row difficulty-wrapper">
					<div className="col-md-3 col-12">
						<button
							value="1500"
							className="btn btn-success difficulty">
							Easy
						</button>
					</div>
					<div className="col-md-3 col-12 my-1 my-md-0">
						<button
							value="1100"
							className="btn btn-info difficulty">
							Medium
						</button>
					</div>
					<div className="col-md-3 col-12">
						<button
							value="750"
							className="btn btn-danger difficulty">
							Hard
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

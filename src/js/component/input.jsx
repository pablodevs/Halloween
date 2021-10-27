import React, { useState } from "react";
import { List } from "./list.jsx";

export const Input = () => {
	const [userName, setUserName] = useState("");

	return (
		<div className="text-center mt-5 section">
			<h1 className="text-warning">
				Add scary things to do in Halloween
			</h1>
			<div className="row">
				<div className="col-5 mx-auto">
					<input
						type="text"
						placeholder="Please, insert a Monster name: "
						className="form-control"
						onKeyUp={e => {
							if (e.keyCode == 13) {
								console.log("enter pressed");
								setUserName(e.target.value);
								document
									.querySelector(".lista")
									.classList.remove("lista");
							}
						}}
					/>
				</div>
			</div>
			<div className="lista">
				<List name={userName} />
			</div>
		</div>
	);
};

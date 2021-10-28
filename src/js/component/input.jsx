import React, { useState } from "react";
import { List } from "./list.jsx";

export const Input = () => {
	const [userName, setUserName] = useState("");

	return (
		<div className="text-center mt-5 section" id="todo">
			<h1 className="text-warning mb-3 pt-4">
				Add scary things to do in Halloween
			</h1>
			<div className="row">
				<div className="col-auto mx-auto">
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

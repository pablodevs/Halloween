import React from "react";
import PropTypes from "prop-types";

export const Users = props => {
	let newArr = props.arr;
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">email</th>
				</tr>
			</thead>
			<tbody>
				{props.arr.map((value, index) => (
					<tr key={value.id}>
						<td className="text-warning" scope="row">
							{value.name}
						</td>
						<td className="text-warning">{value.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

Users.propTypes = {
	arr: PropTypes.array
};

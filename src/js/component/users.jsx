import React from "react";
import PropTypes from "prop-types";
import { GiFishMonster } from "react-icons/gi";

export const Users = props => {
	return (
		<table className="table text-center">
			<thead>
				<tr>
					<th scope="col " className="text-danger">
						Monster Name
					</th>
					<th scope="col " className="text-danger">
						Scarry Email
					</th>
				</tr>
			</thead>
			<tbody>
				{props.arr != null ? (
					((
						<tr>
							<td>{props.arr.name}</td>
							<td>{props.arr.email}</td>
						</tr>
					),
					props.arr.map((value, index) => (
						<tr key={index}>
							<td className="text-warning" scope="row">
								<GiFishMonster />
								&nbsp;&nbsp;
								{value.name} &nbsp;&nbsp;
								<GiFishMonster />
							</td>
							<td className="text-warning">{value.email}</td>
						</tr>
					)))
				) : (
					<tr>
						<td colSpan="2">
							<h1 className="text-warning">
								Recibiendo datos...
							</h1>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

Users.propTypes = {
	arr: PropTypes.array
};

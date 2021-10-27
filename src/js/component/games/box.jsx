import React from "react";
import PropTypes from "prop-types";

export const Box = props => {
	return (
		<div
			className="h-100 p-3 d-flex align-items-center justify-content-center"
			onClick={() => {
				props.changeTurnFunction();
				props.changeArrFunction(props.i);
			}}>
			<img src={props.theArr[props.i]} className="token h-100" />
		</div>
	);
};

Box.propTypes = {
	changeTurnFunction: PropTypes.func,
	i: PropTypes.number,
	changeArrFunction: PropTypes.func,
	theArr: PropTypes.array,
	actualTurn: PropTypes.string
};

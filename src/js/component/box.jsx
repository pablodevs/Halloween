import React from "react";
import PropTypes from "prop-types";
import { pumpking } from "../../img/pumpkin.jpg";
import skull from "../../img/skull.png";

export const Box = props => {
	return (
		<div
			className="box"
			onClick={() => {
				props.changeTurnFunction();
				props.changeArrFunction(props.i);
			}}>
			<img src={props.theArr[props.i]} className="token w-100" />
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

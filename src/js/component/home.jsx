import React from "react";

//include images into your bundle
import halloween from "../../img/halloween.png";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<p>
				<img src={halloween} />
			</p>
		</div>
	);
};

export default Home;

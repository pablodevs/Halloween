import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<header
				className="bg-dark sticky-top text-light p-3 text-center"
				style={{ height: "50px" }}>
				I will be the navbar
			</header>
			<main
				className="container-xxl bg-secondary"
				style={{ height: "50px" }}>
				{/* content */}
			</main>
			<footer className="bg-dark sticky-bottom text-light p-5 text-center">
				Copyright &copy; #ACodingHalloween Challenge! 2021
			</footer>
		</>
	);
};

export default Home;

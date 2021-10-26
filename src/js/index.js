//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index2.scss";

//include the spiderApp into the bundle
import "../styles/spiderStyles.scss";

//import your own components
import Home from "./component/home.jsx";

//hacer desaparecer el WELCOME y aparece la página
window.onload = function() {
	const handleSmokeanimation = () => {
		body.style.overflow = "auto";
		document.querySelector("#app").removeChild(smokeTextDiv);
	};
	let body = document.querySelector("body");
	body.style.overflow = "hidden";

	let smokeTextDiv = document.querySelector("#smoky-wrapper");
	smokeTextDiv.style.animation = "fadeOut 4s 5s";

	let lastSpan = smokeTextDiv.lastChild;
	lastSpan.addEventListener("webkitAnimationEnd", handleSmokeanimation);
	lastSpan.addEventListener("animationend", handleSmokeanimation);
};

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

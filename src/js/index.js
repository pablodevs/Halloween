//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//include the spiderApp into the bundle
import "../styles/spiderStyles.scss";

//import your own components
import Home from "./component/home.jsx";

//===== Hacer desaparecer el WELCOME y aparece la página =====//
window.onload = function() {
	let smokeTextDiv = document.querySelector("#smoky-wrapper");
	let body = document.querySelector("body");

	window.localStorage.clear();

	const init = () => {
		const handleSmokeanimation = () => {
			body.style.overflow = "auto";
			document.querySelector("#app").removeChild(smokeTextDiv);
		};

		body.style.overflow = "hidden";
		smokeTextDiv.style.animation = "fadeOut 4s 5s";

		let lastSpan = smokeTextDiv.lastChild;
		lastSpan.addEventListener("webkitAnimationEnd", handleSmokeanimation);
		lastSpan.addEventListener("animationend", handleSmokeanimation);
	};

	let localstrg = localStorage.getItem("firstTime");
	if (!localstrg) {
		localstrg = true;
		smokeTextDiv.style.visibility = "visible";
	}

	if (localstrg && localstrg !== "no") {
		localStorage.setItem("firstTime", "no");
		init();
	} else {
		body.style.overflow = "auto";
		document.querySelector("#app").removeChild(smokeTextDiv);
	}
	window.localStorage.clear();
};

//===== render your react application =====//
ReactDOM.render(<Home />, document.querySelector("#app"));

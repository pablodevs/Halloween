import "../styles/spiderStyles.scss";

// ---------- Functions declaration ---------- //

const randomPercentage = limit => {
	let num = Math.floor(Math.random() * limit);
	return `${num}%`;
};

const randomElement = array => {
	return array[Math.floor(Math.random() * array.length)];
};

const removeShineEffect = () => {
	myContainer.classList.remove("shine-effect");
};

const clearWindow = withPower => {
	if (withPower) {
		myContainer.classList.add("shine-effect");

		// Remove class shine-effect when animation end
		myContainer.addEventListener("webkitAnimationEnd", removeShineEffect);
		myContainer.addEventListener("animationend", removeShineEffect);

		// Remove aliens on screen with a delay of 0.4 seconds
		const delay = 200;
		setTimeout(() => {
			while (myContainer.firstChild) {
				incrementPoints();
				myContainer.removeChild(myContainer.firstChild);
			}
		}, delay);
	} else {
		while (myContainer.firstChild) {
			myContainer.removeChild(myContainer.firstChild);
		}
	}
};

const clearWindowWithPower = element => {
	clearWindow(true);

	let powerOff = document.querySelector(`#${element.target.id}`);
	powerOff.classList.remove("power-active");
	powerOff.removeEventListener("click", clearWindowWithPower);
	powerCount--;
};

const addPower = () => {
	if (powerCount < 10) {
		powerCount++;
		let powerList = document.querySelectorAll(".power");
		powerList[powerCount - 1].classList.add("power-active");
		powerList[powerCount - 1].addEventListener(
			"click",
			clearWindowWithPower
		);
	}
};

const removeLife = () => {
	lifes--;
	let lifesList = document.querySelectorAll(".red-heart");
	lifesList[lifes].classList.remove("red-heart");
};

const deadFunction = () => {
	// FUNCTION CALLED WHEN THE GAME IS OVER
	// Remove aliens on screen
	clearWindow();
	points = -1;
	alienId = 0;
	incrementPoints();

	window.removeEventListener("keydown", isEscKey);
	window.removeEventListener("blur", pauseAll);

	showModals();

	// Reset powers
	let myPowerContainer = document.querySelector(".powers-container");
	myPowerContainer.childNodes.forEach(child => {
		child.removeEventListener("click", clearWindowWithPower);
		child.classList.remove("power-active");
	});

	// Reset lifes
	let lifesList = document.querySelector(".lifes-container").childNodes;
	lifesList.forEach(life => life.classList.add("red-heart"));

	// Stop aliens from appearing
	clearInterval(interval);

	// Ask for playing again
	document.querySelector(".difficulty-label").innerHTML =
		"You died... Wanna try again?";

	difficultyModal.classList.remove("modal-hidden");
};

// Aliens die when animation ends: "remove alienDiv"
const alienArrivesTop = element => {
	let deadAlien = document.querySelector(
		`#${element.target.childNodes[0].id}`
	).parentNode;
	deadAlien.parentNode.removeChild(deadAlien);

	removeLife();
	if (lifes === 0) deadFunction();
};

const incrementPoints = () => {
	points++;
	document.querySelector("#actual-points").innerHTML = points;
};

// Alien die onClick
const killAlien = element => {
	// If neon alien is killed, add 1 power to the power list
	if (element.target.classList[3] === "neonClass") addPower();
	let deadAlien = document.querySelector(`#${element.target.id}`).parentNode;
	deadAlien.parentNode.removeChild(deadAlien);

	incrementPoints();
};

const pauseAll = () => {
	// FUNCTION CALLED WHEN THE PLAYER FOCUS ON OTHER WINDOW OR PRESS 'Esc' KEY
	window.removeEventListener("keydown", isEscKey);
	window.removeEventListener("blur", pauseAll);

	showModals();

	// Stop all aliens (animation: "paused")
	let children = myContainer.childNodes;
	children.forEach(child => {
		clearInterval(interval);
		child.style.animationPlayState = "paused";
	});

	// Toggle resume modal
	myPauseModal.classList.remove("modal-hidden");
};

const isEscKey = e => {
	if (e.key == "Escape") {
		pauseAll();
	}
};

const setDifficulty = event => {
	document.querySelector("#start").value = event.target.value;

	difficultyModal.classList.add("modal-hidden");
	startModal.classList.remove("modal-hidden");

	document.querySelector("#start").addEventListener("click", startGame);
};

const startGame = event => {
	// FUNCTION CALLED WHEN THE PLAYER CLICKES THE START BUTTON
	powerCount = 0;
	lifes = 10;
	points = 0;

	showTheGame();
	document
		.querySelector("#resumeButton")
		.addEventListener("click", resumeGame);

	startModal.classList.add("modal-hidden");

	difficulty = event.target.value;
	interval = window.setInterval(renderAlien, difficulty);

	// Esc key and change window event
	window.addEventListener("keydown", isEscKey);
	window.addEventListener("blur", pauseAll);
};

const resumeGame = () => {
	myPauseModal.classList.add("modal-hidden");

	showTheGame();
	window.addEventListener("keydown", isEscKey);
	window.addEventListener("blur", pauseAll);

	let children = myContainer.childNodes;
	children.forEach(child => {
		clearInterval(interval);
		child.style.animationPlayState = "running";
	});
	interval = window.setInterval(renderAlien, difficulty);
};

const showTheGame = () => {
	document.querySelector(".modal-wrapper").style.zIndex = "-1";
};

const showModals = () => {
	document.querySelector(".modal-wrapper").style.zIndex = "1";
};
// ---------- Render aliens function ---------- //

const renderAlien = (isNeon = null) => {
	let myAlien = document.createElement("div"),
		porcentaje = randomPercentage(90),
		alienState = isNeon
			? ["white", "neon 3s linear", "neonClass"]
			: randomElement(typesOfAliens);

	myAlien.onclick = killAlien;
	myAlien.classList.add("alienDiv");
	myAlien.style.left = isNeon ? "100%" : porcentaje;
	if (isNeon) myAlien.style.top = porcentaje;

	// Add animation
	myAlien.style.WebkitAnimation = isNeon
		? alienState[1]
		: `fly ${alienState[1]}`; // Code for Chrome, Safari and Opera
	myAlien.style.animation = isNeon ? alienState[1] : `fly ${alienState[1]}`; // Standard syntax

	// Add alien drawing from font awesome
	myAlien.innerHTML = `<i id="alien${alienId}" class="fab fa-reddit-alien alien ${
		isNeon ? alienState[2] : ""
	}" style="color: ${alienState[0]};"></i>`;

	myContainer.appendChild(myAlien);

	// Events when animation ends
	document
		.querySelector(`#alien${alienId}`)
		.parentNode.addEventListener("webkitAnimationEnd", alienArrivesTop); // Code for Chrome, Safari and Opera
	document
		.querySelector(`#alien${alienId}`)
		.parentNode.addEventListener("animationend", alienArrivesTop); // Standard syntax

	alienId++;

	// Each 12 aliens, render a special Neon Alien with powers
	if (alienId % 12 == 0) {
		alienId = 0;
		renderAlien(true);
	}
};
// ---------- Global variables ---------- //

let typesOfAliens = [
		["orangered", "6s linear"],
		["cyan", "5s ease"],
		["deeppink", "4s ease-out"],
		["lime", "7s ease-in-out"],
		["red", "7s ease-in"],
		["yellow", "5s linear"]
	],
	alienId = 0,
	powerCount,
	lifes,
	points,
	myContainer = document.querySelector("#spidersContainer"),
	interval,
	difficulty;

// ---------- Difficulty Events ---------- //

document
	.querySelectorAll(".difficulty")
	.forEach(e => e.addEventListener("click", setDifficulty));

// ---------- Modals configuration ---------- //

const difficultyModal = document.querySelector("#spiderAppModal1");
difficultyModal.classList.remove("modal-hidden");

const startModal = document.querySelector("#spiderAppModal2");
const myPauseModal = document.querySelector("#spiderAppPauseModal");

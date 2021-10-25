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
	element.target.classList.remove("power-active");
	element.target.removeEventListener("click", clearWindowWithPower);
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
	let pointsSoFar = points;
	clearWindow();
	alienId = 0;
	points = -1;

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
	document.querySelector(
		".difficulty-label"
	).innerHTML = `You&apos;ve got:&nbsp;<strong style="color: #ffb400; font-size: 35px">${pointsSoFar} Points!</strong>&nbsp;Wanna try again?`;

	difficultyModal.classList.remove("modal-hidden");
};

// Aliens die when animation ends: "remove alienDiv"
const alienArrivesTop = element => {
	let deadAlien = element.target;
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
	if (element.target.firstChild.classList.contains("neon")) addPower();
	let deadAlien = document.querySelector(`#${element.target.firstChild.id}`)
		.parentNode;
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
	interval = window.setInterval(renderSpider, difficulty);

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
	interval = window.setInterval(renderSpider, difficulty);
};

const showTheGame = () => {
	document.querySelector(".modal-wrapper").style.zIndex = "-1";
};

const showModals = () => {
	document.querySelector(".modal-wrapper").style.zIndex = "1";
};

// ---------- Render Spiders function ---------- //

const renderSpider = (isNeon = null) => {
	let myAlien = document.createElement("div"),
		porcentaje = randomPercentage(90),
		alienState = isNeon
			? ["#e73b69", "2.5s linear"]
			: randomElement(typesOfAliens);

	myAlien.onclick = killAlien;
	myAlien.classList.add("alienDiv");
	if (isNeon) {
		myAlien.classList.add("rounded");
	}

	myAlien.style.left = isNeon ? "100%" : porcentaje;
	if (isNeon) myAlien.style.top = porcentaje;

	// Add animation
	myAlien.style.WebkitAnimation = isNeon
		? alienState[1]
		: `fly ${alienState[1]}`; // Code for Chrome, Safari and Opera
	myAlien.style.animation = isNeon
		? `neon ${alienState[1]}`
		: `fly ${alienState[1]}`; // Standard syntax

	// Add alien drawing from font awesome
	myAlien.innerHTML = spider(alienId, alienState, isNeon);

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
		renderSpider(true);
	}
};

const spider = (ID, alienState, condition) => {
	return `<svg class="alien ${condition ? "neon" : ""}" style="color: ${
		alienState[0]
	}; ${
		condition ? "transform: rotate(-90deg);" : ""
	}" id="alien${ID}" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M151.17 167.35L177.1 176h4.67l5.22-26.12c.72-3.58 1.8-7.58 3.21-11.79l-20.29-40.58 23.8-71.39c2.79-8.38-1.73-17.44-10.12-20.24L168.42.82c-8.38-2.8-17.45 1.73-20.24 10.12l-25.89 77.68a32.04 32.04 0 0 0 1.73 24.43l27.15 54.3zm422.14 182.03l-52.75-79.12a32.002 32.002 0 0 0-26.62-14.25H416l68.99-24.36a32.03 32.03 0 0 0 16.51-12.61l53.6-80.41c4.9-7.35 2.91-17.29-4.44-22.19l-13.31-8.88c-7.35-4.9-17.29-2.91-22.19 4.44l-50.56 75.83L404.1 208H368l-10.37-51.85C355.44 145.18 340.26 96 288 96c-52.26 0-67.44 49.18-69.63 60.15L208 208h-36.1l-60.49-20.17L60.84 112c-4.9-7.35-14.83-9.34-22.19-4.44l-13.31 8.88c-7.35 4.9-9.34 14.83-4.44 22.19l53.6 80.41a32.03 32.03 0 0 0 16.51 12.61L160 256H82.06a32.02 32.02 0 0 0-26.63 14.25L2.69 349.38c-4.9 7.35-2.92 17.29 4.44 22.19l13.31 8.88c7.35 4.9 17.29 2.91 22.19-4.44l48-72h47.06l-60.83 97.33A31.988 31.988 0 0 0 72 418.3V496c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-73.11l74.08-118.53c-1.01 14.05-2.08 28.11-2.08 42.21C192 399.64 232.76 448 288 448s96-48.36 96-101.43c0-14.1-1.08-28.16-2.08-42.21L456 422.89V496c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-77.71c0-6-1.69-11.88-4.86-16.96L438.31 304h47.06l48 72c4.9 7.35 14.84 9.34 22.19 4.44l13.31-8.88c7.36-4.9 9.34-14.83 4.44-22.18zM406.09 97.51l-20.29 40.58c1.41 4.21 2.49 8.21 3.21 11.79l5.22 26.12h4.67l25.93-8.65 27.15-54.3a31.995 31.995 0 0 0 1.73-24.43l-25.89-77.68C425.03 2.56 415.96-1.98 407.58.82l-15.17 5.06c-8.38 2.8-12.91 11.86-10.12 20.24l23.8 71.39z"></path></svg>`;
};
// ---------- Global variables ---------- //

let typesOfAliens = [
		["#97c03d", "5s linear"],
		["#c97eff", "4s ease"],
		["#ffb400", "4s ease-out"],
		["#6C001C", "6s ease-in-out"],
		["#432364", "6s ease-in"],
		["#037144", "4s linear"]
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
const instruction = document.querySelector("#instructions");

document.querySelector("#ok-btn").addEventListener("click", () => {
	instruction.classList.add("modal-hidden");
	difficultyModal.classList.remove("modal-hidden");
});

const startModal = document.querySelector("#spiderAppModal2");
const myPauseModal = document.querySelector("#spiderAppPauseModal");

const gameBoard = document.querySelector('.game-board');
const buttons = document.querySelectorAll('.button');
const score = document.querySelector('#scoreBoard');
const highScore = document.querySelector('#highScore');
let highScoreValue = 0;
let randomArray = [];
let playerArray = [];
let buttonAmount = 4;
let playerStreak = 0;

function createArray(array) {
	let randomInt = Math.floor(Math.random() * Math.floor(buttonAmount));
	array.push(`${randomInt}`);
}

gameBoard.addEventListener('click', function (x) {
	x.target.style.transitionDuration = '.01s';
	if (x.target.classList.contains('button')) {
		logMoves(x);
	} else {
	}
});

function logMoves(x) {
	playerArray.push(x.target.id);
	checkForMatch(x);
}

function checkForMatch(x) {
	let lastButton = playerArray.length - 1;
	if (playerArray[lastButton] !== randomArray[lastButton]) {
		incorrectButton(x);
	} else {
		correctButton(x);
	}
}

function correctButton(x) {
	buttonPressedAnimation(x);
	checkIfComplete(x);
}

function buttonPressedAnimation(x) {
	let color = x.target.dataset.color;
	x.target.style.backgroundColor = color;
	function backToBlack() {
		x.target.style.backgroundColor = '';
		x.target.style.transitionDuration = '.3s';
	}
	setTimeout(backToBlack, 200);
}

function buttonAnimation(x) {
	let color = x.target.dataset.color;
	x.target.style.backgroundColor = color;
	function backToBlack() {
		x.target.style.backgroundColor = '';
		x.target.style.transitionDuration = '.3s';
	}
	setTimeout(backToBlack, 200);
}

function incorrectButton(x) {
	x.target.style.backgroundColor = 'red';
	x.target.addEventListener('click', function (x) {
		x.target.style.backgroundColor = '';
		x.target.style.transitionDuration = '.3s';
	});
	x.target.addEventListener('mouseout', function (x) {
		x.target.style.backgroundColor = '';
		x.target.style.transitionDuration = '.3s';
	});
	checkHighScore(playerStreak, highScoreValue);
	score.innerText = 0;
	score.style.color = 'red';
	score.style.transitionDuration = '.3s';
	function scoreDisappear() {
		score.style.opacity = '';
		score.style.transitionDuration = '1s';
	}
	setTimeout(scoreDisappear, 1500);
	function scoreBackToWhite() {
		score.style.color = '';
	}
	setTimeout(scoreBackToWhite, 2000);
	timer += 1000;
}

function checkHighScore(playerStreak, highScoreValue) {
	if (parseInt(playerStreak) > parseInt(highScoreValue)) {
		highScoreValue = parseInt(playerStreak);
		highScore.innerText = `high score : ${highScoreValue}`;
	}
}

function resetGame(x) {
	playerStreak = 0;
	randomArray = [];
	playerArray = [];
	createArray(randomArray);
	arrayAnimation(randomArray);
	function scoreAppear() {
		score.style.opacity = '1';
		score.style.transitionDuration = '1s';
	}
	setTimeout(scoreAppear, 2000);
}

function checkIfComplete(x) {
	if (playerArray.length === randomArray.length) {
		playerArray = [];
		playerStreak += 1;
		scoreBoardManager(playerStreak);
		arrayNextLevel(randomArray);
	}
}

function scoreBoardManager(points) {
	points = parseInt(points);
	score.innerText = points;
}

function arrayNextLevel(array) {
	let randomInt = Math.floor(Math.random() * Math.floor(buttonAmount));
	array.push(`${randomInt}`);
	arrayAnimation(array);
}

function arrayAnimation(array) {
	timer = 1000;
	for (let i = 0; i < array.length; i++) {
		let j = parseInt(array[i]);
		let button = document.getElementById(`${j}`);
		function elementAnimation() {
			let color = button.dataset.color;
			button.style.backgroundColor = color;
			function backToBlack() {
				button.style.backgroundColor = '';
				button.style.transitionDuration = '.3s';
			}
			setTimeout(backToBlack, 200);
		}
		setTimeout(elementAnimation, parseInt(timer));
		timer += 600;
	}
}

const instructions = document.querySelector('.instructions');
const instructionsExitButton = document.querySelector(
	'#backToGameInstructions'
);
instructionsExitButton.addEventListener('click', instructionsToggleOff);

function instructionsToggleOff() {
	instructions.style.opacity = '';
	instructions.style.pointerEvents = '';
}

function instructionsToggleOn() {
	instructions.style.opacity = '1';
	instructions.style.pointerEvents = 'all';
}

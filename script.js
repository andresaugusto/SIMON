console.log('buenos días, Andrés');

// create game board <section></section>
const gameBoard = document.querySelector('.game-board');
const buttons = document.querySelectorAll('.button');
const score = document.querySelector('#scoreBoard');
const highScore = document.querySelector('#highScore');
let highScoreValue = 0;
let randomArray = [];
let playerArray = [];
let buttonAmount = 4;
let playerStreak = 0;
console.log(playerStreak);

// create buttons (6) <span></span>
// // DONE in HTML

// create small hover animation for buttons
// // DONE in CSS
// function resetTransitionDuration(x) {
// 	x.target.style.transitionDuration = '.01s';
// }

function createArray(array) {
	let randomInt = Math.floor(Math.random() * Math.floor(buttonAmount));
	array.push(`${randomInt}`);
	console.log(array);
}
// createArray(randomArray);
// arrayAnimation(randomArray);

// create button 'click' functionality
gameBoard.addEventListener('click', function (x) {
	// x.preventDefault();
	// const buttonColor = x.target.altColor;
	// console.log(buttonColor);
	x.target.style.transitionDuration = '.01s';
	if (x.target.classList.contains('button')) {
		// console.log('button clicked!');
		logMoves(x);
	} else {
		console.log('click inside the board!');
	}
});

// create function operation for the buttons to push their distinct id's to an array
// create console.log of the array with the click of the .push functionality button to check for the increasing values
function logMoves(x) {
	playerArray.push(x.target.id);
	console.log(playerArray);
	checkForMatch(x);
}

// function buttonPressedAnim(x) {
// 	x.target.addEventListener('mouseup', function () {
// 		x.target.style.backgroundColor = '';
// 		x.target.style.transitionDuration = '1s';
// 		// x.target.style.transitionDelay = '1s';
// 		// x.target.style.transitionDuration = "0.15s"
// 	});
// }

function checkForMatch(x) {
	let lastButton = playerArray.length - 1;
	if (playerArray[lastButton] !== randomArray[lastButton]) {
		incorrectButton(x);
	} else {
		correctButton(x);
	}
}

function correctButton(x) {
	console.log('correct button');
	buttonPressedAnimation(x);
	checkIfComplete(x);
}

// function buttonAnimation(x) {
// 	let color = x.target.dataset.color;
// 	x.target.style.backgroundColor = color;
// 	x.target.addEventListener('click', function (x) {
// 		x.target.style.backgroundColor = '';
// 		x.target.style.transitionDuration = '.3s';
// 	});
// 	x.target.addEventListener('mouseout', function (x) {
// 		x.target.style.backgroundColor = '';
// 		x.target.style.transitionDuration = '.3s';
// 	});
// 	// setTimeout(resetTransitionDuration(x), 400);
// }

function buttonPressedAnimation(x) {
	let color = x.target.dataset.color;
	x.target.style.backgroundColor = color;
	function backToBlack() {
		x.target.style.backgroundColor = '';
		x.target.style.transitionDuration = '.3s';
	}
	setTimeout(backToBlack, 200);
	// x.target.addEventListener('click', function (x) {
	// 	x.target.style.backgroundColor = '';
	// 	x.target.style.transitionDuration = '.15s';
	// });
	// x.target.addEventListener('mouseout', function (x) {
	// 	x.target.style.backgroundColor = '';
	// 	x.target.style.transitionDuration = '.15s';
	// });
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

// // // // CLASSIC MODE: Start game from the beginning
function incorrectButton(x) {
	// setTimeout(resetTransitionDuration(x), 4100);
	console.log('game over, you lost.');
	x.target.style.backgroundColor = 'red';
	x.target.addEventListener('click', function (x) {
		x.target.style.backgroundColor = '';
		x.target.style.transitionDuration = '.3s';
	});
	x.target.addEventListener('mouseout', function (x) {
		x.target.style.backgroundColor = '';
		x.target.style.transitionDuration = '.3s';
	});
	// function elementAnimation() {
	// 	let color = button.dataset.color;
	// 	button.style.backgroundColor = color;
	// 	function backToBlack() {
	// 		button.style.backgroundColor = '';
	// 		button.style.transitionDuration = '.3s';
	// 	}
	// 	setTimeout(backToBlack, 200);
	// }
	console.log(playerStreak, highScoreValue);
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

// // // // // FORGIVING MODE (possible game mode): add streak subtract on failed move until streak reaches 0 for game over
// function incorrectButton(x) {
// 	console.log('wrong button');
// 	x.target.style.backgroundColor = 'red';
// 	x.target.addEventListener('click', function (x) {
// 		x.target.style.backgroundColor = '';
// 		x.target.style.transitionDuration = '4s';
// 	});
// 	x.target.addEventListener('mouseout', function (x) {
// 		x.target.style.backgroundColor = '';
// 		x.target.style.transitionDuration = '4s';
// 	});
// 	playerArray.pop();
// 	console.log(playerArray);
// }

function checkIfComplete(x) {
	if (playerArray.length === randomArray.length) {
		console.log('well done.');
		playerArray = [];
		console.log(playerArray);
		playerStreak += 1;
		scoreBoardManager(playerStreak);
		console.log(playerStreak);
		arrayNextLevel(randomArray);
	}
}

function scoreBoardManager(points) {
	points = parseInt(points);
	score.innerText = points;
}

// console.log array with a button (temporary action)
// // ALREADY CHECKED
// reset array button (temporary)
// // ALREADY CHECKED

// // // // // SHUFFLE ARRAY NO REPEATED VALUES (possible game mode)
// // create random generation function for shuffling id's in an array
// // Fisher-Yates Shuffle adaptation
// function shuffleRandomArray(array) {
// 	let counter = array.length;
// 	// While there are elements in the array
// 	while (counter > 0) {
// 		// Pick a random index
// 		let index = Math.floor(Math.random() * counter);
// 		// Decrease counter by 1
// 		counter--;
// 		// And swap the last element with it
// 		let temp = array[counter];
// 		array[counter] = array[index];
// 		array[index] = temp;
// 	}
// 	// return randomArray;
// 	console.log(array);
// }

// // // // // RANDOM ARRAY + 1 (possible game mode)
// // create functionality for the program to run a randomize formula for each of the values in the array
// function arrayNextLevel(array) {
// 	for (i = 0; i < array.length; i++) {
// 		let randomInt = Math.floor(Math.random() * Math.floor(buttonAmount));
// 		array[i] = `${randomInt}`;
// 	}
// 	let randomInt = Math.floor(Math.random() * Math.floor(buttonAmount));
// 	array.push(`${randomInt}`);
// 	console.log(randomArray);
// }

// // // // MATCHED ARRAY + 1 (CLASSIC)
// // create functionality for the program to pop an additional random value to the randomArray
function arrayNextLevel(array) {
	let randomInt = Math.floor(Math.random() * Math.floor(buttonAmount));
	array.push(`${randomInt}`);
	arrayAnimation(array);
	console.log(array);
}

// create functionality for the program to demonstrate the random generated order to follow.

// let transitionSpeed = 500;
// let arrayDisplaySpeed = 1000;
// let parsedTransitionSpeed = parseInt(500);
// let parsedArrayDisplaySpeed = parseInt(1000);

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

// fix multi-click bug
// // FIXED by changing the main event listener from "mousedown" to "click"

// fix color light-up failing bug
// // FIXED by changing the timers on the timeout formulas

// ONCE MULTI-CLICK BUG IS FIXED: change parameters for wrong button to reset the array.
// // DONE

// create alerts for all gameplay.

// ELIMINATE ALL CONSOLE LOGS

// Style it up, B.

// Create eventListeners for the timing settings change

// Create eventListeners for the instructions box
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
	console.log('somestring');
	instructions.style.opacity = '1';
	instructions.style.pointerEvents = 'all';
}

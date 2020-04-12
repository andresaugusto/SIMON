console.log('buenos días, Andrés');

// create game board <section></section>
const gameBoard = document.querySelector('.game-board');
let randomArray = [];
let playerArray = [];
let buttonAmount = 4;
let playerScore = 0;
console.log(playerScore);

// create buttons (6) <span></span>
// DONE in HTML

// create button 'click' functionality
gameBoard.addEventListener('mousedown', function (x) {
	// x.preventDefault();
	// const buttonColor = x.target.altColor;
	// console.log(buttonColor);
	if (x.target.classList.contains('button')) {
		// console.log('button clicked!');
		x.target.style.backgroundColor = 'coral';
		x.target.addEventListener('mouseup', function (x) {
			logMoves(x);
			x.target.style.backgroundColor = '';
			x.target.style.transitionDuration = '1s';
		});
		x.target.addEventListener('mouseout', function (x) {
			x.target.style.backgroundColor = '';
			x.target.style.transitionDuration = '1s';
			// logMoves(x);
		});
	} else {
		console.log('click inside the board!');
	}
});

// create function operation for the buttons to push their distinct id's to an array
// create console.log of the array with the click of the .push functionality button to check for the increasing values
function logMoves(x) {
	// buttonPressedAnim(x);
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
		console.log('wrong button');
		playerArray.pop();
		console.log(playerArray);
	} else {
		console.log('correct button');
		checkIfComplete(x);
	}
}

function checkIfComplete(x) {
	if (playerArray.length === randomArray.length) {
		// alert("GREAT FUCKIN' WORK, PAL");
		console.log("GREAT FUCKIN' WORK, PAL");
		playerArray = [];
		console.log(playerArray);
		playerScore += 1;
		console.log(playerScore);
		// shuffleRandomArray(randomArray);
		arrayNextLevel(randomArray);
	}
}

// console.log array with a button (temporary action)
// ALREADY CHECKED
// reset array button (temporary)
// ALREADY CHECKED

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

// create functionality for the program to run a randomize formula for each of the values in the array
function arrayNextLevel(array) {
	for (i = 0; i < array.length; i++) {
		let randomInt = Math.floor(Math.random() * Math.floor(buttonAmount));
		array[i] = `${randomInt}`;
	}
	let randomInt = Math.floor(Math.random() * Math.floor(buttonAmount));
	array.push(`${randomInt}`);
	// return array;
	console.log(randomArray);
}

function createFirstRandomArray(array) {
	let randomInt = Math.floor(Math.random() * Math.floor(buttonAmount));
	array.push(`${randomInt}`);
	console.log(array);
}

createFirstRandomArray(randomArray);

// create functionality for the program to demonstrate the random generated order to follow.

// fix multi-click bug

// fix color light-up failing bug

// ONCE MULTI-CLICK BUG I FIXED: change parameters for wrong button to reset the array.

// create alerts for all gameplay.

// ELIMINATE ALL CONSOLE LOGS

// Style it up, B.

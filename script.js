console.log('buenos días, Andrés');

// create game board <section></section>
const gameBoard = document.querySelector('.game-board');
let randomArray = ['b1', 'b2', 'b3'];
let playerArray = [];
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
		x.target.addEventListener('mouseup', function () {
			logMoves(x);
			x.target.style.backgroundColor = '';
			x.target.style.transitionDuration = '1s';
		});
		x.target.addEventListener('mouseout', function () {
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
		shuffleRandomArray(randomArray);
	}
}

// Fisher-Yates Shuffle adaptation
function shuffleRandomArray(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	// return randomArray;
	console.log(array);
}

// console.log array with a button (temporary action)
// ALREADY CHECKED
// reset array button (temporary)
// ALREADY CHECKED

// create random generation function for popping id's into an array

// Fisher-Yates Shuffle adaptation
function shuffleRandomArray(array) {
	let counter = array.length;
	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);
		// Decrease counter by 1
		counter--;
		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}
	// return randomArray;
	console.log(array);
}

// create functionality for the program to demonstrate the random generated order to follow

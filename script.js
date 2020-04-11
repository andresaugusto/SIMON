console.log('buenos días, Andrés');

// create game board <section></section>
const gameBoard = document.querySelector('.game-board');
let valuesArray = [];

// create buttons (6) <span></span>
// DONE in HTML

// create button 'click' functionality
gameBoard.addEventListener('click', function (x) {
	x.preventDefault();
	if (x.target.classList.contains('button')) {
        console.log('button clicked!');
        logMoves(x);
	} else {
		console.log('click inside the board!');
	}
});

// create function operation for the buttons to push their distinct id's to an array
function logMoves(x) {
    if ()
}

// create console.log of the array with the click of the .push functionality button to check for the increasing values
// console.log array with a button (temporary action)
// reset array button (temporary)
// create random generation function for popping id's into an array
// create functionality for the program to demonstrate the random generated order to follow

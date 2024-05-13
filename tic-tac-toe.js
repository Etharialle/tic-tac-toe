// game.players.push(createPlayer(name, marker));

// play game
// event listener for start game button
// get player name and marker choice

//const game = {turnCounter: 0, playerTurn: '', players: []};
const playerNameTest = "Etharialle";
const playerMarkerTest = "X";

const Players = (function (playerName, playerMarker) {
    let computerMarker;
    if (playerMarker === "X") {
        computerMarker = "O";
    } else {
        computerMarker = "X";
    }
    return [{"name": playerName, "marker": playerMarker}, {"name": "computer", "marker": computerMarker}];
})(playerNameTest,playerMarkerTest);
console.log(Players);

let gameboard = Array(9);
gameboard[3] = "X";
console.log(gameboard);

function placeMarker(gameboardCell, marker) {
    if (!invalidCell(gameboardCell)) {
        console.log("invalid placeMarker");
    } else {
        updateCell(gameboardCell, marker);
    }
    
    
}

function invalidCell(gameboardCell) {
    // Check for invalid cells
    const availableCells = [];
    for (let i = 0; i <= gameboard.length - 1; i++) {
        if (!gameboard[i]) {
            availableCells.push(i);
        }
    }
    console.log(availableCells);
    if (!availableCells.includes(gameboardCell)) {
        console.log("invalid move, cell already picked");
        //placeMarker(gameboardCell, marker);
    }
    return availableCells.includes(gameboardCell);
}
const updateCell = function (gameboardCell, marker) {
    gameboard[gameboardCell] = marker;
    console.log(gameboard);
};

console.log(placeMarker(3,"X"));

/*
function Gameboard() {
    const gameboardArray = [
        {"markerPlaced": ""},
        {"markerPlaced": ""},
        {"markerPlaced": ""},
        {"markerPlaced": ""},
        {"markerPlaced": ""},
        {"markerPlaced": ""},
        {"markerPlaced": ""},
        {"markerPlaced": ""},
        {"markerPlaced": ""}
    ];
    const getGameboard = () => gameboardArray;
    const placeMarker = (gameboardCell, player, turnCounter) => {
        if (!gameboardCell) {
            gameboardCell = player.marker;
            turnCounter++;
        } else {
            placeMarker();
        }
    }
    return {getGameBoard, placeMarker};
}

function GameController() {
    const gameboardArray = Gameboard();

}
*/
// O alwayas goes first
//GameBoard.placeMarker()
//Game

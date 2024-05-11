// game.players.push(createPlayer(name, marker));

// play game
// event listener for start game button
// get player name and marker choice

const game = {turnCounter: 0, playerTurn: '', players: []};
const playerName = "Etharialle";
const playerMarker = "O";

const getPlayers = (function () {
    game.players.push({"name": playerName, "marker": playerMarker});
    if (game.players[0].playerMarker === "X") {
        game.players.push({"name": "computer", "marker": "O"});
    } else {
        game.players.push({"name": "computer", "marker": "X"});
    }
})();

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

// O alwayas goes first
//GameBoard.placeMarker()
//Game

const playerNameTest = "Etharialle";
const playerMarkerTest = "O";

function Gameboard() {
    
    const board = Array(9);

    const getBoard = () => board;


    const placeMarker = (gameboardCell, marker) => {
        if (!invalidCell(gameboardCell)) {
            console.log("invalid placeMarker");
            4
            game.playRound();
        } else {
            updateCell(gameboardCell, marker);
        }
    }  
    const invalidCell = (gameboardCell) => {
        const availableCells = [];
        for (let i = 0; i <= board.length - 1; i++) {
            if (!board[i]) {
                availableCells.push(i);
            }
        }
        console.log(availableCells);
        if (!availableCells.includes(gameboardCell)) {
            console.log("invalid move, cell already picked");
        }
        return availableCells.includes(gameboardCell);
    }
    const updateCell =  (gameboardCell, marker) => {
        board[gameboardCell] = marker;
        console.log(board);
    }
    
    const printBoard = () => {
        console.log(board);
    }
    return { getBoard, placeMarker, printBoard };
}

function gameController(playerName, playerMarker) {
    const board = Gameboard();
    let activePlayer;
    const players = (function (playerName, playerMarker) {

        let computerMarker;
        if (playerMarker === "X") {
            computerMarker = "O";
            activePlayer = 1;
        } else {
            computerMarker = "X";
            activePlayer = 0;
        }

        return [{"name": playerName, "marker": playerMarker}, {"name": "computer", "marker": computerMarker}];
    })(playerNameTest,playerMarkerTest);

    console.log(players[activePlayer].name);

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === 0 ? 1 : 0;
        console.log(activePlayer);
    }
    
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
    }
    const playRound = () => {
        if (activePlayer == 0) {
            gameboardCell = parseInt(prompt("enter choice"));
        } else {
            gameboardCell = board.getBoard().findIndex(element => !element);
            console.log(gameboardCell);
        }
        board.placeMarker(gameboardCell, players[activePlayer].marker);
        console.log(players[activePlayer].marker);
        if (checkForWinner(players[activePlayer].marker === "winner found")) {
            return "winner found";
        } else {
            switchPlayerTurn();
            printNewRound();
        }
        return false;
    }
    const checkForWinner = (winnerMarker) => {
        if ((board.getBoard()[0] === winnerMarker && board.getBoard()[1] === winnerMarker && board.getBoard()[2] === winnerMarker) ||
        (board.getBoard()[3] === winnerMarker && board.getBoard()[4] === winnerMarker && board.getBoard()[5] === winnerMarker) ||
        (board.getBoard()[6] === winnerMarker && board.getBoard()[7] === winnerMarker && board.getBoard()[8] === winnerMarker) ||
        (board.getBoard()[0] === winnerMarker && board.getBoard()[3] === winnerMarker && board.getBoard()[6] === winnerMarker) ||
        (board.getBoard()[1] === winnerMarker && board.getBoard()[4] === winnerMarker && board.getBoard()[7] === winnerMarker) ||
        (board.getBoard()[2] === winnerMarker && board.getBoard()[5] === winnerMarker && board.getBoard()[8] === winnerMarker) ||
        (board.getBoard()[0] === winnerMarker && board.getBoard()[4] === winnerMarker && board.getBoard()[8] === winnerMarker) ||
        (board.getBoard()[2] === winnerMarker && board.getBoard()[4] === winnerMarker && board.getBoard()[6] === winnerMarker)) {
            console.log(winnerMarker + " wins");
            return "winner found"
        }
        return false
    }
    return {playRound, getActivePlayer};
}

const game = gameController(playerNameTest, playerMarkerTest);

const startGame = document.querySelector("#start");
startGame.addEventListener("click", function (){
    if (game.playRound() === "winner found"){
        console.log("winner winner chicken dinner");
        return;
    } else {
        game.playRound();
    }
    
});

// Win Conditions
/*
a) 0 1 2
b) 3 4 5
c) 6 7 8
d) 0 3 6
e) 1 4 7
f) 2 5 8
g) 0 4 8
h) 2 4 6
if (board[0] === marker &&
    board[1] === marker &&
)


*/
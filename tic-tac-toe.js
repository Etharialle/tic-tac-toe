const playerNameTest = "Etharialle";
const playerMarkerTest = "O";

function Gameboard() {
    
    const board = Array(9);

    const getBoard = () => board;


    const placeMarker = (gameboardCell, marker) => {
        if (!invalidCell(gameboardCell)) {
            console.log("invalid placeMarker");
            return "invalid";
        }
        updateCell(gameboardCell, marker);
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
        const removeButton = document.querySelector("#box" + gameboardCell);
        const newButton = removeButton.cloneNode(true);
        newButton.classList.add("unavailable");
        newButton.classList.remove("available");
        newButton.textContent = marker;
        removeButton.parentNode.replaceChild(newButton, removeButton);
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
    })(playerName, playerMarker);

    console.log(players[activePlayer].name);

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
    
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
    }
    const playRound = (playerSelection) => {
        if (!board.getBoard().includes()) {
            return "tie";
        }
        if (activePlayer == 0) {
            console.log(playerSelection);
            //console.log(gameboardCell);
            //gameboardCell = parseInt(prompt("enter choice"));
            gameboardCell = playerSelection;
        } else {
            gameboardCell = board.getBoard().findIndex(element => !element);
            //console.log(gameboardCell);
        }

        if (board.placeMarker(gameboardCell, players[activePlayer].marker) === "invalid") {
            return;
        } else {
            //console.log(players[activePlayer].marker);
            if (checkForWinner(players[activePlayer].marker)) {
                return "winner found";
            } else if(!board.getBoard().includes()) {
                return "tie";
            } else {
                switchPlayerTurn();
                printNewRound();
            }
            //return false;
        }
    }
    const checkForWinner = (winnerMarker) => {
        console.log("checking for winner");
        console.log(board.getBoard());
        if ((board.getBoard()[0] === winnerMarker && board.getBoard()[1] === winnerMarker && board.getBoard()[2] === winnerMarker) ||
        (board.getBoard()[3] === winnerMarker && board.getBoard()[4] === winnerMarker && board.getBoard()[5] === winnerMarker) ||
        (board.getBoard()[6] === winnerMarker && board.getBoard()[7] === winnerMarker && board.getBoard()[8] === winnerMarker) ||
        (board.getBoard()[0] === winnerMarker && board.getBoard()[3] === winnerMarker && board.getBoard()[6] === winnerMarker) ||
        (board.getBoard()[1] === winnerMarker && board.getBoard()[4] === winnerMarker && board.getBoard()[7] === winnerMarker) ||
        (board.getBoard()[2] === winnerMarker && board.getBoard()[5] === winnerMarker && board.getBoard()[8] === winnerMarker) ||
        (board.getBoard()[0] === winnerMarker && board.getBoard()[4] === winnerMarker && board.getBoard()[8] === winnerMarker) ||
        (board.getBoard()[2] === winnerMarker && board.getBoard()[4] === winnerMarker && board.getBoard()[6] === winnerMarker)) {
            console.log(winnerMarker + " wins");
            return true;
        }
        //return false
    }
    return {playRound, getActivePlayer};
}



const startGame = document.querySelector("#start");
startGame.addEventListener("click", function (){
    const playerName = document.querySelector("#name").value;
    const omarker = document.querySelector("#O").checked;
    let playerMarker;
    if (omarker) {
        playerMarker = "O";
    } else {
        playerMarker = "X";
    }

    const game = gameController(playerName,playerMarker);
    if (playerMarker === "X") {
        game.playRound();
    }
    const generateButtons = (function () {
        /*const availableCells = [];
        for (let i = 0; i <= board.length - 1; i++) {
            if (!board[i]) {
                availableCells.push(i);
            }
        }
        */
        for (let i = 0; i <= 8; i++) {
            const cellButton = document.querySelector("#box" + i);
            cellButton.classList.add("available");
            cellButton.textContent = "";
            cellButton.addEventListener("click", function (){
                const playerSelection = i;
                console.log(playerSelection);
                let roundResult = game.playRound(playerSelection);
                if (roundResult === "winner found") {
                    console.log(playerName + " - winner winner chicken dinner");
                    for (let j = 0; j <= 8; j++) {
                        const removeButton = document.querySelector("#box" + j);
                        const newButton = removeButton.cloneNode(true);
                        newButton.classList.add("unavailable");
                        newButton.classList.remove("available");
                        removeButton.parentNode.replaceChild(newButton, removeButton);
                    }
                    return;
                }
                if (roundResult === "tie") {
                    console.log("It's a tie!");
                    for (let j = 0; j <= 8; j++) {
                        const removeButton = document.querySelector("#box" + j);
                        const newButton = removeButton.cloneNode(true);
                        newButton.classList.add("unavailable");
                        newButton.classList.remove("available");
                        removeButton.parentNode.replaceChild(newButton, removeButton);
                    }
                    return;
                }
                roundResult = game.playRound();
                if (roundResult === "winner found") {
                    console.log("Computer - winner winner chicken dinner");
                    for (let j = 0; j <= 8; j++) {
                        const removeButton = document.querySelector("#box" + j);
                        const newButton = removeButton.cloneNode(true);
                        newButton.classList.add("unavailable");
                        newButton.classList.remove("available");
                        removeButton.parentNode.replaceChild(newButton, removeButton);
                    }
                    return;
                }
                if (roundResult === "tie") {
                    console.log("It's a tie!");
                    for (let j = 0; j <= 8; j++) {
                        const removeButton = document.querySelector("#box" + j);
                        const newButton = removeButton.cloneNode(true);
                        newButton.classList.add("unavailable");
                        newButton.classList.remove("available");
                        removeButton.parentNode.replaceChild(newButton, removeButton);
                    }
                    return;
                }
        })
    };

    })();
});

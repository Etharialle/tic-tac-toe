# tic-tac-toe
JavaScript implementation of tic-tac-toe in a browser

## Planning
- Use Immediately Invoked Function Expressions

Each piece of functionality should fit into one of the following:
- game
    - turnCounter: 0 // turnCounter++
    - playerTurn: playerName //
    - players: [{name, marker}] // use array index as id
- player
    - name
    - marker
    - isActive
- gameBoard
    - gameBoardArray: new Array(9);

### Turn Counter
zero indexed, if reaches 9 and no winner declared result equals tie

### Game Board


|-0-|-1-|-2-|
|-3-|-4-|-5-|
|-6-|-7-|-8-|

Gameboard = {[gameboard: [0-8]]}


## Functions

- GameController()
    - playRound()
    - changeActivePlayer()
    - getActivePlayer()
- GameBoard()
    - const board = new Array(9);
    - getBoard()
        - const getBoard = () => board;
    - placeMarker()
        - const placeMarker = (arrayIndex, player) => {
            - const availableIndex = board.filter((arrayIndex) => arrayIndex.getValue() === '')
        }

    - printBoard()
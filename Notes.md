

While (any board value == ""){
    Get board ();
    Placemarker();
    Get board();
    Checkforwin();
    Switch player();
    Turncounter++;
}

Placemarker() {
    Getactiveplayer ();
    If active player == human {
        Prompt for cell value;
        If cell value is not "" {
            Placemarker ();
        }
        //Board[cell value] = player.marker;
    } else {
        Logic for computer choice;
        // To test functionality start with picking first cell with an empty string;
    }
    Board[cell value] = player.marker;

Switch player() {
    Const activeplayer = game.activeplayer.value;
    Switch (activeplayer) {
        Case human:
            Game.activeplayer.value = computer;
            Break
        Case computer:
            Game.activeplayer.value = human;
            Break
Ternary statement instead of switch case

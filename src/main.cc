#include <iostream>
#include <cctype>
#include <cstdlib>


void printGameBoard(const std::string gameBoard[3][3]) {
    std::cout << "-------------" << std::endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            std::cout << "| " << gameBoard[i][j] << " ";
        }
        std::cout << "|" << std::endl;
        std::cout << "-------------" << std::endl;
    }
}

int main() {
    // const int rows = 3; // shouldn't be needed since we know the size
    // const int cols = 3;
    std::string gameBoard[3][3] = {
        {"1","2","3"},
        {"4","5","6"},
        {"7","8","9"}
    };
    std::string blankBoard[3][3]= {
            {" "," "," "},
            {" "," "," "},
            {" "," "," "}
        };

    printGameBoard(gameBoard);
    
    // Choose Marker Function
    char marker;
    while (true) {
        std::cout << "Choose your Marker: " << std::endl;
        std::cin >> marker;

        if (std::isalpha(marker) && std::cin.peek() == '\n') {
            marker = toupper(marker);
            //return marker;
            break;
        }
    }
    std::cout << "Marker Chosen: " << marker << std::endl;

    char newGame;
    std::cout << "Start New Game? (Y/N):";
    
    std::cin >> newGame;
    newGame = toupper(newGame);
    if (newGame == 'Y') {
        system("clear");
        
        // clear board
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                gameBoard[i][j] = " ";
            }
        }
        
        printGameBoard(gameBoard);
    }
}
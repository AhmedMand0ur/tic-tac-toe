const Gameboard = (() => {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const getBoard = () => board;

    const resetBoard = () => {
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
    };

    const placeMarker = (row, col, marker) => {
        if (board[row][col] === "") {
            board[row][col] = marker;
            return true;
        }
        return false; // Spot already taken
    };

    return { getBoard, placeMarker, resetBoard };
})();


// Factory function for creating players
const Player = (name, marker) => {
    return { name, marker };
};


const GameController = (() => {
    let player1, player2, currentPlayer;
    let gameOver = false;

    const startGame = (name1, name2) => {
        player1 = Player(name1 || "Player 1", "X");
        player2 = Player(name2 || "Player 2", "O");
        currentPlayer = player1;
        gameOver = false;
        Gameboard.resetBoard();
    };

    const switchTurn = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const playTurn = (row, col) => {
        if (gameOver) return;

        if (Gameboard.placeMarker(row, col, currentPlayer.marker)) {
            if (checkWinner()) {
                console.log(`${currentPlayer.name} wins!`);
                gameOver = true;
            } else if (isDraw()) {
                console.log("It's a draw!");
                gameOver = true;
            } else {
                switchTurn();
            }
        }
    };

    const checkWinner = () => {
        const board = Gameboard.getBoard();
        const winPatterns = [
            [[0, 0], [0, 1], [0, 2]], // Rows
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]], // Columns
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]], // Diagonals
            [[0, 2], [1, 1], [2, 0]]
        ];

        return winPatterns.some(pattern =>
            pattern.every(([r, c]) => board[r][c] === currentPlayer.marker)
        );
    };

    const isDraw = () => {
        return Gameboard.getBoard().flat().every(cell => cell !== "");
    };

    // ✅ Added this function to return the current player
    const getCurrentPlayer = () => currentPlayer;

    return { startGame, playTurn, checkWinner, isDraw, getCurrentPlayer };
})();



const DisplayController = (() => {
    const boardElement = document.getElementById("board");
    const statusText = document.getElementById("status");
    const resetButton = document.getElementById("reset");
    const player1Input = document.getElementById("player1");
    const player2Input = document.getElementById("player2");
    const startButton = document.getElementById("start");

    startButton.addEventListener("click", () => {
        GameController.startGame(player1Input.value, player2Input.value);
        renderBoard();
        updateStatus();
    });

    resetButton.addEventListener("click", () => {
        GameController.startGame(player1Input.value, player2Input.value);
        renderBoard();
        updateStatus();
    });

    const renderBoard = () => {
        boardElement.innerHTML = "";
        const board = Gameboard.getBoard();

        board.forEach((row, r) => {
            row.forEach((cell, c) => {
                const cellElement = document.createElement("div");
                cellElement.classList.add("cell");
                cellElement.textContent = cell;
                cellElement.addEventListener("click", () => {
                    GameController.playTurn(r, c);
                    renderBoard();
                    updateStatus();
                });
                boardElement.appendChild(cellElement);
            });
        });
    };

    const updateStatus = () => {
        if (GameController.checkWinner()) {
            statusText.textContent = `${GameController.getCurrentPlayer().name} wins! 🎉`;
        } else if (GameController.isDraw()) {
            statusText.textContent = "It's a Draw! 🤝";
        } else {
            statusText.textContent = `${GameController.getCurrentPlayer().name}'s Turn`;
        }
    };

    return { renderBoard };
})();

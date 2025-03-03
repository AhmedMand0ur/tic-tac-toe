# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game built with **JavaScript (ES6+), HTML, and CSS**. This project follows a **modular design pattern**, utilizing **factories and IIFE modules** to maintain clean and minimal global code.

## 🚀 Features

- Two-player game (Player 1 vs Player 2)
- Dynamic UI updates for game status
- Players can input their names
- Restart button to reset the game
- Modular JavaScript design (Gameboard, Player, and GameController objects)

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript (ES6+)

## 📂 Project Structure

```
📦 Tic-Tac-Toe
├── 📜 index.html      # Main HTML file
├── 📜 style.css       # Styling for the game board
├── 📜 script.js       # Main JavaScript file (Game logic & UI rendering)
├── 📜 README.md       # Project documentation
```

## 🎮 How to Play

1. Open `index.html` in a browser.
2. Enter Player 1 and Player 2 names.
3. Click **Start** to begin the game.
4. Players take turns clicking on the board to place their mark (X or O).
5. The game announces a **winner** or **draw**.
6. Click **Reset** to start a new game.

## 📜 Code Structure

The game is structured using **three main modules**:

1. **Gameboard Module** (IIFE): Stores and updates the board state.
2. **Player Factory**: Creates player objects with name and marker.
3. **GameController Module** (IIFE): Manages turns, checks for winners, and controls game flow.
4. **DisplayController Module** (IIFE): Handles DOM updates and event listeners.

## 📸 Screenshots

Coming soon... 📷

## 🛠️ Setup & Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/AhmedMand0ur/tic-tac-toe.git
   ```
2. Open the `index.html` file in your browser.

## 🤝 Contributions

Feel free to fork this project and submit a pull request! Any improvements are welcome. 😊

## 📝 License

This project is open-source.

---

🎉 Have fun playing Tic-Tac-Toe! 🚀


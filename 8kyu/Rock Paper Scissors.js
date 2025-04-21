// Description:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// My Code:


// function rps(player1, player2) {
    if (player1 === player2) {
      return "Draw!";
    }
  
    const wins = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };
  
    if (wins[player1] === player2) {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
  }
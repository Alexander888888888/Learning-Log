# Rock, Paper or Scissors

In this project, we’re going to practice conditionals in JavaScript so you can hone your skills and feel confident taking them to the real world. Why? Given a certain input you want to return a certain output. If this than that.

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.

### Heres a code snippet of my work:

```javascript
// Now I create a function which can determine who wins the game based on the results of the user and computer. As a challange I decide to use a ternary operator for the logic.
const determineWinner = (userChoice, computerChoice) => {
  return userChoice === computerChoice
    ? "Game tied"
    : (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ? "Human wins!"
    : "Computer wins";
};

// I once again refactor the code to challange myself this time using an else if statement. I keep the new code commented out to prevent any logic conflicting.

// const determineWinner = (userChoice, computerChoice) => {
//   if (userChoice === computerChoice) {
//     return "Game tied";
//   } else if (
//     (userChoice === "rock" && computerChoice === "scissors") ||
//     (userChoice === "paper" && computerChoice === "rock") ||
//     (userChoice === "scissors" && computerChoice === "paper")
//   ) {
//     return "Human wins!";
//   } else {
//     return "Computer wins";
//   }
// };
```

### Check out my full code here:
[Rock, Paper or Scissors Project](Rock,%20Paper%20or%20Scissors.js)
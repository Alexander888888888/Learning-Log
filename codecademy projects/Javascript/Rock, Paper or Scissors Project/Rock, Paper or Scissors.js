// Firstly I create a function using arrow function syntax, as it contains a single parameter the brackets that would normally surround it are not needed. To aviod two seperate results for users who use capital letters at the start of words (e.g "Rock" vs "rock") I utilize Javascripts toLowerCase() function which will change all inputs into lower case. I also account for users who input something other than rock paper or scissors and display an error message in this event.
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors"
    ) {
        return userInput;
    } else {
        console.log("Error, invalid input");
    }
};

// Next I create a new function which returns a random output of rock paper or scissors using javascript's Math library.
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Error";
    }
};

// I take this oppotunity to refactor the above code in order to practise else if statements too. I comment out the code to aviod conflicting logic.

// const getComputerChoice = () => {
//   let randomNumber = Math.floor(Math.random() * 3);
//   if (randomNumber === 0) {
//     return "rock";
//   } else if (randomNumber === 1) {
//     return "paper";
//   } else if (randomNumber === 2) {
//     return "scissors";
//   } else {
//     return "Error"
//   };
// };

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

// Lastly I create a function which will bring together all the functions we have created so we may play the game. I also add spaces in both console.log() lines to make answers display clearly. 
const playGame = () => {
    let userChoice = getUserChoice("Scissors");
    let computerChoice = getComputerChoice();
    console.log(`Human choice:      ${userChoice}`);
    console.log(`Computer Choice:   ${computerChoice}`);

    console.log(" ")

    console.log(determineWinner(userChoice, computerChoice));
}

// I call the function to see the result in the console.
playGame();
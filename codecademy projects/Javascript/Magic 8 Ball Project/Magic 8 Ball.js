const userName = 'Alex';

// I use a ternary expression to log a message to the console depending on whether the user has inputed a name or not. (in this case the user has)
userName ? console.log(`Hello ${userName}`) : console.log("Hello!");

// I store the question the user wants to ask inside a variable called userQuestion.
const userQuestion = 'Will I become rich?';

// I log the question to the console using string interpolation.
console.log(`${userName} has asked: ${userQuestion}`)

// Using two methods from the Math libary I create a random number between 0 and 7 and store the result in a variable called randomNumber. The will be used to choose the which answer the Magic 8 Ball responds with.
let randomNumber = Math.floor(Math.random() * 8);

// I define a Magic 8 Ball variable which doesn't have a value yet but will depending on the value of the randomNumber variable.
let eightBall = ""

// I create a switch statement which uses the value of the random number to randomly assign the eightBall variables value. I created 8 responces that sound like Magic 8 Ball answers and to be extra safe I included a default value in case there are any errors in the code.
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain'
        break;
    case 1:
        eightBall = 'It is decidedly so'
        break;
    case 2:
        eightBall = 'Reply hazy try again'
        break;
    case 3:
        eightBall = 'Cannot predict now'
        break;
    case 4:
        eightBall = 'Do not count on it'
        break;
    case 5:
        eightBall = 'My sources say no'
        break;
    case 6:
        eightBall = 'Outlook not so good'
        break;
    case 7:
        eightBall = 'Signs point to yes'
        break;
    default:
        eightBall = 'Error, Magic 8 Ball not responding'
}

// Bringing it all together I log a message to display the 8 Ball's answer.
console.log(`Magic 8 Ball is thinking... Answer: ${eightBall}`)

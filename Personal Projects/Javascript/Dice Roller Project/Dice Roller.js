// First I create a function called rollDice and make it return a random number between 1 and 6.
const rollDie = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}


// Now in order to create a function which can roll multipule dice I add a parameter to this function called numOfDice. For however many dice the user inputs I create a loop to iterate over them. This loop pushed the result of calling rollDice into an array, which always me to see the result of all those rolls in one place.
const rollDice = (numOfDice) => {
    let myArray = []
    for (let i = 0; i < numOfDice; i++) {
        myArray.push(rollDie())
    }

    // I then define a variable to hold the sum of all the dice rolls. To do this I iterate over the array and add and assign each value to diceSum.
    let diceSum = 0
    myArray.forEach((die) => {
        diceSum += die
    })

    // To show how frequently each number is rolled I create an object to store this data. For each number in the array the forEach() array method will iterate over the value and add it as a property. If the property has no value the value will automatically be 1. If the property does have a value then it will + 1 to its value. It this way I can see the how many times each number appears in the object.
    let obj = {};
    myArray.forEach((die => {
        obj[die] = (obj[die] || 0) + 1
    }))

    // Bringing it all together I use string interpolation to log a message to the console that tells the user how many dice we are rolling, the result of each of those rolls and the sum total of all those rolls.
    console.log(`Here are the results of each ${numOfDice} dice rolls: ${myArray}. The total number this sums to is ${diceSum}. Here is`)

    // I also log the object to the console using the table() method for a clearer presentation of the data.
    console.table(obj)
};

// Finnaly I call the function
rollDice(5);
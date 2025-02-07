// First I declare a variable called team and set it to an object.
const team = {

    // Then I add two properties, _players and _games. Both these properties are initialized to arrays. I then populate these arrays with three objects which themselves contain three properties. The properties from the _players array's objects are firstName, lastName and age. I have created some generic values which could be paired with these properties. The properties from the _games array's objects are opponent, teamPoints and opponentPoints. I have created some generic values for these properties too.
    _players: [
        { firstName: "Bob", lastName: "Smith", age: 32 },
        { firstName: "Frank", lastName: "Day", age: 81 },
        { firstName: "Donny", lastName: "Hathaway", age: 59 },
    ],
    _games: [
        { opponent: "Slitherin", teamPoints: 50, opponentPoints: 69 },
        { opponent: "Hufflepuff", teamPoints: 80, opponentPoints: 48 },
        { opponent: "Griffindor", teamPoints: 93, opponentPoints: 92 },
    ],

    // To retrieve the _players and _games properties correctly I create a getter method called players and games which return their respective property names as. 
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    // In order to add a new player to the team I define a method called addPlayer within the team object. This method takes three parameters newFirstName, newLastName and newAge. The method contains an object called player. I add the same properties as the ones inside the _players array's objects and then assign the parameters as their values. Then, after the player object I simply use the push array method to push the object to the _players array, making sure to make use of the 'this' keyword as I am still in the function's body.
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(player);
    },

    // I create another method for adding game results which takes three parameters, newOpponent, newTeamPoints and newOpponentPoints. The function also contains an object called game which stores the same properties as the _games array's objects' properties. I add the parameters as their values and finally after the object I add the game object to the team's _games array in the same way I added the player object in the last method.
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }
};

// Now I try out my new addPlayer and addGame method to add Bugs Bunny and the Titans team to their respective arrays.
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

// Finally to check everything's working as expected I log the team object's _players and _games properties to the console, I use the getter methods to do this to keep the encapsulation intact. This ensures we are using the intended interface instead of logging via private properties.
console.log(team.players);
console.log(team.games);
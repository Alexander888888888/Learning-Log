// First I tighten the scope of random to inside the function to ensure that the random number is generated when the fuction is called. This is better because if another user is added to the training days service then both users will have randomised events that differ from each other. If the scope of random was global like it was originally then both users would still get a random event each time but it would be the same random event for each user.
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};


// Next I define the days variable before the if statement so that its scope is local to the function. This ensures it can be accessed in the function and means that we don't need to define it three seperate times like before. It also aviods the ReferenceError the code was giving before.
const getTrainingDays = event => {
    let days

    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days;
};

// Then I removed the declaration for the name variable and instead added name as an arguments to be passed to the function when it is called. This is better as it aviods duplicating code unnecessarily.
const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};
const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

// Lastly I passed the function as an argument directly into the getTrainingDays() function to create more concise code.
const days = getTrainingDays(getRandEvent());

// I call each function.
logEvent('Nala', getRandEvent());
logTime('Nala', days);

// I test that the change to the random variables scope worked as expected.
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
logEvent(name2, event2);
logTime(name2, days2);
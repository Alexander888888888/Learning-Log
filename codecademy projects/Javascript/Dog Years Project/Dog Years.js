const myAge = 25;
// First I have assigned my age into a variable.

let earlyYears = 2;
// I have also created a variable for the early years of a dogs life, this variable will change.

earlyYears *= 10.5;
// Next I account for the faster rate of maturity in dogs in their first two years of life and reassign this to the earlyYears variable.

let laterYears = myAge - 2;
// Since the earlyYears variable already accounts for a dogs first two years I subtract this from the myAge variable and assign the result to a new variable called laterYears.

laterYears *= 4
// I then account for the next maturity rate of a dogs life by muliplying later years by 4. I also reassign this to the laterYears variable.

const myAgeInDogYears = earlyYears + laterYears;
// Bringing it all togther I add the two variables togther to find the total years equivalent of life for dogs and assign it to the variable myAgeInDogYears.

let myName = "Alex";
myName = myName.toLowerCase();
// I'm going to log a message to the console to see if it works. I also want to practise some built in methods so I convert my name to lower case and reassign the myName variable.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

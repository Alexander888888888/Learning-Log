// First I define a variable called raceNumber and assign its value as a random number between 0 and 999. These will be the race numbers for all the registrants except for those who are adults and registred early. For these people we will simply add 1000 to their race number to get a value at 1000 or above.
let raceNumber = Math.floor(Math.random() * 1000);

// I define a variable to account for whether the registrants register early or late. For now I set the value to false, indicating that they have not registered early.
let earlyRegistration = false;

// I also define a variable to account for the registrants age.
let runnerAge = 28;

// To practice ternary operaters I use one to determine whether the runner is over 18 (an adult) and has also registered early. If so then 1000 is added to their random race number as all early adults must receive a race number at or above 1000.
runnerAge > 18 && earlyRegistration ? raceNumber += 1000 : raceNumber;

// To account for the rest of the logic I use an else if statement to log a message to each registrant which clearly shows the time that they will begin the race and their race number. The statement accounts for: those who are an adult and registered early, those who are an adult and registered late, those who are not an adult and those who are exactly 18.
if (runnerAge > 18 && earlyRegistration) {
    console.log(`Hello! You will begin the race at 9:30am! Your race number is: ${raceNumber}`)
} else if (runnerAge > 18 && !earlyRegistration) {
    console.log(`Hello! You will begin the race at 11:00am! Your race number is: ${raceNumber}`)
} else if (runnerAge < 18) {
    console.log(`Hello! You will begin the race at 12:30am! Your race number is: ${raceNumber}`)
} else {
    console.log(`Hello! Please see the registration desk`)
};
// I create function with a switch statement inside to return the hours of sleep you might get depending on the day. It had a single parameter for the day you are interested in. In this case the argument is the day of the week.
const getSleepHours = (day) => {
    switch (day) {
      case "Monday":
        return 8;
      case "Tuesday":
        return 7;
      case "Wednesday":
        return 6;
      case "Thursday":
        return 5;
      case "Friday":
        return 7.5;
      case "Saturday":
        return 9;
      case "Sunday":
        return 6.5;
      default:
        return "Invalid day, try again with capital starting letter";
    }
  };
  
  // Next I create a function to determine the total hours of sleep you actually get in a week. To do this I simply call the getSleepHours function 7 times and place each day of the week into the parameters, I want to add them all together so I use the addition operater and return the sum using an implicit return.
  const getActualSleepHours = () =>
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");
  
  // After that I create a function to determine the ideal number of hours of sleep I want during a week. I multiply the idealHours variable (ideal daily hours of sleep) by 7 to get this.
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  // Lastly I create another function to determine if the user got the right amount of sleep or not. I use a ternary for the logic to help me practice creating these. I also make sure to include the hours the user is over or under by in the log statements to make the calculator more helpful.
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    actualSleepHours === idealSleepHours
      ? console.log("You got the perfect amount of sleep, well done!")
      : actualSleepHours < idealSleepHours
      ? console.log(`You didn't get much sleep this week, ideally you would get ${idealSleepHours - actualSleepHours} hours more. Get some rest.`)
      : console.log(`You got more sleep that you needed, ${actualSleepHours - idealSleepHours} hours more to be precise! Stop being lazy`);
  };
  
  // I start the program by calling the function.
  calculateSleepDebt();
  
  // BONUS PRACTICE:
  
  // To practise refactoring code I rewrite the ternary operator as an else if statement.
  // const calculateSleepDebt = () => {
  //   const actualSleepHours = getActualSleepHours();
  //   const idealSleepHours = getIdealSleepHours();
  
  //   if (actualSleepHours === idealSleepHours) {
  //     console.log("You got the perfect amount of sleep, well done!");
  //   } else if (actualSleepHours < idealSleepHours) {
  //     console.log("You didn't get much sleep, get some rest.");
  //   } else {
  //     console.log("You got more sleep that you needed, stop being lazy");
  //   };
  // };
  
  // calculateSleepDebt();
  
  // Some people need to sleep longer than others so I rewrite the getIdealSleepHours function so I can pass it an argument for however many hours of sleep you want per day. (note that when I do this I would need to now pass the function an argument in the calculateSleepDebt function (line 42))
  // const getIdealSleepHours = idealHours => idealHours * 7;
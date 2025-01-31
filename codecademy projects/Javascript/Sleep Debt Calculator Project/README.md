# Sleep Debt Calculator

In this project, we’re going to practice functions in JavaScript so you can hone your skills and feel confident taking them to the real world. Why? Functions help us build separation of concerns so our code isn’t one long function.

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

### Heres a code snippet of my work:

```javascript
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
```

### Check out my full code here:

[Sleep Debt Calculator Project](Sleep%20Debt%20Calculator.js)
# Training Days

In this project, we’re going to practice scope in JavaScript so you can hone your skills and feel confident taking them to the real world. Why? Scope determines the visiblity of variables and other resources in your code.

As a seasoned athlete, one of your favorite activities is running marathons. You use a service called Training Days that sends you a message for the event you signed up for and the days you have left to train.

Since you also code, Training Days has asked you to help them solve a problem: The program currently uses the wrong scope for its variables. They know this can be troublesome as their service evolves. In this project you will make Training Days more maintainable and less error-prone by fixing variable scopes.

In the console we can see that the program is broken!

Ideally, the getRandEvent() function selects an event at random. The getTrainingDays() function returns the number of days to train based on the event selected. The logEvent() and logTime() functions print the athlete name, event, and number of days to the console.

But poorly scoped variables are causing errors.

Heres the program we are looking to fix:

```javascript
// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {

  if (event === 'Marathon') {
    let days = 50;
  } else if (event === 'Triathlon') {
    let days = 100;
  } else if (event === 'Pentathlon') {
    let days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event);
logTime(days);
```

### Heres a code snippet of my work:

```javascript
  // Then I removed the declaration for the name variable and instead added name as an arguments to be passed to the function when it is called. This is better as it aviods duplicating code unnecessarily.
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
```

### Check out my full code here:

[Training Days Project](Training%20Days.js)
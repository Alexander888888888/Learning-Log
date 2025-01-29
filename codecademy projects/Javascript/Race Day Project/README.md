# Race Day

Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this:
![Timeline of Registration](https://content.codecademy.com/projects/introduction-to-javascript/learn-javascript-control-flow/race-day/raceday-timeline.svg)

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

- Early adults receive a race number at or above 1000.
- All others receive a number below 1000.

<br>

Start time:

Adult registrants run at 9:30 am or 11:00 am:
- Early adults run at 9:30 am.
- Late adults run at 11:00 am.

Youth registrants run at 12:30 pm (regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

### Heres a code snippet of my work:

```javascript
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
```

### Check out my full code here:
[Race Day Project](Race%20Day.js)

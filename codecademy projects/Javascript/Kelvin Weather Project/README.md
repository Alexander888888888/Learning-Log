# Kelvin Weather

In this project, we’re going to practice variables and printing to the console in JavaScript so you can hone your skills and feel confident taking them to the real world. Why? You’ve got to master the basics. Get comfortable with these fundamentals.

Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

![Alt Text](https://content.codecademy.com/projects/introduction-to-javascript/learn-javascript-introduction/kelvin-weather/Kelvin%20Thermometers.svg)

### Heres a code snippet of my work:

```javascript

// I have assigned 293 to the variable kelvin as a placeholder of todays temperature.
const kelvin = 293;

// I have defined another variable named Celsius and assigned it the value of kevin - 273 as this is the formula for working out Celcius
const celsius = kelvin - 273;

// I have assigned another variable named fahrenheit which works out the farenheit using the celsuis variable and another formula. I have used the let variable type as I intend to round this number later
let fahrenheit = celsius * (9/5) + 32;
```

For extra practice I also created a variable to convert celsius to the Newton scale.

### Check out my full code here: 
[Kelvin Weather Project](Kelvin%20Weather.js)
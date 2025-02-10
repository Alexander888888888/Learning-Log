// I have assigned 293 to the variable kelvin as a placeholder of todays temperature.
const kelvin = 293;

// I have defined another variable named Celsius and assigned it the value of kevin - 273 as this is the formula for working out Celcius
const celsius = kelvin - 273;

// I have assigned another variable named fahrenheit which works out the farenheit using the celsuis variable and another formula. I have used the let variable type as I intend to round this number later
let fahrenheit = celsius * (9 / 5) + 32;


// I have assigned a new values to the fahrenheit variable which will round the number down to the nearest whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33 / 100);

newton = Math.floor(newton)

console.log(`The temperature is ${newton} newtons`);


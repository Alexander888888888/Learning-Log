# 🎲 Dice Roller  

A simple JavaScript program that simulates rolling one or more dice. It generates random dice rolls, calculates the total sum, and determines the most common roll if multiple dice are used.  

## ✨ Features  
- Roll a single six-sided die 🎲  
- Roll multiple dice at once  
- Calculate the total sum of all rolls  
- Identify the most frequently rolled number  

## 🚀 How It Works  
Call the `rollDice(numDice)` function with the number of dice you want to roll. The function returns:  

- An array of rolled values  
- The total sum of all dice  
- The most common roll (if applicable)  

## 🛠 Technologies

- JavaScript (Randomization, Arrays, Loops, Functions)

### Heres a code snippet of my work:

```javascript
 // To show how frequently each number is rolled I create an object to store this data. For each number in the array the forEach() array method will iterate over the value and add it as a property. If the property has no value the value will automatically be 1. If the property does have a value then it will + 1 to its value. It this way I can see the how many times each number appears in the object.
    let obj = {};
    myArray.forEach((die => {
        obj[die] = (obj[die] || 0) + 1
    }))
```

### Check out my full code here: 

[Dice Roller Project](Dice%20Roller.js)

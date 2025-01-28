# Dog Years

In this project, we’re going to practice variables and strings in JavaScript so you can hone your skills and feel confident taking them to the real world. Why? These concepts will help you use your data to output information to your users.

Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.

### Heres a snippet of my work:

``` javascript
let myAge = 25;
// First I have assigned my age into a variable.

let earlyYears = 2;
// I have also created a variable for the early years of a dogs life, this variable will change.

earlyYears *= 10.5;
// Next I account for the faster rate of maturaty in dogs in their first two years of life and reassign this to the earlyYears variable.

let laterYears = myAge - 2;
// Since the earlyYears variable already accounts for a dogs first two years I subtract this from the myAge variable and assign the result to a new variable called laterYears.
```
### Check out the full code here: 
[Dog Years Project](Dog%20Years.js)
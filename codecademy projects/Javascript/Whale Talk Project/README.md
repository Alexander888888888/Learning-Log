# Whale Talk

It’s time to practice loops in JavaScript by building a project that will translate English into “Whale Talk”.

Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

- There are no consonants. Only vowels excluding “y”.
- The u‘s and e‘s are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!

### Heres a code snippet of my work:

```javascript
 // Inside this loop I create a second loop which should run for one complete cycle for every letter of the input variable. This loop will iterate through each letter of the vowels array. So for each letter in the input variable's string ALL the letters of the vowels array are iterated over once.
    for (j = 0; j < vowels.length; j++) {

        // While still inside the second for loop I create an if statement. The if statement will simply compare something. As the if statement is inside the second for loop however, it will be making a comparison multiple times. Remembering that we are still in the second for loop's block we know that this comparison will be made for a full cycle of the vowels array on each letter of the input variable's string. For example the first letter is "m" as in "My name is...". This means that "m" is compared with "a" in the vowel array then "e" then "i" then "o" then "u" before the letter "m" finally changes to the second letter in the input variable ("y" as in "mY name is ..."). In this case the if statement is checking whether the letter in the input variable is the same as each letter in the vowels array.
        if (input[i] === vowels[j]) {

            // If the letters match then the vowel is copied from the vowel array and pushed into the resultArray variable's array. I could have chosen to copy the letter from the input variable's string instead by doing resultArray.push(input[i]) and this would have also given us the same result.
            resultArray.push(vowels[j])
        }
    }
```

### Check out my full code here:

[Whale Talk Project](Whale%20Talk.js)


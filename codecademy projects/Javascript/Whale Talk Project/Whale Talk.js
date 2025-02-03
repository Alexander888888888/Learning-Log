// Firstly I define a variable called input and assign its value as the text we want translate into "whale talk".
const input = "my name is alex and i speak several languages including whale";

// I then create an array with all of the vowels as its elements. This will be used to compare with the letters from the input variable as whales only speak with vowels.
const vowels = ["a", "e", "i", "o", "u"];

// Next I define a variable called resultArray and assign it an empty array. All of the vowels from the input variable will be stored here later.
let resultArray = [];

// I create a for loop that will iterate through each letter of the input variable's string.
for (i = 0; i < input.length; i++) {

    // Inside this loop I create a second loop which should run for one complete cycle for every letter of the input variable. This loop will iterate through each letter of the vowels array. So for each letter in the input variable's string ALL the letters of the vowels array are iterated over once.
    for (j = 0; j < vowels.length; j++) {

        // While still inside the second for loop I create an if statement. The if statement will simply compare something. As the if statement is inside the second for loop however, it will be making a comparison multiple times. Remembering that we are still in the second for loop's block we know that this comparison will be made for a full cycle of the vowels array on each letter of the input variable's string. For example the first letter is "m" as in "My name is...". This means that "m" is compared with "a" in the vowel array then "e" then "i" then "o" then "u" before the letter "m" finally changes to the second letter in the input variable ("y" as in "mY name is ..."). In this case the if statement is checking whether the letter in the input variable is the same as each letter in the vowels array.
        if (input[i] === vowels[j]) {

            // If the letters match then the vowel is copied from the vowel array and pushed into the resultArray variable's array. I could have chosen to copy the letter from the input variable's string instead by doing resultArray.push(input[i]) and this would have also given us the same result.
            resultArray.push(vowels[j])
        }
    }
    // Back inside of the original and first for loop's code block I create another if statement so that each "e" and "u" will be doubled in the resultArray variable's array as this is correct in "whale talk". Every time the letter of the input variable is = to "e" or "u" it will copy it and add it to the resultArray. Had I put this code inside the second for loop's code then if the input was = to "e" or "u" it would have copied those letters 5 times and then pushed them to the resultArray! There are 5 vowels so even though the letter wouldn't match all the vowels this comparison is simply checking whether the inputs variables letter is = to "e" or "u" so it would have copied the letter for as long as that is true (a full cycle through the vowels or 5 times!) and pushed it into the result array. It would also be checking the first comparison I made with the if statement above so if the letter in the input variable's string did match then it would also copy that and push it into the resultArray variable's array. In total the resultArray would then have an "e" or "u" 6 times if it had found a match! This is why it is so important that this if statement is inside the outer for loop's block or the first/original for loop's block and not in the second/inner or nested for loop's block.
    if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i])
    }
}

// I now have an array of the correct letters for "whale talk" but I want to see the array as a sentence/word (whales may decide whether this new phase is a sentence or word). To do this I convert this array into a single string using the join() array method. As whales are large the correct translation of their words/sentences would naturally have capital letters too so we also use the toUpperCase() method.
const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
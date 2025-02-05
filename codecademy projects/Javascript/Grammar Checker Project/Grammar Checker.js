let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Firstly I log storyWords to the console to see if it has successfully separated the story string into an array. It has so I comment it out. Now all I need to do to change storyWords back into a readable string is to place the .join() method invocation as an argument of a console.log() statements. Doing this will allow for a better visual comparison of the original and edited story.
// console.log(storyWords);

// To create a word count I first create a variable and set its value to 0. Then I use a .forEach() method to iterate over the storyWords array. I add a callback function (which is anonymous) and add the parameter word as a placeholder for all the words the function will iterate over. For each of the words that are iterated over I add one to the count's value and reassign its value. I find there are 181 words!
let count = 0;
storyWords.forEach((word) => {
    count += 1;
});
console.log(count);

// To reduce the word count I reassign storyWords to itself with the .filter() method invokated. I want to remove all instances of the unnecessaryWord variables value in the storyWords array. To do this I simply set word as a parameter again and make sure that the function returns all the words in the array as long as it does NOT equal the value of unnecessaryWord (which happens to be 'literally'). Now when I log storyWords as a string back to the console all the 'literally''s have gone!
storyWords = storyWords.filter((word) => {
    return word !== unnecessaryWord;
})

// I now want to replace any misspelled words so I reassign storyWords to itself with the .map() method invoked. In .map()'s callback function I give word as a parameter and define a ternary operator in the function body. The conditional statement will check if word is equal to the misspelledWord variable and if it is returns the correct spelling of the string 'beautiful', if not it simply returns word. Now I log the storyWords as a string back to the console all the misspelled words have been replaced by the correct spellings. 
storyWords = storyWords.map(word => word === misspelledWord ? 'beautiful' : word
);

// As my great grandmother is reading the story I make it more appropriate by first finding the bad word in the story. To do this I declare a variable called badWordIndex and set its value to the invocation of the .findIndex() method on the storyWords array. The callback function inside .findIndex will check each word to see if it equals the variable badWord and return the index position if it finds it. I now log badWordIndex to the console and discover the index position of the badWord is 78. I can now easily replace the badWord by accessing the element inside the storyWords array that has the index of badWordIndex and setting the element equal to the more appropriate string 'really'. 
badWordIndex = storyWords.findIndex((word) => {
    return word === badWord
});
console.log(badWordIndex);
storyWords[badWordIndex] = 'really';

// Next I'm making sure the story will appeal to a broader audience by making sure that every word in the story is 10 characters or less. To do this I make use of the .every() array method, which will test whether every word has less than or equal to 10 characters. By logging the lengthCheck array, which is the variable I assigned to the invocation of the .every() method on the storyWords array, I should get true if there are no words over 10 characters and false if there are. The log let me know there is one by logging false.
lengthCheck = storyWords.every((word) => {
    word.length <= 10
});
console.log(lengthCheck);

// To find and replace this word I once again make use of the .map() array method and use a ternary operator in the callback functions body to determine whether a word has over 10 characters. If the word has it returns the word 'stunning' (to replace 'breathtaking') if not it simply returns the original word. 
storyWords = storyWords.map(word => word.length > 10 ? 'stunning' : word);

// For fun I also challenge myself to create some code that will find and return all the words of a given length, with both the word and length of the word returned, and then log the total number of words that are this length in the storyWords array. This example shows all the words which have nine characters.
let count1 = 0;
storyWords.forEach(word =>
    word.length === 9 ? (count1 += 1) && (console.log(word, word.length)) : count1 += 0
);
console.log(count1);

// Lastly I log the storyWords array back to the console as a string once again.
console.log(storyWords.join(" "));
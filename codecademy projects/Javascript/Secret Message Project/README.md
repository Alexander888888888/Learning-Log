# Secret Message 

Using array methods, you will transform an array of strings into a secret message!

You should consult the Mozilla Developer Network (MDN) for reference on any method with which you are not familiar.

Heres the array we are looking to transform into a secret message:

```javascript
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
```

## Tasks:

- Use an array method to remove the last string of the array secretMessage. You can check your work by logging the .length of the array. At this point, the length should be 1 less than the original length.
- Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
- Change the word easily to the word right by accessing the index and replacing it.
- Use an array method to remove the first string of the array.
- Use an array method to add the string Programming to the beginning of the array.
- Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
- On one line, use console.log() and .join() to print the secret message as a sentence.

### Heres a code snippet of my work:

```javascript
// To change the word "easily" in the array and replace it with the word "right" I first use the .indexOf() array method to determine its index number. I log all this to the console and find that "easily" is in the 7th index position. Knowing this I simply reassign the 7th index position to the word "right".
console.log(secretMessage.indexOf("easily"));
secretMessage[7] = "right"
console.log(secretMessage);

// Here I use the .shift() array method to remove the first string of the array.
secretMessage.shift();
console.log(secretMessage);
```

### Check out my full code here:

[Secret Message Project](Secret%20Message.js)


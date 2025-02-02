let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// I first remove the last string of the array using the .pop() array method. To check this works I log the new array to the console.
secretMessage.pop();
console.log(secretMessage);

// I also log the length to see if it is 1 less than the original length.
console.log(secretMessage.length)

// Using the .push() array method I add the words "to" and "Program" to the end of the secretMessage array. I pass the two words together as arguments of the push() array method. This means that I don't have to use the method twice with each word separately. I once again check its working as expected by logging the new array to the console. I will do this for each task. 
secretMessage.push("to", "Program");
console.log(secretMessage);

// To change the word "easily" in the array and replace it with the word "right" I first use the .indexOf() array method to determine its index number. I log all this to the console and find that "easily" is in the 7th index position. Knowing this I simply reassign the 7th index position to the word "right".
console.log(secretMessage.indexOf("easily"));
secretMessage[7] = "right"
console.log(secretMessage);

// Here I use the .shift() array method to remove the first string of the array.
secretMessage.shift();
console.log(secretMessage);

// Next I add the string "Programming" to the beginning of the array using the .unshift() array method.
secretMessage.unshift("Programming");
console.log(secretMessage);

// To remove elements from the array and replace them at the same time I use the .splice() method.. I know that the first string we are removing is the word "get", but I don't know its index position. So I use .indexOf() to find this and log it to the console. Its index position is 6 so that becomes the first argument of the .splice() array method. To figure out the second I could how many words after get we are removing and I incluce "get" in this count. There are 5 elements in total that we are removing so that becomes my second argument. The third and last argument is the word we want to replace the others with. In this case it is just the one word and its "know,". 
console.log(secretMessage.indexOf("get"));
secretMessage.splice(6, 5, "know,");
console.log(secretMessage);

// Lastly, in order to print the entire message to the console as a sentence (rather than as an array), I use the .join() array method. By default this method will separate each element with a commar, so I give the method an argument of a space inside a string so it is instead seperated with a space.
console.log(secretMessage.join(" "));
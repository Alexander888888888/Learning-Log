# Magic 8 Ball

Build a virtual Magic Eight Ball using control flow in JavaScript. You’ll practice building decision-making into your programs and gain confidence in writing more robust JavaScript code.

You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

### Heres a code snippet of my work:

```javascript
// I create a switch statement which uses the value of the random number to randomly assign the eightBall variables value. I created 8 responces that sound like Magic 8 Ball answers and to be extra safe I included a default value in case there are any errors in the code.
switch(randomNumber) {
  case 0:
  eightBall = 'It is certain'
  break;
  case 1:
  eightBall = 'It is decidedly so'
  break;
  case 2:
  eightBall = 'Reply hazy try again'
  break;
  case 3:
  eightBall = 'Cannot predict now'
  break;
  case 4:
  eightBall = 'Do not count on it'
  break;
  case 5:
  eightBall = 'My sources say no'
  break;
  case 6:
  eightBall = 'Outlook not so good'
  break;
  case 7:
  eightBall = 'Signs point to yes'
  break;
  default:
  eightBall = 'Error, Magic 8 Ball not responding'
}
```

### Check out my full code here:

[Magic 8 Ball Project](Magic%208%20Ball.js)

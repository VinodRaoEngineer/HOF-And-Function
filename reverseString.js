// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

function reverseString(input) {
    return input.split("").reverse().join("");
  }
  
  
  var input = "Hello, World!";
  
  
  function delayedReverse() {
    setTimeout(function() {
      var reversedString = reverseString(input);
  
      
      console.log("Reversed String: " + reversedString);
    }, 2000); 
  }
  
  delayedReverse();
  
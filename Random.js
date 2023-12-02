// 2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.


function generateRandomNumber() {
    return Math.floor(Math.random() * 100);  
  }
  
  
  function displayProgress(timeRemaining) {
    console.log("Generating random number in " + timeRemaining + " seconds...");
  }
  
  
  function generateNumberWithDelay(delay) {
    
    var intervalId = setInterval(function() {
      displayProgress(delay);
      delay--;
  
      
      if (delay < 0) {
        clearInterval(intervalId); 
        var randomNumber = generateRandomNumber();
        console.log("Random Number Generated: " + randomNumber);
      }
    }, 1000); 
  
    
    setTimeout(function() {
      clearInterval(intervalId); 
      var randomNumber = generateRandomNumber();
      console.log("Random Number Generated: " + randomNumber);
    }, delay * 1000); 
  }
  
  
  var delayInSeconds = 3;
  
  
  generateNumberWithDelay(delayInSeconds);
  
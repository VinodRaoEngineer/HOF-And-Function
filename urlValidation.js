// 5. URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.


function validateURL(url) {
    const urlRegex = /^(http:\/\/|https:\/\/)[\w\d\S]+?\.[\w]+$/;
  
    if (urlRegex.test(url)) {
      console.log(`"${url}" is a valid URL.`);
    } else {
      console.log(`"${url}" is not a valid URL.`);
    }
  }
  
  
  validateURL("http://www.example.com");     
  validateURL("https://sub.domain.com/path"); 
  validateURL("ftp://invalid.url");           
  validateURL("http://missing.dot");          
  
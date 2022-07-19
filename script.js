// Special characters for the function created
const specialCharacters = '!@#$%^&*()<>{}[]+=_-/~|'
// Add event listener to generate button
const generateButton = document.getElementById('generate')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var minimumCount = 0; // min count for numbers, lowerCases, upperCases, and specialCharacters
var minimumNumbers = ""; // empty minimums for each case 
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";

// Generator functions 
var functionArray = {
    getNumbers: function() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function () {
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  };


// Calling the generatePassword function 
function generatePassword() {
    // Prompts that come up after you click generate password
  var passwordLength = prompt("Please enter the number of characters you want for your new password. It may be between 8 and 128 characters.");
  if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
    return window.alert ("Invalid Response. Please try again!");
  }

  var numbers = window.confirm ("Do you want your new password to include numbers?"); 
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }

  var lowerCases = confirm ("Do you want your new password to include lowercase letter?");
  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount ++;
  }

  var upperCases = confirm ("Do you want your new password to include uppercase letters?"); 
  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }

  var specialCharacters = window.confirm ("Do you want your new password to include special characters?"); 
  if (specialCharacters === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }

// empty string variable for the loop below 
  let randomPassword = " ";

// loop gettin random characters 
  for (let i=0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPassword += randomNumberPicked;
  } 

// characters added to password 
  randomPassword += minimumLowerCases
  randomPassword += minimumUpperCases
  randomPassword += minimumNumbers
  randomPassword += minimumSpecialCharacters

  return randomPassword;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

let specialCharacters = [ "!", "#", "$", "%", "&", "(", ")","<",">", "[","]", "{","}","*","+","-",".","/", ":", ";", "=", "?", "@", "^","_","`","|","~"]
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w","x","y","z"]
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let masterArray = []; 
let randomPassword = ""; 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// call the generatePassword function
function generatePassword() {
  var passwordLength = window.prompt("Please enter the number of characters you want for your new password. It may be between 8 and 128 characters.");
  if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
    return window.alert ("Invalid Response. Please try again!");
  }

  var useLowerCase = window.confirm ("Do you want your new password to include lowercase letter?");
  if (useLowerCase === true) {
    masterArray.concat(lowerCase);
  }

  var useUpperCase = window.confirm ("Do you want your new password to include uppercase letters?"); 
  if (useUpperCase === true) {
    masterArray.concat(lowerCase);
  }

  var useNumbers = window.confirm ("Do you want your new password to include numbers?"); 
  if (useNumbers === true) {
    masterArray.concat(numbers);
  }

  var useSpecialCharacters = window.confirm ("Do you want your new password to include special characters?"); 
  if (useSpecialCharacters === true) {
    masterArray.concat(specialCharacters);
  }

  let randomPassword = " ";
  for (let i=0; i<passwordLength; i++) {
    randomPassword += masterArray [Math.floor(Math.random()* (masterArray.length))];
    console.log(Math.floor(Math.random() * (masterArray.length)));
    console.log(randomPassword);
  } 
  return randomPassword;
}
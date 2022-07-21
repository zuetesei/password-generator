// Assignment code here 
function generatePassword() {
    var num = ['0','1','2','4','5', '6','7','8','9'];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w","x","y","z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var specialCharacters = [ "!", "#", "$", "%", "&", "(", ")","<",">", "[","]", "{","}","*","+","-",".","/", ":", ";", "=", "?", "@", "^","_","`","|","~"];
    var possibleCharCombo = []; 

    // get inputs and validate 
    numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
        return "Please choose a valid number of characters between 8-128.";
    } else if (isNaN(numberOfCharacters)) {
        numberOfCharacters = prompt("Please enter a valid number.");
    }
    else {
        alert ("Your password will be " + numberOfCharacters + " characters long.");
    }
    // series of prompts re: password criteria 
    hasLowerCase = confirm("Do you want lowercase characters?");
    if (hasLowerCase) {
        var turnLowerCase = alert ("Your password will have lowercase characters.");
    } else { 
        alert("Your password will NOT have lowercase characters.");
    }

    hasUpperCase = confirm ("Do you want uppercase characters?");
    if (hasUpperCase) {
        alert("Your password will have uppercase characters.");
    } else {
        alert("Your password will NOT have uppercase characters.");
    }

    hasNumbers = confirm ("Do you want to use numbers?");
    if (hasNumbers) {
        alert("Your password will have numbers.");
    }
    else {
        alert("Your password will NOT have numbers.");
    }

    hasSpecialCharacters = confirm("Do you want special characters?");
    if (hasSpecialCharacters) {
        alert ("Your password will have special characters.");
    } else {
        alert ("Your password will NOT have special characters.");
    }

    if (hasLowerCase === false && hasUpperCase === false && hasNumbers === false && hasSpecialCharacters===false) {
        return "You must select at least one character type.";
    };

    // group characters based on selected criteria 
    if (hasLowerCase) {
        possibleCharCombo = possibleCharCombo.concat(lowerCase);
    }
    if (hasUpperCase) {
        possibleCharCombo = possibleCharCombo.concat(upperCase);
    }
    if (hasNumbers) {
        possibleCharCombo = possibleCharCombo.concat(num);
    }
    if (hasSpecialCharacters) {
        possibleCharCombo = possibleCharCombo.concat(specialCharacters);
    }

    let finalPassword = ""
    for (let i = 0; i < numberOfCharacters; i++) {
        let n = [Math.floor(Math.random() * possibleCharCombo.length)];
        finalPassword = finalPassword + possibleCharCombo[n];
    }
    return finalPassword;
};   

var generateBtn = document.querySelector("#generate");

// write password to #password input 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);
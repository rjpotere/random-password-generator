// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//create generate password function

function generatePassword(){
  var length = window.prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

  if (length == null) {
    return;

  } else if (length >= 8 && length <= 128) {
    // run next step

  } else {
    window.alert("Please input a number between 8 and 128.")
    return;
  }

  var upperMessage = window.confirm("Would you like to use uppercase letters?");
  var lowerMessage = window.confirm("Would you like to use lowercase letters?");
  var numberMessage = window.confirm("Would you like to use numbers?");
  var symbolMessage = window.confirm("Would you like to use special characters?");

  var randomPassword = [];

  if (upperMessage) {
    randomPassword = randomPassword.concat(upper);
  }

  if (lowerMessage) {
    randomPassword = randomPassword.concat(lower);
  }

  if (numberMessage) {
    randomPassword = randomPassword.concat(number);
  }

  if (symbolMessage) {
    randomPassword = randomPassword.concat(symbol);
  }

  var securePassword = " ";

  for (i=0; i < length; i++) {
    securePassword = securePassword + randomPassword [Math.floor(Math.random() * randomPassword.length)];
  }


 return securePassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

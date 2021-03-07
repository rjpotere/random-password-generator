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
    upperMessage;

  } else {
    window.alert("Please input a number between 8 and 128.")
    return;
  }

  var upperMessage = window.confirm("Would you like to use uppercase letters? If no, select cancel.");
  var lowerMessage = window.confirm("Would you like to use lowercase letters? If no, select cancel.");
  var numberMessage = window.confirm("Would you like to use numbers? If no, select cancel.");
  var symbolMessage = window.confirm("Would you like to use special characters? If no, select cancel.");

  if (!upperMessage && !lowerMessage && !numberMessage && !symbolMessage) {
    window.alert("You must select at least one of the options.")
    return;
  }

  var randomPassword = [];

  if (upperMessage && lowerMessage && numberMessage && symbolMessage) {
    randomPassword = randomPassword.concat(upper).concat(lower).concat(number).concat(symbol);

  } else if (upperMessage && lowerMessage && !numberMessage && !symbolMessage) {
    randomPassword = randomPassword.concat(upper).concat(lower);

  } else if (upperMessage && !lowerMessage && numberMessage && !symbolMessage) {
    randomPassword = randomPassword.concat(upper).concat(number);

  } else if (upperMessage && !lowerMessage && !numberMessage && symbolMessage) {
    randomPassword = randomPassword.concat(upper).concat(symbol);

  } else if (!upperMessage && lowerMessage && numberMessage && !symbolMessage) {
    randomPassword = randomPassword.concat(lower).concat(number);

  } else if (!upperMessage && lowerMessage && !numberMessage && symbolMessage) {
    randomPassword = randomPassword.concat(lower).concat(symbol);

  } else {
    randomPassword = randomPassword.concat(number).concat(symbol);
  }  

  var securePassword = " ";

  for (i=0; i < length; i++) {
    securePassword = securePassword + randomPassword [Math.floor(Math.random() * randomPassword.length)];
  }


 return securePassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

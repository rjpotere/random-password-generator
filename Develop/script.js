// Assignment Code
var generateBtn = document.querySelector("#generate");

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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var generatorInput = prompt ("Hello, thanks for using this password generator. Our first order of buisness is to decide how long you would like your password to be (between 8 and 128 characters).");
  var generatorLength = valueOf(generatorInput)

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

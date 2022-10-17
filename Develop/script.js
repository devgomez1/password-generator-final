// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var confirmGenerate = confirm ("Click OK to begin selecting password criteria.")
  var generatorInput = prompt ("Thanks for using this password generator. Our first order of buisness is to decide how long you would like your password to be (between 8 and 128 characters).");
  var generatorLength = parseInt(generatorInput)

if (generatorLength < 8) {
  alert("That password will be too small unfortunately ")
  }

if (generatorLength > 128) {
  alert("That password will be too big unfortunately")
}}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

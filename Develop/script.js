// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var confirmGenerate = confirm ("Click OK to begin selecting password criteria.")
  var generatorInput = prompt ("Thanks for using this password generator. What will be the integer length of your password? (between 8 and 128 characters).");
  var generatorLength = parseInt(generatorInput)

if (generatorLength < 8) {
  alert("That password will be too small unfortunately.")
  }

if (generatorLength > 128) {
  alert("That password will be too big unfortunately.")
}
var lowercaseConfirm = confirm("Are you ok with lowercase characters in your password?")
var uppercaseConfirm = confirm("Are you ok with uppercase characters in your password?")
var symbolsConfirm = confirm("Are you ok with symbols in your password?")
var NumbersConfirm = confirm("Are you ok with Numbers in your password?")


}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt() {
  return Math.floor(Math.random * Math.floor)
}

function randomlist(list) {
  return list()
}

function generatePassword () {
  var confirmGenerate = confirm ("Click OK to begin selecting password criteria.")
  var generatorInput = prompt ("Thanks for using this password generator. What will be the integer length of your password? (between 8 and 128 characters).")
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
var numbersConfirm = confirm("Are you ok with Numbers in your password?")

const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",] 
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const symbols = ["!", "@", "#", "%", "^", "&", "*", "+", "-"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

var selectedCriteria = [] 

if (lowercaseConfirm === true) {
  selectedCriteria.push(lowercaseCharacters)
}

if (uppercaseConfirm === true) {
  selectedCriteria.push(uppercaseCharacters)
}

if (symbolsConfirm === true) {
  selectedCriteria.push(symbols)
}

if (numbersConfirm === true) {
  selectedCriteria.push(numbers)
}

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

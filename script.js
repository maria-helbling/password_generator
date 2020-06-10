// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var letters = "abcdefghijklmnopqrstuvwxyz";
var userInput = []; 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

randomCharacter = () => specialCharacters[Math.floor(Math.random()*specialCharacters.length)]

randomNumber = () => Math.floor(Math.random()*10);

randomLetter = () => letters[Math.floor(Math.random()*letters.length)]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var letters = "abcdefghijklmnopqrstuvwxyz";
var userInput = [];
var pwLength;
var prompts = [`Include lowercase letters?`, `Include uppercase letters?`,`Include numbers?`,`Include special characters?`]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");  

  passwordText.value = password;

}

// functions to generate random symbol, number and letter
randomCharacter = () => specialCharacters[Math.floor(Math.random()*specialCharacters.length)]

randomNumber = () => Math.floor(Math.random()*10);

randomLetterL = () => letters[Math.floor(Math.random()*letters.length)]

randomLetterU = () => randomLetterL().toUpperCase()
var allFunct = [randomLetterL, randomLetterU, randomNumber, randomCharacter];
var functArray = [];

// PW generator function
generatePassword = () => {
  // user input on PW length btw 8 and 128 inclusive
  pwLength = prompt(`Hello! Welcome to your PW generator. \n\n Tell me how long do you need your PW to be. \n\n NB! Only numbers between 8 and 128 inclusive`)
  // input is validated
  if (parseInt(pwLength)>7 && parseInt(pwLength)<129) {
        pwLength = parseInt(pwLength);
  } else {
        alert(`That was not a valid input, please start over!`);
        return "";
  }
  
  // get user input on if they need lowercase, uppercase, numeric, and/or special characters
  // identify functions needed to meet the spec and add them to array
  let validator = 0 
  for (i=0; i<prompts.length; i++) {
    if (confirm(prompts[i])) {
        functArray.push(allFunct[i]);
        validator++
      }
  }
                            
  // input is validated, at least one character type should be selected, otherwise alert and exit function
    if (validator===0) {
    alert(`You need at least one type of character in your password for it to work.`)
    return ""        
  }

  //generate password
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

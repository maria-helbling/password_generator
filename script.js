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

// PW generator function
generatePassword = () => {
  // input on PW length btw 8 and 128 inclusive
  pwLength = prompt(`Hello! Welcome to your PW generator. \n\n Tell me how long do you need your PW to be. \n\n NB! Only numbers between 8 and 128 inclusive`)
  // input is validated
  if (parseInt(pwLength)>7 && parseInt(pwLength)<129) {
        pwLength = parseInt(pwLength);
        for (let i = 0; i < prompts.length-1; i++) {
          let answer = confirm(prompts[i]);
          userInput.push(answer);
          console.log(answer, userInput);
        }      
    // we need user input on if they need lowercase, uppercase, numeric, and/or special characters
      // input should be validated and at least one character type should be selected

  } else {
    
    alert(`That was not a valid input, please start over!`)
    console.log(pwLength);
}
}

// functions to generate random symbol, number and letter
randomCharacter = () => specialCharacters[Math.floor(Math.random()*specialCharacters.length)]

randomNumber = () => Math.floor(Math.random()*10);

randomLetter = () => letters[Math.floor(Math.random()*letters.length)]



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

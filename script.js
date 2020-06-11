// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var letters = "abcdefghijklmnopqrstuvwxyz";
var prompts = [`Include lowercase letters?`, `Include uppercase letters?`,`Include numbers?`,`Include special characters?`]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");  

  passwordText.value = password;

}

// functions to generate random lowercase, uppercase, number and character
randomLetterL = () => letters[Math.floor(Math.random()*letters.length)]
randomLetterU = () => randomLetterL().toUpperCase()
randomNumber = () => Math.floor(Math.random()*10);
randomCharacter = () => specialCharacters[Math.floor(Math.random()*specialCharacters.length)]

//put the functions in an array in the same order as relevant prompts
var allFunct = [randomLetterL, randomLetterU, randomNumber, randomCharacter];

// PW generator function
generatePassword = () => {
  
  // user input on PW length btw 8 and 128 inclusive
   let pwLength = prompt(`Hello! Welcome to your PW generator. \n\n Tell me how long do you need your PW to be. \n\n NB! Only numbers between 8 and 128 inclusive`);

  // input is validated, if not integer within range then alert and exit function
  if (parseInt(pwLength)>7 && parseInt(pwLength)<129) {
        pwLength = parseInt(pwLength);
  } else {
        alert(`That was not a valid PW length input, please start over!`);
        return "";
  }
  
  // get user input on if they need lowercase, uppercase, numeric, and/or special characters
  // identify functions needed to meet the spec and add them to array
  var functArray = [];
  let validator = 0 ;
  for (let i=0; i<prompts.length; i++) {
    if (confirm(prompts[i])) {
        functArray.push(allFunct[i]);
        validator++;
      }
  }

  // input is validated: at least one character type should be selected, otherwise alert and exit function
  if (validator===0) {
    alert(`You need at least one type of character in your password for it to work.`)
    return ""        
  }

  //generate password body for all but the last few characters
  let pwString="";
  for (let j = 0; j < pwLength-validator; j++) {
    let num = Math.floor(Math.random()*validator);
    //randomly pick one of the randomising functions
    let component = functArray[num]();
    pwString = `${pwString}${component}`;
  }

  // This workaround ensures the pw includes at least one of each chosen character type
  for (i=0; i<validator; i++){
    pwString =`${pwString}${functArray[i]()}`;
  }

  return pwString

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

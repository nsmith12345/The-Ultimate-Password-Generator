// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!")

// 1. Prompt the user for the password criteria.

//    a. Password Length 8 < 128.
  var passwordLength = window.prompt("Password must contain between 8 - 128 characters");
  console.log(passwordLength);
  if(passwordLength < 8 || passwordLength > 129) {
    console.log("notinrange");
    alert("Password must contain between 8 - 128 characters");
    generatePassword(); 
  }
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*"];  
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacterArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//    b. Lowercase, uppercase, numbers, special characters.
var passwordSpecialCharacter = window.confirm("Click OK to confirm including special characters");
console.log(passwordSpecialCharacter);
var passwordNumericCharacter = window.confirm("Click OK to confirm including numeric characters");
var passwordLowercaseCharacter = window.confirm("Click OK to confirm including lowercase characters");
var passwordUppercaseCharacter = window.confirm("Click OK to confirm including Uppercase characters");
// 2. Validate the input.
var finalPassword = "";

var characterArray = []; 
if(passwordSpecialCharacter) {
  characterArray = characterArray.concat(specialCharacterArray); 
  var randomElement = specialCharacterArray[Math.floor(Math.random() * specialCharacterArray.length)];
  finalPassword = finalPassword + randomElement;
} 

if(passwordUppercaseCharacter) {
  characterArray = characterArray.concat(upperCaseArray);
  var randomElement = upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
  finalPassword = finalPassword + randomElement;
} 

if(passwordLowercaseCharacter) {
  characterArray = characterArray.concat(lowerCaseArray);
  var randomElement = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
  finalPassword = finalPassword + randomElement;
} 

if(passwordNumericCharacter) {
  characterArray = characterArray.concat(numericCharacterArray);
  var randomElement = numericCharacterArray[Math.floor(Math.random() * numericCharacterArray.length)];
  finalPassword = finalPassword + randomElement;
} 
console.log(characterArray);

// 3. Generate password based on criteria. 
//user only wants uppercase + lowerccase

for (let i = finalPassword.length; i <= passwordLength; i++) {
  var randomElement = characterArray[Math.floor(Math.random() * characterArray.length)];
  finalPassword = finalPassword + randomElement;
}



// 4. Display password to the page. 
  return finalPassword;
}  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

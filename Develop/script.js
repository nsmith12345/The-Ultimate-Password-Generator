// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!")

// 1. Prompt the user for the password criteria.

//    a. Password Length 8 < 128.
  window.prompt("How many characters would you like your password to contain? Must be between 8 - 128 characters.");
  
//    b. Lowercase, uppercase, numbers, special characters.
  window.prompt("Click OK to confirm including special characters");
  window.prompt("Click OK to confirm including numeric characters");
  window.prompt("Click OK to confirm including lowercase characters");
  window.prompt("Click OK to confirm including Uppercase characters");
// 2. Validate the input.

function validateInput;() {
  var passwordlength
  var specialCharacters
  var numericCharacters
  var lowercaseCharacters
  var uppercaseCharacters 
}

let password={
  special []
  numeric []
  lowercase []
  uppercase []
}

// 3. Generate password based on criteria. 

function promptPassword Length(){
  length = prom();
}

function prompSpecialCharacter(){
  do 
    uppercase = prompt();
}while(flag == true)

  validateType()

}

function validateType(){
  var flag = true;
  if (uppercase.match(/yes/i) || lowercase.match() || Symbol()){
    return;
  }
  flag = false
  return
}

function generatePassword(){

  //user only wants uppercase + lowerccase

for (let i = 0; i < uppercase.length; i++){
    temp.push(uppercase[i])
}

var password
for (i=0;i < legnth){
  password = random() newpassword[i];
}
}

// 4. Display password to the page. 
  return "Generated password will go here!"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

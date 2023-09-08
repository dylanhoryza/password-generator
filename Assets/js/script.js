// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to generate the password
function generatePassword() {

// variables that include all character types
  const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChar = '0123456789';
  const specialChar = '!@#$%^&*()_+[]{};:,.<>?'

  // prompt for password length requirements
  let passwordLength = parseInt(prompt("Enter the password length. (Must be between 8 and 128 characters)"));

  // alerts user if password length requirements are not met
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    return;
  }

  // variables to confirm which character types to include in password  
  let useLowercase = confirm("Include lowercase characters?");
  let useUppercase = confirm("Include uppercase characters?");
  let useNumeric = confirm("Include numeric characters?");
  let useSpecial = confirm("Include special characters?");

  // alert if user selects none of the required types 
  if (!(useLowercase || useUppercase || useNumeric || useSpecial)) {
    alert("You must select at least one character type.");
    return;
  }

  // builds the characters used based on what the user selects
  let characters = '';
  if (useLowercase) characters += lowercaseChar;
  if (useUppercase) characters += uppercaseChar;
  if (useNumeric) characters += numericChar;
  if (useSpecial) characters += specialChar;

 // generates the password 
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

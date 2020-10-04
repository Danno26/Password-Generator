// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {

    //possible password values
    // let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    // let includeNums = "1234567890"
    // let specCharacters = "!@#$%^&*()_+"

    // let validation = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"

    //let password = "";

    //create prompt for password length
    var lengthAnswer = prompt("Please enter the password length:", "8 - 128 characters");
    if (lengthAnswer != null && lengthAnswer != '') {
        confirm("You chose " + lengthAnswer);
        if (isNaN(lengthAnswer)) {
            alert("Must input numbers");
            return false;
        } else() {
            confirm("You chose " + lengthAnswer "!")
            console.log(lengthAnswer);
        }
    };
    //create prompt for upper case letters

    //create prompt for lower case letters

    //create for loop to choose password characters
    // for (var i = 0; i <= lengthAnswer; i++) {
    //     password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
    // }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
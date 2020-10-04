// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    //possible password values
    let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowCase = "abcdefghijklmnopqrstuvwxyz"
    let includeNums = "1234567890"
    let specChar = "!@#$%^&*()_+"
    passwordText.value = password;
}

function generatePassword() {

    // let validation = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"

    let password = "";

    //create prompt for password length
    var lengthAnswer = prompt("Please enter the password length:", '8 - 128 characters');
    if (lengthAnswer != null && lengthAnswer != '') {
        if (isNaN(lengthAnswer)) {
            alert("Must input numerical values between 8 - 128.");
            return false;
        } else {
            confirm("You chose " + lengthAnswer + "!");
        }
        console.log(lengthAnswer)
    };
    //create prompt for upper case letters
    var upCase = confirm("Would you like to include uppercase letters?")
    if (upCase != null && upCase != "") {
        if (upCase != false) {
            alert("You would like to use UPPERCASE letters!")
        } else {
            alert("You would not like to include them.")
        }
        console.log(upCase)
    };
    //create prompt for lower case letters
    var lowCase = confirm("Would you like to includee lowercase letters?")
    if (lowCase != null && lowCase != "") {
        if (lowCase != false) {
            alert("You would like to use lowercase letters!")
        } else {
            alert("You would not like to include them.")
        }
        console.log(lowCase)
    };
    //create prompt for numbers
    var includeNums = confirm("Would you like to include numbers?")
    if (includeNums != null && includeNums != "") {
        if (includeNums != false) {
            alert("You would like to use numbers!")
        } else {
            alert("You would NOT like to use numbers.")
        }
        console.log(includeNums)
    };
    //create prompt for spec characters
    var specChar = confirm("Would you like to use special characts? ie: !@#$%^&*()_+")
    if (specChar != null && specChar != "") {
        if (specChar != false) {
            alert("You would like to include special characters!")
        } else {
            alert("You would NOT like to include special characters.")
        }
        console.log(specChar)
    };
    //create for loop to choose password characters
    for (var i = 0; i <= lengthAnswer; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
    }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
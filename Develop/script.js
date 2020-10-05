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
    var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var low = "abcdefghijklmnopqrstuvwxyz"
    var nums = "1234567890"
    var spec = "!@#$%^&*()_+"

    var password = '';

    var newPassword = [];

    //create prompt for password length
    var lengthAnswer = parseInt(prompt("Please enter the password length:", '8 - 128 characters'));
    if (lengthAnswer != null && lengthAnswer != '') {
        if (isNaN(lengthAnswer)) {
            return alert("Must input numerical values between 8 - 128.");
        } else if (lengthAnswer < 8) {
            return alert("Password must be at least 8 characters and at most 128.")
        } else if (lengthAnswer > 128) {
            return alert("Password must be at least 8 characters and at most 128.")
        } else {
            confirm("You chose " + lengthAnswer + "!")
        }
        console.log(lengthAnswer)
    };
    //create prompt for upper case letters
    var upCase = confirm("Would you like to include uppercase letters?")
    if (upCase != false) {
        (newPassword.push(up))
    } else {
        alert("You would NOT like to include uppercase letters.")
    }
    console.log(upCase)

    //create prompt for lower case letters
    var lowCase = confirm("Would you like to include lowercase letters?")
    if (lowCase != false) {
        (newPassword.push(low))
    } else {
        alert("You would not like to include lowercase letters.")
    }
    console.log(lowCase)

    //create prompt for numbers
    var includeNums = confirm("Would you like to include numbers?")

    if (includeNums != false) {
        (newPassword.push(nums))
    } else {
        alert("You would NOT like to use numbers.")
    }
    console.log(includeNums)

    //create prompt for spec characters
    var specChar = confirm("Would you like to use special characts? ie: !@#$%^&*()_+")
    if (specChar != false) {
        (newPassword.push(spec))
    } else {
        alert("You would NOT like to include special characters.")
    }
    console.log(specChar)

    //create for loop to choose password characters
    var newPassString = newPassword.join("");


    for (var i = 0; i <= lengthAnswer; i++) {
        var randomPass = newPassString.charAt(Math.floor(Math.random() * newPassString.length));
        password = password.concat(randomPass);
    }
    return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
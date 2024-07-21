function addedToCart() {
    alert("Your item has been added to cart!");
}

let username1 = "melvernlim@gmail.com" // hard-coded email/username 1
let userpw1 = "abcde12345" // hard-coded password 1
let username2 = "john@hotmail.com" // hard-coded email/username 2
let userpw2 = "johnwashere" // hard-coded password 2

function checkLoginPw() {
    let loginuser = document.getElementById("email").value;
    let loginpw = document.getElementById("loginpw").value;
    if ((username1 == loginuser && userpw1 == loginpw) || (username2 == loginuser && userpw2 == loginpw)) {
        alert("Welcome! You have successfully logged in as " + document.getElementById("email").value + ".");
    }

    else {
        alert("Incorrect username or password!");
    }
}

function verifyRegisterPw() {
    let registeruser = document.getElementById("email").value;
    let pw1 = document.getElementById("password1").value;
    let pw2 = document.getElementById("password2").value;

    if (pw1 == pw2 && pw1.length >= 8 && registeruser.indexOf('@') > -1 && registeruser.indexOf(".com") > -1) {
        alert("You have successfully registered as " + document.getElementById("email").value + ".");
    }

    else if (registeruser.indexOf('@') == -1 || registeruser.indexOf(".com") == -1) {
        alert("Please enter a valid email address!");
    }

    else if (pw1 != pw2) {
        alert("Passwords do not match!");
    }

    else {
        alert("Passwords must be at least 8 characters long!")
    }
}

function checkResetPwEmail() {
    let email = document.getElementById("email").value;
    if (email.indexOf('@') > -1 && email.indexOf(".com") > -1) {
        alert("An email is sent to you to reset your password!");
    }

    else {
        alert("Please enter a valid email address!");
    }
}

function checkContactEmail() {
    let email = document.getElementById("email").value;
    if (email.indexOf('@') > -1  && email.indexOf(".com") > -1) {
        alert("The message is successfully sent!")
    }

    else {
        alert("Please enter a valid email address!");
    }
}

function checkAppointment() {
    let inputdate = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let currentdate = new Date();
    inputdate = new Date(inputdate);
    if (inputdate > currentdate && email.indexOf('@') > -1 && email.indexOf(".com") > -1) {
        alert("You have successfully requested for an appointment!");
    }

    else if (inputdate <= currentdate) {
        alert("Appointment date must be later than current date!");
    }

    else {
        alert("Please enter a valid email address!");
    }
}
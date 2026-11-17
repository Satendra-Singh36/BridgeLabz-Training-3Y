
// Creating Login Form dynamically
document.body.innerHTML = `
    <h2>Login Form</h2>

    <form id="loginForm">

        <label>Username:</label>
        <input type="text" id="username" placeholder="Enter Username">
        <span id="usernameError" style="color:red"></span>
        <br><br>

        <label>Password:</label>
        <input type="password" id="password" placeholder="Enter Password">
        <span id="passwordError" style="color:red"></span>
        <br><br>

        <button type="submit">Login</button>

        <h3 id="message"></h3>

    </form>
`;

// Selecting form
let form = document.getElementById("loginForm");

// Form Submit Event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Getting input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Regular Expressions
    let usernameRegex = /^.{5,}$/;

    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

    // Validation flags
    let usernameValid = true;
    let passwordValid = true;

    // Username Validation
    if (usernameRegex.test(username)) {

        document.getElementById("usernameError").innerText = "";

    } else {

        document.getElementById("usernameError").innerText =
            "Username must contain at least 5 characters";

        usernameValid = false;
    }

    // Password Validation
    if (passwordRegex.test(password)) {

        document.getElementById("passwordError").innerText = "";

    } else {

        document.getElementById("passwordError").innerText =
            "Password must contain 8 characters, uppercase, lowercase, number and special character";

        passwordValid = false;
    }

    // Checking all validations
    if (usernameValid && passwordValid) {

        document.getElementById("message").innerText =
            "Login Successful!";

        document.getElementById("message").style.color = "green";

        console.log("Login Successful!");

    } else {

        document.getElementById("message").innerText =
            "Invalid Username or Password!";

        document.getElementById("message").style.color = "red";

        console.log("Login Failed!");
    }

});


// Q2: Student Form Validator (Forms + RegExp)

// Creating form dynamically
document.body.innerHTML = `
    <h2>Student Registration Form</h2>

    <form id="studentForm">

        <label>Name:</label>
        <input type="text" id="name" placeholder="Enter Name">
        <span id="nameError"></span>
        <br><br>

        <label>Email:</label>
        <input type="text" id="email" placeholder="Enter Email">
        <span id="emailError"></span>
        <br><br>

        <label>Phone:</label>
        <input type="text" id="phone" placeholder="Enter Phone">
        <span id="phoneError"></span>
        <br><br>

        <label>Password:</label>
        <input type="password" id="password" placeholder="Enter Password">
        <span id="passwordError"></span>
        <br><br>

        <button type="submit">Register</button>

        <p id="message"></p>

    </form>
`;

// Selecting form
let form = document.getElementById("studentForm");

// Form submit event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Getting input values
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    // Regular Expressions
    let nameRegex = /^[A-Za-z]+$/;

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let phoneRegex = /^[0-9]{10}$/;

    let passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/;

    // Name Validation
    if (nameRegex.test(name.value.trim())) {
        name.style.border = "2px solid green";
        document.getElementById("nameError").innerText = "";
    } else {
        name.style.border = "2px solid red";
        document.getElementById("nameError").innerText = "Only alphabets allowed";
    }

    // Email Validation
    if (emailRegex.test(email.value.trim())) {
        email.style.border = "2px solid green";
        document.getElementById("emailError").innerText = "";
    } else {
        email.style.border = "2px solid red";
        document.getElementById("emailError").innerText = "Invalid Email";
    }

    // Phone Validation
    if (phoneRegex.test(phone.value.trim())) {
        phone.style.border = "2px solid green";
        document.getElementById("phoneError").innerText = "";
    } else {
        phone.style.border = "2px solid red";
        document.getElementById("phoneError").innerText = "Enter exactly 10 digits";
    }

    // Password Validation
    if (passwordRegex.test(password.value)) {
        password.style.border = "2px solid green";
        document.getElementById("passwordError").innerText = "";
    } else {
        password.style.border = "2px solid red";
        document.getElementById("passwordError").innerText =
            "Must contain uppercase, number and special character";
    }

    // Checking all fields
    if (
        nameRegex.test(name.value.trim()) &&
        emailRegex.test(email.value.trim()) &&
        phoneRegex.test(phone.value.trim()) &&
        passwordRegex.test(password.value)
    ) {
        document.getElementById("message").innerText =
            "Registration Successful!";
    } else {
        document.getElementById("message").innerText =
            "Please correct the errors!";
    }

});

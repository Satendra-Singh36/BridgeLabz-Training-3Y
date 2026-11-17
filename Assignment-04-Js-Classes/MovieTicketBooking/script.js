// Creating form dynamically
document.body.innerHTML = `
    <h2>Movie Ticket Booking</h2>

    <form id="bookingForm">

        <label>Name:</label>
        <input type="text" id="name" placeholder="Enter Name">
        <span id="nameError"></span>
        <br><br>

        <label>Email:</label>
        <input type="text" id="email" placeholder="Enter Email">
        <span id="emailError"></span>
        <br><br>

        <label>Seats:</label>
        <input type="number" id="seats" placeholder="Enter Seats">
        <span id="seatsError"></span>
        <br><br>

        <button type="submit">Book Ticket</button>

    </form>

    <div id="ticketDetails"></div>
`;

// Selecting form
let form = document.getElementById("bookingForm");

// Form submit event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Getting input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let seats = document.getElementById("seats").value;

    // Regular Expressions
    let nameRegex = /^[A-Za-z]+$/;

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validation flags
    let nameValid = true;
    let emailValid = true;
    let seatsValid = true;

    // Name Validation
    if (nameRegex.test(name)) {
        document.getElementById("nameError").innerText = "";
    } else {
        document.getElementById("nameError").innerText =
            "Name must contain only alphabets";
        nameValid = false;
    }

    // Email Validation
    if (emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "";
    } else {
        document.getElementById("emailError").innerText =
            "Enter a valid email";
        emailValid = false;
    }

    // Seats Validation
    if (seats !== "" && Number.isInteger(Number(seats)) &&
        Number(seats) >= 1 && Number(seats) <= 10) {

        document.getElementById("seatsError").innerText = "";

    } else {
        document.getElementById("seatsError").innerText =
            "Seats must be between 1 and 10";
        seatsValid = false;
    }

    // Checking all validations
    if (nameValid && emailValid && seatsValid) {

        // Creating booking object
        let booking = {
            name: name,
            email: email,
            seats: Number(seats)
        };

        // Displaying ticket details
        document.getElementById("ticketDetails").innerHTML = `
            <h3>Ticket Booking Successful!</h3>
            <p>Name: ${booking.name}</p>
            <p>Email: ${booking.email}</p>
            <p>Seats: ${booking.seats}</p>
        `;

        // Display booking object
        console.log("Booking Details:", booking);

    } else {

        document.getElementById("ticketDetails").innerHTML = "";
        console.log("Invalid Booking Details!");

    }

});

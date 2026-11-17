// Callback Function Example

// This function displays the ending message
function showEndMessage() {
    console.log("Welcome to the course!");
}

// This function accepts name and callback as arguments
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Calling the callback function
    callback();
}

// Calling greetUser() and passing showEndMessage as callback
greetUser("Satendra", showEndMessage);

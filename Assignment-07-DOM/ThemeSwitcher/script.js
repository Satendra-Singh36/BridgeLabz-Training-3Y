// Select HTML elements
const lightButton = document.getElementById("lightButton");
const darkButton = document.getElementById("darkButton");
const blueButton = document.getElementById("blueButton");

const currentTheme = document.getElementById("currentTheme");

// Function to change theme
function changeTheme(theme) {

    // Add theme class to body using setAttribute()
    document.body.setAttribute("class", theme + "-theme");

    // Save current theme in custom attribute
    document.body.setAttribute("data-theme", theme);

    // Display current theme
    currentTheme.textContent = "Current Theme: " + theme;
}


// Light Theme Button
lightButton.addEventListener("click", function() {

    changeTheme("light");

});


// Dark Theme Button
darkButton.addEventListener("click", function() {

    changeTheme("dark");

});


// Blue Theme Button
blueButton.addEventListener("click", function() {

    changeTheme("blue");

});


// Display initially selected theme
const savedTheme = document.body.getAttribute("data-theme");

currentTheme.textContent = "Current Theme: " + savedTheme;

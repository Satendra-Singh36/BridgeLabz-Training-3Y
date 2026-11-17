// Select HTML elements
const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");
const clearButton = document.getElementById("clearButton");


// Mouse Move Event
trackingBox.addEventListener("mousemove", function(event) {

    // Get mouse client coordinates
    const x = event.clientX;
    const y = event.clientY;

    // Display live coordinates
    coordinates.textContent =
        "Client X: " + x + " | Client Y: " + y;

});

// Double Click Event
trackingBox.addEventListener("dblclick", function(event) {

    // Get box position
    const boxPosition = trackingBox.getBoundingClientRect();

    // Calculate position inside the box
    const x = event.clientX - boxPosition.left;
    const y = event.clientY - boxPosition.top;

    // Create red dot
    const dot = document.createElement("div");

    dot.className = "dot";

    // Set dot position
    dot.style.left = x + "px";
    dot.style.top = y + "px";

    // Add dot inside tracking box
    trackingBox.appendChild(dot);

});

// Clear All Dots
clearButton.addEventListener("click", function() {
    // Select all red dots
    const dots = trackingBox.querySelectorAll(".dot");

    // Remove each dot
    dots.forEach(function(dot) {
        dot.remove();
    });

});

// Q4: Constructor Function and Prototype

// Constructor Function
function Car(brand, model) {

    // Initialize object properties
    this.brand = brand;
    this.model = model;
}

// Adding method to Car prototype
Car.prototype.getDetails = function () {

    console.log("Car Brand: " + this.brand);
    console.log("Car Model: " + this.model);
};

// Creating first car object
let car1 = new Car("Toyota", "Fortuner");

// Creating second car object
let car2 = new Car("Mahindra", "Thar");

// Function to display car details
function showCarDetails() {

    console.log("First Car Details:");
    car1.getDetails();

    console.log("Second Car Details:");
    car2.getDetails();

    // Checking method sharing
    console.log(
        "Both objects share same method:",
        car1.getDetails === car2.getDetails
    );
}

// User Class (Parent Class)
class User {

    constructor(name, rating) {

        this.name = name;
        this.rating = rating;

    }

}


// Driver Class (Child Class)
class Driver extends User {

    constructor(name, rating, vehicle, vehicleNumber) {

        super(name, rating);

        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;

    }

}


// Trip Class
class Trip {

    constructor(fromLocation, toLocation, distance) {

        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;

    }

    // Calculate Fare Method
    calculateFare() {

        // Validate Distance
        if (
            this.distance === undefined ||
            this.distance === null ||
            this.distance === "" ||
            typeof this.distance !== "number" ||
            !Number.isFinite(this.distance) ||
            this.distance < 0
        ) {

            throw new Error("Invalid distance! Please provide a valid positive distance.");

        }

        // Fare per Kilometer
        const farePerKm = 15;

        // Calculate Total Fare
        const totalFare = this.distance * farePerKm;

        return totalFare;

    }

}


// Create User Object
const user1 = new User("Rahul", 4.5);


// Create Driver Object
const driver1 = new Driver(
    "Aman",
    4.8,
    "Swift Dzire",
    "UP85 AB 1234"
);


// Create Valid Trip
const trip1 = new Trip("Mathura", "Agra", 60);


// Display Ride Details using try-catch
try {

    console.log("User Name:", user1.name);
    console.log("User Rating:", user1.rating);

    console.log("--------------------------");

    console.log("Driver Name:", driver1.name);
    console.log("Driver Rating:", driver1.rating);
    console.log("Vehicle:", driver1.vehicle);
    console.log("Vehicle Number:", driver1.vehicleNumber);

    console.log("--------------------------");

    console.log("From:", trip1.fromLocation);
    console.log("To:", trip1.toLocation);
    console.log("Distance:", trip1.distance, "KM");

    console.log("Total Fare: Rs.", trip1.calculateFare());

}
catch (error) {

    console.log("Trip Failed:", error.message);

}


console.log("--------------------------");


// Test Invalid Distance
const trip2 = new Trip("Mathura", "Delhi", -20);

try {

    console.log("Total Fare: Rs.", trip2.calculateFare());

}
catch (error) {

    console.log("Trip Failed:", error.message);

}


// Test Missing Distance
const trip3 = new Trip("Mathura", "Jaipur");

try {

    console.log("Total Fare: Rs.", trip3.calculateFare());

}
catch (error) {

    console.log("Trip Failed:", error.message);

}

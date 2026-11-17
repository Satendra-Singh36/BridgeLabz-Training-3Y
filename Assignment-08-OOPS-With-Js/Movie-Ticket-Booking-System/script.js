// Parent Class
class MovieTicket {

    constructor(movieName, seatNo, price) {

        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;

    }

}


// Add printTicket() method to MovieTicket prototype
MovieTicket.prototype.printTicket = function () {

    console.log("-------- MOVIE TICKET --------");

    console.log("Movie Name:", this.movieName);

    console.log("Seat Number:", this.seatNo);

    console.log("Ticket Price: Rs.", this.price);

};


// Child Class
class OnlineTicket extends MovieTicket {

    constructor(movieName, seatNo, price, convenienceFee) {

        // Call Parent Constructor
        super(movieName, seatNo, price);

        this.convenienceFee = convenienceFee;

    }

    // Calculate Total Amount
    getTotalAmount() {

        return this.price + this.convenienceFee;

    }

}


// Create OnlineTicket Objects
const ticket1 = new OnlineTicket(
    "Avengers",
    "A10",
    250,
    30
);

const ticket2 = new OnlineTicket(
    "Spider-Man",
    "B15",
    300,
    40
);


// Call Parent Prototype Method using Child Objects
console.log("TICKET 1");

ticket1.printTicket();

console.log("Convenience Fee: Rs.", ticket1.convenienceFee);

console.log("Total Amount: Rs.", ticket1.getTotalAmount());


console.log("\nTICKET 2");

ticket2.printTicket();

console.log("Convenience Fee: Rs.", ticket2.convenienceFee);

console.log("Total Amount: Rs.", ticket2.getTotalAmount());


// Demonstrate Prototype Chain
console.log("\n--- PROTOTYPE CHAIN ---");

console.log(
    "printTicket exists:",
    typeof ticket1.printTicket
);

console.log(
    "OnlineTicket inherits MovieTicket:",
    OnlineTicket.prototype instanceof MovieTicket
);

console.log(
    "Prototype of OnlineTicket:",
    Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype
);

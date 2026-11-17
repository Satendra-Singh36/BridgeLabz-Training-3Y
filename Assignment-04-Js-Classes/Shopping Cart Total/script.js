class Cart {
    constructor() {
        this.items = [];
    }

    // Add item to cart
    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    // Calculate total price
    getTotal() {
        let total = 0;

        this.items.forEach(item => {
            total += item.price * item.quantity;
        });

        return total;
    }

    // Apply coupon discount
    applyCoupon(coupon) {

        // Coupon format: SAVE20 or DISC10
        let regex = /^(SAVE|DISC)(\d{1,2})$/;

        if (regex.test(coupon)) {

            let discount = Number(coupon.match(regex)[2]);

            if (discount > 0 && discount <= 100) {
                let total = this.getTotal();

                let discountAmount = (total * discount) / 100;
                let finalTotal = total - discountAmount;

                console.log("Coupon Applied:", coupon);
                console.log("Discount:", discount + "%");
                console.log("Discount Amount: ₹" + discountAmount);
                console.log("Final Total: ₹" + finalTotal);
            } else {
                console.log("Invalid Discount Percentage!");
            }

        } else {
            console.log("Invalid Coupon Code!");
        }
    }

    // Display cart items
    displayCart() {
        console.log("Shopping Cart:");

        this.items.forEach(item => {
            console.log(
                item.name + " - ₹" + item.price +
                " x " + item.quantity
            );
        });

        console.log("Total Amount: ₹" + this.getTotal());
    }
}

// Create cart object
let cart = new Cart();

// Add items
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

// Display cart
cart.displayCart();

// Apply coupon
cart.applyCoupon("SAVE20");

// Menu Items with Prices
const menuItems = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 },
    { name: "Cold Drink", price: 50 }
];


// Calculate Bill Function
function calculateBill(orderItems) {

    // Get Price List using map()
    const priceList = orderItems.map(function(itemName) {

        // Find Item in Menu
        const menuItem = menuItems.find(function(item) {
            return item.name === itemName;
        });

        // Throw Error if Item is Invalid
        if (!menuItem) {
            throw new Error(itemName + " is not available in the menu!");
        }

        return menuItem.price;

    });


    // Calculate Total using reduce()
    const totalBill = priceList.reduce(function(total, price) {
        return total + price;
    }, 0);


    return totalBill;
}
// Test Case 1: Valid Order
try {

    const order1 = ["Pizza", "Burger", "Pasta"];

    const bill1 = calculateBill(order1);

    console.log("Order Items:", order1);
    console.log("Total Bill: Rs.", bill1);

}
catch (error) {

    console.log("Order Failed:", error.message);

}

console.log("----------------------------");


// Test Case 2: Invalid Order
try {

    const order2 = ["Pizza", "Burger", "Sushi"];

    const bill2 = calculateBill(order2);

    console.log("Order Items:", order2);
    console.log("Total Bill: Rs.", bill2);

}
catch (error) {

    console.log("Order Failed:", error.message);

}

// Product Constructor Function
function Product(name, price) {

    this.name = name;
    this.price = price;

}
// Prototype Method
Product.prototype.applyDiscount = function(percent) {

    // Calculate Discount Amount
    const discountAmount = (this.price * percent) / 100;

    // Calculate New Price
    const newPrice = this.price - discountAmount;

    return newPrice;

};


// Create 3 Product Objects
const product1 = new Product("Laptop", 50000);

const product2 = new Product("Mobile", 20000);

const product3 = new Product("Headphones", 5000);


// Apply Different Discounts
console.log("Product:", product1.name);
console.log("Original Price: Rs.", product1.price);
console.log("After 10% Discount: Rs.", product1.applyDiscount(10));

console.log("--------------------------");

console.log("Product:", product2.name);
console.log("Original Price: Rs.", product2.price);
console.log("After 15% Discount: Rs.", product2.applyDiscount(15));

console.log("--------------------------");

console.log("Product:", product3.name);
console.log("Original Price: Rs.", product3.price);
console.log("After 20% Discount: Rs.", product3.applyDiscount(20));

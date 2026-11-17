// Product Array
const products = [

    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },

    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 3 },

    { id: 3, name: "Headphones", category: "Electronics", price: 2000, stock: 15 },

    { id: 4, name: "T-Shirt", category: "Clothing", price: 800, stock: 4 },

    { id: 5, name: "Jeans", category: "Clothing", price: 1500, stock: 12 },

    { id: 6, name: "Shoes", category: "Footwear", price: 2500, stock: 2 },

    { id: 7, name: "Sandals", category: "Footwear", price: 1000, stock: 20 }

];


// 1. Get Low Stock Products using filter()
function getLowStockProducts() {

    return products.filter(function(product) {

        return product.stock < 5;

    });

}


// 2. Sort Products by Price using sort()
function sortProductsByPrice() {

    return [...products].sort(function(a, b) {

        return a.price - b.price;

    });

}


// 3. Calculate Total Inventory Value using reduce()
function calculateTotalInventoryValue() {

    return products.reduce(function(total, product) {

        return total + (product.price * product.stock);

    }, 0);

}


// 4. Group Products by Category using reduce()
function groupByCategory() {

    return products.reduce(function(groups, product) {

        const category = product.category;

        // Create category if it does not exist
        if (!groups[category]) {

            groups[category] = [];

        }

        // Add product to its category
        groups[category].push(product);

        return groups;

    }, {});

}


// Display All Products
console.log("ALL PRODUCTS:");

console.log(products);

console.log("--------------------------------");


// 1. Low Stock Products
console.log("LOW STOCK PRODUCTS:");

console.log(getLowStockProducts());

console.log("--------------------------------");


// 2. Products Sorted by Price
console.log("PRODUCTS SORTED BY PRICE:");

console.log(sortProductsByPrice());

console.log("--------------------------------");


// 3. Total Inventory Value
console.log("TOTAL INVENTORY VALUE:");

console.log("Rs.", calculateTotalInventoryValue());

console.log("--------------------------------");


// 4. Products Grouped by Category
console.log("PRODUCTS GROUPED BY CATEGORY:");

console.log(groupByCategory());

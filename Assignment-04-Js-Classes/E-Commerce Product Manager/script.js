class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount() {
        this.price -= this.price * 0.10;
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Mouse", 800, "Accessories"),
    new Product(4, "Keyboard", 2000, "Accessories")
];

products.forEach(product => product.applyDiscount());

products.filter(product => product.price > 1000)
    .forEach(product => console.log(product.displayDetails()));
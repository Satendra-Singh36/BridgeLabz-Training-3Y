// Fetch Products using Async/Await

async function getProducts() {

    try {

        // Fetch API Data
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        // Convert Response into JSON
        const products = await response.json();

        const container = document.getElementById("products");

        // Loop through all products
        products.forEach(product => {

            // Console Output
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);

            // Create Product Card
            const card = document.createElement("div");
            card.className = "card";

            // Create Image
            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;

            // Create Title
            const title = document.createElement("h4");
            title.textContent = product.title;

            // Create Price
            const price = document.createElement("p");
            price.textContent = "$" + product.price;

            // Append Elements
            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(price);

            container.appendChild(card);

        });

    }
    catch (error) {

        console.log(error);

        document.getElementById("error").textContent =
            "Failed to load products. Please try again.";

    }
}

// Function Call
getProducts();

// Submit Order Function
function submitOrder() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.5) {
                reject("Order Failed");
            } 
            else {
                resolve("Order Submitted Successfully");
            }

        }, 1000);

    });

}

// Process Order Function
async function processOrder() {

    // Try up to 3 times
    for (let i = 1; i <= 3; i++) {

        try {

            const result = await submitOrder();

            console.log(`Attempt ${i}: Success`);
            console.log(result);

            return;

        } 
        catch (error) {

            console.log(`Attempt ${i}: Failed`);

        }

    }

    // If all attempts fail
    throw new Error("Order could not be processed");

}

// Handle Final Error
async function main() {

    try {

        await processOrder();

    } 
    catch (error) {

        console.log(error.message);

    }

}

// Function Call
main();

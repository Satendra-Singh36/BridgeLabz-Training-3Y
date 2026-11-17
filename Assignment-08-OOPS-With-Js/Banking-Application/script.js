class BankAccount {

    // Private field
    #balance;

    // Constructor
    constructor(initialBalance) {

        this.#balance = initialBalance;

    }

    // Deposit Method
    deposit(amount) {

        if (amount <= 0) {

            throw new Error("Deposit amount must be greater than 0!");

        }

        this.#balance += amount;

        console.log(`Rs. ${amount} deposited successfully.`);

    }

    // Withdraw Method
    withdraw(amount) {

        if (amount <= 0) {

            throw new Error("Withdrawal amount must be greater than 0!");

        }

        if (amount > this.#balance) {

            throw new Error("Insufficient balance!");

        }

        this.#balance -= amount;

        console.log(`Rs. ${amount} withdrawn successfully.`);

    }

    // Get Balance Method
    getBalance() {

        return this.#balance;

    }

}


// Create Bank Account
const account = new BankAccount(5000);

console.log("Initial Balance: Rs.", account.getBalance());


// Valid Deposits
console.log("\n--- Deposit Operations ---");

account.deposit(2000);

account.deposit(1000);

console.log("Current Balance: Rs.", account.getBalance());


// Valid Withdrawal
console.log("\n--- Valid Withdrawal ---");

account.withdraw(3000);

console.log("Current Balance: Rs.", account.getBalance());


// Invalid Withdrawal using try-catch
console.log("\n--- Invalid Withdrawal ---");

try {

    account.withdraw(10000);

} catch (error) {

    console.log("Error:", error.message);

}


// Final Balance
console.log("\nFinal Balance: Rs.", account.getBalance());


// Direct access to private field (will cause an error)
// console.log(account.#balance);

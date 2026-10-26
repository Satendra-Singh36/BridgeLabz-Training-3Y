"use strict";
const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];
const valid = [];
const invalid = [];
for (const transaction of transactions) {
    try {
        if (transaction === null) throw new Error("NULL_ENTRY");
        if (transaction.id === undefined || transaction.amount === undefined) throw new Error("MISSING_PROPERTY");
        if (transaction.amount < 0) throw new Error("NEGATIVE_AMOUNT");
        valid.push(transaction);
    } catch (error) {
        invalid.push({ transaction, error: error.message });
    }
}
console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log(`Successful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);
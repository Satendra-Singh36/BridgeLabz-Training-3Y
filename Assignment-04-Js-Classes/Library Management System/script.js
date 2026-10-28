"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} issued successfully.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`${this.title} returned successfully.`);
        } else {
            console.log(`${this.title} is already available.`);
        }
    }
}

const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Guide", "David", "102"),
    new Book("Web Development", "Alex", "103", true)
];

console.log("Available Books:");
books.filter(book => !book.isIssued).forEach(book => {
    console.log(`${book.title} | ${book.author} | ISBN: ${book.ISBN}`);
});

const searchISBN = "102";
const selectedBook = books.find(book => book.ISBN === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}
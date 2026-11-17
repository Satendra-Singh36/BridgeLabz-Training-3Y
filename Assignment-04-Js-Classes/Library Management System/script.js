// Creating Book class
class Book {

    // Constructor
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Method to issue book
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(this.title + " Book Issued Successfully!");
        } else {
            console.log(this.title + " Book is already issued!");
        }
    }

    // Method to return book
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(this.title + " Book Returned Successfully!");
        } else {
            console.log(this.title + " Book is already available!");
        }
    }
}

// Creating book objects
let book1 = new Book("JavaScript", "John", "101");
let book2 = new Book("Python", "David", "102");
let book3 = new Book("Java", "James", "103");
let book4 = new Book("HTML", "Peter", "104");
let book5 = new Book("CSS", "Robert", "105");

// Storing books in an array
let books = [book1, book2, book3, book4, book5];

// Displaying available books
function displayAvailableBooks() {

    console.log("\nAvailable Books:");

    let availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {
        console.log(
            "Title: " + book.title +
            ", Author: " + book.author +
            ", ISBN: " + book.ISBN
        );
    });
}

// Issue book by searching ISBN
function searchAndIssueBook(isbn) {

    let book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book Not Found!");
    }
}

// Return book by searching ISBN
function searchAndReturnBook(isbn) {

    let book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.returnBook();
    } else {
        console.log("Book Not Found!");
    }
}

// Display available books
displayAvailableBooks();

// Issue book
searchAndIssueBook("102");

// Display available books again
displayAvailableBooks();

// Return book
searchAndReturnBook("102");

// Display available books again
displayAvailableBooks();

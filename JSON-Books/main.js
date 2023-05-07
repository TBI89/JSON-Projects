// Array of objects (books):

const books = [
    {
        serial: 5,
        bookName: "Harry Potter and the chamber of secrets",
        author: "J.K Rowling",
        price: 40
    },

    {
        serial: 37,
        bookName: "Lord of the rings- return of the king",
        author: "J.R.R Tolkien",
        price: 65
    },

    {
        serial: 42,
        bookName: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Noël Adams",
        price: 24
    }
];

// Display on the console:

console.log(books);

// Convert to JSON string: 

const jasonString = JSON.stringify(books);

// Display the string to the user:

alert(jasonString);

// Convert back to javaScript array:

const items =JSON.parse(jasonString);

// Display "items" on the console:

console.log(items);

// Print "items" on the page:

for(const item of items){
    document.write(`Book ID: ${item.serial}<br> Book name: ${item.bookName}<br> Book author: ${item.author}<br> Book price ${item.price}<hr>`);
}

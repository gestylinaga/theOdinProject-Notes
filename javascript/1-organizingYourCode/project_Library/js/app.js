// Library - Project by: gesty 🏄

let library = [];

// Book Object constructor
function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

// Example Book
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
library.push(theHobbit);
//console.log(theHobbit)


// Function to add books to library
function addBookToLibrary() {
}


// Function to display books
function displayBooks() {
}


/* TODO
  * store book objects in a simple array
  * add function to script (not constructor) that takes input to store a new book

  * function that loops through array to display each book - table or cards
  * add some sample books to visualize better

  * add a "new book" button w/ form allowing users to input book details
    * title
    * author
    * number of pages
    * read/not read
  * fix `submit` button issue w/ `event.preventDefault();`

  * add button on each book display to remove the book from library
    * data-attributes

  * add button on each book display to change read/not read status
  * function to toggle status on prototype
*/

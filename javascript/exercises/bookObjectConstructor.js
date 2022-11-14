// Exercise - Book Object Constructor
const Book = function(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read, // expects true/false

  // Info Function to display collected info cleanly
  this.info = function() {
    // `if` / `else` to allow bool in constructor
    if (this.read) {
      haveRead = "already read"
    } else {
      haveRead = "not read yet"
    }
    // Clean info display formatted string
    return `${title}, by ${author}, ${pages} pages, ${haveRead}`
  }
}

// Creating a new Book object - The Hobbit
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

// Logging info for The Hobbit
console.log(theHobbit.info()); // logs "The Hobbit, by J.R.R. Tolkien, 295 pages, not read yet"

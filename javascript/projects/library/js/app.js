// Library 
console.log('by: gesty 🏄');

/* TODO
  * add a "new book" button w/ form allowing users to input book details
    * fix `submit` button issue w/ `event.preventDefault();`
  * add button on each book display to remove the book from library
    * data-attributes
  * add button on each book display to change read/not read status
  * function to toggle status on prototype

  * grid display for books?
*/

let library = [];
const container = document.querySelector('.container');

// Book Object constructor
function Book(title, author, pages, read=false) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

// Example Books
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
library.push(theHobbit);
const fightClub = new Book('Fight Club', 'Chuck Palahniuk', 224, true);
library.push(fightClub);
const neuromancer = new Book('Neuromancer', 'William Gibson', 271, false);
library.push(neuromancer);

// Function to add books to library
function addBookToLibrary() {
}

// Function to display books
function displayBooks() {
  for (Book of library) {
    let bookDisplay = document.createElement('div');
    bookDisplay.classList.add('card');

    let header = document.createElement('h2');
    header.textContent = Book.title;
    bookDisplay.appendChild(header);

    let author = document.createElement('p');
    author.textContent = `by ${Book.author}`
    bookDisplay.appendChild(author);

    let pageNum = document.createElement('p');
    pageNum.textContent = `${Book.pages} pages`
    bookDisplay.appendChild(pageNum);

    let readStatus = document.createElement('h3');
    if (Book.read) {
      readStatus.setAttribute('style', 'color: green;')
      readStatus.textContent = 'Already Read';
    } else {
      readStatus.setAttribute('style', 'color: red;')
      readStatus.textContent = 'Not Read Yet';
    };
    bookDisplay.appendChild(readStatus);

    /*
    let readButton = document.createElement('button');
    readButton.textContent = 'Read?';
    bookDisplay.appendChild(readButton);
    */

    container.appendChild(bookDisplay);
  }
}
displayBooks();

// New Book Button
const newButton = document.querySelector('.new');
newButton.addEventListener('click', () => {
  addBookToLibrary();
})

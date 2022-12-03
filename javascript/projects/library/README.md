# Library
an extension of the 'Book' exercise from [Objects & Object Constructors](../../organizing-objects_and_object_constructors.md) - 
Project for 'Organizing your JavaScript Code' Section

## Prompt
- Book objects stored in an array, with a function to take user input to store 
new book objects:
```javascript
let myLibrary = [];

function Book() {
  // the constructor
}

function addBookToLibrary() {
  // do stuff here
}
```

- A function to loop through the array and **display** each book on the page. 
As a table or a "*card*".

- A "New Book" button to bring up a form. See [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) 
on `event.preventDefault();` to prevent `submit` from trying to send data to a 
server.

- A button on each book display to **remove** the book from the library. This 
means that the book objects need to be associated with actual DOM elements. An 
easy fix is to give them a data-attribute that corresponds to the index of the 
library array.

- A button on each book display to **change** its `read` status. This needs a 
function that toggles the `read` status on the `Book` object

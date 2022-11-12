# Organizing your JavaScript Code - JavaScript - The Odin Project

## Objects & Object Constructors
```javascript
// example 'Object Literal' syntax:
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property"; function() {
    // do stuff!!
  }
}
```

2 ways to get information out of an object:
```javascript
// dot notation:
myObject.property // 'Value!'

// bracket notation:
myObject["obnoxious property"] // [Function]
```
- **Dot Notation** is cleaner and usually preferred, 
but **Bracket Notation** is used when it is not possible, ie:
`myObject."obnoxious property"` -- because it's a string w/ a space
- **Bracket Notation** is also used when working with variables, which
doesn't work with **Dot Notation** ie: `myObject[variable]` instead of `myObject.variable`

## Objects as a Design Pattern
One of the simplest ways to organize code is to group things into objects.

Tic-Tac-Toe Example:
```javascript
// Example 1
const playerOneName = "Mookie"
const playerTwoName = "Petunia"
const playerOneMarker = "X"
const playerTwoMarker = "O"
```
vs
```javascript
// Example 2
const playerOne = {
  name: "Mookie",
  marker: "X"
}

const playerTwo = {
  name: "Petunia",
  marker: "O"
}
```
Even though it looks like more effort, and requires more lines of code, `Example 2` is 
the preferred way to do it. It cuts down on remembering variable names & in instances 
when you don't know the outcome yet, it allows code like this:
```javascript
function gameOver(winningPlayer) {
  console.log("Congratulations!")
  console.log(winningPlayer.name + " is the winner!")
}
```

## Object Constructors
Object constructors are used for duplicating a specific type of object
```javascript
function Player(name, marker) {
  this.name = name
  this.marker = marker
}
```
which you then call by using the keyword `new`:
```javascript
const player = new Player('gesty', 'X')
console.log(player.name) // 'gesty'
```
Just like using the **Object Literal** method, you can add functions to an object:
```javascript
function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('gesty', 'X')
const player2 = new Player('also gesty', 'O')
player1.sayName() // logs 'gesty'
player2.sayName() // logs 'also gesty'
```

## Exercise
Write a constructor for making "Book" objects.

"Books" should have:
- `title` of book
- `author` of book
- number of `pages`
- whether or not you have `read` the book

```javascript
// Example output
console.log(theHobbit.info());
```

### Solution
```javascript
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
```


## The ProtoType
All objects in JavaScript have a `prototype`, which is basically another object
that the original object *inherits* from. This means that the original object 
has access to all of its prototype's methods & properties.
```javascript
function Student(name, grade) {
  this.name = name
  this.grade = grade
}

// Another way to add functions to objects
Student.prototype.sayName = function() {
  console.log(this.name)
}
Student.prototype.isPassingClass = function() {
  console.log("Are they passing this class?")
}
```

Recommended Method for Prototypal Inheritance
```javascript
function Student() {

}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EigthGrader(name) {
  this.name = name
  this.grade = 8
}

EigthGrader.prototype = Object.create(Student.prototype)

const carl = new EigthGrader("Carl")
carl.sayName() // logs "Carl"
carl.grade // 8
```

Functions in Constructors vs ProtoTypes In Summary:
- if your methods don't use local variables, use the **prototype** approach
- if you're creating a lot of object instances, use the **prototype** approach,
that way, all new instances share the same function set, instead of a new 
function set for each new object
- if you're creating a small number of objects, & you're using local 
variables, you can initialize the method/function **in the constructor**

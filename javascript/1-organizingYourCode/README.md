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


## The ProtoType



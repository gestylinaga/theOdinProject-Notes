# JavaScript Basics
## Fundamentals 4

### Arrays 
An array is simply an ordered collection of items (strings, numbers, or other 
things).

[W3Schools tutorial](https://www.w3schools.com/js/js_arrays.asp) - on JavaScript
arrays

[W3Schools article](https://www.w3schools.com/js/js_array_methods.asp) - on 
JavaScript array methods

#### Creating an Array
Example array:
```javascript
const cars = ["Toyota", "Honda", "Nissan"];
```
which is easier / nicer than storing the cars in single variables like this:
```javascript
let car1 = "Toyota";
let car2 = "Honda";
let car3 = "Nissan";
```
**but**, this makes it difficult to loop through the cars to find a specific 
one. Additionally, this example only has 3 cars, but what if you needed 300? 
That's when arrays are useful.

Arrays can also span multiple lines, spaces and line breaks are not important:
```javascript
const cars = [
  "Toyota",
  "Honda",
  "Nissan"
];
```
Or you can create an array, and add the items later:
```javascript
const cars = [];
cars[0] = "Toyota";
cars[1] = "Honda";
cars[2] = "Nissan";
```
Or you can use the JavaScript `new` keyword to create an array:
```javascript
const cars = new Array("Toyota", "Honda", "Nissan");
```

#### Accessing Array Elements
You can access an array element by referring to the **index number**:
```javascript
const cars = ["Toyota", "Honda", "Nissan"];
let car = cars[0];

console.log(car); // Toyota
```
or you can access the full array, by referring to the array name:
```javascript
const cars = ["Toyota", "Honda", "Nissan"];
document.getElementById("demo").innerHTML = cars;
// this puts the full array into the 'demo' document element
```

#### Array Properties and Methods
The real strength of JavaScript arrays are the built-in array properties / 
methods:
```javascript
cars.length; // returns the number of elements
cars.sort(); // sorts the array alphabetically
```
which can be used in access specific array elements:
```javascript
const cars = ["Toyota", "Honda", "Nissan"];
let car = cars[cars.length - 1]; // Nissan aka the last array element
```

#### Looping Array Elements
One way to loop through an array, is using a `for` loop:
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
```
**or** by using the `Array.forEach()` function:
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(someFunction);
text += "</ul>";

function someFunction(value) {
  text += "<li>" + value + "</li>";
}
```

### Loops
Computers don't get tired, and they're really, *really* fast. For that reason, 
they are well suited to solving problems that involve doing calculations 
multiple times. In some cases, a computer can repeat a task thousands, or even 
millions of times. One way to make a computer do a repetitive task is using a 
**loop**.

[MDN Docs article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) - 
on 'looping code'

[JavaScript.info article](http://javascript.info/while-for) - on `while` & `for`
loops

#### Looping Through a Collection
The basic tool for looping through a collection is the `for ... of` loop:
```javascript
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```
In this example, `for (const cat of cats)` says:
1. Given the collection `cats`, get the first item in the collection
2. Assign it to the variable `cat` and then run the code between the `{}`
3. Get the next item, and repeat (2) until you reach the end of the collection

#### map() and filter()
JavaScript also has more specialized loops for collections.

You can use `map()` to do something to each item in a collection and create a 
new collection containing the changed items:
```javascript
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```
Here, we pass the function into `cats.map()`, and `map()` calls the function 
once for each item in the array, passing in the item. It then adds the return
value from each function call to a new array, and finally returns the new array.

You can use `filter()` to test each item in a collection, and create a new 
collection containing only items that match:
```javascript
function lCat(cat) {
  return cat.startsWith('L');
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```
This works a lot *like* `map()`, except the function we pass in returns a 
boolean: if it returns `true`, then the item is included in the new array. In 
this example, the function tests that the item starts with the letter `"L"`, so 
the result is an array containing only cats whose names start with `"L"`.

**Note**: that `map()` and `filter()` are both used often with *function 
expressions*, and the above example can be rewritten much more compact:
```javascript
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

#### The Standard for Loop
Standard `for` loop syntax:
```javascript
for (initializer; condition; final-expression) {
  // code to run
}
```
In this example:
- The keyword `for`, followed by some parantheses
- Inside the parantheses, 3 items, separated by semicolons:
  1. an **initializer** - a variable, usually set to a number, which is 
  incremented to count the number of times the loop has run. aka the **counter 
  variable**.
  2. a **condition** - this defines when the loop should stop looping. This is 
  generally an expression featuring a comparison operator, a test to see if the 
  exit condition has been met.
  3. a **final-expression** - this is always evaluated (or run) each time the 
  loop has gone through a full iteration. It usually serves to increment (or 
  decrement) the counter variable, to bring it closer to the point where the 
  condition is no longer `true`.
- Some curly braces `{}` that contain a block of code - this code will be run 
each time the loop iterates.

#### Looping Through Collections with a for Loop
You can use a `for` loop to iterate through a collection, instead of a 
`for ... of` loop.

Recall the example:
```javascript
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```
can be rewritten as:
```javascript
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```
This works just fine, and in earlier versions on JavaScript was the only way to 
loop through an array. However, it offers more chances to introduce bugs into 
your code, and it's usually best practice to use a `for ... of` loop instead.

#### Exiting Loops with break

#### Skipping Iterations with continue

### Test Driven Development
TDD, or **T**est **D**riven **D**evelopment, refers to the practice of writing 
automated tests that describe how your code should work, *before* you actually
write the code.

For example, if you want to write a function that adds a couple of numbers, you 
would first write a test that uses the function and supplies the expected 
output. The test will fail before you write the code, but you'll know that the 
code works correctly when the test passes.

In many ways, TDD is much more productive than writing code without tests. *If* 
you didn't have the test for the adding function above, you would have to run 
the code yourself, over and over again, plugging in different numbers, until 
you are sure it is working correctly. This isn't a big deal for a simple 
`add(2. 2)`, but it can get complicated quickly. 

For example, a function to check whether or not someone has won a game of 
tic-tac-toe: `gameWin(["O", null, "X", null, "X", null, "X", "O", "O"])`. *If* 
you didn't do TDD, you would have to play multiple games against yourself just 
to test if the function was working properly.


---
[top](#)

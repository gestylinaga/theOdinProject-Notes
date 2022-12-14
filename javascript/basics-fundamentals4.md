# JavaScript Basics
## Fundamentals 4

### Arrays 
An array is simply an ordered collection of items (strings, numbers, or other 
things).

[W3Schools tutorial](https://www.w3schools.com/js/js_arrays.asp) - on JavaScript
arrays

[W3Schools article](https://www.w3schools.com/js/js_array_methods.asp) - on 
JavaScript array methods

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

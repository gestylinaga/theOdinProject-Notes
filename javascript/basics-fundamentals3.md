# JavaScript Basics
## Fundamentals 3

### Functions
[MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) - 
article on 'Functions - reusable blocks of code'
- **Functions** - allow you to store a piece of code that does a single task 
inside a defined block, and then allow you to *call* that code whenever you need 
to reuse it.

- **Built-in browser functions** - examples:
  ```javascript
  // manipulating a text string
  const myText = 'I am a string';
  const newString = myText.replace('string', 'sausage');
  console.log(newString);
  /* 
    the replace() string function takes a source string,
    and a target string and replaces the source string,
    with the target string, and returns the newly formed string 
  */
  ```
  ```javascript
  // manipulating an array
  const myArray = ['I', 'love', 'scrambled', 'eggs'];
  const madeAString = myArray.join(' ');
  console.log(madeAString);
  /*
    the join() function takes an array, joins
    all the array items together in a single
    string, and returns the new string
  */
  ```
  ```javascript
  // generating a random number
  const myNumber = Math.random();
  /*
    the random() function generates a random number between 
    0 and up to, but not including 1, and returns that number
  */
  ```
[MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values) - 
article on 'Function return values'

---

Example of parameters and arguments being used in a function:
```javascript
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
};

console.log(favoriteAnimal('Goat'));
```
**parameters** - items listed between the parentheses in the function 
declaration, `animal` in the above example. You could easily replace `animal` 
with any other name (ie: `pet`, `x`, or `blah`), but giving the variable name 
context is important. 

By putting `animal` inside the parentheses of the `favoriteAnimal()` function, 
you are telling JavaScript that you plan on sending *some* value to it. This 
means that `animal` is a *placeholder* for a future value.

The last line, `favoriteAnimal('Goat')`, is where the function is being called,
and `'Goat'` is passed as an **argument**.

You are telling JavaScript to "Please send `'Goat'` to the `favoriteAnimal` 
function, and use `'Goat'` wherever the `animal` placeholder is."

Note the fact that `favoriteAnimal()` is being called inside of another 
function, `console.log()`, which logs the return value of `favoriteAnimal()` to 
the console. Calling `favoriteAnimal('Goat')` by itself would still return the 
correct string, but nothing would be logged to the console.

### Default Values
[javascript.info](https://javascript.info/function-basics) - article on 
'Function basics'

If a function is called, but an argument is *not* 
provided,then the corresponding value bcomes `undefined`.

Consider the example:
```javascript
function showMessage(from, text) {
  alert(from + ': ' + text);
};

showMessage('Ann', 'Hello!'); // Ann: Hello!
showMessage('Ann', "What's up?"); // Ann: What's up?
```
If you were to call the function `showMessage` with a single argument:
```javascript
showMessage("Ann"); // Ann: undefined
```
It would **not** result in an error, instead, since the value of `text` isn't 
passed, the value becomes `undefined`.

But, you can specify a so-called '*default*' (to use if omitted) value in the 
function declaration, using `=`:
```javascript
function showMessage(from, text = "no text given") {
  alert(from + ': ' + text);
};

showMessage("Anne"); // Ann: no text given
```
Now, if the `text` value is not passed, it will get that default value of 
`"no text given"`.

This default value is also called if the parameter exists, but strictly equals 
`undefined` like this:
```javascript
showMessage("Ann", undefined); // Ann: no text given
```

In these examples, the default value is a string, but it can be a more complex 
expression, which is only evaluated and assigned if the parameter is missing:
```javascript
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
```

> Old way to define default parameters in JavaScript:
> ```javascript
> function showMessage(from, text) {
>   if (text === undefined) {
>     text = 'no text given';
>   }
> } 
> ```
> or using the `||` operator:
> ```javascript
> function showMessage(from, text) {
>   // If the value of text is falsy, assign the default value
>   // this assumes that text == "" is the same as no text at all
>   text = text || 'no text given';
>   ...
> }
> ```

#### Alternative Default Parameters
Sometimes it makes sense to assign default values for parameters at a later 
stage after the function declaration.

You can check if the parameter is passed during the function execution, by
comparing it with `undefined`:
```javascript
function showMessage(text) {
  // ...
  if (text === undefined) {
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message
```
or you could use the `||` operator:
```javascript
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}
```
Moden JavaScript engines support the **nullish coalescing operator** `??`, which 
is better when most falsy values, such as `0`, should be considered "*normal*":
```javascript
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

#### Functions == Comments
Functions should be short and do exactly **one** thing. If that thing is big, it 
might be worth it to split the function into smaller functions. A separate 
function is not only easier to test / debug, its very existence is a great 
comment.

Consider these 2 examples
```javascript
// this example uses a label:
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // a prime
  }
}
```
```javascript
// this example uses an additional function, to test for primality:
function showPrimes(n) {
  
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue; // important line of code

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i > n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
```
The second example is easier to understand. Instead of a block of code, we see 
the name of the action, `isPrime`. This code is refered to as *self-desribing*.

### Arrow Functions
[javascript.info](https://javascript.info/function-expressions) - article on 
'Function expressions'

[javascript.info](https://javascript.info/arrow-functions-basics) - article on 
'Arrow functions, the basics'

Example arrow function:
```javascript
let func = (arg1, arg2, ..., argN) => expression;
```
which is the same as this, but shorter:
```javascript
let func = function(arg1, ar2, ..., argN) {
  return expression;
}
```
*if* you only have **one** argument, then the parentheses around parameters can 
be omitted, making it even shorter:
```javascript
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 };

alert( double(3) ); // 6
```
*if* there are no arguments, parentheses are empty, but the must be included:
```javascript
let sayHi = () => alert("Hello!");

sayHi();
```
Arrow functions can be used in the same way as Function Expressions. They are 
very convenient for simple one-line actions.

#### Multiline Arrow Functions
For multiline arrow functions, you must enclose them in curly braces `{}`. The 
main difference is that curly braces require an explicit `return` within them,
just like a regular function:
```javascript
let sum = (a, b) => { // curly braces opens a multiline function
  let result = a + b;
  return result; // explicit "return" to return value
};

alert( sum(1, 2) ); // 3
```

### Call Stacks and Return
[javascripttutorial.net](https://www.javascripttutorial.net/javascript-call-stack/) - 
article on 'JavaScript Call Stack'

A **call stack** is a way for the JavaScript engine to keep track of its place 
in code that calls multiple functions. It has the information on what function 
is currently being run, and what functions are invoked from that function.

The JavaScript engine uses the call stack to manage execution contexts:
- Global execution context
- function execution context

The call stack works based on the **LIFO** principle, 
**L**ast-**I**n-**F**irst-**O**ut.

Whenever a function is called, the JavaScript engine creates a global execution
context for the function, pushes it on top of the call stack, and starts to 
execute the function. 

If a function calls another function, the JavaScript engine creates a new 
function execution context for the function being called and pushes it on top of 
the call stack.

When the current function completes, the JavaScript engine pops it off the call 
stack and resumes execution where it left off. The script will stop when the 
call stack is empty.

#### Call Stack Example
Consider this example:
```javascript
function add(a, b) {
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

let x = average(10, 20);
```
When the JavaScript engine executes this script, it places the global execution
context (denoted as `main()` or `global()`) function on the call stack.

**Call Stack:**
```
main()
```
The global execution context enters the *creation* phase and moves to the 
*execution* phase.

The JavaScript engine executes the call to the `average(10, 20)` function and 
creates a function execution context for the `average()` function and pushes it 
on top of the call stack.

**Call Stack:**
```
average()
main()
```
The JavaScript engine starts executing the `average()` because the function is 
on **top** of the call stack.

The `average()` function calls the `add()` function. At this point, the engine 
creates another function execution context for the `add()` function and places 
it on top of the call stack.

**Call Stack:**
```
add()
average()
main()
```
The JavaScript engine executes the `add()` function, and pops it off the stack.

**Call Stack:**
```
average()
main()
```
Now, the `average()` function is on top, so the JavaScript engine executes it, 
and pops it off the stack

**Call Stack:**
```
main()
```

At this point, the call stack is empty, so the script stops executing


**Call Stack:**
```

```

#### Stack Overflow
The call stack has a fixed size, depending on the implementation of the host 
environment, either the web browser or Node.js.

If the number of execution contexts exceeds the size of the stack, a **stack 
overflow** error will occur.

For example, when you execute a recursive function that has no exit condition, 
the JavaScript engine will issue a stack overflow error:
```javascript
function fn() {
  fn();
}

fn(); // stack overflow
```

#### Asynchronous JavaScript
JavaScript is a **single-threaded** programming language. This means that the 
JavaScript engine has only **one** call stack. Therefore, it can only do one 
thing at a time.

When executing a script, the JavaScript engine executes code from top to bottom,
line by line. In other words, it is **synchronous**.

**Asynchronous** means that the JavaScript engine *can* execute other tasks 
while waiting for another task to be completed. For example, the engine can:
  - Request for data from a server
  - Display a spinner
  - When the data is available, display it on the webpage

This is done through the use of an **event loop**.

## Additional Resources
[StackOverflow question](https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var#:~:text=The%20main%20difference%20is%20scoping,(hence%20the%20block%20scope)) -
on the difference between `let` and `var`

[Akshay Saini YT](https://youtu.be/iLWTnMzWtj4) - video on 'How JavaScript Code
is Executed'

---
[top](#)

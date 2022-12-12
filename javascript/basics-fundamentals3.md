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

But, you can specify a so-called '*default*' (to use if ommited) value in the 
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


### Call Stacks and Return
[javascripttutorial.net](https://www.javascripttutorial.net/javascript-call-stack/) - 
article on 'JavaScript Call Stack'


## Additional Resources

---
[top](#)

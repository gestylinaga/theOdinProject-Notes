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

---

[javascript.info](https://javascript.info/function-basics) - article on 
'Function basics'

---

[javascript.info](https://javascript.info/function-expressions) - article on 
'Function expressions'

[javascript.info](https://javascript.info/arrow-functions-basics) - article on 
'Arrow functions, the basics'

---

[javascripttutorial.net](https://www.javascripttutorial.net/javascript-call-stack/) - 
article on 'JavaScript Call Stack'

## Additional Resources

---
[top](#)

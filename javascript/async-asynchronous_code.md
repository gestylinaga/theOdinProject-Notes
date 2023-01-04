# Asynchronous JavaScript and APIs
## Asynchronous Code
Since JavaScript is the language of the web, there are some functions that by 
necessity are going to take a decent amount of time to complete, like fetching 
data from a server to display on your site. Because of this, JavaScript includes
support for *asynchronous* functions, aka functions that can happen in the 
background while the rest of your code executes.

### Callbacks
In the past, the way this was mostly handled was with **callbacks**, and is 
still used in certain cirumstances.
> "A callback function is a function passed into another function as an 
argument, which is then invoked inside the outer function to complete some kind 
of routine or action. [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)"

In short, callbacks are simply functions that get passed into other functions:
```javascript
myDiv = addEventListener('click', function() {
  // do something...
})
```
In this example, the function `addEventListener()` takes a callback (the "*do 
something*" function) and then calls it when `myDiv` gets clicked.

These types of callbacks are used very frequently in JavaScript code. Although 
they are useful in situations like above, things can quickly get out of hand, 
especially when you need to chain several callbacks together (also known as 
[Callback Hell](http://callbackhell.com/)).

See this article on [Callbacks](https://github.com/maxogden/art-of-node#callbacks) 
from 'The Art of Node' on GitHub for more info.

Or watch this [YT video](https://youtu.be/QRq2zMHlBz4) on 'Callback Functions'.

### Promises
**Promises** are another way to handle asynchronous code in JavaScript, and 
something you'll see often when using other libraries or frameworks.

Essentially, a promise is an object that *might* produce a value at some point 
in the future.

In this example, `getData()` is a function that fetches some data from a server
and returns an object that you can use in your code:
```javascript
const getData = function() {
  // go fetch data from some API...
  // clean it up, and return is an an object:
  return data
}
```
The problem with this example is that it takes time to fetch the data, but 
unless you tell your code that, it assumes that everything in the function 
happens instantly. So if you try to do:
```javascript
const myData = getData()
const pieceOfData = myData['whatever']
```
You will run into trouble because when you try to extract `pieceOfData` out of 
the returned data, the function `getData()` will most likely still be fetching,
so `myData` will not be the expected data, and will be `undefined` instead.

To solve this problem, you must tell your code to wait until the data is done 
fetching to continue. **Promises** solve this issue:
```javascript
const myData = getData() // if this is refactored to return a Promise...
myData.then(function(data) { // .then() tells it to wait until the Promise is resolved
  const pieceOfData = data['whatever'] // and THEN run the function inside
})
```

## Additional Resources
- [Article from David Walsh](https://davidwalsh.name/promises) on "Promises"
- [YT video from "Fun Fun function"](https://youtu.be/2d7s3spWAzo) on "Promises"
- [YT video from "JSConf"](https://youtu.be/8aGhZQkoFbQ) on "The Event Loop"
- "You Don't Know JS" on GitHub
  - [Chapter 2: Callbacks](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md)
  - [Chapter 3: Promises](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md)
- [Article from SitePoint](https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/)
on "Callback Functions in JavaScript"
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 
on Promises

---
[top](#)

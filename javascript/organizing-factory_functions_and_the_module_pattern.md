# Organizing your JavaScript Code
## Factory Functions and the Module Pattern

### What's wrong with Constructors?
One of the biggest issues with constructors is that while they *look* like 
regular functions, they **do not** behave like regular functions. If you try to 
use a constructor function without the `new` keyword, your program won't work 
as intended, but won't throw an error.

Just note that constructors are not bad, they're just not the only way to do 
things. Depends on use case.

### Factory Functions Introduction
The **factory function** pattern is similar to constructors, but instead of 
using `new` to create an object, you simply set up and return the new object 
when you call the function:
```javascript
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello');
  return {name, age, sayHello};
};

const jermaine = personFactory('jermaine', 32);

console.log(jermaine.name); // 'jermaine'

jermaine.sayHello(); // calls the function -> logs 'hello'
```
For reference, here is the same thing created with a constructor:
```javascript
const Person = function(name, age) {
  this.sayHello = () => console.log('hello');
  this.name = name;
  this.age = age;
};

const jermaine = new Person('jermaine', 32);
```

#### Object Shorthand
A new shorthand was added to JavaScript in 2015 for creating objects, so instead 
of writing this:
```javascript
// Old Way
return {name: name, age: age, sayHello: sayHello};

// New Way
return {name, age, sayHello};
```
Using that concept, you can do something like this, in reverse:
```javascript
const name = 'Brett';
const color = 'red';
const number = 31;
const food = 'fries';

// logging all of these variables might be confusing if done like this:
console.log(name, color, number, food); // Brett red 31 fries

// You can turn them into an object with brackets, making the output easier 
// to read:
console.log({name, color, number, food});
  // { name: 'Brett', color: 'red', number: 31, food: 'fries' }
```

### Scope and Closure
To understand the concept of **closure**, recall the concept of **scope** in 
JavaScript:
```javascript
let a = 17;

const func = x => {
  let a = x;
}

func(99);
console.log(a); // 17, because of scope
```

[LearnCode.academy YT](https://www.youtube.com/watch?v=SBwoFkRjZvE) - video on 
scope

### Private Variables and Functions

### Back to Factory Functions 

### The Module Pattern

## Additional Resources

---
[top](#)

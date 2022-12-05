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
Consider this example of scope in JavaScript:
```javascript
const FactoryFunction = string => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction('taco');

printString(); // ERROR
capitalizeString(); // ERROR
taco.capitalizeString(); // ERROR
taco.printString(); // this prints "----TACO----"
```
Because of scope, calling `printString()` and `capitalizeString()` outside of 
the `FactoryFunction` results in an error. However calling `printString()` 
**will** work because it is being returned in the function.

The concept of closure is the idea that functions retain their scope even if 
they are passed and called outside of that scope. In the example above, 
`printString()` has access to everything inside of `FactoryFunction()`, even if 
it gets called outside of that function.

Another example:
```javascript
const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();

counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3
```
In this example:
- `counterCreator` initializes a local variable `count`, and returns a function
- we use that function by assigning it a variable name `counter`
- every time we run the function, it logs `count` to the console, and 
increments it
- keep in mind, `counter()` is calling the return value of `counterCreator`

This means that, the function `counter` is a closure, it has access to the 
variable `count` and can both print and increment it, but there is no other way 
for the program to access that variable.

In the context of factory functions, closures allow you to create **private** 
variables & functions. Private functions are functions that are used in the 
workings of objects, but are not intended to be used elsewhere in the program.

To put it another way, even though an object might only do 1 or 2 things, you 
are free to split the functions up as mush as you want (cleaner, easier to read) 
and only export the functions that the rest of the program needs.

Using that terminology with the `printString` example from earlier, 
`capitalizeString` is a **private** function, and `printString` is **public**.

The concept of private functions if heavily encouraged. Consider them best 
practice.

### Back to Factory Functions 
Recall that factories are simply plain old JavaScript functions that return 
objects for you to use.

An example game using objects to describe players and functions for things they 
can do:
```javascript
const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {
    // uh oh
  };
  const damage = x => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      cosnole.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return {attack, damage, getLevel, getName};
};

const spam = Player('spam', 10);
const eggs = Player('eggs', 5);
spam.attack(eggs);
```
Using the example above, if you tried to call something like `spam.die()` or 
`eggs.health -= 1000`, you would get and error. This is because those functions 
are **not** exposed *publicly*. In this case, the `health` value is a 
**private** function inside the object, and would require you to export a 
function to manipulate it.

#### Inheritance with Factories
Just like with constructors, factories can also deal with the concepts of 
prototypes and inheritance to give objects access to other objects:
```javascript
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return {sayName};
}

const Nerd = (name) => {
  // simply create a person and pull out the sayName function
  // with destructuring assignment syntax
  const {sayName} = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return {sayName, doSomethingNerdy};
}

const brendanFraiser = Nerd('Brendan Fraiser');

brendanFraiser.sayName(); // my name is Brendan Fraiser
brendanFraiser.doSomethingNerdy(); // nerd stuff
```
This pattern allows you to pick and choose which functions you want to include 
in your new object. *If* you want to lump together all of another object's 
values into a new object, you can use `Object.assign` :
[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
here.
```javascript
const Nerd = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return Object.assign({}, prototype, {doSomethingNerdy});
}
```

### The Module Pattern
> **Note**: ES6 introduced a new JavaScript feature called 'modules' that let 
> you import / export code between JavaScript files. This is **not** what this 
> section is about.

modules are very similar to factory functions, but they are created differently:
```javascript
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476
```
The concepts are exactly the same as factory functions. However, instead of 
creating a factory that you can reuse to create multiple objects, the module 
pattern wraps the factory in an **IIFE** (Immediately Invoked Function 
Expression).

See [LearnCode.academy YT](https://www.youtube.com/playlist?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f) 
video on Modular JS

In the above example, the function inside the IIFE is a simple factory function 
object assigned to the variable `calculator` (We don't need multiple 
calculators, 1 is enough). Just like in the facory examples, you can have as 
many number of private functions / variables as you want, while only exposing 
the functions you need in the program.

A useful side-effect of encapsulating code into objects is **namespacing**. 
Namespacing is a technique that is used to avoid naming collisions in programs.
This allows you to use the name `add` for example, for multiple functions, each 
encapsulated inside objects with no issues: `calculator.add()`, 
`displayController.add()`, `operateStack.add()`.

## Additional Resources
[Patterns.com Article](https://www.patterns.dev/posts/classic-design-patterns/) 
on 'Learning JavaScript Design Patterns'

---
[top](#)

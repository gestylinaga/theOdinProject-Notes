# JavaScript Basics
## Fundamentals 5

### Objects
[JavaScript.info](https://javascript.info/object) - article on 'Objects'

[MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) - 
on 'JavaScript Object Basics'

**Objects** are a *very* important part of the JavaScript language, and while 
for the most part you can accomplish simple and even intermediate tasks without 
using them, any *real* project will use objects.

```javascript
// Creating empty objects:
let user = new Object(); // 'Object Constructor' syntax
let user = {};           // 'Object Literal' syntax
```

#### Literals and Properties
You can immediately put properties into `{...}` as 'key:value' pairs. This is 
referred to as an **object literal**, because you're literally writing out the 
object's contents:
```javascript
let user = {       // an object
  name: 'Trogdor', // by key 'name' store value 'Trogdor'
  age: 3000        // by key 'age' store value 3000
};
```
A property has a key (aka a '*name*' or '*identifier*') before the color `:` and 
a value to the right of it. In the example above, the `user` object has 2 
properties:
1. 1st property has the **name** `'name'` and the **value** `'Trogdor'`
2. 2nd property has the **name** `'age'` and the **value** `3000`

#### Dot Notation
One way to access an object's properties is using **dot notation**. The object 
name acts as the **namespace**, and must be entered first to access anything 
inside the object. Next is a dot `.`, then the item you want to access:
```javascript
user.name; // 'Trogdor'
user.age;  // 3000
```
An object property can itself be an object ie:
```javascript
const person = {
  name: {
    first: 'Sol',
    last: 'Badguy',
  },
  'current age': 500,
};
```
To access these items, you just need to chain the extra steps onto the end with
another dot `.` :
```javascript
person.name.first; // 'Sol'
person.name.last;  // 'Badguy'
```

#### Bracket Notation
Bracket notation provides an alternative way to access object properties, like 
when properties are multiple words:
```javascript
person['current age'];   // 500
person['name']['first']; // 'Sol'
```
Although dot notation is basically the same as bracket notation, dot notation is 
generally preferred because it is more succinct and easier to read. Bracket 
notation should only be used when required ie:
- when a property name has more than 1 word - `'current age'`
- when an object property name is held in a variable

#### Setting Object Members
In the previous examples, dot / bracket notation has been used to **get** 
object members, but you can do the same to **set** members too:
```javascript
person.age = 45;
person['name']['last'] = 'Newname';
```
Setting members doesn't just update existing values, you can also create 
completely new members / methods:
```javascript
person['super'] = 'Tyrant Rage';
person.greet = function() {
  console.log('Hello, world!');
};
```

#### The 'in' Operator
The `in` operator is used to access object properties:
```javascript
// 'in' syntax:
"key" in object
```
for example:
```javascript
let user = { name: 'Elliot', age: 30 };

alert( "age" in user );  // true, user.age exists
alert( "blah" in user ); // false, user.blah doesn't exist
```

#### The 'for...in' Loop
When used in a `for` loop, the `in` operator can iterate over all keys in an 
object:
```javascript
for (key in object) {
  // executes the body for each key among object properties
}
```
for example:
```javascript
let user = {
  name: 'Elliot',
  age: 30,
  isAdmin = true
};

for (let key in user) {
  // keys
  alert(key); // name, age, isAdmin
  // values for keys
  alert(user[key]); // Elliot, 30, true
}
```

#### Object Order
Objects are ordered in a *special* fashion, integers properties are sorted, but 
others are sorted by their creation order:
```javascript
// Phone Codes
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ...
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
};

```
in this example, the phone codes are assorted in ascending order, because they 
are integers.

On the other hand, if the keys are **non-integers**, they appear in the order 
they were created in the code:
```javascript
let user = {
  name: 'Morty',
  surname: 'Smith'
};
user.age = 13; // adding an object property

for (let prop in user) {
  alert(prop); // name, surname, age
}
```
A workaround to fixing integer order, is to add a `'+'` sign before each phone 
code:
```javascript
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ...
  "+1": "USA"
};

for (let code in codes) {
  // notice the '+' in the call parameter
  alert(+code); // 49, 41, 44, 1
};
```

#### What is 'this'?
Example:
```javascript
const person = {
  name: ['Elliot', 'Smith'],
  age: 32,

  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  };
};
```
The `this` keyword refers to the current object that the code is being written 
inside. So in the above example, `this` is equivalent to `person`. So why not 
write `person` instead?

If you are only creating a single object literal, it's no big deal to user the 
object's name. But if you create more than one, `this` lets you use the same 
method definition for every object you create:
```javascript
const person1 = {
  name: 'Rick',
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: 'Morty',
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
```
In the above example:
- `person1.introduceSelf()` outputs `"Hi! I'm Rick."`
- `person2.introduceSelf()` outputs `"Hi! I'm Morty."`

The 2 objects output different values, even though the method's code is exactly 
the same. This isn't *that* helpful when writing out object literals, but is 
essential when using constructors.

#### Object Constructors
Example (as a function):
```javascript
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
```
This function creates and returns a new object each time you call it, and will 
have 2 properties / members:
1. a property `name`
2. a method `introduceSelf()`

With that function, you can create as many objects as you like, by reusing the 
definition:
```javascript
const fry = createPerson('Fry');
fry.name; // 'Fry'
fry.introduceSelf(); // "Hi! I'm Fry."

const bender = createPerson('Bender');
bender.name; // 'Bender'
bender.introduceSelf(); // "Hi! I'm Bender."
```
Creating objects this way is *fine*, but a little long-winded. A better way is 
to use a **constructor** with the `new` keyword. Using a constructor will:
1. create a new object
2. bind `this` to the new object, allowing you to use `this` in the code
3. run the code in the constructor
4. return a new object

Constructors, by convention, start with a capital letter and are named for the 
type of obect they create:
```javascript
function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}.`);
  };
};
```
To call `Person()` as a constructor, use the `new` keyword:
```javascript
const fry = new Person('Fry');
fry.name; // 'Fry'
fry.introduceSelf(); // "Hi! I'm Fry."

const bender = new Person('Bender');
bender.name; // 'Bender'
bender.introduceSelf(); // "Hi! I'm Bender."
```

### Intermediate / Advanced Array Magic
Besides being a quick and handy way to store data, **arrays** also have a set of 
functions for manipulating that data in very powerful ways.

[Wes Bos YT 1](https://youtu.be/HB1ZC7czKRs) - video on 'JavaScript Array Cardio 
Practice'

[Wes Bos YT 2](https://youtu.be/QNmRfyNg1lw) - part 2 video on 'Array Cardio'

## Additional Resources
[W3Schools](https://www.w3schools.com/js/js_function_parameters.asp) - article 
on 'JavaScript Function Parameters'

---
[top](#)

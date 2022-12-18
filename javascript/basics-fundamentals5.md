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

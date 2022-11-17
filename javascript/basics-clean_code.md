# JavaScript Basics
## Clean Code

### Writing Clean Code
Consider these 2 examples:
```javascript
// ugly & hard to read
const x =
function(x) {
let w = 0;z.forEach(
function(q){
    w += q;
});return w;
};

z([2, 2, 2]);
```
```javascript
// clean & easy to read
const sumArray = function(array) {
  let sum = 0;
  array.forEach(function(number) {
    sum += number;
  });
  return sum;
};

sumArray([2, 2, 2]);
```
Both of these examples do the **exact** same thing, in the **exact** same way, 
and both are perfectly valid code, but obviously the second one is much easier 
to follow.

Although many things are up to opinion in JavaScript, it is important to be 
**consistent**.

### Rules of Thumb
1. **Indentation** - It doesn't *really* matter how many spaces you use, as 
long as you stay consistent throughout the project with your choice. 2 space 
indentation is pretty common.
2. **Semicolons** - *Mostly* optional, because the JS compiler will automatically
insert them if omitted. Still good to know when to add them to avoid bugs.
3. **Line Length** - 80 character lines, is a commonly suggested line length. 
It makes code easier to read if it's broken up. Try to break lines immediately
*after* an operator or comma:
```javascript
/* 3 ways to format continuation lines:
  * indent line by one level
  * vertically align line with first variable
  * any other way, no rules, but be consistent
*/

// One possible format
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  soManyLines +
  oneMoreReallyLongThing;

// Another possible format:
let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
                                  soManyLines + oneMoreReallyLongThing;
```
4. **Naming Things** - Names for functions & variables shoule be descriptive. 
*Always* use camelCase. To keep consistency, variables should begin with a noun,
or an adjective, and functions with a verb. Single characters as variables in 
the context of a loop, or a callback function are ok, but should be avoided 
otherwise.
```javascript
// Good
const numberOfThings = 10;
const myName = "Trogdor";
const selected = true;

// Bad (start with a verb, could be confused with functions)
const getCount = 10;
const isSelected = true;

// Good
function getCount() {
  return numberOfThings;
}

// Bad (it's a noun)
function myName() {
  return "Trogdor";
}
```

## Additional Resources
- [Article from onextrapixel](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/) - 
10 principles for keeping your code clean
- [Article 1 from CodingHorror](https://blog.codinghorror.com/coding-without-comments/) - 
on Coding Without Comments
- [Article 2 from CodingHorror](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/) -
on Comments
- [Style Guide on GitHub](https://github.com/airbnb/javascript) - 
AirBnB JavaScript Style Guide

---
[top](#)

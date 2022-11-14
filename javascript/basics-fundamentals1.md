# JavaScript Basics
## Fundamentals 1

### Variables
- `let` - mutables, relatively new
- `const` - immutuables, relatively new
- `var` - old way, behaves like `let`

### Numbers 
[W3Schools Lesson](https://www.w3schools.com/js/js_arithmetic.asp) followed by 
[this one](https://www.w3schools.com/js/js_numbers.asp) for introductions to numbers in 
JavaScript

[MDN Article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math) on
the same info with a slightly different view

JavaScript only has 1 type of number, with or without decimals:
```javascript
let x = 3.14; // a number with decimals
let y = 3;    // a number without decimals
```

Scientific notations also work:
```javascript
let x=123e5;  // 12300000
let y=123e-5; // 0.00123
```

#### JavaScript Numbers are Always 64-bit Floating Point
Unlike many other programming languages, JavaScript does not define different types of 
number (integers, short, long, floating-point, etc). They are always stored as double 
precision floating-point numbers, following the international **IEEE 754 Standard**

Info from W3Schools:
| Value (Fraction/Mantissa) | Exponent | Sign |
| - | - | - |
| 52 bits (0-51) | 11 bits (52-62) | 1 bit (63) |

#### Integer Precision
Integers are accurate up to **15** digits:
```javascript
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
```

#### Floating Precision 
Not 100% accurate, but can be solved by multiplying / dividing:
```javascript
let x = 0.2 + 0.1;                  // inaccurate
let y = (0.2 * 10 + 0.1 * 10) / 10; // more accurate
```

### Adding Numbers and Strings
**WARNING!!** The `+` operator is used for both **addition** and **concatenation**, which 
results in *weird* behavior:
```javascript
// Two numbers, results in a number:
console.log(10 + 20); // 30

// Two strings, results in a string:
console.log("10" + "20"); // "1020"

// Number and a string, results in a string:
console.log(10 + "20"); // "1020"

// String and a number, results in a string:
console.log("10" + 20); // "1020"
```

```javascript
// Common Mistake is to expext this to be 30:
let x = 10;
let y = 20;
let z = "The result is: " + x + y; // "The result is: 1020"

// Can be fixed with parentheses:
let z = "The result is: " + (x + y); // "The result is: 30"
```

### Numeric Strings
JavaScript strings can have numeric content, and will *try* to convert them to numbers in 
all numeric operations:
```javascript
let x = 100;   // this is a number
let y = "100"; // this is a string
let z = "10";  // this is a string

// Number and a string:
console.log(x + y); // "100100"

// Two strings, but treated as numbers:
console.log(z / y); // 10
console.log(z * y); // 1000
console.log(z - y); // -90

// But this will not work, because '+' is a concatenator:
console.log(z + y); // "10100"
```

### NaN - Not a Number
`NaN` is a reserved word in JavaScript, meaning that a number is not a legal number:
```javascript
let x = 100 / "Apple"; // NaN
```

### Infinity
`Infinity` or `-Infinity`, is the value JavaScript returns if you calculate a number 
outside the largest number
```javascript
// while loop that executes until infinity:
let someNumber = 2;
while (someNumber != Infinity) {
  someNumber = someNumber * someNumber;
}

// Division by zero:
let x = 2 / 0; // Infinity
let y = -2 / 0; // -Infinity

// Type 
typeof Infinity; // number
```

### Additional Resources
[var vs let](https://javascript.info/var) - article on javascript.info

---
[top](#)

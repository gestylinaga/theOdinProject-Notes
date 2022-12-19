# Testing Practice
Practicing unit testing using [Jest](https://jestjs.io/)

## Prompt
1. a `capitalize` function that takes a string and returns it with the first 
character capitalized.
2. a `reverseString` function that takes a string and returns it reversed.
3. a `calculator` object that contains functions for the basic operations: 
`add`, `subtract`, `divide`, and `multiply`. Each of these functions should take
two numbers and return the correct calculation.
4. a `caesarCipher` function that takes a string and returns it with each 
character "shifted". See [this website](http://practicalcryptography.com/ciphers/caesar-cipher/)
for more info in how Caesar ciphers work.
  - don't forget to test wrapping from `z` to `a`
  - don't forget to test keeping the same case
  - don't forget to test punctuation
  - for this one, you may want to split the final function into a few smaller 
  functions. One concept of testing is that you don't need to explicitly test 
  *every* function you write...just the public ones. So in this case, you only 
  need to test the final `caesarCipher` function. If it works, then you know the
  smaller helper functions also work
5. an `analyzeArray` function that takes an array of numbers and returns an 
object with the following properties: `average`, `min`, `max`, and `length`:
```javascript
// Example output:
const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};
```

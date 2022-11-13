# Intermediate CSS Concepts
## CSS Functions

### Functions & How they are used in CSS
Just like other programming languages, functions are reusable pieces of 
code which perform specific tasks. They are passed 'arguments' between 
parentheses, just like other languages.

Common Examples:
```css
/* Basic CSS Functions */
color: rbg(0, 42, 255);
background: linear-gradient(90deg, blue, red);
```
- `rbg()` is the function, and `0`, `42`, & `255` are the arguments
- `linear-gradient()` is the function, and `90deg`, `blue`, `red` are the arguments

**Unlike** other languages, CSS does **NOT** allow you to create your own 
functions. Instead the language comes bundled with a list of premade functions 
to solve *most* styling problems

These are a few...

### calc()
Most powerful use cases include:
- mixing units
- ability to nest `calc( calc() - calc() )`

```css
/* Example CSS 'calc()' function */
:root {
  --header: 3rem;
  --footer: 40px;
  --main: calc(100vh - calc(var(--header) + var(--footer)));
}
```
`calc()` is handling the math, even though we are mixing `vh`, `rem`, and `px`

it is basically saying: `main = 100vh - (header + footer)`

**Note**: the above is just an example of how `calc()` works, but using it for 
layouts is **not** best practice

### min()
`min()` can be used in creating *responsive* websites

```css
/* Example 'min()' function */
#iconHolder {
  width: min(150px, 100%);
  height: min(150px, 100%);
  box-sizing: border-box;
  border: 6px solid blue;
}
```
in this `min()` function, if there **are** `150px` available, it will take up 
**all** `150px`.

If there **aren't** `150px` available, the image will **switch** to `100%` of the 
parent's height / width.

`min()` behaves as a boundary for the *maximum* allowed value

you can also do basic math inside `min()` ie: `width: min(80ch, 100vw - 2rem);`

### max()
`max()` works the same way as `min()`, only in reverse. It will select the 
**largest** possible value from the parentheses. Think of it as ensuring a 
*minimum* allowed value.

```css
/* Example 'max()' function */
width: max(100px, 4em, 50%);
```
in this `max()` function, as long as `4em` **or** `50%` result in lengths
longer than `100px`, the function will select the bigger one of them.

Think of `100px` in the example as a guard value, `width` won't ever be set 
to less than `100px`.

The `max()` function is most useful when the viewing window is either 
exceptionally small, or the user increases the content size by zooming in with 
the browser.

### clamp()
`clamp()` is another function for making elements *fluid* and *responsive*. It 
takes 3 values:
```css
/* Example 'clamp()' function */
h1 {
  font-size: clamp(320px, 80vw, 60rem);
}
```
- `320px` - the smallest value
- `80vw` - the **ideal** value
- `60rem` - the largest value

## Additional Resources
[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions) - 
Complete list of CSS functions

[Article from Web.dev](https://web.dev/min-max-clamp/) - 
a more in-depth look at `min`, `max`,  and `clamp` with animated examples

[Article from ModernCSS.dev](https://moderncss.dev/practical-uses-of-css-math-functions-calc-clamp-min-max/) - 
contains some specific use cases for all 4 functions

---
[top](#)

# Grid
## Introduction to Grid

### A Look Back at Flex
[The Odin Project - Flexbox Lesson](https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox)

Example flex container of items:
```html
<!-- HTML -->
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```

As a horizontal row:
```css
/* CSS */
.flex-container {
  display: flex;
}

.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  flex: 1;
}
```

Or as a vertical column:
```css
.flex-container {
  display: flex;
  flex-direction: column;
}

.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 80px;
  flex: 1 1 auto;
}
```

This works well for **one-dimensional** layouts, but `flex-wrap` exists for 
making **two-dimensional** layouts. It allows you to take the flex items, & 
*wrap* them to the next line (another row / column).

An easier way to make **two-dimensional** layout of cards using **CSS Grid** 
instead:
```html
<!-- HTML -->
<div class="grid-container">
  <!-- 6 'cards' -->
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```
```css
/* CSS Grid
 * 3 columns
 * 2 rows 
*/
.grid-container {
  display: grid;
  grid-template-columns: 75px 75px 75px;
  grid-template-rows: 75px 75px;
  gap: 32px;
}

.card {
  background-color: peachpuff;
  border: 1px solid black;
}
```

### What is Grid?
**Grid** is a newer CSS module, only introduced to all major browsers in 2017.

As shown above, it makes placement of items in a two-dimensional layout easier,
but it can be used for one-dimensional layouts too. An advantage is starting 
with 1 row of items, and adding additional rows later.

If matching item sizes with `flex` is too difficult, try `grid`.

## Additional Resources
[Flexbox vs CSS Grid - Which is Better?](https://www.youtube.com/watch?v=hs3piaN4b5I) - 
YouTube Video

[The Story of CSS Grid](https://alistapart.com/article/the-story-of-css-grid-from-its-creators/) - 
from its creators

---
[top](#)

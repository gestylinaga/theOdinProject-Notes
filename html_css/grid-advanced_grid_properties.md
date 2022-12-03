# Grid
## Advanced Grid Properties

### Setup
Example grid with 5 columns, and 2 rows:
```html
<!-- HTML -->
<div class="grid-container">
  <div class="grid-item">
    <p>Odin 1</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>
  <div class="grid-item">
    <p>Odin 2</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  
  <div class="grid-item">
    <p>Odin 3</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  
  <div class="grid-item">
    <p>Odin 4</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  
  <div class="grid-item">
    <p>Odin 5</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  
  <div class="grid-item">
    <p>Odin 6</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  
  <div class="grid-item">
    <p>Odin 7</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  
  <div class="grid-item">
    <p>Odin 8</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  
  <div class="grid-item">
    <p>Odin 9</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  
  <div class="grid-item">
    <p>Odin 10</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>
</div>
```
```css
/* CSS */
.grid-container {
  resize: both;
  overflow: auto;
  display: grid;
  gap: 4px;
  padding: 4px;
  border: 1px solid grey;
  background-color: skyblue;
  grid-template-rows: 150px 150px;
  grid-template-columns: 150px 150px 150px 150px 150px;
}

.grid-item {
  background-color: #444;
  text-align: center;
  color: #ddd;
  font-family: sans-serif;
  font-size: 1.5rem;
  padding: 12px;
}

p {
  margin: 12px auto 24px;
}

img {
  height: 60px;
}
```
- `.grid-item, p, img` <- Selectors 
  - not related to this lesson, but used to make grid look nicer
- `.grid-container`
  - `display: grid` - to render as CSS grid
  - `resize: both` - to allow user to resize grid container
  - `overflow: auto` - to enable scrolling, if container is resized too small
  - `gap` & `padding` - to establish a "*gutter*" area between grid items
  - `border` & `background-color` - to make grid look nice

The focus of this lesson is on:
```css
/* Manually defining each row & column */
.grid-container {
  grid-template-rows: 150px 150px;
  grid-template-columns: 150px 150px 150px 150px 150px;
}
```
this is fine for small grids, but can become unmanageable for bigger grids.

### Repeat
`repeat()` is a CSS function, that allows you to define the number of grids,
columns, and their size, without manually typing out each individual track.

For example, the above example can be rewritten as:
```css
/* Cleaner / easier way to define rows & columns */
.grid-container {
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: repeat(5, 150px);
}
```

### Fractional Units
`fr` also known as **Fractional Units**, are a *dynamic* (flexible) way to define 
grid tracks. They are the opposite of *static* units like `150px` for example.

The `fr` unit is a way of distributing whatever remaining space is left in the 
grid. For example, if you have a grid container with a total width of `400px`, 
and 4 grid items set to `1fr` each, all grid items will have a width of `100px`

You can also set grid items to take up space *disproportionately*. If you set 
some grid items to `2fr`, while setting the rest to `1fr`, the `2fr` items will 
be twice as large as the others. You can do this on a single line:
```css
grid-template-columns: repeat(2, 2fr) repeat(3, 1fr);
```

You can also mix static units (like `px`) with dynamic units (like `fr`):
```css
.grid-container {
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 150px) repeat(3, 1fr);
}
```
Note that there is a distinct *smallest* size the grid will allow. In the case 
of the examples above, it's the smallest size the `<p>` or `<img>` element can 
be without overflowing. The breakpoint is the item's `min-content` value. 

See [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-content) on 
`min-content`.

### Minimum & Maximum Track Sizes
When resizing a grid, the browser will stop the grid items from shrinking 
beyond the `min-content` value. However it's better to explicitly define those 
values yourself.

Recall:
- `min()` - returns the smallest value passed
- `max()` - returns the largest value passed

This means that by combining static & dynamic values like:
```css
.grid-container {
  grid-template-rows: repeat(2, min(200px, 50%));
  grid-template-columns: repeat(5, max(120px, 15%));
}
```
allows the browser to calculate which value to apply at runtime. The grid row 
tracks will be either `200px` **or** `50%`, depending on which is smaller in 
realtime. The same goes for the columns, the tracks will either be `120px` 
**or** `15%`, depending on which is larger.

### Dynamic Minimum & Maximum Sizes
`minmax()` is a CSS function that is specifically used with grid, & can only be 
used on:
- `grid-template-columns`
- `grid-template-rows`
- `grid-auto-columns`
- `grid-auto-rows`

It takes 2 arguments, a minimum size a track can be, and a maximum size a track 
can be. Unlike `min()` and `max()`, it sometimes makes sense to use 2 static 
values:
```css
.grid-container {
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, minmax(150px, 200px));
}
```
this means that the grid column tracks will be a minimum of `150px`, and a 
maximum of `200px`. This gives the grid horizontal flexibility / reactivity.

`clamp()` is another CSS function, but unlike `minmax()`, it can be used 
**anywhere**. Recall the syntax for `clamp()`:
```
clamp(minimum-size, ideal-size, maximum-size)
```
This allows the grid item to resize itself until it reaches a minimum or maximum 
threshold value.

Since `clamp()`'s  purpose is to create a flexible track, it's best practice to 
use a dynamic value for the "*ideal-size*", and static values for the minimum 
and maximum values:
```css
.simple-example {
  width: clamp(500px, 80%, 1000px);
}
```
or to apply it to the previous grid examples:
```css
.grid-container {
  grid-template-columns: repeat(5, clamp(150px, 20%, 200px));
}
```
Using both `clamp()` and `minmax()` allow you to make grids more responsive, 
while ensuring the grid doesn't hit critical breakpoints, making the site look 
bad. This is especially important when dealing with images & elements that have 
a tendency to overflow when pushed to extreme sizes.

### Auto-Fit & Auto-Fill
These 2 values are part of the `repeat()` function. An example use case could 
be: You want make a grid a number of columns that is flexible depending on the 
size of the grid. For example, if the grid is only `200px` wide, you want only 
1 column. But if it's `400px` wide, we want 2 columns:
```css
.simple-example {
  display: grid;
  width: 1000px;
  grid-template-columns: repeat(auto-fit, 200px);
}
```
This means that as long as there are at least 5 grid items, the grid will have 
5 columns, no matter what. When used in this way, `auto-fit` and `auto-fill` do 
the same thing.

The real magic of `auto-fill` & `auto-fit` come from combining them with 
`minmax()`:
```css
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```
this means that the grid will have as many columns as possible, with `minmax()` 
to define the grid items' size (without overflowing the grid). As the display 
window is resized, the browser will automatically calculate the appropriate 
columns **and** grid item sizes.

In most cases, `auto-fill` is going to work exactly the same as `auto-fit`. The 
only noticeable difference is when there are fewer items than can fill up the 
entirety of the grid row once.

If the grid is expanded to a size where another grid item *could* fit, but 
there aren't any left, `auto-fit` will keep the grid items at their 
**max size**.

On the other hand, `auto-fill` will keep the grid items at their **min size**, 
even if there is room on the row for more items.

## Additional Resources
- [CSS-Tricks Article](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/) - 
on `auto-fill` & `auto-fit`
- [Kevin Powell YT](https://youtu.be/qjJR3qYCd54) - 
video on `auto-fill` & `auto-fit`

---
[top](#)

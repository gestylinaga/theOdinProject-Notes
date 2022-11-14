# Grid
## Creating a Grid

### Setting up a Grid

**Grid Container**

Think of CSS Grid as a 'container' and 'items'. When you make an element a grid 
container, it will *contain* the whole grid of items.

This is done with the property `display: grid` or `display:inline-grid`:
```html
<!-- HTML -->
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```
```css
/* CSS */
.container {
  display: grid;
}
```
In this example, the parent div, `class="container"`, becomes a grid container 
and each of the **direct** children elements automatically become grid items. 
No need to assign each child element a property.

**Note**: that only the direct child elements will become grid items. If there 
was another element as a child under that, it would **not** be a grid item:
```html
<!-- HTML -->
<div class="container">
  <div>Item 1</div>
  <div>Item 2
    <p>This is not a grid item!</p>
  </div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

**Lines and Tracks in Grids, Oh My!**

Grid items exist on invisible lines, tracks, & areas, which are viewable 
through a browser's dev tools. Inspect a grid item through the dev tools to 
see a grid's layout

**Columns and Rows**

The **Grid Track** is the space between lines on a grid. So setting a column 
track gives space between columns, and row tracks set spaces between rows.

Can be set with pixels, percentages, or fractional units:
- `grid-template-columns`
- `grid-template-rows`

Same Example from above with a 4x4 grid:
```html
<!-- HTML -->
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```
```css
/* CSS */
.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
}
```

To add more columns / rows, you can simply define the value in the CSS:
```css
/* CSS */
.container {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px;
}
```
this results in a row of 3, then a row of 1

There's also a shorthand by combining both with a `grid-template` property:
```css
/* CSS */
.container {
  display: grid;
  grid-template: 50px 50px / 50px 50px 50px;
}
```

### Explicit vs Implicit Grid
If a new 5th item were added to the HTML grid, but not defined in the CSS, it 
would be slotted into a third row we have not defined yet. This is because CSS 
Grid automatically places grid items where we haven't **explicitly** defined 
the layout for.

Using `grid-template-columns` & `grid-template-rows` are **explicit** ways to 
define grid tracks.

To **implicitly** define new grid tracks, you can use:
- `grid-auto-rows`
- `grid-auto-columns`

This ensures that any new tracks are accounted for:
```css
/* CSS */
.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  grid-auto-rows: 50px;
}
```

By default, CSS Grid adds content will implicit **rows**, meaning vertically 
down the grid. Although uncommon, the `grid-auto-flow: column` property exists,
which is defined with the `grid-auto-columns` property.

### Gap
The gap between grid rows / columns is known as the *gutter* or *alley*.

They can be adjusted with:
- `column-gap`
- `row-gap`
- or shorthand `gap` to set both previous properties

```css
/* CSS */ 
.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  column-gap: 10px;
  row-gap: 50px;
}

.container > div {
  border: 1px solid blue;
}
```

## Additional Resources
[CSS-Tricks Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) -
7 part series

[Google Chrome Developers Docs](https://developer.chrome.com/docs/devtools/css/grid/) -
dev tools docs on inspecting CSS Grid in Chrome

[MDN Basic Concepts of Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout) -
review of grid basics with some new concepts

---
[top](#)

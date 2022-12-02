# Grid
## Positioning Grid Elements

### Reviewing Tracks
Recall that `grid-template` defines the *tracks* of the grid. 

You can think of a **grid track** as any single row or column on a grid.

### Lines
Whenever you create grid tracks, **grid lines** are *implicitly* created. This 
means that grid lines are only created **after** defining the grid trakcs. You 
cannot explicitly create grid lines.

Every grid track has a **start** line, and an **end** line. They are numbered 
left to right, and top to bottom. This means that a 3x3 grid, will have 4 
vertical lines, and 4 horizontal lines.

Grid lines are used to position grid items.

> Chrome Developer Tools
>
> To see an overlay of the grid lines:
> - Layout Pane
> - Grid Overlay Display Settings
>   - [X] Show Track Sizes
>   - [X] Show Area Names
>   - [X] Extend Grid Lines

### Cells
Cells are the smallest unit of measurement in a grid. Think of grid cells like 
cells on a spreadsheet, or a square on a graph.

By default, each child element of a grid container will occupy **one** cell.

### Positioning
- `grid-column-start` - define grid column **line** to start at
- `grid-column-end` - define grid column **line** to end at
- `grid-row-start` - define grid row **line** to start at
- `grid-row-end` - define grid row **line** to end at

Example apartment floor plan, using css grid:
```html
<!-- HTML -->
<div class="container">
  <div class="room" id="living-room">Living Room</div>
  <div class="room" id="kitchen">Kitchen</div>
  <div class="room" id="bedroom">Bedroom</div>
  <div class="room" id="bathroom">Bathroom</div>
  <div class="room" id="closet">Closet</div>
<div>
```
```css
/* CSS */
.container {
  display: inline-grid;
  grid-template: 40px 40px 40px 40px 40px /  40px 40px 40px 40px 40px;
  background-color: lightblue;
}

.room {
  border: 1px solid;
  font-size: 50%;
  text-align: center;
}

#living-room {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 3;
}

/* Notice the 'grid-column' / 'grid-row' shorthand */
#kitchen {
  grid-colum: 4 / 6;
  grid-row: 3 / 6;
}

#bedroom {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 5;
}

#bathroom {
  grid-column: 1 / 2;
  grid-row: 3 / 6;
}

#closet {
  grid-column: 2 / 4;
  grid-row: 5 / 6;
}
```
- `grid-column` / `grid-row` can be used as a shorthand for defining both 
start / end points with a `/` to separate the values.

### Grid-Area
`grid-area` is an even shorter way to combine `grid-column-start` / 
`grid-column-end` / `grid-row-start` / `grid-row-end` into **one line**:
```css
#living-room {
  grid-area: 1 / 1 / 3 / 6;
}
```
but `grid-area` can also be used another way...

Instead of using grid lines to position grid elements, you can create a visual 
layout of the grid with words, `grid-template-area`, and assign each grid item 
to that word:
```css
/* CSS */
.container {
  display: inline-grid;
  grid-template: 40px 40px 40px 40px 40px /  40px 40px 40px 40px 40px;
  background-color: lightblue;
  grid-template-area:
    "living-room living-room living-room living-room living-room"
    "living-room living-room living-room living-room living-room"
    "bedroom bedroom bathroom kitchen kitchen"
    "bedroom bedroom bathroom kitchen kitchen"
    "closet closet . . ."
}

.room {
  border: 1px solid;
  font-size: 50%;
  text-align: center;
}

#living-room {
  grid-area: living-room;
}

#kitchen {
  grid-area: kitchen;
}

#bedroom {
  grid-area: bedroom;
}

#bathroom {
  grid-area: bathroom;
}

#closet {
  grid-area: closet;
}
```
Note that `.` can be used in the `grid-template-area` to indicate empty cells

## Additional Resources
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid) - 
on Grid layout using line-based placement
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout) -
on Box alignment in css grid
- [CSS Grid Garden](https://cssgridgarden.com/) - Game to practice positioning 
grid items
- [Smashing Magazine](https://www.smashingmagazine.com/understanding-css-grid-template-areas) - 
article on understanding `grid-template-area`

---
[top](#)

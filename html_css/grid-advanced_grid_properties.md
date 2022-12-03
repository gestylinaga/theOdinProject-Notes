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
  </div>  <div class="grid-item">
    <p>Odin 3</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  <div class="grid-item">
    <p>Odin 4</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  <div class="grid-item">
    <p>Odin 5</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  <div class="grid-item">
    <p>Odin 6</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  <div class="grid-item">
    <p>Odin 7</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  <div class="grid-item">
    <p>Odin 8</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  <div class="grid-item">
    <p>Odin 9</p>
    <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
  </div>  <div class="grid-item">
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

### Repeat

### Fractional Units

### Minimum & Maximum Track Sizes

### Dynamic Minimum & Maximum Sizes

### Auto-Fit & Auto-Fill

## Additional Resources

---
[top](#)

# Intermediate CSS Concepts
## Positioning

### Static & Relative Positioning
The default positioning mode is `position: static`.

`position: relative` is almost the same, except it is affected by:
- `top`
- `right`
- `bottom`
- `left`

which displace the element *relative* to its normal position in the flow
of the document

### Absolute Positioning
`position: absolute` allows you to position something at an exact point on the
screen, without affecting the other elements around it. It removes the element 
from the normal flow of the document, while still relative to the parent element.

`position: absolute` affected by:
- `top`
- `right`
- `bottom`
- `left`

Common uses:
- modals
- images with a caption on it
- icons on top of other elements

Example of an Image with an Overlay Caption:
```html
<!-- HTML -->
<body>
  <div class="card-container">
    <img class="card-image" src="https://picsum.photos/450/450">
    <div class="card-body">
      <div class="card-heading">Some Heading!</div>
      <p class="card-paragraph">Some placeholder text!</p>
    </div>
  </div>
</body>
```
```css
/* CSS */
.card-container {
  position: relative;
  width: 100%;
}
.card-image {
  position: absolute;
  width: 100%;
  z-index: -1;
}
.card-body {
  position: absolute;
  width: 100%;
  background: black;
  opacity: 0.6;
  color: white;
  top: 8rem;
  text-align: center;
  font-size: 1.2rem;
  font-family: roboto;
}
.card-headline {
  position: absolute;
}
```

**Note**: absolute positioning has specific use cases. Flexbox and grid should 
be prioritized. Absolute positioning should **NOT** be used to style entire 
page layouts

### Fixed Positioning
Fixed elements are also removed from the normal flow of the document, and are 
positioned relative to the `viewport`.

They are also affected by:
- `top`
- `right`
- `bottom`
- `left`

More importantly, they stay in position when a user scrolls.

They are useful for things like:
- Navigation bars
- Floating chat buttons

### Sticky Positioning
Sticky elements act like normal elements, *until* you scroll past them, then they 
behave like **fixed** elements

## Additional Resources
[MDN Article](https://developer.mozilla.org/en-US/docs/Web/CSS/position) - 
on positioning

---
[top](#)

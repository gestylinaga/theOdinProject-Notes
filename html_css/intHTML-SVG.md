# Intermediate HTML Concepts
## SVGs
>Scalable Vector Graphics

### Definition
SVGs, **S**calable **V**ector **G**raphics, are a very common image format used on the web. They are *scalable*, 
meaning they easily scale to any size, and retain their quality without 
increasing their filesize.

Also useful for creating / modifying images programmatically, because you can 
change their properties with CSS & JavaScript.

Often used for:
- Icons
- Graphs / Charts
- Large, simple images
- Patterned backgrounds
- Applying effects to other elements (via SVG filters)

**Vector Graphics vs Raster Graphics**

**Vector graphics** are images defined by math, **raster graphics** are images
defined by a grid of pixels. To scale a raster image, you would need to 
increase the size of the grid, and its filesize. For vector graphics, you have 
formulas for different shapes and lines. This means that filesizes can stay 
small, while images can scale to any size you want.

**XML as a Source Code**

XML aka "Extensible Markup Language" is an HTML-like syntax used in a lot of things:
- [APIs](https://en.wikipedia.org/wiki/SOAP)
- [RSS](https://en.wikipedia.org/wiki/RSS)
- [Spreadsheets & Word Editors](https://en.wikipedia.org/wiki/Office_Open_XML)

XML benefits over jpg / png:
- human-readable source code
- interoperable with HTML, can put it directly into an HTML file, and styled 
with CSS
```html
<!-- XML Syntax -->
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 100">
  <rect x=0 y=0 width=100 height=50 />
  <circle class="svg-circle" cx="50" cy="50" r="10"/>
</svg>
```

### Drawbacks
SVGs are meant for **simple** images, if an image is meant to be photo-realistic,
or has fine details / textures, it is better to use a different filetype.

### Anatomy of an SVG
```html
<!-- HTML -->
<div class="container">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect x=0 y=0 width=100 height=100 fill="burlywood"/>
    <path d="M 10 10 H 90 V 90 L 10 60" fill="transparent" stroke="black" stroke-width="3"/>
  <circle cx=50 cy=50 r=20 class="svg-circle"/>
    <g class="svg-text-group">
      <text x="20" y="25" rotate="10" id="hello-text">Hello!</text>
      <use href="#hello-text" x="-10" y="65" fill="white"/>
    </g>
</svg>
</div>
```
```css
/* CSS */
.container {
  max-width: 200px;
  margin: auto;
}

.svg-circle:hover + .svg-text-group {
  opacity: 0;
}
```
- `xmlns` -- "XML NameSpace", specifies what *dialect* of XML you're using
- `viewBox` -- defines bounds of your SVG
- `class` & `id` -- function like they do in HTML
- `<circle>`, `<rect>`, `<path>`, & `<text>` -- defined by the SVG namespace, the basic building-blocks
- `fill` & `stroke` -- attributes that can be changed with CSS

### Embedding SVGs
2 main approaches: **linked**, or **inline**

**Linking** SVGs works like any other image, with either an HTML element like `<img>`, or in 
CSS using `background-image: url(./some-image.svg)`. They will still scale properly, but 
the SVG contents won't be accessible from the webpage.

The alternative is to **inline** your SVGs by pasting the contents directly into the webpage's
code. This allows you to alter the image dynamically via CSS and/or JavaScript. However , 
this makes your code harder to read, makes the page less chachable, and for large SVGs, could 
delay the rest of the HTML load.

Linking is generally cleaner & simpler, but inlining gives more direct control.

## Additional Resources
[MDN SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

Free SVG Libraries:
- [Material Icons from Google](https://fonts.google.com/icons)
- [Feather Icons](https://feathericons.com/)
- [The Noun Project](https://thenounproject.com/browse/icons/term/free/?iconspage=1)

SVG Visual Editors:
- [SVG Path Editor](https://yqnn.github.io/svg-path-editor/)
- [Inkscape](https://inkscape.org/)

---
[top](#)

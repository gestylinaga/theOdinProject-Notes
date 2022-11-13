# Intermediate CSS Concepts
## Advanced Selectors
There are *a lot* of advanced selectors, these are some of the most common ones

### Parent & Sibling Combinators
- `>` - the child combinator
- `+` - the adjacent sibling combinator
- `~` - the general sibling combinator

```html
<!-- Example Markup -->
<main class="parent">
  <div class="child group1">
    <div class="grand-child group1"></div>
  </div>
  <div class="child group2">
    <div class="grand-child group2"></div>
  </div>
  <div class="child group3">
    <div class="grand-child group3"></div>
  </div>
</main>
```

To select the `child` and `grand-child` divs inside of `main`, you could:
```css
main div {
  /* some css rules here */
}
```

But, to be **more** specific, and select *only* the `child` **or** `grand-child` 
divs, you could use a combinator:
```css
/* This rule will only select divs with a class of 'child' */
main > div {
  /* some css here */
}

/* This rule will only select divs with a class of 'grand-child' */
main > div > div {
  /* some css here */
}
```

To select an element that is adjacent to our target, or same indentation level,
you can use the `+` combinator:
```css
/* This rule will only select the div with the class 'child group1' */
.group1 + div {
  /* some css here */
}

/* This rule will only select the div with the class 'child group3' */
.group3 + div + div {
  /* some css here */
}
```

If you want to select all of an element's siblings, you can use the `~` combinator:
```css
/* This rule will select all of .group1's siblings */
.group1 ~ div {
  /* some css here */
}
```

### Pseudo-Selectors
[Pseudo-Elements vs Pseudo-Classes from MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

**Pseudo-Class** selectors are prefixed with a single `:` colon, and are a 
different way to target elements that already exist in HTML

**Pseudo-Elements** are prefixed with two `::` colons, and are used to target
elements that *don't* normally exist in the markup

### Pseudo-Classes
Pseudo-Classes offer a different way to target elements in HTML. Some are based 
on their position or structure in the HTML. Others are based on the state of a 
particular element, or how a user is currently interacting with it.

[MDN article on all available pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

Some of the most useful pseudo-classes:

**Dynamic & User Action Pseudo-Classes**

These types make a page feel much more dynamic and interactive.
- `:focus` - applies to an element that is currently selected (with cursor or keyboard)
- `:hover` - affects anything under the user's mouse pointer
- `:active` - applies to elements that are currently being clicked
- `:link` & `:visited` - applies to links & what they look like after being visited
```css
/* Example Pseudo-Classes on links */
a {
  text-decoration: underline;
}

/* this rule applies to unvisited links */
a:link {
  color: blue;
}

/* this rule applies to visited links */
a:visited {
  color: purple;
}
```

**Structural Pseudo-Classes**

These are a powerful way to select elements based on their position within the DOM:
- `:root` - special class that represents the top level of your document, 
generally the place to put your 'global' CSS rules & variables
- `:first-child` & `:last-child` - will match elements that are the first or 
last sibling
- `:empty` - matches elements with no children
- `:only-child` - matches elements with no siblings

`:nth-child` - a flexible, dynamic approach with multiple uses:
```css
.someList:nth-child(5) { /* selects the 5th element with class 'someList' */ }

.someList:nth-child(3n) { /* selects every 3rd element */ }

.someList:nth-child(3n + 3) { /* selects every 3rd element, starting at the 3rd */ }

.someList:nth-child(even) { /* selects every even element */ }
```

### Pseudo-Elements
Pseudo-Elements allow you to affect parts of the HTML that aren't elements at all:
- `::marker` - allow you to customize the styling of `<li>` elements' 
bullets or numbers
- `::first-letter` & `::first-line` - allow styling on the first letter / line 
of some text
- `::selection` - allows you to change the highlighting when a user selects 
text on the page

`::before` & `::after` - allow you to add extra elements to the page with CSS, 
instead of HTML:
```html
<!-- using '::before' & '::after' -->
<style>
  .emojify::before {
    content: 'some emojis'
  }

  .emojify::after {
    content: 'other emojis'
  }
</style>

<body>
  <div>Let's <span class="emojify">emojify</span>this span!</div>
</body>
```

[MDN Pseudo-Elements Docs](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-selectors)
to see a complete list of what's possible

### Attribute Selectors
Example HTML attributes: `src="picture.jpg"` or `href="https://someWebsite.com"`

Some examples of **Attribute Selectors**:
- `[attribute]` - a general selector, selects anything where the given 
attribute exists, value doesn't matter
- `selector[attribute]` - optional, combine attribute selector with another 
selector, ie: class or element selector
- `[attribute="value"]` - to get really specific, use a `=` to match a specific
attribute with a specific value

```css
/* CSS Attribute Selectors */

[src] {
  /* this will target any element that has a 'src' attribute */
}

img[src] {
  /* this will only target 'img' elements that have a 'src' attribute */
}

img[src="specific.jpg"] {
  /* this will target 'img' elements with an exact 'src' value of "specific.jpg" */
}
```

In cases where you need to be more general, you can use regular expressions 
(regex):
- `[attribute^="value"]` - `^=` will match strings from the start
- `[attribute$="value"]` - `$=` will match strings from the end
- `[attribute*="value"]` - `*=` the wildcard selector will match anywhere in 
the string
```css
/* Regex Attribute Selectors */

[class^='aus'] {
  /* Classes are attributes too
    This will target any class that begins with 'aus':
    class='australia',
    class='austria'
  */
}

[src$='.jpg'] {
  /* This will target any 'src' attribute that ends in '.jpg':
    src='puppy.jpg',
    src='kitten.jpg'
  */
}

[for*='ill'] {
  /* This will target any 'for' attribute that has 'ill' anywhere inside it:
    for='bill',
    for='jill',
    for='silly',
    for='ill'
  */
}
```

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) on Regex Attribute Selectors

## Additional Resources
- [CSS Diner](https://flukeout.github.io/) - Practice Excercises
- [Complex Selectors by Shay Howe](https://learn.shayhowe.com/advanced-html-css/complex-selectors/) - 
Covers Content in More Detail
- [Kevin Powell on YT](https://www.youtube.com/kepowob/search?query=pseudo) - 
search for 'pseudo'
- [The CSS Tricks Almanac](https://css-tricks.com/almanac/selectors/) -
search for 'selectors'
- [W3 Schools](https://www.w3schools.com/cssref/css_selectors.php) - 
Reference List
- [Free Code Camp Selector Cheat Sheet](https://www.freecodecamp.org/news/css-selectors-cheat-sheet/)


---
[top](#)

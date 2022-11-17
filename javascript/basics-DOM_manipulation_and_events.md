# JavaScript Basics
## DOM Manipulation & Events

### DOM - Document Object Model
The **DOM** aka the **D**ocument **O**bject **M**odel, is a tree-like 
representation of the contents of a webpage. A tree of "nodes" with different 
relationships depending on how they're arranged:
```html
<!-- HTML "node" -->
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```
- `<div class="display"></div>` is a *child* of `<div id="container"></div>`, 
and a *sibling* to `<div class="controls"></div>`. Think of it like a family 
tree.

### Targeting Nodes with Selectors
When working with the DOM, you use *selectors* to target the nodes you want to 
work with. 

Some CSS-style selectors for the above example `<div class="display"></div>`:
- `div.display`
- `.display`
- `#container > .display`
- `div#container > div.display`

You can also use relational selections (ie: `firstElementChild` or 
`lastElementChild` etc.) with special properties owned by the nodes:
```javascript
const container = document.querySelector('#container');
// selects the #container div

console.dir(container.firstElementChild);
// selects the first child of #container => .display

const controls = document.querySelector('.controls');
// selects the .controls div

console.dir(controls.previousElementSibling);
// selects the prior sibling => .display
```

### DOM Methods

#### Query Selectors

#### Element Creation

#### Append Elements

#### Remove Elements

#### Altering Elements

#### Adding Inline Style

#### Editing Attributes

#### Working with Classes

#### Adding Text Context 

#### Adding HTML Content

### Excercise

### Events

#### Attaching Listeners to Groups of Nodes

## Additional Resources

---
[top](#)

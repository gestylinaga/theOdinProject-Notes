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
so you're identifying a certain node based on it relationship to the nodes 
around it.

### DOM Methods
As mentioned above, when your HTML is parsed by a web browser, it is converted 
to the DOM, with the *nodes* being objects that have their own properties & 
methods attached to them.

#### Query Selectors
- `element.querySelector(selector)` - returns a reference to the first match 
of `selector`
- `element.querySelectorAll(selectors)` - returns a "nodelist" containing 
references to all of the matches of the `selectors`

**Note**: that the return value from `querySelectorAll` is **NOT** an array, but 
a nodelist. The difference being that several array methods are missing from 
nodelists, but that can be solved by converting to an array.

#### Element Creation
- `document.createElement(tagName, [options])` - creates a new element of tag 
type `tagName`. `[options]` in this case means you can add some optional 
parameters to the function.

```javascript
const div = document.createElement('div');
```
This function does **NOT** put the new element into the DOM, it simply creates 
it in memory so you can manipulate the the element before placing it.

#### Append Elements
- `parentNode.appendChild(childNode)` - appends `childNode` as the last child 
of `parentNode`
- `parentNode.insertBefore(newNode, referenceNode)` - inserts `newNode` into 
`parentNode` before `referenceNode`

#### Remove Elements
- `parentNode.removeChild(child)` - removes `child` from `parentNode` on the 
DOM and returns a reference to `child`

### Altering Elements
When you have a reference to an element, you can use that reference to alter 
the element's own properties ie:
```javascript
const div = document.createElement('div');
// creates a new div referenced in the variable 'div'
```

#### Adding Inline Style
```javascript
const div = document.createElement('div');

div.style.color = 'blue';
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');
// adds several style rules
```

For more info on inline styles: [DOM Enlightenment](http://domenlightenment.com/#6.2) - 
Section on CSS Style rules

**Note** - that if you're using a "kebab-cased" css rule from javascript, you'll 
either need to use camelCase, or you'll need to use bracket notation instead of
dot notation:
```javascript
div.style.background-color 
// doesn't work, attempts to subtract color from background

div.style.backgroundColor 
// works fine

div.style['background-color'] 
// also works fine

div.style.cssText = 'background-color: white;'
// also works in a string
```

#### Editing Attributes
```javascript
div.setAttribute('id', 'theDiv');
// if id exists, update it to 'theDiv', else create an id with value 'theDiv'

div.getAttribute('id');
// returns value of specified attribute, in this case, 'theDiv'

div.removeAttribute('id');
// removes specified attribute
```
See [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) - 
section on HTML attributes for more available attributes.

#### Working with Classes
```javascript
div.classList.add('new');
// adds class 'new' to your new div

div.classList.remove('new');
// removes 'new' class from div

div.classList.toggle('active');
// if div doesn't have class 'active', then add it, or if it does, remove it
```
It is often standard (and cleaner) to toggle a CSS style rather than adding 
and removing inline CSS

#### Adding Text Context 
```javascript
div.textContent = 'Hello World!'
// creates a text node containing 'Hello World!' and inserts it into the div
```

#### Adding HTML Content
```javascript
div.innerHTML = '<span>Hello World!</span>';
// renders the HTML inside the div
```

**Note**: that `textContent` is preferable for adding text, and `innerHTML` 
should be used sparingly as it can create security risks if misused. See this 
[WebDevSimplified](https://youtu.be/ns1LX6mEvyM) video for an example.

### Final Example
Creating and appending a DOM element to a webpage:
```html
<!-- HTML File -->
<body>
  <h1>
    The Title of the webpage
  </h1>
  <div id="container"></div>
</body>
```
```javascript
// JavaScript File
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
```
In the JavaScript, first we get a reference to the `container` div that already 
exists in the HTML. Then we create a new div and store it in the variable 
`content`. We add a class and some text to the `content` div, and finally
append that div to `container`. **After** the JavaScript is run, the DOM tree 
would look like:
```html
<!-- The DOM -->
<body>
  <h1>
    The Title of the webpage
  </h1>
  <div id="container">
    <div class="content">
      This is the glorious text-content!
    </div>
  </div>
</body>
```

### Excercise
Using the aboxe example, add the following elements to the container using 
ONLY JavaScript, and the DOM methods shown above.
1. a `<p>` with red text that says "Hey I'm red!"
2. an `<h3>` with blue text that says "I'm a blue h3!"
3. a `<div>` with a black border and pink background color with the following 
elements inside of it:
  - another `<h1>` that says "I'm in a div"
  - a `<p>` that says "ME TOO!"
  - hint: after creating the `<div>` with `createElement`, append the `<h1>` 
  and `<p>` to it before adding it to the container

#### Solution
```javascript
// DOM Manipulation excercise
const container = document.querySelector('#container');

// paragraph with red text
let para = document.createElement('p');
para.textContent = "This is in red!";
para.style.color = 'red';
container.appendChild(para)

// h3 header in blue
let blueHeader = document.createElement('h3');
blueHeader.textContent = "I'm a blue h3!"
blueHeader.style.color = 'blue';
container.appendChild(blueHeader)


// new div, pink background, black border
let div = document.createElement('div');
div.setAttribute('style', 'background: pink; border: 1px solid black;');

// header inside div
let newHeader = document.createElement('h1');
newHeader.textContent = "I'm in a div";

// paragraph inside div
let newPara = document.createElement('p');
newPara.textContent = "ME TOO!";

// appending new elements to new div
div.appendChild(newHeader);
div.appendChild(newPara);

// appending new div to 'container'
container.appendChild(div);
```

### Events
Events are how you make the *magic* happen on your pages. Events are actions 
that occur on your webpage, such as mouse-clicks or keypresses, and using 
JavaScript we can make our webpage *listen* to and *react* to these events.

3 Main Methods:
1. attach functions' attributes directly on your HTML elements:
```html
<button onclick="alert('Hello World!')">Click Me</button>
```
2. set the "on_event_" property on the DOM object in your JavaScript:
(a little better, because the js/html are separated, still only 1 property)
```html
<!-- HTML File -->
<button id="btn">Click Me</button>
```
```javascript
// JavaScript File
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
```
3. attach event listeners to the nodes in your JavaScript:
(much more flexible/powerful method, allows multiple events if the need arises)
```html
<!-- HTML File -->
<button id="btn">Click Me Too</button>
```
```javascript
// JavaScript File
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
```

#### Attaching Listeners to Groups of Nodes
You can combine `querySelectorAll` with the `.forEach()` method to attach 
event listeners to every node in a node list.
```html
<!-- HTML -->
<div id="container">
  <button id="1">Click Me</button>
  <button id="2">Click Me</button>
  <button id="3">Click Me</button>
</div>
```
```javascript
// buttons is a node list, it looks / acts like an array
const buttons = document.querySelectorAll('button');

// using .forEach method to iterate through each button
buttons.forEach((button) => {
  
  // and for each one, we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
```
More useful events:
- `click`
- `dblclick`
- `keydown`
- `keyup`
- [W3Schools Page](https://www.w3schools.com/jsref/dom_obj_event.asp) - 
complete list of HTML DOM events


## Additional Resources
- [Eloquent JS - DOM](https://eloquentjavascript.net/14_dom.html) - chapter on 
the DOM
- [Eloquent JS - Handling Events](http://eloquentjavascript.net/14_event.html) - 
chapter on Handling Events
- [W3Schools](https://www.w3schools.com/js/js_htmldom.asp) - page on JavaScript 
HTML DOM

---
[top](#)

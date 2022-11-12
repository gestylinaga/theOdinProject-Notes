# Forms

## Form Basics
### The Form Element
The form element is a container element like the `div` element. It wraps all the 
inputs a user will interact with on a **Form**.

Requires 2 essential attributes: `action` & `method`
```html
<form action="example.com/path" method="post">

</form>
```
- `action` -- takes a URL value that tells the form where it should send the data to 
be processed
- `method` -- tells the browser which HTTP request method to use (usually `GET` or `POST`)
[(more info on HTTP methods from Mozilla)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)


### Form Controls
The elements that users interact with on the form ie: text boxes, dropdowns, checkboxes, & buttons

**The Input Element**
```html
<form action="example.com/path" method="post">
  <input type="text">
</form>
```
- accepts a `type` attribute - any text input ie: first/last name

**Labels**
```html
<form action="example.com/path" method="post">
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name">
</form>
```
Accepts:
- a `for` attribute - associates it w/ a particular input
- an `id` attribute on the input - to associates it w/ the label

**Placeholder Attribute**
```html
<label for="first_name">First Name:</label>
<input type="text" id="first_name" placeholder="Bob...">
```
- guides users on what to enter in input fields
- demonstrates how text should be entered/formatted

**Name Attribute**
```html
<label for="first_name">First Name:</label>
<input type="text" id="first_name" name="first_name">
```
- lets the backend know what each type of data represents
- serves as a reference to the data inputted into a form control after 
submitting it
- think of it like a variable name for the `input`
- **REQUIRED** otherwise the form input won't work


### Using Form Controls Outside of Forms
Form controls that HTML provides can be used outside of the `<form>` element,
even when you don't have a backend server to send data to


### The Type Attribute
```html
<label for="user_email">Email Address:</label>
<input type="email" id="user_email" name="email" placeholder="you@example.com">
<!-- type="email" -->
```
- `Email inputs` are specialized text inputs just for email addresses
- they display a different keyboard (with an `@` symbol) on mobile devices
- also validates correctly formatted email addresses

```html
<label for="user_password">Password:</label>
<input type="password" id="user_password" name="password">
<!-- type="password" -->
```
- `Password inputs` are another specialized text input
- they mask the inputted data with asterisks `*` to hide the data

```html
<label for="amount">Amount:</label>
<input type="number" id="amount" name="amount">
<!-- type="number" -->
```
- `Number inputs` only accept number values and ignore any other characters

```html
<label for="dob"> Date of Birth:</label>
<input type="date" id="dob" name="dob">
<!-- type="date" -->
```
- `Date inputs` renders a simple date picker calendar

**Text Area**
- Technically not an input element, the text area provides an input box that 
can accept text that spans multiple lines
- can be resized by clicking & dragging
```html
<!-- notice the 'rows' & 'cols' -->
<textarea rows="20" cols="60">Some initial content</textarea>
```

### Selection Elements

**Select Dropdown**
```html
<select name="Car">
  <option value="mercedes" >Mercedes</option
  <option value="ford">Ford</option
  <option value="volvo">Volvo</option
  <option value="bmw">BMW</option
  <option value="mini">Mini</option
  <option value="hond" selected>Honda</option
</select>
```
- `<select>` element creates a dropdown list of `<option>`s to choose from
- similar markup to unordered lists
- all option elements need a `value` attribute, which is sent to the server when the form is submitted
- can have a default `selected` attribute
- can also split the options into groups with the `<optgroup>` element, which requires a `label`:
```html
<select name="fashion">
  <optgroup label="Clothing">
    <option value="t_shirt">T-Shirts</option>
    <option value="sweater">Sweaters</option>
    <option value="coats">Coats</option>
  </optgroup>
  <optgroup label="Foot Wear">
    <option value="sneakers">Sneakers</option>
    <option value="boots">Boots</option>
    <option value="sandals">Sandals</option>
  </optgroup>
</select>
```

**Radio Buttons**
```html
<h1>Ticket Type</h1>

<!-- notice the 'type="radio"' -->
<div>
  <input type="radio" id="child" name="ticket_type" value="child">
  <label for="child">Child</label>
</div>

<div>
  <!-- notice the 'checked' attribute -->
  <input type="radio" id="adult" name="ticket_type" value="adult" checked>
  <label for="adult">Adult</label>
</div>

<div>
  <input type="radio" id="senior" name="ticket_type" value="senior">
  <label for="senior">Senior</label>
</div>
```
- Radio Buttons are useful for saving space for smaller lists (instead of a dropdown)
- require the attribute `type="radio"`
- when one radio button is selected, any other ones are deselected
- can also set a default selected button with the `checked` attribute

**Checkboxes**
```html
<h1>Pizza Toppings</h1>

<!-- notice 'type="checkox"' -->
<div>
  <input type="checkox" id="sausage" name="topping" value="sausage">
  <label for="sausage">Sausage</label>
</div>

<div>
  <input type="checkox" id="onions" name="topping" value="onions">
  <label for="onions">Onions</label>
</div>

<div>
  <!-- notice 'checked' attribute -->
  <input type="checkox" id="pepperoni" name="topping" value="pepperoni" checked>
  <label for="pepperoni">Pepperoni</label>
</div>

<div>
  <input type="checkox" id="mushrooms" name="topping" value="mushrooms">
  <label for="mushrooms">Mushrooms</label>
</div>
```
- similar to radio buttons, but allow multiple options to be selected at once
- a single checkbox option allows for a "true/false" option:
```html
<!-- notice theres only 1 option for true / false -->
<div>
  <input type="checkox" id="newsletter" name="news_letter" checked>
  <label for="newsletter">Send me the news letter</label>
</div>
```

### Buttons
```html
<button>Click Me</button>
```
- creates a clickable button that the user can interact with to submit forms or
other actions

**Submit Buttons**
```html
<button type="submit">Submit</button>
```
- Submit buttons for forms have a special type `submit`
- they submit the form they are contained within

**Reset Button**
```html
<button type="reset">Reset</button>
```
- a reset button clears the form data, & sets the inputs back to default

**Generic Button**
```html
<button type="button">Click to Toggle</button>
```
- can be used for **anything**

### Organizing Form Elements

**Fieldset Element**
```html
<fieldset>
  <label for="first_name">First Name</label>
  <input type="text" id="first_name" name="first_name">

  <label for="last_name">Last Name</label>
  <input type="text" id="last_name" name="last_name">
</fieldset>
```
- a container element to group related form inputs into one logical unit

**Legend**
```html
<fieldset>
  <legend>Contact Details</legend>

  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="phone_number">Phone Number:</label>
  <input type="tel" id="phone_number" name="phone_number">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</fieldset>

<fieldset>
  <legend>Delivery Details</legend>

  <label for="street_address">Street Address:</label>
  <input type="text" id="street_address" name="street_address">

  <label for="city">City:</label>
  <input type="text" id="city" name="city">

  <label for="zip_code">Zip Code:</label>
  <input type="text" id="zip_code" name="zip_code">
</fieldset>
```
- used to give field sets a heading or caption
- a common use-case is to use fieldsets to group radio buttons:
```html
<fieldset>
  <legend>What would you like to drink?</legend>

  <div>
    <input type="radio" name="drink" id="coffee" value="coffee">
    <label for="coffee">Coffee</label>
  </div>

  <div>
    <input type="radio" name="drink" id="tea" value="tea">
    <label for="tea">Tea</label>
  </div>

  <div>
    <input type="radio" name="drink" id="soda" value="soda">
    <label for="soda">Soda</label>
  </div>
</fieldset>
```

> Note on Styling Forms
>> **Default Browser Styles**
>> 
>> Each browser has its own default styles for form controls, making your forms look visually 
>> different depending on the user's browser.
>
>> **Tricky & Downright Impossible to Style Form Controls**
>>
>> Text-based form controls like text, email, password & text areas are reasonably easy to 
>> style (like any other html element)
>>
>> Things like Radio Buttons & Checkboxes are tricker, but there are [guides to do it](https://moderncss.dev/pure-css-custom-checkbox-style/) 
>> & [new CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color) now available
>>
>> Things like Calendars or Date Pickers are impossible to style with html/css alone, 
>> javascrpt would be required


## MDN Form Docs
[Intro Guides to Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms#introductory_guides)

[The Different Form Controls Guides](https://developer.mozilla.org/en-US/docs/Learn/Forms#the_different_form_controls)

[Form Syling Guides](https://developer.mozilla.org/en-US/docs/Learn/Forms#form_styling_guides)

---

[Top ⬆️ ](#forms)

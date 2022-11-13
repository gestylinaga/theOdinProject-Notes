# Forms
## Form Validation
Validation is vital to protecting the backend systems from receiving incorrect
data

### Required Validation
The `required` attribute ensures a specific field has been filled out before 
submitting
```html
<form action="#" method="get">
  <div>
           <!-- notice the '*' for user readability -->
    <label for="user_email">*Email:</label>
    <input type="email" id="user_email" name="user_email" required>
           <!-- helps users know it's a 'required' field -->
  </div>
  <div>
              <!-- notice the '*' for user readability -->
    <label for="user_password">*Password:</label>
    <input type="password" id="user_password" name="user_password" required>
              <!-- helps users know it's a 'required' field -->
  </div>
  <button type="submit">Login</button>
</form>
```

### Text Length Validations
`minlength` attribute to add a minimum length validation
```html
<textarea placeholder="Some text..." minlength="3"></textarea>
<!-- minimum 3 characters required for submission -->
```

`maxlength` attribute to add a maximum length validation
```html
<textarea placeholder="Some text..." maxlength="120"></textarea>
<!-- maximum of 120 characters for submission (like twitter) -->
```
- with this attribute, the browser prevents users from entering more
characters than the max length allows

**Combining Validations**
```html
<form action="#" method="get">
  <div>
    <textarea placeholder="What's Happening?" minlength="5" maxlength="120"></textarea>
  </div>

  <button type="submit">Tweet</button>
</form>
```

### Number Range Validations
Just like text length validations, but for numbers
- useful for general numbers, date/time & [more (MDN Docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max#syntax)

`min` attribute to add a minimum integer threshold
```html
<input type="number" id="quantity" name="quantity" min="1" value="0">
```

`max` attribute to add a maximum integer threshold
```html
<input type="number" id="passengers" name="passengers" max="5" value="0">
```

### Pattern Validations
Used for real-world things like credit card numbers, or zip codes

[MDN Link for Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

The `pattern` attribute, with a regular expression (regex) as a value, adds pattern validation
```html
<!-- 'pattern' with a regex value -->
<input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" required>
```

however this alone doesn't communicate what format is needed, for that we need 
a `title` attribute:
```html
<!-- adding a 'tite' attribute -->
<input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" 
title="Please enter a valid zip code, example: 65251" required>
```

additionally you can include a `placeholder` attribute to show an example
```html
<!-- adding a 'placeholder' attribute -->
<input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" 
title="Please enter a valid zip code, example: 65251" placeholder="65251" required>
```

**Note**: Pattern Attributes can only be used on the `<input>` element, it is 
already present in the types:
- `email`
- `url`
- `number`

### Styling Validations
The `:valid` and `:invalid` pseudo-classes, in CSS, allow you to visually show form 
controls that have passed / failed
```html
<!-- HTML -->
<form action="#" method="get">
  <div>
    <label for="email">Email</label>
  </div>
  <input type="email" id="email" name="email">

  <div>
    <label for="website">Website</label>
  </div>
  <input type="url" id="website" name="website">

  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```
```css
/* CSS */
input {
  border: 2px solid #000;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
}

input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}
```
```scss
// just for reference, you can nest it in scss aka Sass
input {
  border: 2px solid #000;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
  &:invalid {
    border-color: red;
  }
  &:valid {
    border-color: green;
  }
}
```

### Conclusion
More Links:
- [MDN Client-Side Form Validation Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Sitepoint's Complete Guide to HTML Forms and Constraint Validation](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/)
- [Silo Creative's article Improving UX in forms](https://www.silocreativo.com/en/css-rescue-improving-ux-forms/)

Additional Resources:
- [HTML5Pattern](https://www.html5pattern.com/) 
for commonly used regex patterns
- [10 Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)
for form validation design
- [MDN's regex cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)

---
[top](#)

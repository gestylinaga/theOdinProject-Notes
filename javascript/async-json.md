# Asynchronous JavaScript and APIs
## JSON
JSON (JavaScript Object Notation) is a standardized format for structuring data.
It is heavily based on the syntax for JavaScript objects.

### Working with JSON
[MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) - 
tutorial on 'Working with JSON'

Even though JSON closely resembles JavaScript object literal syntax, it can be 
used independently from JavaScript, and many programming environments feature 
the ability to read (parse) and generate JSON.

JSON exists as a string, which is useful for transmitting data across a network.
It needs to be converted to a native JavaScript object before accessing the 
data.

A JSON string can be stored in its own file, which is basically just a text file 
with an extension of `.json`, and a MIME type of `application/json`.

#### JSON Structure
As described above, JSON is a string whose format resembles JavaScript object 
literal format. This means that you can include the same basic data types inside
JSON as you can in a standard JavaScript object (strings, numbers, arrays, 
booleans, and other object literals). This allows you to contstruct a data 
hierarchy, like:
```json
// Example JSON hierarchy:
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2022,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 32,
      "secretIdentity": "Jane Wilson",
      "powers": [
      "Million tonne punch", 
      "Damage resistance", 
      "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
      "Immortality", 
      "Heat immunity", 
      "Inferno",
      "Teleportation",
      "Interdimensional travel"
      ]
    }
  ]
}
```
If you loaded this string into a JavaScript program and parsed it into a 
variable called `superHeroes`, you could access the data inside using the same 
dot / bracket notation you use in JavaScript objects:
```javascript
superHeroes.homeTown // "Metro City"
superHeroes['active'] // true
```
To access data further down the hierarchy, you have to chain the required 
property names and array indexes together:
```javascript
// Example accessing the 3rd superpower of the 2nd hero
superHeroes['members'][1]['powers'][2] // "Superhuman reflexes"
```
In this example:
  1. First, we have the variable name - `superHeroes`.
  2. Inside that, we want to access the `members` property, so we use 
  `['members']`.
  3. `members` contains an array populated by objects. We want to access the 
  second object inside the array, so we use `[1]`.
  4. Inside this object, we want to access the `powers` property, so we use 
  `['powers']`.
  5. Inside the `powers` property is an array containing the selected hero's 
  superpowers. We want the third one, so we use `[2]`.

#### Arrays as JSON
As mentioned above, JSON text basically looks like a JavaScript object inside a 
string. You can also convert arrays to / from JSON. For example:
```json
// An example of an array as JSON:
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]   
  },
  {
    "name": "Madame Uppercut",
    "age": 32,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch", 
      "Damage resistance", 
      "Superhuman reflexes"
    ]
  }
]
```
The above is perfectly valid JSON. You'd just have to access array items (in 
its parsed version) by starting with an array index, for example: 
`[0]['powerers'][0]`

Other JSON Notes:
  - JSON is purely a string with a specified data format - it contains only 
  properties, no methods.
  - JSON requires double quotes to be used around strings and property names. 
  Single quotes are **not** valid other than surrounding the entire JSON string.
  - Even a single misplaced comma / colon can cause a JSON file to go wrong, and 
  not work. You should be careful to validate any data you are attempting to 
  use. You can validate JSON using an application like [JSONlint](https://jsonlint.com/)
  - JSON can actually take the form of any data type that is valid for inclusion
  inside JSON, not just arrays or objects. So for example, a single string or 
  number would be valid JSON.
  - Unlike in JavaScript code in which object properties may be unquoted, in 
  JSON only quoted strings may be used as properties.

#### Converting Between Objects and Text
Sometimes the response is a raw JSON string, and you need to convert it into an 
object yourself. Also, when you want to send a JavaScript object across a 
network, you need to convert it into a JSON string before sending it. Luckily, 
these two problems are so common, that a built-in JSON object is available in 
the browser, which contains the following two methods:
  1. `parse()`: Accepts a JSON string as a parameter, and returns the 
  corresponding JavaScript object.
  2. `stringify()`: Accepts an object as a parameter, and returns the equivalent
  JSON string.

### JSON.parse() and JSON.stringify()

#### .parse()
[W3Schools 1](https://www.w3schools.com/js/js_json_parse.asp) - on `JSON.parse()`

When *receiving* data from a web server, the data is **always** a string. Parse 
the data with `JSON.parse()`, and the data becomes a JavaScript object. Example
web server response:
```
'{"name":"John", "age":30, "city":"Los Angeles"}'
```
Using the `JSON.parse()` function to convert text into a JavaScript object:
```javascript
const obj = JSON.parse('{"name":"John", "age":30, "city":"Los Angeles"}');
```
When the JSON response comes in the form of an array, `JSON.parse()` will return 
an **array**, instead of an object:
```javascript
const text = '["Honda", "Toyota", "Nissan", "Mitsubishi"]';
const asArray = JSON.parse(text);
```

#### .stringify()
[W3Schools 2](https://www.w3schools.com/js/js_json_stringify.asp) - on `JSON.stringify()`

When *sending* data to a web server, the data has to be a **string**. To convert 
a JavaScript object into a string, use `JSON.stringify()`:
```javascript
const obj = {name: "John", age: 30, city: "Los Angeles"};

// Converting to a string:
const myJSON = JSON.stringify(obj);
```
And, just like the `.parse()` example, you can use `.stringify()` on arrays too:
```javascript
const arr = ["Mark", "Tom", "Travis"];

// Converting to a string:
const myJSON = JSON.stringify(arr);
```
This method is also useful for storing data, regardless of where you store it, 
because *text* is always one of the legal formats:
```javascript
// Storing data to local storage:
const myObj = {name: "John", age: 30, city: "Los Angeles"};
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data from local storage:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.querySelector('p').innerHTML = obj.name;
```

In JSON, date objects are **not** allowed. The `JSON.stringify()` function will 
convert any dates into string:
```javascript
const obj = {name: "John", today: new Date(), city: "Los Angeles"};
const myJSON = JSON.stringify(obj);
```
Similarly, JavaScript functions are also **not** allowed in JSON. So 
`JSON.stringify()` will remove any functions from a JavaScript object, both the 
key and value:
```javascript
const obj = {name: "John", age: function () {return 30;}, city: "Los Angeles"};
const myJSON = JSON.stringify(obj);
```
This behavior can be omitted if you convert your function to a string before 
running `JSON.stringify()` like this:
```javascript
const obj = {name: "John", age: function () {return 30;}, city: "Los Angeles"};
obj.age = obj.age.toString();
const myJSON = JSON.stringify(obj);
```

## Additional Resources
[JSON formatter](https://jsonformatter.curiousconcept.com/) - website that lets 
you paste in JSON code, and will search it for formatting errors.

---
[top](#)

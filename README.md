## 1. What is the difference between var, let, and const?
Ans: 
Var is function scoped, that means it is accessible within the function as well as the blocks. Var enables redeclaring and reassigning a variable.
Let is block scoped, that means it is accessible within the block only. Let does not support redeclaring a variable with in the same scope. But we can reassign the value anytime.
Const is also block scoped.Const does not support redeclaring or reassigning

## 2. What is the difference between map(), forEach(), and filter()?
Ans:
map() is used for looping through array and execute a function for each element of the array. It returns an array.
forEach() also used for looping through array and executes a function for each element of the array but doesn't return anything by default.
filter() also loop through an array and execute a function with condition but returns array with only the elements that satisfy the condition.

## 3. What are arrow functions in ES6?
Ans:
Arrow function is a new way of writing the functions in javascript introduced in ES6. Example:
```<language>
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));      
console.log(addArrow(2, 3)); 

```
## 4. How does destructuring assignment work in ES6?
Ans:
Destructuring is a process  in ES6, that allows to assign a particular variable with the values or properties of an array or object.for example:
```<language>
//For array
const [first, , third] = [10, 20, 30];
console.log(first, third); // 10 30

//For object
const user = { name: "Zihan", age: 25 };
const { name, age } = user;
console.log(name, age); // Zihan 25
```
## 5. Explain template literals in ES6. How are they different from string concatenation?
Ans:
Template literals are a new way of working with strings in javascript. It uses backticks (`) instead of (') or ("). It allows any expressions or variables directly inside string with ${} and does not require \n for new line, the string is printed as it is.
Example: 
```<language>
const name = "Zihan";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
// My name is Zihan and I am 25 years old.
```
# Live Link: https://zihan231.github.io/Green-Earth
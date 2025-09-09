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
````bash
    // Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));      
console.log(addArrow(2, 3)); 

```






# Green-Earth: https://zihan231.github.io/Green-Earth/
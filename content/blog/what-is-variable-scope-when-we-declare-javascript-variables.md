---
id: 32296
title: What is variable scope when we declare Javascript variables
date: 2018-09-27T21:46:09+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32296
permalink: /what-is-variable-scope-when-we-declare-javascript-variables/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/scope-example.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - const
  - let
  - var
  - variable scope
---
As we learnt about ES6 variables [here](https://www.nikpro.com.au/the-differences-between-var-and-let-and-const-in-javascript/) we need to explain more about variable scope when we are declaring them. It is essential to know where to declare which variable declaration and how to do it.

## Variable scope in Javascript

Essentially  we define scope as the current context in which [values](https://developer.mozilla.org/en-US/docs/Glossary/value) and **expressions **are &#8220;visible,&#8221; or can be referenced. 

Basically we have three kind of variable declarations with different variable scope in Javascript.

As we know [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)Declares a variable, optionally initialising it to a value. Also [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)Declares a block-scoped, local variable, optionally initialising it to a value. And finally [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)Declares a block-scoped, read-only named constant.

### Variable scope of var

Firstly here is an example for &#8220;var&#8221; which each scope has been clarified in front of the variable:


```
var x = "hello world"; // scope of x: global
function foo() {
  var a = 1;  // scope of a: foo
  if(a > 0) {
    var b = 3; // scope of b: foo
  }
  {
    var e = 10; // scope of e: foo
  }
  while(a < 2) {
    var d = 5; // scope of d: foo
  }
}
```


Also we have global and function scope here which is not great all the time. As an example it leads to unnecessary bugs due to incomprehension of the scope.

### Variable scope of let

Secondly we have the same example with &#8220;let&#8221; and the scopes are written inside the code:


```
let x = "hello world"; // scope of x: global
function foo() {
  let a = 1;  // scope of a: foo
  if(a > 0) {
    let b = 3; // scope of b: if statement
  }
  {
    let e = 10; // scope of e: surrounding block
  }
  while(a < 2) {
    let d = 5; // scope of d: while loop
  }
}
```


Clearly we have statement scope, block scope, function scope and general scope. Ideally we better use let instead of var in almost all cases. 

As a result let allows developers to scope variables at the block level (the nearest curly brackets).


<img src="https://www.nikpro.com.auglobal-scope.png" alt="variable scoping" class="wp-image-32301" srcset="https://testgatsby.localglobal-scope.png 544w, https://testgatsby.localglobal-scope-300x179.png 300w" sizes="(max-width: 544px) 100vw, 544px" /> 
 

### Variable scope of const

Finally with &#8220;const&#8221; we have exactly the same result regarding to variable scope:


```
const x = "hello world"; // scope of x: global
function foo() {
  const a = 1;  // scope of a: foo
  if(a > 0) {
    const b = 3; // scope of b: if statement
  }
  {
    const e = 10; // scope of e: surrounding block
  }
  while(a < 2) {
    const d = 5; // scope of d: while loop
  }
}
```


Although as we know let can be mutated but const is a constant and cannot be changed once created.

However `const` does not affect whether the value of a constant itself is mutable or no. Therefor if a constant refers to an object, it will always refer to that object, but the object itself can still be changed (if it is mutable and not being freezed):


```
const obj = {};
obj.prop = 123;
console.log(obj.prop); // 123

obj = {}; // TypeError
```


### Final notes

Technically we define the scope of a variable as the region of our program in which it is defined. Traditionally, JavaScript defines only two scopes-global and local.

  * **Global Scope** − A variable with global scope can be accessed from within any part of the JavaScript code.
  * **Local Scope** − A variable with a local scope can be accessed from within a function or block or statement where it is declared.

As a result we better use let and var in all cases as they serve the code with all kind of scopes,

We will finish this talk with a quote of developer [Aaron Frost.](https://github.com/aaronfrost) He put it, cheekily:  “Using LET and CONST instead of VAR will have an odd side-effect, where your code will execute at runtime just as it appears at development time.”

Thank you for reading.
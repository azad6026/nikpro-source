---
id: 32296
title: What is variable scope when we declare Javascript variables
date: 2018-09-27T21:46:09+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32296
permalink: /what-is-variable-scope-when-we-declare-javascript-variables/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/09/scope-example.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - const
  - let
  - var
  - variable scope
---
As we learnt about ES6 variables [here](http://www.nikpro.com.au/the-differences-between-var-and-let-and-const-in-javascript/) we need to explain more about variable scope when we are declaring them. It is essential to know where to declare which variable declaration and how to do it.

## Variable scope in Javascript

Essentially  we define scope as the current context in which [values](https://developer.mozilla.org/en-US/docs/Glossary/value) and **expressions **are &#8220;visible,&#8221; or can be referenced. 

Basically we have three kind of variable declarations with different variable scope in Javascript.

As we know [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)Declares a variable, optionally initialising it to a value. Also [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)Declares a block-scoped, local variable, optionally initialising it to a value. And finally [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)Declares a block-scoped, read-only named constant.

### Variable scope of var

Firstly here is an example for &#8220;var&#8221; which each scope has been clarified in front of the variable:

<pre class="wp-block-preformatted"><strong>var x = "hello world"; // scope of x: global</strong><br /><strong>function foo() {</strong><br /><strong>  var a = 1;  // scope of a: foo</strong><br /><strong>  if(a > 0) {</strong><br /><strong>    var b = 3; // scope of b: foo</strong><br /><strong>  }</strong><br /><strong>  {</strong><br /><strong>    var e = 10; // scope of e: foo</strong><br /><strong>  }</strong><br /><strong>  while(a &lt; 2) {</strong><br /><strong>    var d = 5; // scope of d: foo</strong><br /><strong>  }</strong><br /><strong>}</strong></pre>

Also we have global and function scope here which is not great all the time. As an example it leads to unnecessary bugs due to incomprehension of the scope.

### Variable scope of let

Secondly we have the same example with &#8220;let&#8221; and the scopes are written inside the code:

<pre class="wp-block-preformatted"><strong>let x = "hello world"; // scope of x: global</strong><br /><strong>function foo() {</strong><br /><strong>  let a = 1;  // scope of a: foo</strong><br /><strong>  if(a > 0) {</strong><br /><strong>    let b = 3; // scope of b: if statement</strong><br /><strong>  }</strong><br /><strong>  {</strong><br /><strong>    let e = 10; // scope of e: surrounding block</strong><br /><strong>  }</strong><br /><strong>  while(a &lt; 2) {</strong><br /><strong>    let d = 5; // scope of d: while loop</strong><br /><strong>  }</strong><br /><strong>}</strong></pre>

Clearly we have statement scope, block scope, function scope and general scope. Ideally we better use let instead of var in almost all cases. 

As a result let allows developers to scope variables at the block level (the nearest curly brackets).<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/09/global-scope.png" alt="variable scoping" class="wp-image-32301" srcset="http://testgatsby.local/wp-content/uploads/2018/09/global-scope.png 544w, http://testgatsby.local/wp-content/uploads/2018/09/global-scope-300x179.png 300w" sizes="(max-width: 544px) 100vw, 544px" /> </figure> 

### Variable scope of const

Finally with &#8220;const&#8221; we have exactly the same result regarding to variable scope:

<pre class="wp-block-preformatted"><strong>const x = "hello world"; // scope of x: global</strong><br /><strong>function foo() {</strong><br /><strong>  const a = 1;  // scope of a: foo</strong><br /><strong>  if(a > 0) {</strong><br /><strong>    const b = 3; // scope of b: if statement</strong><br /><strong>  }</strong><br /><strong>  {</strong><br /><strong>    const e = 10; // scope of e: surrounding block</strong><br /><strong>  }</strong><br /><strong>  while(a &lt; 2) {</strong><br /><strong>    const d = 5; // scope of d: while loop</strong><br /><strong>  }</strong><br /><strong>}</strong></pre>

Although as we know let can be mutated but const is a constant and cannot be changed once created.

However `const` does not affect whether the value of a constant itself is mutable or no. Therefor if a constant refers to an object, it will always refer to that object, but the object itself can still be changed (if it is mutable and not being freezed):

<pre class="wp-block-preformatted"><strong><code>const obj = {};
obj.prop = 123;
console.log(obj.prop); // 123

obj = {}; // TypeError</code></strong></pre>

### Final notes

Technically we define the scope of a variable as the region of our program in which it is defined. Traditionally, JavaScript defines only two scopes-global and local.

  * **Global Scope** − A variable with global scope can be accessed from within any part of the JavaScript code.
  * **Local Scope** − A variable with a local scope can be accessed from within a function or block or statement where it is declared.

As a result we better use let and var in all cases as they serve the code with all kind of scopes,

We will finish this talk with a quote of developer [Aaron Frost.](https://github.com/aaronfrost) He put it, cheekily:  “Using LET and CONST instead of VAR will have an odd side-effect, where your code will execute at runtime just as it appears at development time.”

Thank you for reading.
---
id: 31745
title: For loop in Javascript and ES6 explained
date: 2018-06-28T21:51:20+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31745
permalink: /for-loop-in-javascript-and-es6-explained/
image: for-loop_0.jpg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - arrays
  - for loop
  - for-in
  - for-of
  - objects
---
We all know about for loops in Javascript and we have been using them for a long time as the old way before ES6 introduced its new syntax. In this post we will discuss for loop in Javascript and ES6 with some examples. We will use arrays to accomplish the tasks and explain it in depth.

## The old way of for loop

To iterate through an array indexes in Javascript we simply write a for loop using a variable to loop through array indexes and log them:

`<strong>for ( var index=0;index< myArray.length ;index++){</strong>`

`<strong>  console.log(myArray[index]);</strong>`

`<strong>}</strong>`

That still works perfectly. It is a long syntax though. Also remember it is using var to initiate the variable. As explained in [this post,](http://www.nikpro.com.au/the-differences-between-var-and-let-and-const-in-javascript#let) let is a better choice in for loops to be used as the variable iterator.

## The ES5 Solution

Since ES5 we are able to use the built-in forEach loop that simplifies the syntax somehow but it has a drawback.There is no way to stop or break a forEach() loop other than by throwing an exception. And you cannot return a value either: 

`<strong>myArray.forEach(function(value){</strong>`

`<strong>  console.log(value);</strong>`

`<strong>}</strong>`

## The for-in loop

How about a for-in loop. It iterates over array elements just as expected:

`<strong>for (let index in myArray){        // we use let instead of var here</strong>`

`<strong>  console.log(myArray[index];</strong>`

`<strong>}</strong>`

It was used before in Angular as well but replaced with for-of for different reasons:

For loop was designed for iterating over objects with string keys. The values assigned on this code to index are &#8220;0&#8221;, &#8220;1&#8221;, &#8220;2&#8242; ,&#8230; not actual numbers which is inconvenient.

The `for`–**`in`** loop is for looping over object properties(keys) not **data**.

## ES6 Solution: for-of loop

To fix for-in loop problems, ES6 has introduced for-of loop which has this syntax for our example:

`<strong>for (let value of myArray){</strong>`

`<strong>console.log(value);</strong>`

`<strong>}</strong>`

Unlike forEach it works with break, continue and return.

It fixes for-in problems. Also it is for looping over object **data like the values in array**.

### Usages of for-of loop

The for-of loop is not just for arrays but it is for most of array like objects.It works on strings as a sequence of unicode characters:

`<strong>for ( let char of "my String") {</strong>`

`<strong>  console.log(char);</strong>`

`<strong>}</strong>`

It also works on DOM NodeList object and the arguments object. Just like with arrays, this makes it a little bit easier to iterate over these non-array objects.

Remember for-of does not work on plain objects.Use for-in fort them or the built-in object.keys() in for-of loop&#8221;

`<strong>for (var key of Object.keys(someObject)) {</strong>`  
`<strong>  console.log(key + ": " + someObject[key]);</strong>`  
`<strong>}</strong>`

New  ES6 collections (<code class="language-text">Map</code>, <code class="language-text">Set</code>, <code class="language-text">WeakMap</code>, and <code class="language-text">WeakSet</code>) also work with <code class="language-text">for-of</code> as well. Essentially <code class="language-text">for-of</code> can iterate over any object that could be iterated over. That’s where the power & worth of <code class="language-text">for-of</code> really come through. An object is _iterable_ if it implements a default iterator. 
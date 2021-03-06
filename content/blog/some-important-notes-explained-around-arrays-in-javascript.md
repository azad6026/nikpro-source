---
id: 32272
title: Some important notes explained around arrays in Javascript
date: 2018-09-23T20:24:35+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32272
permalink: /some-important-notes-explained-around-arrays-in-javascript/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/javascript-arrays.jpg
categories:
  - JAVASCRIPT
tags:
  - arrays
  - push
  - shift
  - unshift
---
In this article I will show some important notes around arrays in Javascript. We will talk about [some methods](https://www.nikpro.com.au/how-to-generate-a-mappable-array-in-javascript/) and tips of how to manipulate arrays.

### Avoid new Array(), Use [] instead

When creating arrays in Javascript do not use the new keyword. It confuses the code and no need to use that. WE better use the modern and clean brackets:


```
let points = new Array(40, 100, 1, 5, 25, 10); // Bad
let points = [40, 100, 1, 5, 25, 10];          // Good
```


### How to recognise arrays in Javascript

Practically there are a few ways to check if an object is an array. We can test it with this simple function:


```
let fruits = ["Banana", "Orange", "Apple", "Mango"];
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}
```


Therefor it always returns true if the argument is an array. Moreover the **instanceof** operator returns true if an object is created by a given constructor:


```
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits instanceof Array     // returns true
```


Finally the newest option to recognise arrays in Javascript is the ES6 isArray method. It returns true if the object is an array :


```
let fruits = ["Banana", "Orange", "Apple", "Mango"];
Array.isArray(fruits);     // returns true
```


### Methods pop and push, shift and unshift

Basically we use push and unshift methods to add and elements to an array. Also we use pop and shift to take an element out of an array:

  * `push` adds an element to the end.
  * `pop` takes an element from the end.
  * `shift` extracts the first element of the array and returns it
  * `unshift` adds the element to the beginning of the array  
    

As an example have a look at these example arrays in Javascript:


```
let fruits = ["Apple", "Orange"];<br/><br/>// Push
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear<br/><br/>// Unshift<br/>fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear
```


Obviously we get the same results with push and unshift.


```
let fruits = ["Apple", "Orange", "Pear"];<br/><br/>// Pop
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

// Shift
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear
```


However we do not get the same results here. Because pop removes the last element and shift takes out the very first element and that is how they work. 

**Note about performance:**

Here is a note about **performance** using these methods of arrays in Javascript :

The `shift` operation must do 3 things:

  1. Remove the first element with the index ``.
  2. Move all elements to the left, renumber them from the index `1` to ``, from `2` to `1` and so on.
  3. Update the `length` property of the array.


<img src="https://www.nikpro.com.auarray-shift.png" alt="" class="wp-image-32275" srcset="https://testgatsby.localarray-shift.png 593w, https://testgatsby.localarray-shift-300x72.png 300w" sizes="(max-width: 593px) 100vw, 593px" /> <figcaption><a href="https://javascript.info/array#methods-pop-push-shift-unshift" target="_blank" rel="noopener noreferrer">array shift</a></figcaption>
 

Therefor the more elements in the array, the more time to move them, more in-memory operations.

Also the `pop` method does not need to move anything, because other elements keep their indexes. That’s why it’s much more faster. We will have the similar rule with the `push` method.

We had a look at some methods and tips around arrays in Javascript here. Specially add and remove elements in arrays explained with some examples.

Thanks for reading.
---
id: 32219
title: Comparing Array.from and spread syntax in Javascript with examples
date: 2018-09-16T21:50:07+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32219
permalink: /comparing-array-from-and-spread-syntax-in-javascript-with-examples/
xyz_twap:
  - "1"
# image: ../../static/images/array-1568x490.jpeg
categories:
  - ES6
  - JAVASCRIPT
---
Definitively Array.from and [spread syntax](http://www.nikpro.com.au/what-is-spread-syntax-in-es6-and-how-to-use-it/) in Javascript are different from each other. Although we could use them in similar situations.

## Array.from and spread syntax definintion

### Array.from

According to MDN with `Array.from()` method we can create a new, shallow-copied `Array` instance from an array-like or iterable object. So it means you can create arrays from:

  * array-like objects (objects with a `length` property and indexed elements) or
  * [iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/iterable) (objects where you can get its elements, such as [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)).

### Spread syntax

Spread syntax allows an **iterable** to expand in places where 0+ arguments are expected. It does not work on **array-like objects (i.e. objects that have the `length` property and indexed elements) .**

## Copying arrays

As an example we can copy arrays with both methods just like this:


```
// Using Array.from<br />let a1 = [1,2,3];
let a2 = Array.from(a1);
a2.push(4)
a2 = [1, 2, 3, 4]
```



```
// Using spread syntax<br />let a1 = [1,2,3];
let a2 =[ ...a1];
a2.push(4)
a2 = [1, 2, 3, 4]
```


As a result we can use both in these case but the spread syntax is shorter and more readable.

## Create array from a map and set

Eventually we can create arrays from mapped objects or a set object using both array.from and spread syntax in practice:


```
<code>var m = new Map([[1, 2], [2, 4], [4, 8]]);&lt;br/>&lt;br/>// Using from method 
Array.from(m);</code><br /><br />// Using spread syntax<br />[...m];
```


Moreover we can use them both on a set object:


```
<code>var s = new Set(['foo', window]); &lt;br/>&lt;br/>//Using from method&lt;br/>Array.from(s);&lt;br/>&lt;br/>//Using spread syntax</code><br />[...s];
```


As a result in this case as well spread syntax is a better option as it makes the code look better.

<div class="wp-block-image">
  <figure class="aligncenter"><img src="http://www.nikpro.com.auarrays.png" alt="array.from vs spread" class="wp-image-32228" srcset="http://testgatsby.localarrays.png 376w, http://testgatsby.localarrays-300x107.png 300w" sizes="(max-width: 376px) 100vw, 376px" /></figure>
</div>

### map functions inside Array.from method

Comparably we better know `Array.from()` has an optional parameter `mapFn`, which allows us to execute a [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function on each element of the array (or subclass object) that is being created. Therefor we can use map function inside it like below:


```
<code>// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);      
// [2, 4, 6]</code>
```


### Array-like objects

However we only can use Array.from if we wanted to work on array-like objects. Take a look at this example:


```
<code>function f() {
  return Array.from(arguments);
}

const result = f(1, 2, 3);

// result =  [1, 2, 3]</code>
```


### Destructuring with spread

Practically one of the best funs using spread is with [destructuring](http://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/). Have a look at this example:


```
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };<br />console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }<br />
```


Moreover here is a thorough <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank" rel="noopener noreferrer">article</a> on this topic. Thankfully we can use spread syntax in most use cases and we better do. I looked at just a few usages here. It is very short and more maintainable and readable. Although there are some use cases which we have to use Array.from as mentioned. Thanks for reading.
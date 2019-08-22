---
id: 32151
title: Some() method in Javascript explained with examples
date: 2018-09-07T21:22:17+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32151
permalink: /some-method-in-javascript-explained-with-examples/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/09/some-js.jpeg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - some method
---
In this article some [method](http://www.nikpro.com.au/practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/) is explained with examples. It is a useful method with various use cases we could us it for.

## Some method definition

According to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank" rel="noopener noreferrer">MDN</a> the `<strong>some()</strong>` method tests whether at least one element in the array passes the test implemented by the provided function.

**Note:** some() does not execute the function for array elements without values and some() does not change the original array. Look at this simple example:

<pre class="wp-block-preformatted"><strong><code>function isBiggerThan10(element, index, array) {
  return element > 10;
}&lt;br/></code></strong><br /><strong><code>[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true</code></strong></pre>

Additionally we have used arrow functions to make it neater and more readable. Some will apply the function once for each element present in the array until it finds one where `callback` returns a [_truthy_](http://www.nikpro.com.au/truthy-or-falsy-values-in-javascript-and-how-to-work-with-them/) value. Immediately it returns true then.

Moreover we can shorten the whole code to one function as some accept the function as its array argument:

<pre class="wp-block-preformatted"><strong>[2, 5, 8, 1, 4].some((element, index, array)=> element > 10); // false</strong><br /><strong>[12, 5, 8, 1, 4].some((element, index, array)=> element > 10);// true</strong><br /></pre>

Really sweet and clean. Huh! Lets have a look at another examples.

**Some method to check availability inside array**

OF course there are other use cases for some. We might need to check if a user has admin privileges.

<pre class="wp-block-preformatted"><strong><code>const userPrivileges = ['user', 'user', 'user', 'admin'];&lt;br/>userPrivileges.some( element => element === 'admin');</code></strong><br /><strong><code>// will be equal to true</code></strong></pre>

There is also another example of checking if something exists inside array:

<pre class="wp-block-preformatted"><strong><code>const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false</code></strong></pre>

In addition we have a similar example with numbers :

<pre class="wp-block-preformatted"><strong>const arr = [2, 5, 8, 1, 4]
function checkAvailability(arr, val) 
{
  return arr.some(
           function(arrVal) 
           {
             return val === arrVal;
           } );
}

checkAvailability(arr, 2);<br />checkAvailability(arr, 87);</strong></pre>

**some and includes methods difference**

Similarly includes checks if an array contains a certain value. It’s similar to `.some()`,but instead of looking for a condition to pass, it looks if the array contains a specific value:

<pre class="wp-block-preformatted"><strong><code>const names = ['sophie', 'george', 'waldo', 'stephen', 'henry'];&lt;br/>names.includes('waldo');</code></strong><br /><strong><code>// will be equal to true</code></strong></pre>

In this short post I explained some method which has its own use cases. We also saw its difference with includes method. Respectively we will explore all array methods in the future articles like we [did](http://www.nikpro.com.au/javascript-es6-reduce-method/) [before](http://www.nikpro.com.au/practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/). Thanks fo reading.
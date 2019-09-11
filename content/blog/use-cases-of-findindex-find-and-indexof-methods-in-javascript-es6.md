---
id: 32370
title: Use cases of findIndex(), find() and indexOf() methods in Javascript ES6
date: 2018-10-08T20:10:29+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32370
permalink: /use-cases-of-findindex-find-and-indexof-methods-in-javascript-es6/
xyz_twap:
  - "1"
image: ../../static/images/find-methods.jpeg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - find()
  - findIndex()
  - indexOf()
---
Today I had a challenge with array indexes and finding the right element to delete in an application. In this article I want to explain findIndex(), find() and indexOf() methods in Javascript.

## findIndex(), find() and indexOf() methods

Definitively we have the descriptions of these three useful methods:

  * With findIndex() method we return the **index** of the first element in the array **that satisfies the provided testing function**.
  * Using find() method we return the **value** of the **first element** in the array **that satisfies the provided testing function. **
  * Also with indexOf() we return** the first index** at which a given **element can be found in the array**, or -1 if it is not present.****

Practically we could say the first two methods are similar to each other. Also they could be used in different use cases. Lets check out some examples.

#### Find index of a fruit with findIndex()

Firstly we will find the index of a fruit inside a fruit array using [arrow](http://www.nikpro.com.au/some-arrow-function-benefits-with-examples-explained/) functions:

```<code>const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];&lt;br/>// find the index of the "&lt;strong>&lt;code>blueberries"</code>
const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index); // 3
console.log(fruits[index]); // blueberries&lt;/code>&lt;/strong></pre>

As a use case this is good when we want to find the first item that matches our condition when it exists in the array. Otherwise, it returns -1, indicating no element passed the test.

#### Find the odd element with findIndex()

Also this is another example to find the odd element inside an array:

```let arr = [2, 4, 6, 8, 9, 10, 12];<br />// create the function to check if the item is odd<br /><code>function isOdd(i) {&lt;br/>  return i % 2 !== 0;&lt;br/>}&lt;br/>//return the index</code><br />arr.findIndex(isOdd);<br />// 4<br /></pre><figure class="wp-block-image">

<img src="http://www.nikpro.com.aufind-index.png" alt="find index" class="wp-image-32372" srcset="http://testgatsby.localfind-index.png 1680w, http://testgatsby.localfind-index-300x113.png 300w, http://testgatsby.localfind-index-768x288.png 768w, http://testgatsby.localfind-index-1024x384.png 1024w, http://testgatsby.localfind-index-1568x588.png 1568w" sizes="(max-width: 1680px) 100vw, 1680px" /> <figcaption>find it</figcaption></figure> 

#### Find the fruit object with find()

```<code>const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
// look for fruit with the name property of "cherries"
const result = inventory.find( fruit => fruit.name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }</code>```

Above example shows how we can find an object inside an array using find() method looking for an object property( name here).

#### Find the odd element with find() this time

```let arr = [2, 4, 6, 8, 9, 10, 12];<br />// create the function to check if the item is odd<br /><code>function isOdd(i) {&lt;br/>  return i % 2 !== 0;&lt;br/>}&lt;br/>//return the number this time</code><br />arr.find(isOdd);<br />// 49```

Similar function being passed to find(0 but this time we have found the actual number.<figure class="wp-block-image">

<img src="http://www.nikpro.com.aufind-it.jpg" alt="find it" class="wp-image-32371" srcset="http://testgatsby.localfind-it.jpg 386w, http://testgatsby.localfind-it-300x239.jpg 300w" sizes="(max-width: 386px) 100vw, 386px" /> </figure> 

The find() method is great when we are looking for specific items. <a href="https://codeburst.io/learn-javascript-es6-array-find-array-findindex-7fe4f63c6974" target="_blank" rel="noopener noreferrer">Note</a> that:

  * the condition must be provided as a function like above
  * <span style="color: #23282d; font-family: Menlo, Consolas, monaco, monospace;"><span style="background-color: #e8eaeb;">find() executes</span></span> a callback function **once for each element in the array until it finds a value that returns true** or it returns undefined
  * It does not mutate or change the original Array.

#### Find an element using indexOf()

Finally take a look at this example to find the element inside the array. If we found the element it updates the array and if not just reports it:

```<code>function updateVegetablesCollection (veggies, veggie) {&lt;br/>    // do we have a veggie by id of -1 ? &lt;strong>&lt;code>(means does not exist)</code>
    if (veggies.indexOf(veggie) === -1) {<br />    // add it to array if not
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);<br />    // already exists? report it then
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach'); 
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach'); 
// spinach already exists in the veggies collection.&lt;/code>&lt;/strong></pre>

Nice and sweet. Practically we could use these useful methods in different use cases specifying various conditions. We just need to know which one suits in the situation the best. Find an element value and do something with it using its index with indexOf(). Use find() method to actually find an element passing a function to test the condition. And with findIndex() find out which element first meets your condition as specified. 

Thank you for reading.
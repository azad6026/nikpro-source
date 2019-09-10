---
id: 31948
title: Higher order functions in Javascript with examples
date: 2018-08-01T21:57:24+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31948
permalink: /higher-order-functions-in-javascript-with-examples/
image: higher-order-functions-1568x882.jpg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - arrow functions
  - filter
  - higher order functions
  - map
  - reduce
---
Higher order functions in Javascript are used in two major types. They are either taking other functions as an argument or return another function as a result. We have been using them already. Filter, map and reduce are great examples of higher order functions. We use [arrow functions](http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) in our examples.

### An example with filter

Take a look at this example:

`<strong>var animals = [</strong>`  
`<strong>  { name: ‘Waffles’, type: ‘dog’, age: 12 },</strong>`  
`<strong>  { name: ‘Fluffy’, type: ‘cat’, age: 14 },</strong>`  
`<strong>  { name: ‘Spelunky’, type: ‘dog’, age: 4 },</strong>`  
`<strong>  { name: ‘Hank’, type: ‘dog’, age: 11 },</strong>`  
`<strong>];</strong>`  
`<strong>var oldDogs = animals.filter(function(animal) {</strong>`  
`<strong>  return animal.age > 10 && animal.type === ‘dog’;</strong>`  
`<strong>});</strong>`

``The oldDogs will now be an array that contain only Waffles and Hank objects. [Filter](http://www.nikpro.com.au/practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/) is taking a function with the array as input and applies that function into the array to return the result. That function is called callback function. If it returns true, the oldDogs variable will hold a result and a new filtered array. It is one of the wonderful usages of higher order functions. 

This is another example:

`<strong>const people = [</strong>`  
`<strong>  { name: ‘John Doe’, age: 16 },</strong>`  
`<strong>  { name: ‘Thomas Calls’, age: 19 },</strong>`  
`<strong>  { name: ‘Liam Smith’, age: 20 },</strong>`  
`<strong>  { name: ‘Jessy Pinkman’, age: 18 },</strong>`  
`<strong>];</strong>`

`<strong>const peopleAbove18 = </strong><strong>function(collection) {</strong>`  
`<strong>  return collection</strong>`  
`<strong>  .filter(function(person){person.age >= 18});</strong>`  
`<strong>}</strong>`

Or simplify it using [arrow function](http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/):

`<strong>const peopleAbove18 = (collection) => {</strong>`  
`<strong>  return collection</strong>`  
`<strong>  .filter((person) => person.age >= 18);</strong>`  
`<strong>}</strong>`

Obviously we have used arrow functions here and have a neat and clean code filtering people with age 18 or over and assign it to the collection array.

### Using maps as higher order functions

We will use our dog example with [filter and map](http://www.nikpro.com.au/practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/) this time using map to create an array of names for us:

`<strong>var animals = [</strong>`  
`<strong>  { name: ‘Waffles’, type: ‘dog’, age: 12 },</strong>`  
`<strong>  { name: ‘Fluffy’, type: ‘cat’, age: 14 },</strong>`  
`<strong>  { name: ‘Spelunky’, type: ‘dog’, age: 4 },</strong>`  
`<strong>  { name: ‘Hank’, type: ‘dog’, age: 11 },</strong>`  
`<strong>];</strong>`  
`<strong>var oldDogNames = animals.filter(function(animal) {</strong>`  
`<strong>  return animal.age > 10 && animal.type === ‘dog’;</strong>`  
`<strong>}).map(function(animal) {</strong>`  
`<strong>  return animal.name;</strong>`  
`<strong>});</strong>`

The oldDogNames will now be the array [ ‘Waffles’, ‘Hank’ ]. We can simplify the code using arrow functions again:

`<strong>var oldDogNames = animals</strong>`  
`<strong>  .filter((animal) =>animal.age > 10 &&animal.type === ‘dog’)</strong>`  
`<strong>  .map ((animal) =>animal.name);</strong>`

Therefor we have a much cleaner and more maintainable code using arrow functions with our higher order functions.

### Reduce and higher order functions

[Reduce](http://www.nikpro.com.au/javascript-es6-reduce-method/) could be used beautifully as a higher order function. In peoples collection, we would like to sum up their ages.  It’s basically looping through the collection and increment a variable with the age.

`<strong>const sumAge = (collection) => {</strong>`  
`<strong>  let num = 0;</strong>`

`<strong>  collection.forEach((person) => {</strong>`  
`<strong>    num += person.age;</strong>`  
`<strong>  });</strong>`

`<strong>  return num;</strong>`  
`<strong>}</strong>`

Using reduce we save lots of code writing and will have a cleaner and more readable code:

`<strong>const sumAge = (collection) => collection.reduce((sum, person) => {</strong>`  
`<strong>  return sum + person.age;</strong>`  
`<strong>}, 0);</strong>`

We used 0 as the initial value in our [reduce function](http://www.nikpro.com.au/javascript-es6-reduce-method/).

Using higher order function and combining ES6 techniques like arrow functions will help to level up the code and reduce amount of unwanted code along the way. We will have other articles about these functions later on with modern Javascript syntax.
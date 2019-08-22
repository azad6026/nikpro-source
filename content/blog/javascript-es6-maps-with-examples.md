---
id: 31906
title: Javascript ES6 maps and how to use them in practice
date: 2018-07-24T21:17:10+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31906
permalink: /javascript-es6-maps-with-examples/
image: /wp-content/uploads/2018/07/es6-maps.jpg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - es6 maps
  - maps and arrays
---
There has never been a good data structure in Javascript such as ES6 maps for mapping values to values. The key thing about maps are:

  * You could use any data type even object type for key value pairs which is not possible if you use objects( Objects use strings, integer and symbols only)
  * As the name map suggests you can have a look-up map structure to find values for your unique keys with special iteration

## Define a map

This is how we could create an ES6 map:

`<strong>var map = new Map(); //Empty Map</strong>`  
`<strong>var map = new Map([[1,2],[2,3]]); // map = {1=>2, 2=>3}</strong>`

Map actually creates an iterable array with elements of key-value pairs.

### Create a map and set the values

Lets create some examples and see some map methods:

Create the map object(Yes map is an object itself):

`<strong>var myMap = new Map();</strong>`

As mentioned before we could have different type of key-value pairs. We create three different types here:

`<strong>var keyString = 'a string',</strong>`  
`<strong>keyObj = {},</strong>`  
`<strong>keyFunc = function() {};</strong>`

And we set thier values using the **set** method:

`<strong>myMap.set(keyString, "value associated with 'a string'");</strong>`  
`<strong>myMap.set(keyObj, 'value associated with keyObj');</strong>`  
`<strong>myMap.set(keyFunc, 'value associated with keyFunc');</strong>`

WE could check the map size (similar to length) using the **size** method:

`<strong>myMap.size; // 3</strong>`

### Get the key values

We could get the values using the get method:

`<strong>myMap.get(keyString); // "value associated with 'a string'"</strong>`  
`<strong>myMap.get(keyObj); // "value associated with keyObj"</strong>`  
`<strong>myMap.get(keyFunc); // "value associated with keyFunc"</strong>`

`<strong>myMap.get('a string'); // "value associated with 'a string'"</strong>`  
`<strong>// because keyString === 'a string'</strong>`

In the below examples,we get undefined result because the value specified is not found as keys in the map.

`<strong>myMap.get({}); // undefined, because keyObj !== {}</strong>`  
`<strong>myMap.get(function() {}) // undefined, because keyFunc !== function () {}</strong>`

Iterate over maps using for.. of 

We could iterate through maps using [for&#8230; of loop](http://www.nikpro.com.au/for-loop-in-javascript-and-es6-explained/) in different ways. Check this example:

`<strong>var myMap = new Map();</strong>`  
`<strong>myMap.set(0, 'zero');</strong>`  
`<strong>myMap.set(1, 'one');</strong>`

As a key-value pair:

```<strong>for (var [key, value] of myMap) {</strong>`  
`<strong>console.log(key + ' = ' + value);</strong>`  
`<strong>}</strong>`  
`<strong>// 0 = zero</strong>`  
`<strong>// 1 = one</strong>`

Only keys:

`<strong>for (var key of myMap.keys()) {</strong>`  
`<strong>console.log(key);</strong>`  
`<strong>}</strong>`  
`<strong>// 0</strong>`  
`<strong>// 1</strong>`

Iterating through values:

`<strong>for (var value of myMap.values()) {</strong>`  
`<strong>console.log(value);</strong>`  
`<strong>}</strong>`  
`<strong>// zero</strong>`  
`<strong>// one</strong>`

And using entries method to loop through key-value pairs and log them out:

`<strong>for (var [key, value] of myMap.entries()) {</strong>`  
`<strong>console.log(key + ' = ' + value);</strong>`  
`<strong>}</strong>`  
`<strong>// 0 = zero</strong>`  
`<strong>// 1 = one</strong>`

### Using forEach loop to iterate maps

Like any object maps have built-in forEach method for iteration:

`<strong>myMap.forEach(function(value, key) {</strong>`  
`<strong>console.log(key + ' = ' + value);</strong>`  
`<strong>});</strong>`  
`<strong>// Will show 2 logs; first with "0 = zero" and second with "1 = one"</strong>`

## Maps and arrays

ES6 maps look like arrays but they are not arrays. However as mentioned about using Array.form around NodeLists in [this post](http://www.nikpro.com.au/javascript-nodelist-and-html-dom-collection-and-how-to-use-them/), we could convert them to each other:

Create an array:

`<strong>var kvArray = [['key1', 'value1'], ['key2', 'value2']];</strong>`

We use the regular Map constructor to transform a 2D key-value Array into a map:

```<strong>var myMap = new Map(kvArray);</strong>`

`<strong>myMap.get('key1'); // returns "value1"</strong>`

We could also use the Array.from function to transform a map into a 2D key-value Array:

`<strong>console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray</strong>`

Also we could use the keys or values iterators and convert them to an array:

`<strong>console.log(Array.from(myMap.keys())); // Will show ["key1", "key2"]</strong>`

Now lets clone a map just like arrays. The data itself is not cloned:

`<strong>var original = new Map([</strong>`  
`<strong>[1, 'one']</strong>`  
`<strong>]);</strong>`

`<strong>var clone = new Map(original);</strong>`

`<strong>console.log(clone.get(1)); // one</strong>`  
`<strong>console.log(original === clone); // false. Useful for shallow comparison</strong>`

We could merge maps keeping the uniqueness of the keys. This is a good example:

`<strong>var first = new Map([</strong>`  
`<strong>[1, 'one'],</strong>`  
`<strong>[2, 'two'],</strong>`  
`<strong>[3, 'three'],</strong>`  
`<strong>]);</strong>`

`<strong>var second = new Map([</strong>`  
`<strong>[1, 'uno'],</strong>`  
`<strong>[2, 'dos']</strong>`  
`<strong>]);</strong>`

We merge two maps. The last repeated key wins which in here the second one is the winner. The ES6 [spread operator](http://www.nikpro.com.au/what-is-spread-syntax-in-es6-and-how-to-use-it/) essentially converts a Map to an Array:

`<strong>var merged = new Map([...first, ...second]);</strong>`

`<strong>console.log(merged.get(1)); // uno</strong>`  
`<strong>console.log(merged.get(2)); // dos</strong>`  
`<strong>console.log(merged.get(3)); // three</strong>`

Lets use the same approach to merge those maps with an array and again the last repeated key wins. (the last pair is for the array then):

`<strong>var merged = new Map([...first, ...second, [1, 'eins']]);</strong>`

`<strong>console.log(merged.get(1)); // eins, the array wins here as it comes last in merge</strong>`  
`<strong>console.log(merged.get(2)); // dos</strong>`  
`<strong>console.log(merged.get(3)); // three</strong>`

This is another example of using all methods of maps:

`<strong>const map = new Map()</strong>`

`<strong>map.set(5, "Hello")</strong>`  
`<strong>map.set("5", "World")</strong>`  
`<strong>map.set("John", "The revelator")</strong>`  
`<strong>map.size // 3</strong>`  
`<strong>// Map { 5 => 'Hello', '5' => 'World', 'John' => 'The revelator' }</strong>`

`<strong>map.get(5) // Hello</strong>`  
`<strong>map.has('5') // true</strong>`  
`<strong>map.get('Random') // undefined</strong>`  
`<strong>map.has('John') // true</strong>`

`<strong>map.delete('5')</strong>`  
`<strong>map.size // 2</strong>`  
`<strong>// Map { 5 => 'Hello', 'John' => 'The revelator' }</strong>`

`<strong>map.clear()</strong>`  
`<strong>map.size // 0</strong>`  
`<strong>// Map {}</strong>`

### Objects in ES6 maps

You could also use objects in maps and it works just perfect:

`<strong>const map = new Map()</strong>`

``Create two objects:

`<strong>let obj1 = {}</strong>`  
`<strong>let obj2 = {}</strong>`

Assign them to the map:

`<strong>map.set(obj1, 12)</strong>`  
`<strong>map.set(obj2, "OBJECT")</strong>`  
`<strong>map.size // 2</strong>`

Now the map looks like this:

`<strong>console.log(Array.from(map));</strong>`

`<strong>// Map { {} => 12, {} => 'OBJECT' }</strong>`

With these examples we now have abetter idea about ES6 maps.How to create and manipulate them. You can also refer to <a href="https://medium.com/front-end-hacking/es6-map-vs-object-what-and-when-b80621932373" target="_blank" rel="noopener noreferrer">this article</a> about maps versus objects and <a href="https://dev.to/damcosset/maps-in-javascript-es6-4301?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email" target="_blank" rel="noopener noreferrer">this one</a> for details and <a href="https://www.taniarascia.com/real-world-examples-of-map-filter-and-reduce-in-javascript/" target="_blank" rel="noopener noreferrer">this one </a> for a real world example. Thanks for reading.
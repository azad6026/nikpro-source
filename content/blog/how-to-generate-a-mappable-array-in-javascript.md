---
id: 32139
title: How to generate a mappable array in Javascript
date: 2018-09-05T20:36:02+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32139
permalink: /how-to-generate-a-mappable-array-in-javascript/
image: /images/mappable-arrays-in-js-1568x882.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - mappable array
---
Doing researches around new Javascript techniques I came across this technique from <a href="https://itnext.io/@shawn.webdev?source=post_header_lockup" target="_blank" rel="noopener noreferrer">Shawn Reisner </a>of how to generate a mappable array in Javascript. Let me explain it.

## Generate an array

Basically we create arrays in the old way like the code below. If we want to create an array of numbers for example:

```const arr = [];<br />for (let i = 0; i &lt; 100; i++) {<br />  arr[i] = i;<br />}```

Generally this is correct and works as expected. We will get an array of 100 numbers starting from 0 to 99. But as we learnt [about higher order functions and map](http://www.nikpro.com.au/javascript-es6-maps-with-examples/) and other ES6 [features](http://nikpro.com.au/category/es6) we also want to do this in ES6 way.

## Create a mappable array

Luckily we have higher order functions to help us and the best option is map method. We can just create a mappable array of length 100 like this:

```const arr = Array(100);```

And map each index to a number using map:

```const arr = Array(100).map((_, i) => i);```

As a result this is what we get:<figure class="wp-block-image">

<img src="http://www.nikpro.com.aumapable-array.png" alt="" class="wp-image-32140" srcset="http://testgatsby.localmapable-array.png 800w, http://testgatsby.localmapable-array-300x152.png 300w, http://testgatsby.localmapable-array-768x389.png 768w" sizes="(max-width: 800px) 100vw, 800px" /> </figure> 

Surprisingly we get undefined. As an explanation we know arrays are objects in practice. So the array like  **[&#8216;one&#8217;, &#8216;two&#8217;, &#8216;three&#8217;]** is equivalent to this object:

```{<br />  0: 'one',<br />  1: 'two',<br />  2: 'three',<br />  length: 3<br />}```

Each array item has a key and value. When we create a new array with the **Array constructor**, it creates a new array object with its _length _property set to the value you passed in, but otherwise _the object is a vacuum_.

So in our case we actually have an array with no keys with undefined  values and only the length of 100:

```{<br />  //no index keys!<br />  length: 100<br />}```

Therefor to make a mappable array we need to have keys even if the value is empty of in terms of Javascript &#8220;undefined&#8221;. In map the callback is only executed _if the key exists _on the object.  **The default behaviour in JavaScript is to return _undefined _if you try to access the value of an object for a key that does not exist.**

## A truly mappable array

The best way to do this is to [spread the array ](http://www.nikpro.com.au/what-is-spread-syntax-in-es6-and-how-to-use-it/)out into an empty array. Then look at the result:

```const arr = [...Array(100)].map((_, i) => i);<br />console.log(arr[0]);<br />// 0```

Spread operator actually creates a copy with indexes for all array items. It simply loops through the array from 0 to _length _and creates a new index key in the enclosing array with the value returned from the spreading array at the current index.:

```{<br />  0: undefined,<br />  1: undefined,<br />  2: undefined,<br />  ...<br />  99: undefined,<br />  length: 100<br />}```

Therefor we will have an array with key value pairs although the values are undefined as a Javascript default for empty arrays. But this time we have a mappable array that we can easily manipulate. Thanks for reading. 
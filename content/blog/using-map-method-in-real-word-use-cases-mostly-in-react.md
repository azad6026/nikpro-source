---
id: 32664
title: Using map method in real world use cases; mostly in React
date: 2019-01-24T19:36:47+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32664
permalink: /using-map-method-in-real-world-use-cases-mostly-in-react/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/map-method.png
categories:
  - JAVASCRIPT
  - React
tags:
  - map method
---

As we know the&nbsp;**map()**&nbsp;[method](https://www.nikpro.com.au/using-map-method-in-react-components-with-examples-explained/) creates a new array with the results of calling a provided function on every element in the calling array.

Therefore whenever we need to manipulate data without actually changing the data itself, map is the best option.

## Render lists using map

Basically the most use case for map in React specifically is to ender lists of items. Whether it is a list of blog posts or comments or just a simple list of names as below:

```
const names = ["Denis", "Dan", "Fred", "Jane", "Lena"];<br />const NamesList = () => (<br /> &nbsp; <div><br /> &nbsp; &nbsp; <ul>{names.map(name => <li key={name}> {name} </li>)}</ul><br /> &nbsp; </div><br /> ); <br />
```


We return JSX code using map method to create the list for us. As we know we need to specify the key attribute in our React code to have a unique identity for each list item.<figure class="wp-block-image">

<img src="https://www.nikpro.com.aumap-in-react-1024x576.png" alt="map in react" class="wp-image-32666" srcset="https://testgatsby.localmap-in-react-1024x576.png 1024w, https://testgatsby.localmap-in-react-300x169.png 300w, https://testgatsby.localmap-in-react-768x432.png 768w, https://testgatsby.localmap-in-react.png 1140w" sizes="(max-width: 1024px) 100vw, 1024px" /> <figcaption>map method in React</figcaption></figure>

## Create an array from Objects

Additionally we can use the map method to manipulate array of objects. In this example we create and array based on an object and add an age for each person in the new array:


```
 const myUsers = [<br /> &nbsp; &nbsp; { name: 'Dan', likes: 'chicken' },<br /> &nbsp; &nbsp; { name: 'Lena', likes: 'meat' },<br /> &nbsp; &nbsp; { name: 'Fred', likes: 'fish' }<br /> ]<br /> <br /><br /> const foodLovers = myUsers.map(item => {<br /> &nbsp; &nbsp; const container = {};<br /> &nbsp; &nbsp; container[item.name] = item.likes;<br /> &nbsp; &nbsp; container.age = item.name.length * 10;<br /> <br /> &nbsp; &nbsp; return container;<br /> })<br /> <br /> console.log(foodLovers);<br /> // [{Dan: "chicken", age: 30}, {Lena: "meat", age: 40}, {Fred: "fish", age: 40}] 
```


## Using map like a filter method

Although we have [filter and other methods](https://www.nikpro.com.au/practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/) in this use case but sometimes we can use map to filter a specific data from an array or array of objects. Have a look at a <a rel="noreferrer noopener" aria-label="this (opens in a new tab)" href="https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d" target="_blank">simple</a> example which I explain below:


```
// What you have<br />var officers = [<br />  { id: 20, name: 'Captain Piett' },<br />  { id: 24, name: 'General Veers' },<br />  { id: 56, name: 'Admiral Ozzel' },<br />  { id: 88, name: 'Commander Jerjerrod' }<br />];<br />// What you need<br />[20, 24, 56, 88]
```


Using map we can simply write the code:


```
const officersIds = officers.map(officer => officer.id);
```


Obviously the result is simple and efficient and could be used in loops and lists as expected from map.

Practically map is the number one solution whenever we have some kind of data ready to be used. Either we want to loop through it or just simply take a new array out of it. We will not change the actual data but change the way and how we are going to use it. Therefore it is mostly used when we get iterable data from outside or side effects especially in React.

Thank you for reading.

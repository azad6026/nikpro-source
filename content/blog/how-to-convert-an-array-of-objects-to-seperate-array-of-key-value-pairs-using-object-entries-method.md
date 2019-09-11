---
id: 32394
title: How to convert an array of objects to seperate array of key value pairs using Object.entries method
date: 2018-10-12T20:16:16+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32394
permalink: /how-to-convert-an-array-of-objects-to-seperate-array-of-key-value-pairs-using-object-entries-method/
xyz_twap:
  - "1"
image: ../../static/images/js-objects.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - Object.entries
  - objects
---
Sometimes we need to convert an [array of objects](http://www.nikpro.com.au/converting-objects-to-arrays-and-looping-through-them-with-object-keys-and-object-values/) to seperate array of key value pairs. For example in order to create another array or use its key value pairs separately. Object .entries method is a perfect choice were even map method cannot help you out.

## Object.entires as a method

Basically we get an array of key value pairs back from this method in the same order the key numerics. We can get one single object of the array like object as the return value:

```//  based on array keys the object woth key "2" is the first object with index 0 so it was returned here<br />const object3 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(object3)[0]);
// expected output: Array ["2", "b"]```

In addition we can create an array of key value pairs based on single objects inside an array:

```<code>// return an array of an array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]</code>```

### Loop through an object using Object.entries

Practically we could use this method to iterate through an object nd manipulate the returned values:

```<code>const obj = { first: 'answer', second: 'answer' };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "first: answer", "second: answer"</code>```

### Convert an array of objects to desired array

Imagine we have this array of persons from our database server which has unique keys per object ( like their bank account number) and each object contains information about that person. Ideally we need an array of persons to show them in the screen. 

```const databaseUsers = { <br />key1: {
    id: "1",
    name: "John",
    age: "27"
},
key2: {
    id: "2",
    name: "Gary",
    age: "29"
},
key3: {
    id: "3",
    name: "Dave",
    age: "47"
}<br />}```

But we need to give each person&#8217;s container a unique id to be able to manipulate it easier later on. As an example we want to edit or delete that persons information from the database. <figure class="wp-block-image">

<img src="http://www.nikpro.com.aufor-...-of-loop.png" alt="" class="wp-image-32397" srcset="http://testgatsby.localfor-...-of-loop.png 880w, http://testgatsby.localfor-...-of-loop-300x188.png 300w, http://testgatsby.localfor-...-of-loop-768x480.png 768w" sizes="(max-width: 880px) 100vw, 880px" /> <figcaption>for &#8230; of loop</figcaption></figure> 

We will use [for .. of](http://www.nikpro.com.au/for-loop-in-javascript-and-es6-explained/) to loop through the above object and using Object.entries() we will create an array of persons which holds their with a unique key per person:

```const persons = [];<br />for (const [key, value] of Object.entries(databaseUsers)) {<br /> // create a person object to hold each person's data<br />// add the unique key for each as their id
    const person = {
        id: key,
        name: value.name,
        age: value.age
    };
    // add all persons to the array here
    persons.push(person);
}<br /></pre>

Therefor we could have an array of persons as below which we can then display as we need in our application of or code:

```[{id: "key1", name: "John", age: "27"}, 
{id: "key2", name: "Gary", age: "29"}, 
{id: "key3", name: "Dave", age: "47"}]```

Because of the nature of **Object.entries** we can use it to re create or manipulate different ind of objects. It is actually a combination of [**Object,keys**](http://www.nikpro.com.au/converting-objects-to-arrays-and-looping-through-them-with-object-keys-and-object-values/) and **[Object.values](http://www.nikpro.com.au/converting-objects-to-arrays-and-looping-through-them-with-object-keys-and-object-values/)** with full control over keys and values both.

Thank you for reading.
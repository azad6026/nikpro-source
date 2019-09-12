---
id: 32400
title: 'How arrow functions fixed &#8220;this&#8221; keyword problem in ES6?'
date: 2018-10-14T21:32:47+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32400
permalink: /how-arrow-functions-fixed-this-keyword-problem-in-es6/
xyz_twap:
  - "1"
# image: ../../static/images/arrow-22this22-1568x687.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - arrow functions
  - this keyword
---
In this article we will take a look at [how arrow functions](http://www.nikpro.com.au/some-arrow-function-benefits-with-examples-explained/) fixed the old ES5 problem around&#8221;this&#8221; keyword. What problem? &#8220;This&#8221; keyword cannot be relied on in different scope of code and they give unexpected results. By scope I simply mean brackets as they define the scope in Javascript.

## &#8220;This&#8221; keyword

Practically In **JavaScript** it has been defined that , **&#8220;this&#8221;**  is the object that &#8220;owns&#8221; the **JavaScript** code. 

The **value of this**, when used in a **function**, is the **object** that &#8220;owns&#8221; the function. The value of this, when used in an **object**, is the **object itself**. The this keyword in an object constructor does not have a value.

### &#8220;this&#8221; keyword in an object

Using ES5 version we could have an object like below. Take a look what &#8220;this&#8221; gives us inside a function of an object:


```
var person = {
  name: 'John',
  showName: function() {
    console.log(this.name);
  }
};
person.showName(); // John
```


Perfect. We expected that result. It shows the name a John. Now if we add an array to our object and call an [array method](http://www.nikpro.com.au/some-important-notes-explained-around-arrays-in-javascript/) inside the object function we get a totally different result:


```
var person = {
  name: 'John',
  hobbies: ['sports', 'eating', 'coding'],
  showHobbies: function() {
    this.hobbies.forEach(function(hobby) {
      console.log(this.name + " wants to do " + hobby);
    });
  }
};<br />person.showHobbies();
[object Window]  wants to do sports
[object Window]   wants to do eating
[object Window]   wants to do coding
```


Surprisingly we see that &#8220;this&#8221; keyword does not refer to the object anymore which name belongs to it but it refers to the main parent which is window object.

**Because ‘_this_’, always references the owner of the function it is in, for this case — since it is now out of scope — the window/global object. It will happen to any standalone function:**


```
var anyFunction = function(){<br />  console.log(this);<br />}<br />any/function(); // [object Window]
```
<figure class="wp-block-image">

<img src="http://www.nikpro.com.authe-arrow.jpeg" alt="the arrow" class="wp-image-32402" /> </figure> 

### Fix 1: using another variable to refer :this&#8221; keyword&#8221;


```
var person = {
  name: 'John',
  hobbies: ['sports', 'eating', 'coding'],
  showHobbies: function() {
    var _this = this;
    this.hobbies.forEach(function(hobby) {
      console.log(_this.name + " loves " + hobby); 
    });
  }
};<br />
person.showHobbies();
// John loves sports
// John loves eating
// John loves coding
```


We created a variable **outside of the method’s inner function** (hobbies function). Now the ‘forEach’ method **gains access to ‘_this_’ and thus the object’s properties and their values**. 

### Fix 2: Using &#8220;bind&#8221;

We could also use bind **to attach the ‘_this_’ keyword** that refers to the method to the method’s inner function.


```
var person = {
  name: 'John',
  hobbies: ['sports', 'eating', 'coding'],
  showHobbies: function() {
    this.hobbies.forEach(function(hobby) {
      console.log(this.name + " loves " + hobby);
    }.bind(this));
  }
};<br />
person.showHobbies();<br />// John loves sports
// John loves eating
// John loves coding
```


### The best solution : arrow functions

Why arrow function solves it? Because in arrow function&#8221;this&#8221; keyword lives inside the scope of the function. Meaning the curly buckets as I mentioned in the beginning.


```
var person = {
  name: 'John',
  hobbies: ['sports', 'eating', 'coding'],
  showHobbies: function() {
    this.hobbies.forEach((hobby) => {
      console.log(this.name + " loves " + hobby);
    });
  }
};<br />person.showHobbies();<br />// John loves sports
// John loves eating
// John loves coding
```
<figure class="wp-block-image is-resized">

<img src="http://www.nikpro.com.aufat-arrow.png" alt="fat arrow" class="wp-image-32403" width="580" height="280" srcset="http://testgatsby.localfat-arrow.png 323w, http://testgatsby.localfat-arrow-300x145.png 300w" sizes="(max-width: 580px) 100vw, 580px" /> <figcaption>arrow functions fixed &#8220;this&#8221; problem</figcaption></figure> 

Great. We have solved it. It keeps the code in scope and we always refer to the right object with &#8220;this&#8221; at the end. Using arrow functions really saves the code and makes it more readable, maintainable and solves the old &#8220;this keyword problem. 

Thank you for reading.
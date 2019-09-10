---
id: 32710
title: Event listeners and DOM interactions in modern Javascript explained with examples
date: 2019-03-11T19:43:46+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32710
permalink: /event-listeners-and-dom-interactions-in-modern-javascript-explained-with-examples/
xyz_twap:
  - "1"
image: /images/es6-events.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - es6
  - event listeners
---

[Event listeners and their interaction](http://www.nikpro.com.au/event-handlers-and-event-listeners-in-javascript-part-2/) with DOM is a very important part of Javascript. There has been many solutions and ways to deal with them and write the code. In this article we write some simple but modern and very useful examples.

## Attach event listener

We most likely write the code to add and event to an element like this:

```Const Element1 = document.querySeletor(#name);<br />Element1.addEventListener ("click", function() {<br /> //this function does stuff <br /> });```

Basically after defining the element, we use addEventListener method to attach the **&#8220;event&#8221;** and the action that it should do to the element. But this code adds the event only to one element. What if we had a few similar elements to be selectee?

## Add the event to multiple elements

Using a forEach loop is the best way in modern ES6 code to add event listeners to multiple elements:

```let elementsArray = document.querySelectorAll(".element");<br /> elementsArray.forEach(function(elem) {<br />     elem.addEventListener("click", function() {<br />         //this function does stuff<br />     });<br /> });```

We used **querySelectorAll** to select all elements and put them into an array . Then simply loop through it and attach the event to each and every one of them. Therefore we don&#8217;t need to write the code for each element and save many lines of code.

### Add event listener to element with anonymous array

Also if we only have a few different elements, we could apply the method directly to an array of them:

```[ Element1, Element2 ].forEach(function(element) {<br />    element.addEventListener("click", function() {<br />       //this function does stuff<br />    });<br /> });```

As an example we passed the elements to the array( we should define the elements of course) and then applied the event within the loop.

### Using es6 to shorten the code

Typically the code is the same. Just [using arrow function](http://www.nikpro.com.au/some-arrow-function-benefits-with-examples-explained/) to save some code like below:

```let elementsArray = document.querySelectorAll(".element");<br />elementsArray.forEach(el => el.addEventListener('click', function(){<br />  //console.log(this); refers to each array element<br />});```

But remember we should not use arrow function for the function inside the addEventListener method like the code below:

```let elementsArray = document.querySelectorAll(".element");<br />elementsArray.forEach(el => el.addEventListener('click',() => {<br />  //console.log(this); refers to window<br />}));```<figure class="wp-block-image">

<img src="http://www.nikpro.com.aues5.jpg" alt="" class="wp-image-32711" srcset="http://testgatsby.locales5.jpg 638w, http://testgatsby.locales5-300x169.jpg 300w" sizes="(max-width: 638px) 100vw, 638px" /> <figcaption>Use es5 code for the event&#8217;s function</figcaption></figure>

In this case we don’t want an arrow function, because we need the keyword to reference the actual array elements that got clicked. That is now even more important as we have a whole bunch of them.

Practically [as we talked about them before](http://www.nikpro.com.au/how-arrow-functions-fixed-this-keyword-problem-in-es6/) arrow function, the value of `this` is **not rebound** inside of the function. Therefore we don&#8217;t have access to the element. We get access tot he window. So &#8220;this&#8221; in the second case gives us the DOM window and not the element we expected to. Try it out in console and understand it.

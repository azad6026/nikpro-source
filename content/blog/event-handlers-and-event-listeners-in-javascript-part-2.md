---
id: 31778
title: 'Event handlers and Event Listeners in Javascript: Part 2'
date: 2018-07-03T22:14:22+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31778
permalink: /event-handlers-and-event-listeners-in-javascript-part-2/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/event-listener-three-actors-model.png
categories:
  - JAVASCRIPT
tags:
  - bubbling
  - capturing
  - event listeners
  - events
---
In [part 1](https://www.nikpro.com.au/event-handlers-and-event-listeners-in-javascript-part-1/) about event handlers and event listeners in Javascript, we learnt about inline event handling in two ways and Event listeners which are the better way of handling events in Javascript as they seperate concerns and logics and also we could use lots of events on one element at once.

In this part, we will look at other event concepts. 

## Event objects

This object is the parameter that is passed to the handler function and could provide information and some features:

`var btn = document.querySelector('button');`

`function bgChange(e) {<br />
`

`  e.target.style.backgroundColor = "red";<br />
  console.log(e);<br />
`

`} `

` </p>
<p>btn.addEventListener('click', bgChange);`

Here **e, **is the event object and **e.target** refers to the button itself. The **e.target**  of the event object always refers to the element that the event has occurred in which is the button in this example.

Using event object **e** ( you can call it anything but **e/evt/event** are common) **e.target** could be used to select multiple elements to have the same event occur on them. In the example below, we select all divs to change the background colour on them with same event:

`var divs = document.querySelectorAll('div');`

`for (var i = 0; i < divs.length; i++) {`  
`  divs[i].onclick = function(e) {`  
`  e.target.style.backgroundColor = bgChange();`  
`}`  
`}`

See the live example <a href="https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html" target="_blank" rel="noopener noreferrer">here</a>.Click on divs and you will see background will change randomly. (see the full code in that page).

## Prevent default event behaviour

Each event has a default behaviour. For example a form submit button normally submits the form to a page or the same page even if the form is not filled. Although some browsers add some validation before that, but it is better to have some validation all the time. So the form cannot be submitted before validation:

So if you have a simple form with first name and last name fields for example, a simple code could fix this:

`var form = document.querySelector('form');`  
`var fname = document.getElementById('fname');`  
`var lname = document.getElementById('lname');`  
`var submit = document.getElementById('submit');`  
`var para = document.querySelector('p');`

`form.onsubmit = function(e) {`  
`  if (fname.value === '' || lname.value === '') {`  
`    e.preventDefault();`  
`    para.textContent = 'You need to fill in both names!';`  
`  }`  
`}`

It is not a good validation of course but the point is **e.preventDefault** which will not allow user to send an empty form.

## Running events on parent elements and their children

If you have an element that you specify an event to it and also you already have an event on its parent as well, that can cause problem as both events get fired at the same time by clicking on the element. It is called Bubbling and capturing

### Bubbling and capturing

**When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.**

`<form onclick="alert('form')">FORM`  
`<div onclick="alert('div')">DIV`  
`<p onclick="alert('p')">P</p>`  
`</div>`  
`</form>`

If you click on the inner element which is the p tag, you will get 3 alerts. For p, div and formelements. It scales up from inner children to the parent.

Capturing is the reverse way. So in capturing the browser checks the html which is the biggest parent first and then down to the form and div and p tag.

### Stop Propagation {.brush:.js.line-numbers.language-js}

This is annoying behaviour, but there is a fix for it! The standard event object has a function available on it called `<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation">stopPropagation()</a>`, which when invoked on a handler&#8217;s event object makes it to run, but the event doesn&#8217;t bubble any further up the chain, so no more handlers will be run.

``<body onclick="alert(`the bubbling doesn't reach here`)">``  
`  <button onclick="event.stopPropagation()">Click me</button>`  
`</body>`

For instance, here body.onclick doesn’t work if you click on <button>.

There are lots to learn about events in Javascript. We learnt about the core concepts of events in these two articles. It is important to know how to handle the event and implement best practices along the way. So we will have a normal and convenient way of handling events.
---
id: 31865
title: What is e.target and e.currentTarget and how to use them?
date: 2018-07-16T23:32:26+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31865
permalink: /what-is-e-target-and-e-currenttarget-and-how-to-use-them/
image: /images/event-content.jpg
categories:
  - JAVASCRIPT
tags:
  - e.target
---
What is e.target and e.currentTarget and how to use them? As a simple explanation, **e.target(short for event.target)** is the element that targeted an specific event. It is **not** the e.currentTarget.

The [`event.currentTarget`](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget "Identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to event.target which identifies the element on which the event occurred.") is called when the [event handler](http://www.nikpro.com.au/event-handlers-and-event-listeners-in-javascript-part-1/) is called during the bubbling or capturing phase of the event and it is the one that the listener is attached to. We will have a look at some examples.

### The **`event.target`** property (e.target)

Here we explain it better. This is a simple example of using it to implement event delegation:

`// Make a list`  
`var ul = document.createElement('ul');`  
`document.body.appendChild(ul);`

`var li1 = document.createElement('li');`  
`var li2 = document.createElement('li');`  
`ul.appendChild(li1);`  
`ul.appendChild(li2);`

`function hide(e){`  
`// e.target refers to the clicked <li> element`  
`// This is different than e.currentTarget which would refer to the parent <ul> in this context`  
`e.target.style.visibility = 'hidden';`  
`}`

`// Attach the listener to the list`  
`// It will fire when each <li> is clicked`  
`ul.addEventListener('click', hide, false);`

As you can see, the e.target here refers to the li elements. So the li element actually makes the event happens. but the e.currentTarget is the one that the event directly refers to (`ul.addEventListener('click', hide, false);) `which in this case is the ul element and not each li element.

### The explanation in one example

Assume this HTML code that we want to check out for the e.target property:

`<body>`  
`<div id="container">`  
`<ul id="list">`  
`<li><a href="#">Item 1</a></li>`  
`<li><a href="#">Item 2</a></li>`  
`<li><a href="#">Item 3</a></li> `  
`<li><a href="#">Item 4</a></li>`  
`..................................`  
`<li><a href="#">Item 1000</a></li>`  
`</ul>`  
`</div>`  
`</body>`

We have thousands of li elements. We certainly would not want to loop through all li elements and add an event listener. It is not practical and it may freeze the page.

So here comes the event delegation: When the event bubbles up to the body element, we can check the element that triggered the event, using the event object’s target property:

`document.addEventListener("click", function(e) {`  
`  if(e.target && e.target.nodeName == "A") {`  
`    console.log("List item ", e.target.textContent, " was clicked!");`  
`  }`  
`});`  
 When we click the 2nd item, the page prints out: &#8220;List item Item 2 was clicked!&#8221; .

### How the event.currentTarget property differs

So lets check the difference in code. In the below example which follows our last example, you will see the difference between e.target and e.curentTarget again:

`document.addEventListener("click", function(e) {`  
`  if(e.target && e.target.nodeName == "A") {`  
`    console.log("List item ", e.target.textContent, " was clicked!");`  
`  }`

     ` console.log(e.currentTarget); // #document`  
`});`

And as you see here (`document.addEventListener) `we are adding the event listener to the document which means the e.currentTarget will refer to the document. It prints out “document” since we attached current event listener to the document while e.target refers to <a> which we clicked.

Now lets change the element that the event listener is attached to and see the difference:

`document.getElementById(“list”).addEventListener(“click”, function(e) {`  
`  console.log(e.currentTarget); //<ul><li>...</li><ul>`  
`  console.log(e.target); //<a href="#">Item 2</a>`  
`);`

Again in here the e.target refers the a tag that we clicked bu the e.currentTarget refers to  (`document.getElementById(“list”)) `the list element that we attached the event listener to.

That is it. Now with these two properties target and currentTarget, we can easily manipulate the node when the event gets triggered, as well as the node the event is attached to. However we better be careful when and how to use them.
---
id: 32598
title: Manipulate DOM elements and their CSS styles using useful Javascript methods
date: 2018-12-16T13:07:40+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32598
permalink: /manipulate-dom-elements-and-their-css-styles-using-useful-javascript-methods/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/domand-js.jpeg
categories:
  - CSS
  - JAVASCRIPT
---

It is the reign of <a rel="noreferrer noopener" aria-label="It is the reign of CSS in Js thoughts and practices and almost everything in Javascript these days. Therefore manipulating DOM elements using Javascript is an important skill to know and practice. (opens in a new tab)" href="https://css-tricks.com/css-in-js-ftw-wtf/" target="_blank">CSS in Js thoughts</a> and practices and almost everything in Javascript these days. Therefore manipulating DOM elements using Javascript is an important skill to know and practice.

In this article we will look at most important and useful functions that we need in a daily basis development.

### Methods for selecting elements in the DOM

There are two types of methods to select elements in the DOM. The old ones are:


```
// Select an element with an id : here id=para
const el = document.getElementById('para');

// Select an element by tag name :  here p tag
const el = document.getElementsByTagName('p');

// Select an element by class name : here class=test
const el = document.getElementsByClassName('test');
```


With above elements we could select elements of the DOM separately by id or tag or class names. But there are modern ways to do this using query selector methods:

```
const el = document.querySelector(".myclass");
```


Using&nbsp;`querySelector method`&nbsp;we could select any selector. It could be a tag or an id or a class. If we needed to select multiple selectors we could use&nbsp;`querySelectorAll`&nbsp; instead:


```
CSS// Selects all p tags
const matches = document.querySelectorAll("p");

// Selects all divs with class of note and alert
const matches = document.querySelectorAll("div.note, div.alert");

```


<div class="wp-block-image">
  <figure class="aligncenter"><img src="https://www.nikpro.com.auhtmlDOM.png" alt="" class="wp-image-32602" srcset="https://testgatsby.localhtmlDOM.png 225w, https://testgatsby.localhtmlDOM-150x150.png 150w" sizes="(max-width: 225px) 100vw, 225px" /><figcaption>Manipulate DOM using CSS in JS</figcaption>

</div>

Practically we could combine them to select specific children of a parent element:


```
// Select an element with id=test
const container = document.querySelector("#test");

// Select all p tags inside a div with class=highlighted of the above container
const matches = container.querySelectorAll("div.highlighted > p");
```


And because what we get as a result is an array we can also use array methods:


```
matches.forEach(function(pTag) {
  boldIt(pTag);
});
```


Now that we know more about selecting elements lets dive in CSS in Javascript and manipulate them.


<img src="https://www.nikpro.com.audom-manipulation-1024x576.png" alt="" class="wp-image-32600" srcset="https://testgatsby.localdom-manipulation-1024x576.png 1024w, https://testgatsby.localdom-manipulation-300x169.png 300w, https://testgatsby.localdom-manipulation-768x432.png 768w, https://testgatsby.localdom-manipulation-1568x882.png 1568w" sizes="(max-width: 1024px) 100vw, 1024px" /> <figcaption>  
DOM manipulation

</figcaption>


Additionally we can create , append and remove elements using&nbsp;&nbsp;`createElement`&nbsp;, `appendChild`&nbsp;and &nbsp;`removeElement` methods accordingly:


```
// Create a p tag

const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';

// Append it to the section

const sect = document.querySelector('section');
sect.appendChild(para);

// Remove the p tag

sect.removeChild(linkPara);

//Or remove it referencing to its parent like this when that is the only way

linkPara.parentNode.removeChild(linkPara);
```


&nbsp;

### Methods for manipulating CSS in Javascript

Basically there are two ways to manipulate CSS using Javascript. You can directly address the property using style attribute or use&nbsp;`setAttribute`&nbsp;method:


```
// Change the p tag's styles

const para = document.createElement('p');

// For two word properties we use camel case like in backgroundColor
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

```


In addition to this simple approach we have the option to use setAttribute method:

```
para.setAttribute('color', 'white');
```


Instead of doing all properties one by one we can create a class and put in all properties and set that class to the tag using this method:


```
.highlight {
  color: white;
  background-color: black;
  padding: 10px;
  width: 250px;
  text-align: center;
}

para.setAttribute('class', 'highlight');
```



<img src="https://www.nikpro.com.audom-tree.png" alt="dom-tree" class="wp-image-32605" srcset="https://testgatsby.localdom-tree.png 665w, https://testgatsby.localdom-tree-300x128.png 300w" sizes="(max-width: 665px) 100vw, 665px" /> 


#### Modifying classes in CSS

Generally we can assign, toggle and replace or remove classes in CSS using Javascript on the fly:


```
// Select a div
const div = document.querySelector('div');
// Assign the warning class to the div
div.className = 'warning';
```


That is how we add class name without using setAttribute method. But we can also use classList property and manipulate classes for the element:


```
// Select a div by class name
const activeDiv = document.querySelector('.active');

// Add the hidden class
activeDiv.classList.add('hidden'); 

// Remove the hidden class
activeDiv.classList.remove('hidden'); 

// Switch between hidden true and false
activeDiv.classList.toggle('hidden');

// Replace active class with warning class
activeDiv.classList.replace('active', 'warning');
```


Generally there are different use cases for all these methods and properties. Actually there is no best practice using them. We should be using themas it fits to the application and how we need to modify the DOM and styles. But for sure CSS in JS is an approach that if be used with plan ahead, it could save time and improve performance down the track.

Thank you for reading.

---
id: 32598
title: Manipulate DOM elements and their CSS styles using useful Javascript methods
date: 2018-12-16T13:07:40+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32598
permalink: /manipulate-dom-elements-and-their-css-styles-using-useful-javascript-methods/
xyz_twap:
  - "1"
# image: ../../static/images/domand-js.jpeg
categories:
  - CSS
  - JAVASCRIPT
---

It is the reign of <a rel="noreferrer noopener" aria-label="It is the reign of CSS in Js thoughts and practices and almost everything in Javascript these days. Therefore manipulating DOM elements using Javascript is an important skill to know and practice. (opens in a new tab)" href="https://css-tricks.com/css-in-js-ftw-wtf/" target="_blank">CSS in Js thoughts</a> and practices and almost everything in Javascript these days. Therefore manipulating DOM elements using Javascript is an important skill to know and practice.

In this article we will look at most important and useful functions that we need in a daily basis development.

### Methods for selecting elements in the DOM

There are two types of methods to select elements in the DOM. The old ones are:


```
// Select an element with an id : here id=para<br /><code><strong>const el = document.getElementById('para');</strong></code><br /><br />// Select an element by tag name :  here p tag<br /><code><strong>const el = document.getElementsByTagName('p');</strong></code><br /><br />// Select an element by class name : here class=test<br /><code><strong>const el = document.getElementsByClassName('test');</strong></code></pre>

With above elements we could select elements of the DOM separately by id or tag or class names. But there are modern ways to do this using query selector methods:

<pre class="wp-block-preformatted"><code><strong>const el = document.querySelector(".myclass");</strong></code></pre>

Using&nbsp;`querySelector method`&nbsp;we could select any selector. It could be a tag or an id or a class. If we needed to select multiple selectors we could use&nbsp;`querySelectorAll`&nbsp; instead:


```
CSS// Selects all p tags<br />const matches = document.querySelectorAll("p");<br /><br />// Selects all divs with class of note and alert<br />const matches = document.querySelectorAll("div.note, div.alert");<br /></pre>

<div class="wp-block-image">
  <figure class="aligncenter"><img src="http://www.nikpro.com.auhtmlDOM.png" alt="" class="wp-image-32602" srcset="http://testgatsby.localhtmlDOM.png 225w, http://testgatsby.localhtmlDOM-150x150.png 150w" sizes="(max-width: 225px) 100vw, 225px" /><figcaption>Manipulate DOM using CSS in JS</figcaption></figure>
</div>

Practically we could combine them to select specific children of a parent element:


```
// Select an element with id=test<br />const container = document.querySelector("#test");<br /><br />// Select all p tags inside a div with class=highlighted of the above container<br />const matches = container.querySelectorAll("div.highlighted > p");
```


And because what we get as a result is an array we can also use array methods:


```
matches.forEach(function(pTag) {<br />  boldIt(pTag);<br />});
```


Now that we know more about selecting elements lets dive in CSS in Javascript and manipulate them.<figure class="wp-block-image">

<img src="http://www.nikpro.com.audom-manipulation-1024x576.png" alt="" class="wp-image-32600" srcset="http://testgatsby.localdom-manipulation-1024x576.png 1024w, http://testgatsby.localdom-manipulation-300x169.png 300w, http://testgatsby.localdom-manipulation-768x432.png 768w, http://testgatsby.localdom-manipulation-1568x882.png 1568w" sizes="(max-width: 1024px) 100vw, 1024px" /> <figcaption>  
DOM manipulation

</figcaption></figure>

Additionally we can create , append and remove elements using&nbsp;&nbsp;`createElement`&nbsp;, `appendChild`&nbsp;and &nbsp;`removeElement` methods accordingly:


```
// Create a p tag<br /><br />const para = document.createElement('p');<br />para.textContent = 'We hope you enjoyed the ride.';<br /><br />// Append it to the section<br /><br /><code><strong>const sect = document.querySelector('section');</strong></code><br /><code><strong>sect.appendChild(para);</strong></code><br /><br />// Remove the p tag<br /><br /><code><strong>sect.removeChild(linkPara);</strong></code><br /><br />//Or remove it referencing to its parent like this when that is the only way<br /><br /><code><strong>linkPara.parentNode.removeChild(linkPara);</strong></code></pre>

&nbsp;

### Methods for manipulating CSS in Javascript

Basically there are two ways to manipulate CSS using Javascript. You can directly address the property using style attribute or use&nbsp;`setAttribute`&nbsp;method:


```
// Change the p tag's styles<br /><br />const para = document.createElement('p');<br /><br />// For two word properties we use camel case like in <code><strong>backgroundColor</strong></code><br /><code><strong>para.style.color = 'white';</strong></code><br /><code><strong>para.style.backgroundColor = 'black';</strong></code><br /><code><strong>para.style.padding = '10px';</strong></code><br /><code><strong>para.style.width = '250px';</strong></code><br /><code><strong>para.style.textAlign = 'center';</strong></code><br />
```


In addition to this simple approach we have the option to use setAttribute method:

<pre class="wp-block-preformatted"><code>para.setAttribute('color', 'white');</code></pre>

Instead of doing all properties one by one we can create a class and put in all properties and set that class to the tag using this method:


```
.highlight {<br />  color: white;<br />  background-color: black;<br />  padding: 10px;<br />  width: 250px;<br />  text-align: center;<br />}<br /><br /><code><strong>para.setAttribute('class', 'highlight');</strong></code></pre><figure class="wp-block-image">

<img src="http://www.nikpro.com.audom-tree.png" alt="dom-tree" class="wp-image-32605" srcset="http://testgatsby.localdom-tree.png 665w, http://testgatsby.localdom-tree-300x128.png 300w" sizes="(max-width: 665px) 100vw, 665px" /> </figure>

#### Modifying classes in CSS

Generally we can assign, toggle and replace or remove classes in CSS using Javascript on the fly:


```
// Select a div<br />const div = document.querySelector('div');<br />// Assign the warning class to the div<br />div.className = 'warning';
```


That is how we add class name without using setAttribute method. But we can also use classList property and manipulate classes for the element:


```
// Select a div by class name<br />const activeDiv = document.querySelector('.active');<br /><br />// Add the hidden class<br />activeDiv.classList.add('hidden'); <br /><br />// Remove the hidden class<br />activeDiv.classList.remove('hidden'); <br /><br />// Switch between hidden true and false<br />activeDiv.classList.toggle('hidden');<br /><br />// Replace active class with warning class<br />activeDiv.classList.replace('active', 'warning');
```


Generally there are different use cases for all these methods and properties. Actually there is no best practice using them. We should be using themas it fits to the application and how we need to modify the DOM and styles. But for sure CSS in JS is an approach that if be used with plan ahead, it could save time and improve performance down the track.

Thank you for reading.

---
id: 31821
title: How to build a simple gallery using flexbox and Javascript
date: 2018-07-08T22:18:35+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31821
permalink: /how-to-build-a-simple-gallery-using-flexbox-and-javascript/
image: /wp-content/uploads/2018/07/flexbox-gallery.png
categories:
  - CSS
  - JAVASCRIPT
tags:
  - flexbox
  - gallery
---
If you love building small but interesting things using CSS and Javascript, then you will enjoy this one. We will build a simple gallery using flexbox and Javascript. This is from one of the <a href="http://wesbos.com" target="_blank" rel="noopener noreferrer">wesbos</a> courses and it is amazingly simple and elegant.

## The Flex Gallery

This is what we are going to explain. Click on each panel and you will see that it expands and the words will slide in beautifully:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="ERqpJq" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="flexbox gallery">
  See the Pen <a href="https://codepen.io/azad6026/pen/ERqpJq/">flexbox gallery</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



Now what is happening here. We have five panels that could be sliders with this HTML:
```html
<pre class="wp-block-preformatted"><strong>
 <div class="panels">  
  <div class="panel panel1">  
    <p>Hey</p>  
    <p>Let's</p>  
    <p>Dance</p>  
  </div>  
  <div class="panel panel2">  
    <p>Give</p>  
    <p>Take</p>  
    <p>Receive</p>  
  </div>  
  <div class="panel panel3">  
    <p>Experience</p>  
    <p>It</p>  
    <p>Today</p>  
  </div>  
  <div class="panel panel4">  
    <p>Give</p>  
    <p>All</p>  
    <p>You can</p>  
  </div>  
  <div class="panel panel5">  
    <p>Life</p>  
    <p>In</p>  
    <p>Motion</p>  
  </div>  
  </div>
</strong></pre>
```
#### Parent container with .panels class

We have a panel container with panels class and five child panels. Also three child paragraphs that hold the words. Now to make the panel layout all centred from top to bottom we will need flexbox.  You can read about flexbox with examples <a href="http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-1/" target="_blank" rel="noopener noreferrer">here</a> and <a href="http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-2/" target="_blank" rel="noopener noreferrer">here. </a>

So we will add <strong>display: flex;</strong>to the panels container with **.panels **class.

#### The container children with .panel class

To make the child panels all same size we need to add **flex:1; **which means they will have equal flex-grow and will sit beside each other.Then to make them centre we need to add **justify-content: center; ** and  **align-items:center; **This way they look centred and aligned. 

Added to the panels so far:
<pre class="wp-block-preformatted"><strong>
    <strong>.panels{</strong>
    <strong>  flex:1;</strong>
    <strong>  justify-content: center;</strong>
    <strong>  align-items:center;</strong>
    <strong>}</strong>
</strong></pre>
#### Panel children: the paragraphs

First we need to make them centred and then make the top ones go off the screen and then the bottom ones off the screen. We need to have nested flexbox in this example which does the job as we expect. Thus we add **display: flex **to each panel. Also because we want the text direction from top to button, will add **flex-direction: column; **as well.

For panel items we will add  **flex: 1 0 auto;** so they take same space. Also we need them to also have a flex layout so that we can centre words as well. so we will add this:
<pre class="wp-block-preformatted"><strong>
    <strong>.panel{</strong>
    **  flex: 1 0 auto;**
    <strong>  display:flex; </strong>
    <strong>  justify-content: center; </strong>
    <strong>  align-items: center;</strong>
    }
</strong></pre>
##### Now comes the interesting part:  The words animation

To make the top words to go off and animate back we will use transform property and translateY value to push it away to the top:
<pre class="wp-block-preformatted"><strong>
    <strong> .panel > *:first-child { </strong>
    <strong>  transform: translateY(-100%); </strong>
    <strong>}</strong>
</strong></pre>
Also the same for the bottom words but to the bottom:
<pre class="wp-block-preformatted"><strong>
    <strong>.panel > *:last-child { </strong>
    <strong>  transform: translateY(100%); </strong>
    <strong>}</strong>
</strong></pre>
Now we need a class that animates them back and trigger the class later with Javascript. Here is the class for top words:
<pre class="wp-block-preformatted"><strong>
    <strong>.panel.open-active > *:first-child { </strong>
    <strong>  transform: translateY(0); </strong>
    <strong>}</strong>
</strong></pre>
This while toggles make the animation happen. For the bottom words we will have this class:
<pre class="wp-block-preformatted"><strong>
    <strong>.panel.open-active > *:last-child { </strong>
    <strong>  transform: translateY(0); </strong>
    <strong>}</strong>
</strong></pre>
#### The panel grow animation

This is very simple. We just need to change the flex property once the box is clicked by assigning it the open class like this:
<pre class="wp-block-preformatted"><strong>
    <strong>.panel.open {</strong>  
    <strong>  flex: 5;</strong>  
    <strong>  font-size:40px;</strong>  
    <strong>}</strong>
</strong></pre>
### The Javascript

We need two piece of code. One for the .open class and one for .open-active class. First select the panels:
<pre class="wp-block-preformatted"><strong>
    <strong>const panels = document.querySelectorAll('.panel');</strong>
</strong></pre>
Then the toggleOpen function that toggles the .open class:
<pre class="wp-block-preformatted"><strong>
    <strong>function toggleOpen() {</strong>  
    <strong>  this.classList.toggle('open');</strong>  
<strong>}</strong>
</strong></pre>
Now the function to toggle .open-acive class:
<pre class="wp-block-preformatted"><strong>
    <strong>function toggleActive(e) {</strong>  
    <strong>  if (e.propertyName.includes('flex')) {</strong>  
    <strong>    this.classList.toggle('open-active');</strong>  
    <strong>  }</strong>  
    <strong>}</strong>
</strong></pre>
The reason we use e.property.includes and not **e.propertyName === &#8220;flex&#8221;** (which checks if the there is a flex property transitioned) is that some browsers have flex-grow as the property being transitioned and some has flex only so we use includes to make sure we cover them all.

##### Toggle them all

To toggle the toggle Open, add . this code:
<pre class="wp-block-preformatted"><strong>
    <strong> panels.forEach(</strong>
    <strong>  panel => panel.addEventListener('click', toggleOpen)</strong>
    <strong>);</strong>
</strong></pre>
which uses <a href="http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/" target="_blank" rel="noopener noreferrer">arrow functions</a> to create the event handler function with click event. With each click, it toggles the open class.

To make the words transitioned, we listen to transitioned event and fire the toggleActive function:
<pre class="wp-block-preformatted"><strong>
    <strong>panels.forEach(</strong>
    <strong>  panel => panel.addEventListener('transitionend', toggleActive)</strong>
    <strong>);</strong>
</strong></pre>
<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="ERqpJq" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="flexbox gallery">
  See the Pen <a href="https://codepen.io/azad6026/pen/ERqpJq/">flexbox gallery</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



That&#8217;s it. Now you have it all. Now play around with it and maybe make your own with different techniques. We will make different galleries/sliders in the future. Hope you liked it.

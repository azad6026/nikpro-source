---
id: 32332
title: Fantastic stripe-like follow along nav with CSS and Javascript explained
date: 2018-10-04T10:42:37+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32332
permalink: /fantastic-stripe-like-follow-along-nav-with-css-and-javascript-explained/
xyz_twap:
  - "1"
image: /images/final-nav.png
categories:
  - CSS
  - CSS3
  - JAVASCRIPT
tags:
  - coordinates
  - hover over effect
---
Another great Javascript example from <a href="http://wesbos.com" target="_blank" rel="noopener noreferrer">WesBos </a>whom I really enjoy his work named a follow along nav example. He uses stripe-like follow along nav which uses a fantastic technique to have a beautiful hover over effect on list items. I will not change the example and created a pen to explain it.

## Follow along nav example

I have used the same content as well so you can checkout his work and learn more from his excellent courses. Here is the pen I have created:

<p data-height="500" data-theme-id="0" data-slug-hash="QZNEdq" data-default-tab="css,result" data-user="azad6026" data-pen-title="Stripe like navbar hover effect" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/QZNEdq/">Stripe like navbar hover effect</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Basically it is a menu which when you hover over each tab and you follow along hovering over other tabs, the white background behind tab&#8217;s dropdown menu follows your movement.

Therefor you always see the white background moving along with a nice transition. Also it changes its width and heigh according to the current hovered over dropdown. The idea is from <a href="http://stripe.com" target="_blank" rel="noopener noreferrer">stipe</a>&#8216;s navigation bar.<figure class="wp-block-image">

<img src="http://www.nikpro.com.austipe-nav.png" alt="stripe nav" class="wp-image-32336" srcset="http://testgatsby.localstipe-nav.png 1400w, http://testgatsby.localstipe-nav-300x171.png 300w, http://testgatsby.localstipe-nav-768x439.png 768w, http://testgatsby.localstipe-nav-1024x585.png 1024w" sizes="(max-width: 1400px) 100vw, 1400px" /> </figure> 

### The HTML

We have an unordered list with a link and a dropdown menu inside each list item. Also we have a title on the top which is there for a purpose that I explain later along coding it.

But the most important part is the background container which is a div inside the nav:

<pre class="wp-block-preformatted"><strong>&lt;div class="dropdownBackground"></strong><br /><strong>    &lt;span class="arrow">&lt;/span></strong><br /><strong>&lt;/div></strong></pre>

It has an absolute positioning and a width and height. But important CSS code for this background is its opacity. We will change that opacity which is zero to 1 once we hover over an item.

### Follow along nav Javascript and CSS

We better check what elements we need to work on. Firstly we need the list items. Then the background div and finally the nav itself which I explain why later.

<pre class="wp-block-preformatted"><strong>// Select all list items using <strong>querySelectorAll</strong><br />const triggers = document.querySelectorAll('.cool > li');<br />// Select only the background using <strong>querySelector</strong></strong><br /><strong>const background  = document.querySelector('.dropdownBackground');<br />// Select the nav</strong><br /><strong>const nav  = document.querySelector('.top');</strong></pre>

Next step is to know what we need to do. We need to show the background behind the dropdown once we hover over each list item. Also when we hover off of that item and over over another item the background should follow along. That is why it is called follow along nav.

Therefor we need two functions for entering the item and leaving it. So we better create [event listeners](http://www.nikpro.com.au/event-handlers-and-event-listeners-in-javascript-part-1/) for each time items being hovered [using arrow functions](http://www.nikpro.com.au/some-arrow-function-benefits-with-examples-explained/):

<pre class="wp-block-preformatted"><strong>triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));</strong><br /><strong>
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));</strong></pre>

#### CSS classes for both functions

We need to add the opacity to the background once mouse enters it:

<pre class="wp-block-preformatted"><strong>.dropdownBackground.open {</strong><strong>
    opacity: 1;</strong><strong>
}</strong></pre>

We also need two more classes for the dropdown. The dropdown is hidden with **display: none** but it also has **opacity: 0.** The reason is once we hover over a list item we first display the dropdown meaning **display: block** it. Then after 150ms (setTimeout) we change the opacity to 1 so that we have that nice transitioned effect we see once that item is active:

<pre class="wp-block-preformatted"><strong>.trigger-enter .dropdown {</strong><strong>
    display: block;</strong><strong>
}</strong><strong>
.trigger-enter-active .dropdown {</strong><strong>
    opacity: 1;</strong><strong>
}</strong></pre>

So far we will have the enter function set up like this:

<pre class="wp-block-preformatted"><strong>function handleEnter() {</strong><br /><strong> // add <strong>trigger-enter class to dropdown</strong>
    this.classList.add('trigger-enter');<br />// create a timeout which checks of the classList contains the <strong>trigger-enter. If true then it moves on and adds <strong>trigger-enter-active to the classList</strong></strong>
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);<br />// show the background
    background.classList.add('open');</strong><br /><strong>}</strong></pre>

Int he setTimeout function we have a && condition. What it does is it checks the first condition which is if the item&#8217;s dropdown has got **display: block** or not. 

If not it does not go on and will not make the opacity 1 meaning it does not add class **trigger-enter-active** to dropdown calssList until you actually hover over the item. Because you might hover over menu items even quicker than 150ms and that way it cannot properly add the active class on time before it is been removed in mouseleave event and that is not correct. So we add this little check to make sure the active class is not been added until you are on one item hovering.

Here we remove classes in our mouseleave event handler:

<pre class="wp-block-preformatted"><strong> function handleLeave() {</strong><strong>
    this.classList.remove('trigger-enter', 'trigger-enter-active');</strong><strong>
    background.classList.remove('open');</strong><strong>
  }</strong></pre>

#### Coordinates

Until this step we have shown the background and the dropdown. But the background is not in the correct position. You will see it on the top left when you hover over each item:<figure class="wp-block-image is-resized">

<img src="http://www.nikpro.com.aubackground-shown.png" alt="" class="wp-image-32333" width="580" height="388" srcset="http://testgatsby.localbackground-shown.png 434w, http://testgatsby.localbackground-shown-300x200.png 300w" sizes="(max-width: 580px) 100vw, 580px" /> <figcaption>background is on top left once hover over items</figcaption></figure> 

As a result for a follow along nav to work as its name suggests we need to calculate the coordinates of each item and position the background there accordingly. Also remember I mentioned about the title &#8220;cool&#8221; on the top.

We need to calculate coordinates based on the distance from the top. If we only had the navbar in the page we could just calculate the dropdown cords(coordinates)  itself. But we might have a title or something else there so we better calculate the navbar cords as well and reduce it from dropdown&#8217;s left and right cords:

<pre class="wp-block-preformatted"><strong>// We need to select the selected dropdown here   <br />const dropdown = this.querySelector('.dropdown');<br />// calculate its cords</strong><strong>
const dropdownCoords = dropdown.getBoundingClientRect();<br />// calculate nav's cords</strong><strong>
const navCoords = nav.getBoundingClientRect();<br />// finally this will be the cords for the background of each dropdown</strong><strong>
const coords = {</strong><strong>
      height: dropdownCoords.height,</strong><strong>
      width: dropdownCoords.width,</strong><strong>
      top: dropdownCoords.top - navCoords.top,</strong><strong>
      left: dropdownCoords.left - navCoords.left</strong><strong>
};</strong></pre>

After we calculated the cords for both nav and dropdown we assign it to the background cords as below:

<pre class="wp-block-preformatted"><strong>// assign the width and heigth using <a href="http://www.nikpro.com.au/template-literals-in-js6-explained/">template literals</a></strong><br /><strong>background.style.setProperty('width', <code>${coords.width}px</code>);</strong><br /><strong>background.style.setProperty('height', <code>${coords.height}px</code>);<br />// the left and right cords should be assigned to tranform prperty in CSS</strong><br /><strong>background.style.setProperty('transform', <code>translate(${coords.left}px, ${coords.top}px)</code>);</strong></pre><figure class="wp-block-image">

<img src="http://www.nikpro.com.aufinal-nav.png" alt="final nav" class="wp-image-32335" srcset="http://testgatsby.localfinal-nav.png 820w, http://testgatsby.localfinal-nav-300x155.png 300w, http://testgatsby.localfinal-nav-768x398.png 768w" sizes="(max-width: 820px) 100vw, 820px" /> <figcaption>The final nav</figcaption></figure> 

Finally we are done. We have explained a follow along nav that is a fantastic example of a modern hover over effect based on Javascript and CSS.

Thank you for reading.
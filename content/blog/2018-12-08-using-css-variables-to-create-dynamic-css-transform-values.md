---
id: 32592
title: Using CSS variables to create dynamic CSS transform values
date: 2018-12-08T21:25:52+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32592
permalink: /using-css-variables-to-create-dynamic-css-transform-values/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/12/css-transforms-using-variables-1568x579.png
categories:
  - CSS3
  - JAVASCRIPT
---
One of the things that I hear a lot about is the ability to dynamically change CSS transform values by the power of CSS variables. So this way we can control our transform properties at any time as CSS variables are live in the browser.

## Change CSS transform rotate on hover

We will not go into basics here. You can read more about CSS variables in [this](http://www.nikpro.com.au/what-are-css-variables-and-their-differences-with-css-preprocessors/) and [this](http://www.nikpro.com.au/css-custom-properties-or-variables-with-more-examples/) articles. But we will have a look at some examples. In this first examples with this beautiful sky from&nbsp;<a rel="noreferrer noopener" aria-label="We will not go into basics here. You can read more about CSS variables in this and this articles. But we will have a look at some examples. In this first examples with this beautiful sky from&nbsp;Michael Gehrmann (opens in a new tab)" href="https://codepen.io/g12n/" target="_blank">Michael Gehrmann</a>&nbsp;we will see a live example:

<p data-height="400" data-theme-id="0" data-slug-hash="ZLYqyr" data-default-tab="html,result" data-user="g12n" data-pen-title="Transitions on CSS Custom Properties:  Sunrise on hover SVG" class="codepen">
  See the Pen <a href="https://codepen.io/g12n/pen/ZLYqyr/">Transitions on CSS Custom Properties: Sunrise on hover SVG</a> by Michael Gehrmann (<a href="https://codepen.io/g12n">@g12n</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

#### Defining variables

Basically all variables are defined in the root here. The variables are used to change the SVG attributes on demand:

<pre class="wp-block-preformatted"><code>&lt;strong>:root {&lt;br>  --trees-z1: hsl(20, 60%, 20%);&lt;br>  --trees-z2: hsl(20, 60%, 30%);&lt;br>  --trees-z3: hsl(20, 60%, 50%);&lt;br>  --trees-z4: hsl(20, 60%, 60%);&lt;br>  --rocket-1: #f00;&lt;br>  --rocket-2: #b00;&lt;br>  --hills: hsl(20, 60%, 40%);&lt;br>  --mountains: #f90;&lt;br>  --snow: #fa0;&lt;br>  --sky: #f60;&lt;br>  --sun: #f90;&lt;br>  --angle: -20deg;&lt;br>}&lt;/strong></code></pre>

Except for the **&#8211;angle** they are all used to change the colours and saturation. The &#8211;angle though is the one to be used for the **#sky** angle in the SVG:

<pre class="wp-block-preformatted"><code>&lt;strong>#sky {&lt;br>  transform-origin: 250px 450px;&lt;br>  transform: rotate(var(--angle));&lt;br>}&lt;/strong></code></pre>

Inside rotate the angle variable is declared so that we can dynamically change it on demand like hover:

<pre class="wp-block-preformatted"><code>&lt;strong>svg:hover{&lt;br>   --trees-z1: #0b3253;&lt;br>  --trees-z2: #0c3b5b;&lt;br>  --trees-z3: #1e566b;&lt;br>  --trees-z4: #bcc7b0;&lt;br>  --rocket-1: #bfe2cd;&lt;br>  --rocket-2: #c5efd4;&lt;br>  --hills: #486a72;&lt;br>  --mountains: #bdd8ba;&lt;br>  --snow: #d2e8cf;&lt;br>  --sky: #a0cdb3;&lt;br>  --sun: #fff;&lt;br>  --angle: 20deg;&lt;br>}&lt;/strong></code></pre>

Therefore the values are changed on hover as well as **&#8211;angle**. And that makes the beautiful animation like effect one we hover over it.&nbsp;

## Dynamic CSS transform involving Javascript to change variables

Another example is by <a rel="noreferrer noopener" aria-label="Another example is by Dan Wilson (opens in a new tab)" href="https://codepen.io/danwilson/" target="_blank">Dan Wilson</a>&nbsp;which uses inputs to change the variables:

<p data-height="400" data-theme-id="0" data-slug-hash="oBrOGW" data-default-tab="css,result" data-user="danwilson" data-pen-title="CSS Variables + Transform = Individual Properties (with Inputs)" class="codepen">
  See the Pen <a href="https://codepen.io/danwilson/pen/oBrOGW/">CSS Variables + Transform = Individual Properties (with Inputs)</a> by Dan Wilson (<a href="https://codepen.io/danwilson">@danwilson</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Interestingly three properties inside transform have used CSS variables as their values. Also the duration of the transition is declared as a variable to make it more like an animation:

<pre class="wp-block-preformatted"><strong>/* Defining variables */<br />:root {<br />  --tx: 0;<br />  --ty: 0;<br />  --scale: 1;<br />  --deg: 0deg;<br />}</strong></pre>

Therefore Javascript will use these variables to change them based on input value changes. Here is the important CSS code that defines behaviour of each box:

<pre class="wp-block-preformatted"><strong>.mover {<br />  /* THIS is the important line */<br />  transform: <br />    translate3d(var(--tx), var(--ty), 0) <br />    scale(var(--scale)) <br />    rotate(var(--deg));<br />--hue: 120;<br />  --duration: 2000ms;<br />transition: transform var(--duration) linear;<br />}</strong></pre>

As a side note need to note that &#8211;**-duration** has been defined inside the box and no the :root. Not all variables need to be defined in the root as they might only be used inside that element only. Remember CSS variables are **scoped** to where they have been defined.

Finally using Javascript the values are changed dynamically:

<pre class="wp-block-preformatted"><strong>//Use the input ranges to modify the individual transform properties on the fly, and see that they can be smooth even if you change a different property mid transition. There's no need to remember what the other properties are when you set the new individual value.<br />//We'll use this to change the CSS Variable values from JS<br />const style = document.documentElement.style;</strong><br /><br /><strong><br />/* control elements */<br />var ranges = {<br />  translate: document.getElementById('tx'),<br />  scale: document.getElementById('scale'),<br />  deg: document.getElementById('deg')<br />};</strong><br /><strong><br />//Change the CSS Variable value here<br />function valueChange(id, value) {<br />  style.setProperty('--' + id, value);<br />}<br />ranges.translate.addEventListener('input', function(e) { <br />  valueChange(e.currentTarget.id, e.currentTarget.value + 'vw');<br />});<br />ranges.scale.addEventListener('input', function(e) { <br />  valueChange(e.currentTarget.id, e.currentTarget.value);<br />});<br />ranges.deg.addEventListener('input', function(e) { <br />  valueChange(e.currentTarget.id, e.currentTarget.value + 'deg');<br />});</strong></pre>

Moreover [the Event listener](http://www.nikpro.com.au/event-handlers-and-event-listeners-in-javascript-part-1/)&nbsp;has been assigned to all properties of the element ( translate, scale, deg) to change the related style property using valueChange function. Very concise and useful.

With CSS variables it is easy and clever to change CSS transform properties based on user activity to create animations and effects. It is live in browser and more maintainable in code.

Thank you for reading.
---
id: 32200
title: The CSS shape outside property using function values explained with examples part 2
date: 2018-09-13T20:52:46+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32200
permalink: /the-css-shape-outside-property-using-function-values-explained-with-examples-part-2/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/09/shape-outside-again.png
categories:
  - CSS
  - CSS3
tags:
  - shape outside inset
  - shape outside url
---
Following our [previous article](http://www.nikpro.com.au/the-css-shape-properties-using-function-values-explained-with-examples-part-1/) about CSS shape outside property in this article we explain two more values on this property. The url property and the inset property. 

## Shape outside inset() function

Basically the full notation for an inset shape function is `inset(top right bottom left border-radius)`. Therefore `inset()` takes four values for the top, right, bottom and left values plus a final value for `border-radius`.We could use `inset()` shape function to create rectangular shapes around which to wrap content:

<pre class="wp-block-preformatted"><strong>.element{
  shape-outside: inset(100px 100px 100px 100px);
  <em>/* yields a rectangular shape which is 100px inset on all sides */</em>
  float: left;
}</strong></pre>

As an example again the below CSS creates a rectangular shape inset from the reference box of the floated element 20 pixels from the top and bottom and 10 pixels from the left and right, with a border-radius value of 10 pixels.

<pre class="wp-block-preformatted"><strong><code>.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}</code></strong></pre>

Finally have a look at this pen for a better idea:

<p data-height="265" data-theme-id="0" data-slug-hash="BOVNGo" data-default-tab="html,result" data-user="azad6026" data-pen-title="shape outside inset function" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/BOVNGo/">shape outside inset function</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Generally in the example above we used border-box as a reference box instead of margin-box:

<pre class="wp-block-preformatted"><strong>.element-2 {</strong><strong>
  shape-outside: inset(0px 50% 50% 50% 50% 50px) border-box;</strong><strong>
  shape-margin: 10px;</strong><strong>
}</strong></pre>

So according to MDN float area is computed according to the shape of a float element&#8217;s edges (as defined by the [CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)). This can be `margin-box`, `border-box`, `padding-box`, or `content-box`. 

## Shape outside url() function

Practically the `shape-outside: url(image.png)` CSS declaration tells the browser to extract a shape from the image. Also we could use `-image-threshold` property to define the minimum opacity level of pixels that will be used to create the shape. Therefor we could use `0.0` for fully transparent and `1.0`  for fully opaque.<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/09/espresso.jpg" alt="" class="wp-image-32202" srcset="http://testgatsby.local/wp-content/uploads/2018/09/espresso.jpg 660w, http://testgatsby.local/wp-content/uploads/2018/09/espresso-300x182.jpg 300w" sizes="(max-width: 660px) 100vw, 660px" /> <figcaption>Example from <a href="https://www.html5rocks.com/en/tutorials/shapes/getting-started/" target="_blank" rel="noopener noreferrer">HTML5rocks</a></figcaption></figure> 

As a result of using the url function value the text has been wrapped around the element in the above example:

<pre class="wp-block-preformatted"><strong>.element{
  shape-outside: url(image.png);
  shape-image-threshold: 0.5;
  float: left;
}</strong></pre>

Although the `shape-outside` property defines the shape of the area around which content will wrap, without the float, you won&#8217;t see the effects of the shape.

In the next article about CSS shape outside we will talk about reference box values. Thanks for reading.
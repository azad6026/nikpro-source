---
id: 32426
title: Create a stunning animation using border-radius property in CSS
date: 2018-10-19T20:58:36+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32426
permalink: /create-an-stunning-animation-using-border-radius-property-in-css/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/border-radius-8-values.png
categories:
  - CSS
  - CSS3
tags:
  - animation
  - border-radius
  - effects
---
[Creating animation](http://www.nikpro.com.au/learn-how-to-use-css-animation-using-keyframes-with-examples/) using CSS border-radius! It sounds strange but absolutely possible. I was reading <a href="https://9elements.com/io/css-border-radius/" target="_blank" rel="noreferrer noopener">an article</a>&nbsp;coming from <a href="https://css-tricks.com/" target="_blank" rel="noreferrer noopener">CSS tricks</a>&nbsp;and I thought I will explain the animation in my own way.

## The simple syntax of border-radius

We all know how to use border-radius using it with one value to be assigned to all edges:


```
border-radius: 50%;
```


Or use it with four values starting clockwise from top left corner to the right left corner which we can use different units (percentage, pixels,&#8230;) :


```
border-radius:&nbsp;10px 20% 30px 50px;
```


<p data-height="265" data-theme-id="0" data-slug-hash="NOMYjJ" data-default-tab="css,result" data-user="azad6026" data-pen-title="border-radius one/two values" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/NOMYjJ/">border-radius one/two values</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

That is all great.We can manipulate each edge as we like with different units and values. But in the border-radius syntax as per <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius" target="_blank" rel="noreferrer noopener">MDN</a> it is mentioned:

<blockquote class="wp-block-quote">
  <p>
    followed optionally by &#8220;/&#8221; and one, two, three, or four&nbsp;<length>&nbsp;or&nbsp;<percentage>&nbsp;values. This is used to set an additional radius, so you can have elliptical corners.
  </p>
</blockquote>

Therefor we can use forward slash which makes a huge difference of how the edges will look like.

### Two values with slash in between

As per the above <a href="https://9elements.com/io/css-border-radius/" target="_blank" rel="noreferrer noopener">mentioned article</a>&nbsp;if we have two values with a slash the image below shows how they behave around edges:<figure class="wp-block-image">

<img src="http://www.nikpro.com.autwo-values.png" alt="" class="wp-image-32428" srcset="http://testgatsby.localtwo-values.png 1000w, http://testgatsby.localtwo-values-300x203.png 300w, http://testgatsby.localtwo-values-768x519.png 768w" sizes="(max-width: 1000px) 100vw, 1000px" /> <figcaption>left image with normal values and right image with slash included</figcaption></figure> 

Basically we realise that the right values 4em / 8em will apply based on axis not corners. So the first value before slash applies to top and bottom edges which are horizontal edges. Additionally the second value which comes after slash applies to vertical edges on left and right.

## Eight values for all edges

However if we add eight values meaning four values on the left side of slash and four on its right, we will have values for all edges applying clockwise to horizontal and vertical alignments as explained above.<figure class="wp-block-image">

<img src="http://www.nikpro.com.auborder-radius-8-values.png" alt="" class="wp-image-32429" srcset="http://testgatsby.localborder-radius-8-values.png 800w, http://testgatsby.localborder-radius-8-values-300x236.png 300w, http://testgatsby.localborder-radius-8-values-768x604.png 768w" sizes="(max-width: 800px) 100vw, 800px" /> <figcaption>border-radius with 8 values using slash syntax</figcaption></figure> 

## Create an stunning animation using border-radius

Finally this is the pen with the animation:

<p data-height="300" data-theme-id="0" data-slug-hash="LBMKqV" data-default-tab="css,result" data-user="enbee81" data-pen-title="border-radius" class="codepen">
  See the Pen <a href="https://codepen.io/enbee81/pen/LBMKqV/">border-radius</a> by Nils (<a href="https://codepen.io/enbee81">@enbee81</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

We will explain the relevant part to the animation. The rest is just positioning stuff. This is the HTML:


```
<div class="container"><br />&nbsp; <div class="box"><br />&nbsp; &nbsp; <div class="spin-container"><br />&nbsp; &nbsp; &nbsp; <div class="shape"><br />&nbsp; &nbsp; &nbsp; &nbsp; <div class="bd"></div><br />&nbsp; &nbsp; &nbsp; </div><br />&nbsp;&nbsp; &nbsp; </div><br />&nbsp; </div><br /></div>                 
```


We notice that the inner child with **class .bd&nbsp;**&nbsp;has the image background and the spin animation applies to it.


```
animation: spin 12s linear infinite reverse;
```


And the spin animation has a rotation been defined to it:


```
@keyframes spin {<br />  to {<br />    transform: rotate(1turn);<br />  }<br />}
```


As a side note rotation property uses turn unit for the value which [we have explained here before](http://www.nikpro.com.au/angle-value-in-css-explained-degrees-gradians-radians-or-turns-units/).

On the other side and **as the parent of this container we have a div with .shape class that magic applies to it.**


```
transition: border-radius 1s ease-out;<br />border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;<br />animation: morph 8s ease-in-out infinite both alternate;
```


Practically we use eight values which gives it different values on each edge. Then we apply the morph animation using both in the syntax.&nbsp;Therefor the animation will follow the rules for both forwards and backwards, thus extending the animation properties in both directions. And alternate them too.


```
@keyframes morph {<br />  0% {border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;} <br />  100% {border-radius: 40% 60%;} <br />}
```


Also we see how the animation changes the border-radius property from start which it has 8 values using slash syntax to two values at 100%. Great effect.

<blockquote class="wp-block-quote">
  <p>
    Don’t forget that old CSS still exists and is useful. You don’t need to use something fancy for every effect.” — Rachel Andrew
  </p>
</blockquote>

Thank you for reading.
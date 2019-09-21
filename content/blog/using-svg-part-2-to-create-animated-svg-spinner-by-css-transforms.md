---
id: 32080
title: Using SVG (part 2) to create animated SVG spinner by CSS transforms
date: 2018-08-23T21:44:11+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32080
permalink: /using-svg-part-2-to-create-animated-svg-spinner-by-css-transforms/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/animated-SVg.jpg
categories:
  - CSS
  - CSS3
tags:
  - CSS transform
  - stroke
  - SVG
---
Following [the introduction about SVG](https://www.nikpro.com.au/what-is-svg-and-how-to-create-it-part-1/), here we explain an example using SVG to create animated SVG spinner by [CSS transforms](https://www.nikpro.com.au/manipulate-elements-visually-with-css-transform-explained-with-examples/).

## The animated SVG spinner

In this example form <a href="https://www.sitepoint.com/" target="_blank" rel="noopener noreferrer">sitepoint</a> we create an animated SVG spinner loader which is based on a few tags in SVG and some attributes to identify the animation and its behaviour. 

#### **The SVG code**

This is the animated SVG spinner code which uses a few tags:


```
<svg class="spinner" viewBox="0 0 66 66" xmlns="https://www.w3.org/2000/svg"> <!-- 1 -->

  <circle class="path spinner-border" cx="33" cy="33" r="31" stroke="url(#gradient)"></circle> <!-- 2 -->

  <linearGradient id="gradient"> <!-- 3 -->
    <stop offset="50%" stop-color="#000" stop-opacity="1"></stop>
    <stop offset="65%" stop-color="#000" stop-opacity=".5"></stop>
    <stop offset="100%" stop-color="#000" stop-opacity="0"></stop>
  </linearGradient>

  <circle class="path spinner-dot" cx="37" cy="3" r="2"></circle> <!-- 4 -->

</svg>
```


Firstly the value of the `vieBox.` attribute is a list of four numbers `min-x`, `min-y`, `width` and `height.` Therefor **`viewBox="0 0 66 66"`** means that the viewport is 66 by 66.

Secondly the first circle is located at `(33,33)`and the radius is 31px. Also **`stroke="url(#gradient)"`** means the stroke colour will be identified by an element with the id of gradient.

The **`linearGradient`** tag is the one that defines stroke colour. It also has three stops as like in CSS when we define stops for our gradient. Moreover it has opacity for each to add the effect as well.

Lastly the second circle is the had of the spinner to be followed.

**The CSS for animated SVG spinner**

The **`stroke-dasharray`** attribute is a presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape and can be used in CSS as well for some limited tags.

The **`stroke-dashoffset`** attribute is a presentation attribute defining an offset on the rendering of the associated dash array. We define them for the spinner body as the first circle:


```
.path {<br />  stroke-dasharray: 170;<br />  stroke-dashoffset: 20;<br />}
```


However we need to define the .spinner-border as well to make a full circle:


```
.spinner-border {<br />  fill: transparent;<br />  stroke-width: 2;<br />  width: 100%;<br />  height: 100%;
}
```


This just makes the circle as it should look like. We need to limit the width and height of the viewBox then to limit the circle in our defined area:


```
.spinner {<br />  margin: 10px;<br />  width: 180px;<br />  height: 180px;<br />}
```


That&#8217;s better. We also need to add the animated SVG head look like a dot:


```
.spinner-dot {<br />  stroke: #000;<br />  stroke-width: 1;<br />  fill: #000;
}
```


With stroke property we add border to our animated SVG dot shape and with fill we give it a colour.

#### Animation for animated SVG shape

Finally comes the interesting part which is the animation. We need to have two animation. First the rotation of the big circle and second the skew of the dot shape head:


```
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
```


We will add this rotate keyframe as the animation for the big circle. Also we define the skew animation for the dot head:


```
@keyframes skew {
  from {
    transform: skewX(10deg)
  }<br />  to {
    transform: skewX(40deg)
  }
}
```


As a result we have an animated SVG spinner with a dot shape head that spins infinitely as we speak. This is the pen for this example:

<p data-height="265" data-theme-id="0" data-slug-hash="wEwRvN" data-default-tab="css,result" data-user="SitePoint" data-pen-title="CSS Transformations: Loaders with SVGs" class="codepen">
  See the Pen <a href="https://codepen.io/SitePoint/pen/wEwRvN/">CSS Transformations: Loaders with SVGs</a> by SitePoint (<a href="https://codepen.io/SitePoint">@SitePoint</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

In this example the CSS transform has been combined with SVG and some of its tags and the result is a nice animated SVG shape which could be an inspiration for animation with SVG tag. Thanks for reading.
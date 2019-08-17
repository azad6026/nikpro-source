---
id: 32451
title: 'Modern techniques for image hover over effects using CSS transition and transform: part 2'
date: 2018-10-23T20:42:42+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32451
permalink: /modern-techniques-for-image-hover-over-effects-using-css-transition-and-transform-part-2/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/10/css-transform-effects.png
categories:
  - CSS
  - CSS3
tags:
  - CSS transform
  - hover over effect
  - transition
---
Following [the previous article](http://www.nikpro.com.au/modern-techniques-for-image-hover-over-effects-using-css-transition-and-animation-part-1/), I have prepared two more image hover over techniques using CSS [transform](http://www.nikpro.com.au/manipulate-elements-visually-with-css-transform-explained-with-examples/) and [transitions](http://www.nikpro.com.au/css-transitions-and-animations-explained-with-examples/). Try to manipulate them in CodePen and get different effects.

## #1: Round image hove over effect

This is one of my favourite ones. We will use a spinner around the image to spin using CSS transforms and having multicolour border it looks pretty and elegant:

<p data-height="300" data-theme-id="0" data-slug-hash="pxOeZj" data-default-tab="css,result" data-user="azad6026" data-pen-title="Round image hover over " class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/pxOeZj/">Round image hover over </a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

We gave spinner , the caption box and the main wrapper and the image wrapper a **round border-radius** to make a circle:

<pre class="wp-block-preformatted"><strong>border-radius: 50%;</strong><br /></pre>

But the interesting part is when we hover over the image. The spinner wrapper will be transformed with a rotation of 180deg and it looks like a ring wrapping the content:

<pre class="wp-block-preformatted"><strong>.hovered-item.circle.effect1 a:hover .spinner {<br />    -webkit-transform: rotate(180deg);<br />    -moz-transform: rotate(180deg);<br />    -ms-transform: rotate(180deg);<br />    -o-transform: rotate(180deg);<br />    transform: rotate(180deg);<br />}</strong></pre>

Also at the same time we transition the opacity to fade in the caption box with a nice delay:

<pre class="wp-block-preformatted"><strong>.hovered-item.circle.effect1 a:hover .info {<br />    opacity: 1;<br />}</strong></pre>

## #2: Slide in caption effect

Practically we will use this one to keep the image in the sight even when its hovered over. But showing its caption in one side so that we can have direct explanation around that:

<p data-height="400" data-theme-id="0" data-slug-hash="NOLpro" data-default-tab="css,result" data-user="azad6026" data-pen-title="Image hover over effect 2" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/NOLpro/">Image hover over effect 2</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Firstly we transition the transform property of the image:

<pre class="wp-block-preformatted"><strong>img{<br />    transition: transform 0.4s;<br />}</strong></pre>

Also for the **figcaption** element which is the caption wrapper we have set the transform-origin property to 0 to change it from it s default which is 50%. Because we need its transform to start from the left edge of the container. The&nbsp;**transform**&#8211;**origin**&nbsp;property is used to change the position of the&nbsp;**origin**&nbsp;of&nbsp;**transformation**&nbsp;of an element:

<pre class="wp-block-preformatted"><strong>figcaption{<br />  transform-origin: 0 0;<br />  transform: rotateY(-90deg);<br />}</strong></pre>

Therefor after hovering over the image we transform the figcaption element and it will slide in to the container with a smooth transition:

<pre class="wp-block-preformatted"><strong>figure:hover figcaption {<br />    transform: rotateY(0deg);<br />    transition: transform 0.4s, opacity 0.1s;<br />}</strong></pre>

Also using translate we&nbsp;reposition the image by 25% to the right:

<pre class="wp-block-preformatted"><strong>figure:hover img{<br />  transform: translateX(25%);<br />}</strong></pre>

As a result it is all a transform animation which is quiet useful and easy to manage. We are able to manipulate our elements behaviour using transform property in variety of ways and transition them as we wish.

Thank you for reading.
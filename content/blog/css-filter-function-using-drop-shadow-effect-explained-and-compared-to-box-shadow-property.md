---
id: 32735
title: CSS Filter() function using drop shadow effect explained and compared to box shadow property
date: 2019-04-22T15:12:32+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32735
permalink: /css-filter-function-using-drop-shadow-effect-explained-and-compared-to-box-shadow-property/
xyz_twap:
  - "1"
# featuredImage: ../../static/images/design-with-code.jpg
featuredImage: ../../static/images/drop-vs-box-shadow.png
categories:
  - CSS
  - CSS3
tags:
  - boxshadow
  - drop shadow
---

Image effects like <a rel="noreferrer noopener" aria-label="drop shadow could  (opens in a new tab)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow" target="_blank">drop shadow could </a>be added in CSS to an element using filter() function. We will check drop-shadow in filter function to see how we can use it to add interesting effects to an image and how it compares to the box shadow property.

## The drop shadow() function syntax

Firstly we will take a look at its syntax:

```
drop-shadow(<em>offset-x</em> <em>offset-y</em> <em>blur-radius</em> <em>spread-radius</em> <em>color</em>);<br /><br />An example:<br /><br />/* Reddish shadow with 1rem blur and .3rem spread */ /* WARNING: not generally supported by browsers */ <br /><br />drop-shadow(.5rem .5rem 1rem .3rem #e23)
```

As we see it is very much the same as the box shadow property:

```
/* offset-x | offset-y | blur-radius | spread-radius | color */ <br /><br />box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
```

Common thing is spread radius is not supported by most browsers. So if used will not have any effect.

### The drop shadow() and box shadow different effects

We will use the same example of both effects to see the difference here. Therefore we start with the drop shadow() function in this <a href="https://codepen.io/azad6026/pen/BEwYyq" target="_blank" rel="noreferrer noopener" aria-label="pen (opens in a new tab)">pen</a>:

https://codepen.io/azad6026/pen/BEwYyq

Basically the drop shadow has added the shadow similar to the shape of the image. Whatever the shape , it follows it along. It does not care about the container box which is always rectangular by default.

#### The box shadow example

As a comparison we need to <a href="https://codepen.io/azad6026/pen/ZZXvgE" target="_blank" rel="noreferrer noopener" aria-label="check (opens in a new tab)">check</a> on the same example of <a rel="noreferrer noopener" aria-label="box shadow property (opens in a new tab)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow" target="_blank">box shadow property</a>:

https://codepen.io/azad6026/pen/ZZXvgE

Generally the main difference is about the box. The box shadow property follows the box itself to create the shape of the shadow. Therefore it does not really care about the image shape.Do if you make the box round with border radius it will follow a circle then.

As a result it is up to our decision of which one is more suitable in our cases. They both do really the same job but in a different ways.

<a href="https://thenewcode.com/598/box-shadow-property-vs-drop-shadow-filter-a-complete-comparison" target="_blank" rel="noreferrer noopener" aria-label="Also (opens in a new tab)">Also</a> **drop**&#8211;**shadow** filters have the advantage of hardware acceleration if the browser vendor supports it while **box**&#8211;**shadow** does not have access to that code. The **drop**&#8211;**shadow** filter also will tend to render faster

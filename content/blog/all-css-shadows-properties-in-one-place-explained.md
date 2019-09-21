---
id: 31755
title: All CSS Shadow properties explained in one place
date: 2018-06-29T22:36:27+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31755
permalink: /all-css-shadows-properties-in-one-place-explained/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/css3-shadows.jpg
categories:
  - CSS
  - CSS3
tags:
  - box-shadow
  - shadows
  - text-sadow
---

CSS3 have a few features <a href="https://www.nikpro.com.au/css-grid-layouts-and-css-new-variables-should-we-get-started/" target="_blank" rel="noopener noreferrer">that are important to learn and use</a>. There are two important shadow related properties that we all know about. They are box-shadow and text-shadow. We demonstrate them with some examples.

## The box-shadow

This property is used to create shadows for block-level elements. The syntax for box-shadow property is like below:

<pre>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]<span class="token punctuation">;</span>

```


**The horizontal offset** :

If positive, the shadow will be on the right of the box and if negative the shadow will be on the left.

**The vertical offset:**

IF positive, the shadow will be below the box and if negative the shadow will be above the box.

**The blur radius:**

If set to 0, shadow will be sharp. If positive the more blur it would be and the shadow will extend further.

**Color:**

takes any color value, like hex, named, [rgba](https://css-tricks.com/rgba-browser-support/) or [hsla](https://css-tricks.com/yay-for-hsla/).

### **All above properties are required. **

**The spread radius: **

This is optional and by default it is zero. If positive, increases the shadow size and if negative, decreases the shadow size.

You could see a few examples here in this pen. I have created one side shadow, inner shadow and multiple borders example here:

https://codepen.io/azad6026/pen/pKqrjd

Using pseudo elements, we could have 3D effects with box-shadow property. Check out this pen:

https://codepen.io/haibnu/pen/FxGsI

## The text-shadow

The text-shadow property applies shadows on the text itself. The syntax looks like this:

<pre>
<span class="token property">text-shadow</span><span class="token punctuation">:</span> [horizontal offset] [vertical offset] [blur radius] [color]<span class="token punctuation">;</span>

```


The effect of the values are the same as box-shadow. based on that positive values make the shadow on the right and below the text. The blur is optional and it is zero by default.Also, remember you can use [RGBa](https://css-tricks.com/rgba-browser-support/) or [HSLa](https://css-tricks.com/examples/HSLaExplorer/) values for the color,

You can check different examples of text-shadow in this pen that I have created learning from this <a href="https://css-tricks.com/almanac/properties/t/text-shadow/" target="_blank" rel="noopener noreferrer">article</a>:

https://codepen.io/azad6026/pen/MXZvrq

Thank you for reading.

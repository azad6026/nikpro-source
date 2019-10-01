---
id: 32075
title: The CSS 4 writing mode property is explained with examples
date: 2018-08-22T21:05:01+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32075
permalink: /the-css-4-writhing-mode-property-is-explained-with-examples/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/writing-mode.png
categories:
  - CSS
  - CSS4
tags:
  - text flow
  - writing mode poperty
---
The CSS 4 writing mode property is explained in this article.These properties are used to change the alignment of the text. The text then could be read from top to bottom and right to left.

## Writing mode properties

According to MDN this is the syntax for the writing mode property and its values:


```
/* Keyword values */

writing-mode: horizontal-tb; // horizontal direction from top to bottom

writing-mode: vertical-rl; // vertical direction from right to left

writing-mode: vertical-lr; // vertical direction from left to right

/* Global values */

writing-mode: inherit;

writing-mode: initial;

writing-mode: unset;
```


### Writing mode horizontal tb value

Actually this is the default value for the writing mode property. Text flow direction is from top to bottom and left to right. Check out this pen for how it works:

<p data-height="265" data-theme-id="0" data-slug-hash="BOybrZ" data-default-tab="html,result" data-user="azad6026" data-pen-title="writing mode: tb" class="codepen">
  <a href="https://codepen.io/azad6026/pen/BOybrZ/"></a>
</p>

### Writing mode vertical lr value

Expectedly this is the second value for writing mode property. It changes the flow of the content from the default horizontal to vertical but keeps the reading direction to left to right.This is a pen to show how this value works:

<p data-height="265" data-theme-id="0" data-slug-hash="mGygBX" data-default-tab="html,result" data-user="azad6026" data-pen-title="writing mode: left to right" class="codepen">
  <a href="https://codepen.io/azad6026/pen/mGygBX/"></a>
</p>

### Writing mode vertical rl value

Finally this is the third value of the writing mode property. However this is the interesting one. Because it changes the flow of the content horizontally from right to left. Normally this is great for languages like Chinese or Korean or Japanese where the flow of the text is normally vertical.

Check out this pen to get a better idea around this writing mode value:

<p data-height="265" data-theme-id="0" data-slug-hash="WgbBvN" data-default-tab="html,result" data-user="azad6026" data-pen-title="writing mode : right to left" class="codepen">
  <a href="https://codepen.io/azad6026/pen/WgbBvN/"></a>
</p>

#### Side note around writing mode property

The [SVG element](https://www.nikpro.com.au/what-is-svg-and-how-to-create-it-part-1/) has a **writing-mode** as an attribute. The `writing-mode` attribute specifies whether the initial inline-progression-direction for a [`text`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text) element shall be left-to-right, right-to-left, or top-to-bottom. The `writing-mode` attribute applies only to **[`text`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text) elements.**

Because of various type of writing in different languages and importance of visual design the writing mode property can be useful and essential in different types of designs. Therefor it is good to be aware of it. Thanks for reading.
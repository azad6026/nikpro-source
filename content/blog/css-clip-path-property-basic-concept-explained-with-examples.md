---
id: 31981
title: CSS clip-path property basic concept explained with examples
date: 2018-08-05T22:01:52+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31981
permalink: /css-clip-path-property-basic-concept-explained-with-examples/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/clip-path.jpg
categories:
  - CSS
  - CSS3
tags:
  - clipping
  - CSS clip-path
---
CSS clip-path property is a strong and flexible way to hide and show different parts of an element in CSS. We explain CSS clip-path concept here in this post with some examples and would have future posts for further steps.

In <a href="https://css-tricks.com/clipping-masking-css/" target="_blank" rel="noopener noreferrer">this</a> CSS tricks article there are lots of example about CSS clip-path but I will explain some important concepts here.

## The CSS clip-path syntax




```
.clip-inset {
  clip-path: inset(10px 20px 30px 40px);
  /* Also can take single values to make all sides the same, or 2 values (vert/horz), or 3 values (top/horz/bottom). */
}<br />.clip-circle {
  clip-path: circle(60px at center);
}
.clip-ellipse {
  clip-path: ellipse(60px 40px at 75px 30px);
}
.clip-polygon {
  clip-path: polygon(5% 5%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  /* Note that percentages work as well as px */
}<br />
```


We have four different shapes kind of clip-path. Lets explain each with a few examples.

This pen shows how an image can be clipped by different clip-path property shapes:

**Inset**

With inset we can make an inner rectangle that crops the image where we need it to.


```
.inset {
  -webkit-clip-path: inset(20% 25% 20% 10%);
  clip-path: inset(20% 25% 20% 10%);
}
```


Also we could use round keyword and a border radius to make round edges:


```
.inset {
  -webkit-clip-path: inset(20% 25% 20% 10%);
  clip-path: inset(20% 25% 20% 10%);
}
```


[](https://bennettfeely.com/clippy/)**Eclipse**

Ellipses are defined using this syntax: _ellipse(radiusX radiusY at posX posY)_. The position is optional and will default to _50% 50%:_


```
.ellipse {
  -webkit-clip-path: ellipse(50% 35%);
  clip-path: ellipse(50% 35%);
}
.ellipse2 {
  -webkit-clip-path: ellipse(50% 65% at 70% 50%);
  clip-path: ellipse(50% 65% at 70% 50%);
}
```


**Circle**

Circles are defined with this syntax: _circle(radius at posX posY)_. And the position is default to 50% 50%:


```
.circle {
  -webkit-clip-path: circle(50%);
  clip-path: circle(50%);
}
.circle2 {
  -webkit-clip-path: circle(70% at 70% 20%);
  clip-path: circle(70% at 70% 20%);
}
```


**Polygon**

Polygon is a very flexible shape maker. You can give it as many points as you like. The provided points are **pairs of X and Y coordinates** that can be of any unit. Here are three examples of clipping with Polygon creating rectangle,  x shape and star shape:


```
/* Triangle */
.polygon1 {
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
/* X */
.polygon2 {
  -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}
/* Star */
.polygon3 {
  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
```


### All in one example

<p data-height="400" data-theme-id="0" data-slug-hash="wBKPOm" data-default-tab="html,result" data-user="chriscoyier" data-pen-title="clip-path examples" class="codepen">
  See the Pen <a href="https://codepen.io/chriscoyier/pen/wBKPOm/">clip-path examples</a> by Chris Coyier (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Also have a look at this example on CodePen which uses CSS clip-path for hover over effect:

<p data-height="400" data-theme-id="0" data-slug-hash="vEZOeq" data-default-tab="css,result" data-user="drewminns" data-pen-title="vEZOeq" class="codepen">
  See the Pen <a href="https://codepen.io/drewminns/pen/vEZOeq/">vEZOeq</a> by Drew Minns (<a href="https://codepen.io/drewminns">@drewminns</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

You could play around with it through Bennet Feely&#8217;s [Clippy.](https://bennettfeely.com/clippy/) It will give us a better understanding around clipping with CSS clip-path. In the next article of CSS clip-path we will talk about [CSS animations](https://www.nikpro.com.au/learn-how-to-use-css-animation-using-keyframes-with-examples/) made by clipping and masking. Thanks for reading.

[](https://bennettfeely.com/clippy/)
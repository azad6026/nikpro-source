---
id: 31894
title: Manipulate elements visually with CSS transform explained with examples
date: 2018-07-21T22:42:37+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31894
permalink: /manipulate-elements-visually-with-css-transform-explained-with-examples/
image: ../../static/images/css-transform.png
categories:
  - CSS
  - CSS3
tags:
  - CSS transform
---
CSS transform function like [CSS transition](http://www.nikpro.com.au/css-transitions-and-animations-explained-with-examples/) and animation has been around for quiet sometime and has been used in all kinds of visual forms. It allows you to manipulate elements visually by skewing, rotating, translating, or scaling in a few different formats. Lets explain it with examples.

## The transform property values

The <code class="w3-codespan">transform</code> property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements. These are different values of transform property:

  * **`scale()`:** affects the size of the element. This also applies to the `font-size`, `padding`, `height`, and `width` of an element, too. It’s also a a shorthand function for the `scaleX` and `scaleY` functions.
  * `skewX()` and **`skewY()`**: tilts an element to the left or right, like turning a triangle into a parallelogram. There is no shorthand `skew` property like scale().
  * **`translate()`**: moves an element up and down and left and right.
  * `rotate()`: rotates an element clockwise .
  * **`matrix()`**: a function that combines all transforms into one.
  * **`perspective()`**: it faffects the transforms of descendent elements&#8217; 3D transforms (and not the element), allowing them all to have a consistent depth perspective.

## Scale transform function

I have created this pen to explain in for both possible forms:

<p class="codepen" data-height="350" data-theme-id="0" data-slug-hash="ajpYJK" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="CSS scale transform">
  See the Pen <a href="https://codepen.io/azad6026/pen/ajpYJK/">CSS scale transform</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



The left box square uses`<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation"> </span>`which scales up both width and height by 20 times each direction.

The right box square uses `<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">20,30</span><span class="token punctuation">)</span><span class="token punctuation">; </span>`which scales width by 20 and height by 30 and makes it a rectangle at the end.

There is another syntax to be more specific to change the scale by specifying X and Y in its syntax:

`<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> `

`<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`

Try it on he above code pen and see how it scales the boxes. You will see how Y scales down by half as it has .5 as its scale.

## Skew transform function

There is no generic syntax for skew and we have to specifically define it for X and Y directions:

`.element {`  
`  transform: skewX(25deg);`  
`}`

`.element {`  
`  transform: skewY(25deg);`  
`}`

<p class="codepen" data-height="350" data-theme-id="0" data-slug-hash="ZjLxrv" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="skew transform examples">
  See the Pen <a href="https://codepen.io/azad6026/pen/ZjLxrv/">skew transform examples</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



They tilt an element in one way.In the example below, for the left blue boxes, we skew a 100px x 100px square to the left and right with **skewX **and in the right gray boxes, we skew them with `skewY.`

## Rotate transform function

With rotate you can have both generic and specific syntax. The rotation can happen in three dimension X, Y and Z.

Rotate and element clockwise:

`<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">25</span>deg<span class="token punctuation">)</span><span class="token punctuation">;</span>`

And rotate in Y direction:

`transform: rotateY(40deg);`

Have a look at this pen:

<p class="codepen" data-height="350" data-theme-id="0" data-slug-hash="MBJVPQ" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="rotate transform">
  See the Pen <a href="https://codepen.io/azad6026/pen/MBJVPQ/">rotate transform</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



In top three boxes, a square continues to rotate 360 degrees every three . And the individual bottom three boxes we use `rotateX`, `rotateY` and `rotateZ` functions.

## Translate transform function

It has both generic and specific syntax to move an element to the left and right or up and down:

`<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">20</span>px, <span class="token number">10</span>px<span class="token punctuation">)</span><span class="token punctuation">;</span>`

This transform function moves an element sideways, or up and down. Or use the specific syntax:

`transform: translateX(value);`  
`transform: translateY(value);`

In the example below an element using `transform` will not cause other elements to flow around it. By using the `translate` function below and changing the green square out of its original position, the text will remain fixed in place, as if the square is a block element:

<p class="codepen" data-height="350" data-theme-id="0" data-slug-hash="mjRxve" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="translate transform">
  See the Pen <a href="https://codepen.io/azad6026/pen/mjRxve/">translate transform</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



### Multiple transform and Matrix

We could use multiple transform functions at once:

`.element {`  
`  width: 20px;`  
`  height: 20px;`  
`  transform: scale(20) skew(-20deg);`  
`}`

In the example above the skew will be performed first and then the scale as there is an order for performing transform functionality. This is what also can be done by Matrix. The `matrix` transform function can be used to combine all transforms into one. There are tools out there like [The Matrix Resolutions](http://meyerweb.com/eric/tools/matrix/), which can convert a group of transforms into a single matrix declaration. So this:

`<span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">45</span>deg<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">24</span>px, <span class="token number">25</span>px<span class="token punctuation">)</span>`

has a matrix function as this:

`<span class="token function">matrix</span><span class="token punctuation">(</span><span class="token number">0.7071067811865475</span>, <span class="token number">0.7071067811865476</span>, -<span class="token number">0.7071067811865476</span>, <span class="token number">0.7071067811865475</span>, -<span class="token number">0.7071067811865497</span>, <span class="token number">34.648232278140824).</span>`

This was all about CSS transform important functions. We will explain 3d transform and perspective in another post.
---
id: 31921
title: Learn how to use CSS animation using keyframes with examples
date: 2018-07-26T22:23:33+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31921
permalink: /learn-how-to-use-css-animation-using-keyframes-with-examples/
image: css-animation.jpg
categories:
  - CSS
  - CSS3
tags:
  - CSS animation
  - keyframes
---
CSS animation is the best way to animate transitions on our elements using a before and after style. CSS animation contains of two sections. The animation property itself and a set of keyframes that include before and after styles for the element in certain points. We can make animation with CSS transition as well which you can read about it [here](http://www.nikpro.com.au/css-transitions-and-animations-explained-with-examples/).

## A few examples 

### Simple animation

This is a simple example making a paragraph to slide in from the right animating the margin-right and the width through keyframe setup in one step:

`<strong>p.slidein {</strong>`  
`<strong>  animation-name: slidein;</strong>`  
`<strong>  animation-duration: 3s;</strong>`  
`<strong>  animation-iteration-count: infinite;</strong>```

`<strong>}</strong>`

`<strong>@keyframes slidein {</strong>`  
`<strong>  from {</strong>`  
`<strong>    margin-left: 100%;</strong>`  
`<strong>    width: 300%; </strong>`  
`<strong>  }</strong>`

`<strong>  to {</strong>`  
`<strong>    margin-left: 0%;</strong>`  
`<strong>    width: 100%;</strong>`  
`<strong>  }</strong>`  
`<strong>}</strong>`

Every animation must have a name(slidein here) and a duration. The other properties are optional and we will see them in other examples. We did set the animation iteration count to infinite here to see the animation all the time.

As you see the keyframe has the same name as the animation and some steps. It could have onestep or more. We will see more examples around it.

#### Shorten it

Lets shorten the code as much as possible. Animation has a shorthand which we can use:

`<strong>p.slidein {</strong>`  
`<strong>  animation: slidein 3s</strong>``<strong>infinite;</strong>```

`<strong>}</strong>`

That looks better. Doesn&#8217;t it.

Note that if a keyframe rule doesn&#8217;t specify the start or end states of the animation (that is, `0%`/`from` and `100%`/`to`, browsers will use the element&#8217;s existing styles for the start/end states. This can be used to animate an element from its initial state and back.

### Now another example with a few steps

In this example we have three steps (at 0% and 30% and 100%) in our keyframe to animate the font size and we also added the alternate value to the animation to run it in both sides; back and forth:

`<strong>@keyframes fontbulger {</strong>`  
`<strong>  0% {</strong>`  
`<strong>     font-size: 40px;</strong>`  
`<strong>  }</strong>`  
`<strong>  30% {</strong>`  
`<strong>    font-size: 20px;</strong>`  
`<strong>  }</strong>`  
`<strong>  100% {</strong>`  
`<strong>    font-size: 40px;</strong>`  
`<strong>  }</strong>`  
`<strong>}</strong>`

`<strong>.box {</strong>`  
`<strong>  animation: fontbulger 2s infinite alternate;</strong>`  
`<strong>}</strong>`

If you use steps(10) in your animation, it will make sure only 10 keyframes happen in the allotted time. When an animation has a similar start and end point you could shorten the code as below:

`<strong>@keyframes fontbulger {</strong>`  
`<strong>  0%, 100% {</strong>`  
`<strong>     font-size: 40px;</strong>`  
`<strong>  }</strong>`  
`<strong>  30% {</strong>`  
`<strong>    font-size: 20px;</strong>`  
`<strong>  }</strong>`  
`<strong>}</strong>`

## All animation properties and values

As you might be wondering what are other animation properties and vaues are, I put all together in this class:

`<strong>.box {</strong>`  
`<strong>  animation-name: fontbulger;</strong>`  
`<strong>  animation-duration: 4s; /* or: Xms */</strong>`  
`<strong>  animation-iteration-count: 10;</strong>`  
`<strong>  animation-direction: alternate; /* or: normal */</strong>`  
`<strong>  animation-timing-function: ease-out; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */</strong>`  
`<strong>  animation-fill-mode: forwards; /* or: backwards, both, none */</strong>`  
`<strong>  animation-delay: 2s; /* or: Xms */</strong>`  
`<strong>}</strong>`

Now shorten tis one:

`<strong>animation: fontbulger 4s 2s 10 alternate ease-out forwards;</strong>`

Combine animation and transform

We could use [CSS transform](http://www.nikpro.com.au/manipulate-elements-visually-with-css-transform-explained-with-examples/) in our animation as well:

`<strong>@keyframes infinite-spinning {</strong>`  
`<strong>  from {</strong>`  
`<strong>    transform: rotate(0deg);</strong>`  
`<strong>  }</strong>`  
`<strong>  to {</strong>`  
`<strong>    transform: rotate(360deg);</strong>`  
`<strong>  }</strong>`  
`<strong>}</strong>`

### Multiple animations

We could also have multiple animations on one element by comma separating them in the animation syntax:

`<strong>@keyframes fade {<br />
  to {<br />
    opacity: 0;<br />
  }<br />
}<br />
@keyframes rotate {<br />
  to {<br />
    transform: rotate(180deg);<br />
  }<br />
}<br />
.multiple {<br />
  animation: fade 5s 1s infinite linear alternate,<br />
             rotate 5s 1s infinite linear alternate;<br />
}}</strong>`

This will animate both transform and opacity on the element.

### Browser support 

We better use prefixes to have 100% cover on supported browsers. For the animation itself:

<p id="0d67" class="graf graf--pre graf-after--p">
  <code>&lt;strong>.element {&lt;/strong></code><br /> <code>&lt;strong>  -webkit-animation: fade 4s 1s infinite linear alternate;&lt;/strong></code><br /> <code>&lt;strong>  -moz-animation: fade 4s 1s infinite linear alternate;&lt;/strong></code><br /> <code>&lt;strong>  -ms-animation: fade 4s 1s infinite linear alternate;&lt;/strong></code><br /> <code>&lt;strong>  -o-animation: fade 4s 1s infinite linear alternate;&lt;/strong></code><br /> <code>&lt;strong>  animation: fade 4s 1s infinite linear alternate;&lt;/strong></code><br /> <code>&lt;strong>}&lt;/strong></code>
</p>

And for the keyframe:

`<strong>@-webkit-keyframes fade { /* your style */ }</strong>`  
`<strong>@-webkit-keyframes fade { /* your style */ }</strong>`  
`<strong>@-webkit-keyframes fade { /* your style */ }</strong>`  
`<strong>@-webkit-keyframes fade { /* your style */ }</strong>`  
`<strong>@keyframes fade { /* your style */ }</strong>`

I have created a codepen for our examples here that you could play around with. Change the code and see the result for yourself:

<p class="codepen" data-height="800" data-theme-id="0" data-slug-hash="NBvBzJ" data-default-tab="css,result" data-user="azad6026" data-pen-title="CSS animation basic examples">
  See the Pen <a href="https://codepen.io/azad6026/pen/NBvBzJ/">CSS animation basic examples</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



You could find more details <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://codeburst.io/how-to-animate-using-css-27e04208ee8" target="_blank" rel="noopener noreferrer">here</a>. Thanks for reading.
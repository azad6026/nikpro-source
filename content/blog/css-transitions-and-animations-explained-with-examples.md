---
id: 31870
title: CSS transitions and animations explained with examples
date: 2018-07-17T21:09:08+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31870
permalink: /css-transitions-and-animations-explained-with-examples/
# image: ../../static/images/css-transition.jpg
categories:
  - CSS
  - CSS3
tags:
  - animations
  - transitions
---
CSS transition property has changed [CSS animation](http://www.nikpro.com.au/how-to-build-a-simple-gallery-using-flexbox-and-javascript/) and we use it now quiet often. Here I will demonstrate some of its usages. We will explain CSS transitions and animations with some examples.

Css transitions are just like simpler animations. They move from one fixed set of properties to another. The shorthand for transition is like this:

`.move-me {`  
`  transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];`  
`}`

And you don&#8217;t have to use all the values. You just need to setup the duration and that will create animation for all the attached property to the related element. Check this example:

<p class="codepen" data-height="350" data-theme-id="0" data-slug-hash="RrPopP" data-default-tab="css,result" data-user="geoffgraham" data-embed-version="2" data-pen-title="CSS Transition Property">
  See the Pen <a href="https://codepen.io/geoffgraham/pen/RrPopP/">CSS Transition Property</a> by Geoff Graham (<a href="https://codepen.io/geoffgraham">@geoffgraham</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



### A simple Example

In the CSS we are changing the background colour and width on hover effect:

`.box {`  
`  width: 150px;`  
`  height: 150px;`  
`  background-color: red;`  
`  transition: 1s;`  
`}`

`.box:hover {`  
`  width: 300px;`  
`  background-color: orange;`  
`}`

And as you can see, the transition is set to : 1s meaning it takes one second to complete the animation and it tells the box to transition both width and background-color on hover in that time.

### Transition property values

For the most part, the order of the values does not matter unless a delay is specified. If you specify a delay, you must first specify a duration. The first value that the browser recognises as a valid time value will always represent the **duration**. Any subsequent valid time value will be parsed as the delay.

By specifying transition to the element itself, you transition that element on both directions. Before and after the event. like above, before and after the hover over. This is the case in the example above.

### An example with one direction transition

In this example, the background is transitioned only on hover over styles ( transition has been defined only in hover styles) but not when you hover off ( on the element style itself there is  no transition specified):

<p class="codepen" data-height="350" data-theme-id="0" data-slug-hash="zohgt" data-default-tab="css,result" data-user="impressivewebs" data-embed-version="2" data-pen-title="zohgt">
  See the Pen <a href="https://codepen.io/impressivewebs/pen/zohgt/">zohgt</a> by Louis Lazaris (<a href="https://codepen.io/impressivewebs">@impressivewebs</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



At hover off, it does not transition the colour back and it does a solid change.

### Multiple steps in transition

WE make things a little bit complicated by adding multiple steps in the transition syntax. We will chain our transition together using commas and will play with their duration and delay and will make some kind of animation.We can change the above example to this one:

<p class="codepen" data-height="350" data-theme-id="0" data-slug-hash="mVJKgO" data-default-tab="css,result" data-user="css-tricks" data-embed-version="2" data-pen-title="CSS Transition Property">
  See the Pen <a href="https://codepen.io/team/css-tricks/pen/mVJKgO/">CSS Transition Property</a> by CSS-Tricks (<a href="https://codepen.io/css-tricks">@css-tricks</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



`.box {`  
`  transition: `  
`  /* step 1 */`  
`  width 1s,`  
`  /* step 2 */`  
`  background 0.5s 1s;`  
`}`

Now we will make it fancier by transitioning text and width and background-color one another:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="dGoOMB" data-default-tab="css,result" data-user="geoffgraham" data-embed-version="2" data-pen-title="Multi-Step Transitions">
  See the Pen <a href="https://codepen.io/geoffgraham/pen/dGoOMB/">Multi-Step Transitions</a> by Geoff Graham (<a href="https://codepen.io/geoffgraham">@geoffgraham</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



`/* Our box element */`  
`.box {`  
`  width: 150px;`  
`  height: 150px;`  
`  background-color: red;`  
`  box-shadow: 5px 5px 25px #000;`  
`  transition: all 1s;`  
`}`

`/* On hover... */`  
`.box:hover {`  
`  /* Increase width */`  
`  width: 300px;`  
`  /* Change color */`  
`  background-color: orange;`  
`  /* Move the shadow */`  
`  box-shadow: -5px 5px 25px #000;`  
`}`

`/* The first line of text */`  
`.box__blurb {`  
`  /* Start with full opacity and centered */`  
`  opacity: 1;`  
`  transform: translateX(45px);`  
`  /* Then transition these chained properties */`  
`  transition:`  
`  opacity 0.5s 2s,`  
`  transform 0.5s 0.5s;`  
`}`

`/* On .box hover... */`  
`.box:hover .box__blurb {`  
`  /* Fade out */`  
`  opacity: 0;`  
`  /* Move over to the right */`  
`  transform: translateX(-500px);`  
`}`

`/* The second line of text */`  
`.rect__blurb {`  
`  /* Start with no opacity and pushed off the element */`  
`  opacity: 0;`  
`  transform: translateX(500px);`  
`  /* Then transition these chained properties */`  
`  transition: `  
`  opacity 0.5s 1s,`  
`  transform 0.5s 1s;`  
`}`

`/* On .box hover... */`  
`.box:hover .rect__blurb {`  
`  /* Face in */`  
`  opacity: 1;`  
`  /* While entering from the right */`  
`  transform: translateX(-100px);`  
`}`

This is what is happenning in the code:

  * Changes the width from `150px` to `300px` immediately on hover for 1 second
  * The`background-color``changes` from red to orange immediately for 1 second
  * A`box-shadow`  added and the direction of it changes immediately on hover for 1 second
  * One line of text added that fades out and is pushed away to the left after the `width` and `height have transitioned`
  * Added another line of text that appears and swoops in from the right after the first line of text has disappeared

With CSS transitions in hand ,lots of animations could be done without actually animate them with animation and keyframe property. That will also be another post in the future.
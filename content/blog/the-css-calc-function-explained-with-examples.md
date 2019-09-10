---
id: 32179
title: The CSS calc function explained with examples
date: 2018-09-10T21:06:55+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32179
permalink: /the-css-calc-function-explained-with-examples/
xyz_twap:
  - "1"
image: /images/calc-function.png
categories:
  - CSS
  - CSS3
---
Using the CSS calc function is great in many [use cases](http://www.nikpro.com.au/css-custom-properties-or-variables-with-more-examples/). We will explain a few in this article with examples.

Generally the calc function is used to calculate CSS property values.  According to <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/calc" target="_blank" rel="noopener noreferrer">MDN</a> we can use it anywhere a [`<length>`](https://developer.mozilla.org/en-US/docs/Web/CSS/length), [`<frequency>`](https://developer.mozilla.org/en-US/docs/Web/CSS/frequency), [`<angle>`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle), [`<time>`](https://developer.mozilla.org/en-US/docs/Web/CSS/time), [`<percentage>`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage), [`<number>`](https://developer.mozilla.org/en-US/docs/Web/CSS/number), or [`<integer>`](https://developer.mozilla.org/en-US/docs/Web/CSS/integer) is allowed.

## Calc function syntax

Basically the below is its syntax with an example:

```<code>Syntax : property: calc(expression) 
Example : width: calc(100% - 80px);</code>```

As a side note we need to remember a few things when using calc function:

  * We can use  &#8211;  +  * /  math operators with it.
  * When using  plus and minus sign we always should add a space between the sign and the number to make a valid parsable expression: calc(50% **&#8211; 8px**) is right. calc(50% **-8px)**  is wrong.
  * We can use multiple units in our calc functions.<figure class="wp-block-image">

<img src="http://www.nikpro.com.aucss3-calc.jpg" alt="css3 calc" class="wp-image-32182" srcset="http://testgatsby.localcss3-calc.jpg 1280w, http://testgatsby.localcss3-calc-300x169.jpg 300w, http://testgatsby.localcss3-calc-768x432.jpg 768w, http://testgatsby.localcss3-calc-1024x576.jpg 1024w" sizes="(max-width: 1280px) 100vw, 1280px" /> </figure> 

### Positioning elements with calc

As an example we can position the background image in the bottom right using calc function. Look at this pen from CSS-tricks:

<p data-height="265" data-theme-id="0" data-slug-hash="cqzmD" data-default-tab="css,result" data-user="chriscoyier" data-pen-title="calc() use case #2" class="codepen">
  See the Pen <a href="https://codepen.io/chriscoyier/pen/cqzmD/">calc() use case #2</a> by Chris Coyier (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

<pre class="wp-block-preformatted">background-image: /images/url(dog.png);
background-position: calc(100% - 50px) calc(100% - 20px);</pre>

The above piece of code puts the dog background in the bottom right. As a result calc put it 50px from the right and 20px from the bottom of the window width.

### Calculate margins with calc

One of the best use cases we can use calc for is margins. Imagine we have a navigation on the left and an article tag on the right. Efficiently we can calculate the margin in between them and make room for both in the container using calc: 

**nav {**  
**width: 20%;**  
**margin-right: 1em;**  
**float: left;**  
**background: gold;**  
**}**  
**article {**  
**width: calc(80% &#8211; 1em);**  
**float: right;**  
**background: orange;**  
**}**

We have a 1em margin to the right of the nav so in the article class we calculate that for article width so that they will not overlap each other. See the full example <a href="https://www.quackit.com/html/html_editors/scratchpad/?example=/css/functions/css_calc_function_two_column_margin_example" target="_blank" rel="noopener noreferrer">here</a>. 

### Calculate the height with calc

Generally we can use calc to calculate the height or make the content to have the full height needed. We have this CSS-tricks CodePen with header on the top and content in the bottom:

<p data-height="400" data-theme-id="0" data-slug-hash="MwPmVG" data-default-tab="css,result" data-user="css-tricks" data-pen-title="calc() use case #1" class="codepen">
  See the Pen <a href="https://codepen.io/team/css-tricks/pen/MwPmVG/">calc() use case #1</a> by CSS-Tricks (<a href="https://codepen.io/css-tricks">@css-tricks</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Therefor this is the interesting part of the code:

```.area-one {
  /* With the body as tall as the browser window
     this will be too */
  height: 100%;
}
.area-one h2 {
  height: 50px;
  line-height: 50px;
}
.content {
  /* Subtract the header size */
  height: calc(100% - 50px);
  overflow: auto;
}```

Firstly the body has a full height of 100%. Then the h2 has a fixed height of 50px. For the content to have the rest of the height and be as tall as the body we use calc as **height : calc(100% &#8211; 50px)** to make it work. Looks great.

In this article we show a few examples of using calc function. However there are lots of other use cases for this function like in animations and along with [CSS variables](http://www.nikpro.com.au/css-custom-properties-or-variables-with-more-examples/) and other use cases. With their great support in browsers we should be using them in the right place when possible. Thanks for reading.
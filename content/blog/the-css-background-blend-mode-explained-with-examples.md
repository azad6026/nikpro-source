---
id: 32085
title: The CSS background blend mode explained with examples
date: 2018-08-24T21:24:35+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32085
permalink: /the-css-background-blend-mode-explained-with-examples/
# image: ../../static/images/blend-mode.png
categories:
  - CSS
  - CSS3
---
The [CSS](http://www.nikpro.com.au/category/css) background blend mode property is a modern way of creating complex yet beautiful and small size backgrounds. Comparing to the image version of these backgrounds they save lots of &#8220;size issue&#8221; and more importantly a http request to the server. We will have a look at a few examples explaining the CSS background blend mode.

### Example with repeating linear gradient

In this example the **`repeating-linear-gradient()`** property has been used to create an image like gradient background. The **`repeating-linear-gradient()`** CSS function creates an image consisting of repeating linear gradients. This is the code for this property here:

<pre class="wp-block-preformatted">background:
<code>repeating-linear-gradient(
    50deg,
    #F7A37B,
    #F7A37B 1em,
    #FFDEA8 1em,
    #FFDEA8 2em,
    #D0E4B0 2em,
    #D0E4B0 3em,
    #7CC5D0 3em,
    #7CC5D0 4em,
    #00A2E1 4em,
    #00A2E1 5em,
    #0085C8 5em,
    #0085C8 6em
),
repeating-linear-gradient(
    -50deg,
    #F7A37B,
    #F7A37B 1em,
    #FFDEA8 1em,
    #FFDEA8 2em,
    #D0E4B0 2em,
    #D0E4B0 3em,
    #7CC5D0 3em,
    #7CC5D0 4em,
    #00A2E1 4em,
    #00A2E1 5em,
    #0085C8 5em,
    #0085C8 6em
);</code><br /></pre>

As a result it repeats the colour stops infinitely in all directions so as to cover its entire container. Now we can add the **`background-blend-mode.`** There can be several values, separated by commas:

```&lt;blend-mode> = normal <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> multiply <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> screen <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> overlay <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> darken <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> lighten <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> color-dodge <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> color-burn <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> hard-light <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> soft-light <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> difference <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> exclusion <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> hue <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> saturation <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> color <a href="https://developer.mozilla.org/en-US/docs/CSS/Value_definition_syntax#Single_bar">|</a> luminosity<br /></pre>

Therefor in this example we use **multiply**. This is the pen for this example:

<p data-height="265" data-theme-id="0" data-slug-hash="OoyoYZ" data-default-tab="css,result" data-user="azad6026" data-pen-title="background blende mode 1" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/OoyoYZ/">background blende mode 1</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Try other values in CodePen and see the different effects.

### An example with an image

moreover this is an example from <a href="https://css-tricks.com/basics-css-blend-modes/" target="_blank" rel="noopener noreferrer">Chris Coyier</a> which uses the CSS background blend mode with an image:

<p data-height="265" data-theme-id="0" data-slug-hash="aBIAc" data-default-tab="css,result" data-user="chriscoyier" data-pen-title="Background Blending" class="codepen">
  See the Pen <a href="https://codepen.io/chriscoyier/pen/aBIAc/">Background Blending</a> by Chris Coyier (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

However with the background-image property the **background blend mode property** determines how the element&#8217;s background images should blend with each other and with the element&#8217;s background colour.

### An example with repeating radial gradient

Finally in this example the **repeating-radial-gradient()** function creates an image consisting of repeating gradients that radiate from an origin. Therefor it repeats the colour stops infinitely in all directions so as to cover its entire container. Have a look at the code:

```background:
    repeating-radial-gradient(
        circle at top left,
        red,
        red 4em,
        transparent 4em,
        transparent 15em
    ),
    repeating-radial-gradient(
        circle at top right,
        lime,
        lime 4em,
        transparent 4em,
        transparent 15em
    ),
    repeating-radial-gradient(
        circle at bottom right,
        yellow,
        yellow 4em,
        transparent 4em,
        transparent 15em
    ),
    repeating-radial-gradient(
        circle at bottom left,
        blue,
        blue 4em,
        transparent 4em,
        transparent 15em
    ), white;
background-blend-mode: difference;```

As an explanation  **repeating-radial-gradient(** **circle at top left,** **red,** **red 4em,** **transparent 4em,** **transparent 15em** **)** this repeating gradient at the top left of its container starts in red and continues in red and continues in transparent in different positions. Try to change the background blend mode property to its different values and see other effects as well. This is the pen for this one:

<p data-height="265" data-theme-id="0" data-slug-hash="RYWqVz" data-default-tab="css,result" data-user="azad6026" data-pen-title="background blende mode 2" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/RYWqVz/">background blende mode 2</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Additionally there are lots of various effects we can try with background blend mode property. Furthermore there is a great article of <a href="https://blog.logrocket.com/advanced-effects-with-css-background-blend-modes-4b750198522a" target="_blank" rel="noopener noreferrer">advanced modes</a> and this is a <a href="https://bennettfeely.com/gradients/" target="_blank" rel="noopener noreferrer">demo site</a> to show different examples. Thanks for reading.
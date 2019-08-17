---
id: 32212
title: 'Angle value in CSS explained: degrees, gradians, radians, or turns units'
date: 2018-09-15T21:46:01+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32212
permalink: /angle-value-in-css-explained-degrees-gradians-radians-or-turns-units/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/09/angle.png
categories:
  - CSS
  - CSS3
---
Generally as per <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/angle" target="_blank" rel="noopener noreferrer">MDN</a> the **`<angle>`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [data type](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types) represents an angle value expressed in degrees, gradians, radians, or turns.  We can use them in [transforms](http://www.nikpro.com.au/using-svg-part-2-to-create-animated-svg-spinner-by-css-transforms/) and gradients.

## Degrees, gradians, radians, or turns

Practically we could use different units  for an angle rather than just using degrees. Basically this is how they compare to each other:

<pre class="wp-block-preformatted">A full angle: <code>360deg = 400grad = 1turn ≈ 6.2831853rad</code></pre>

Therefor we can calculate them based on this and use them accordingly.<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/09/circle.jpg" alt="" class="wp-image-32213" srcset="http://testgatsby.local/wp-content/uploads/2018/09/circle.jpg 814w, http://testgatsby.local/wp-content/uploads/2018/09/circle-300x213.jpg 300w, http://testgatsby.local/wp-content/uploads/2018/09/circle-768x544.jpg 768w" sizes="(max-width: 814px) 100vw, 814px" /> </figure> 

## Turn unit

Besides being just another unit the turn unit is just the perfect choice once we need to specify the rotation unit:

<pre class="wp-block-preformatted"><strong>.example {
  transform: rotate(1turn);
}</strong></pre>

So the one turn means we want the item to have a one full turn. It is the most intuitive choice in this case.

## Radians unit

A full circle contains 2p radians.  Generally &#8220;pi&#8221; is equal to 3.14159265. So that’s exactly half a circle in terms of radians. So we double that and we get 6.2831853rad to get a full circle.The unit identifier for radians is `rad`.

<pre class="wp-block-preformatted"><strong>.example {
  transform: rotate(6.2831853rad);
}</strong></pre>

## Gradians unit

As an explanation gradians also known as &#8220;gons&#8221; or &#8220;grades&#8221; are abbreviated using the string “grad” appended to the unit value. A full circle has 400 gradians, which would be the equivalent to 360 degrees.

<pre class="wp-block-preformatted"><strong>.example {
  transform: rotate(400grad);
}</strong></pre>

Like turn we could use gradians with round numbers to calculate the turns specially.

## Degrees unit

Finally our old good friend degrees unit. We have been use them everywhere and in different use cases. But maybe it is time to make the right choice based on the need in the code. If it is a rotation the turn makes a perfect choice. In gradient backgrounds gradian might be the best or to make easy calculations we could also use them. In some cases we might find a usage for radians too. But it is good to be aware of these data value units. Thanks for reading.
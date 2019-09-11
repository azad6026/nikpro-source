---
id: 32705
title: CSS custom properties for image backgrounds explained
date: 2019-03-01T19:19:03+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32705
permalink: /css-custom-properties-for-image-backgrounds-explained/
xyz_twap:
  - "1"
image: ../../static/images/css-image-bg.jpeg
categories:
  - CSS
  - CSS3
tags:
  - CSS custom properties
  - image backgrounds
---

We have talked about CSS c[ustom properties](http://www.nikpro.com.au/using-css-variables-to-create-dynamic-css-transform-values/) or CSS [variables](http://www.nikpro.com.au/css-custom-properties-or-variables-with-more-examples/) in a few articles before. Here we explain how we can use them for background image if we needed to.

## Normal background colour

Mostly we might use a custom CSS property for a solid or even gradient background like this:

```:root {<br />   --lightBackground: mistyrose;<br /> }<br /> .light-section {<br />   background: var(—-lightBackground);<br /> }<br /> .button {<br />   --lightBackground: lightblue;<br />   background: var(—-lightBackground);<br /> }```

In the code above we use the same variable for both light section and the button. We use its normal colour for the light section. But for the button we changed the variable value to another colour and then assign that as the button background. A neat approach we could use with CSS custom properties.

## Image as a background

Additionally we could use CSS variables for image backgrounds. Here is a pen I created to demonstrate this:

<p class="codepen" data-height="548" data-theme-id="0" data-default-tab="css,result" data-user="azad6026" data-slug-hash="OqMjvb" style="height: 548px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS custom properties for image background">
  <span>See the Pen <a href="https://codepen.io/azad6026/pen/OqMjvb/"> CSS custom properties for image background</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Basically we use the same technique. But this time we assign the image url to a CSS variable:

```:root{<br />     --imageBg: url("image1.jpg") no-repeat;<br /> }<br /> .container,.another-image-container{<br />     height: 200px;<br />     width: 300px;<br />     margin: 10px auto;<br /> }<br /> .first-image-container{<br />     background: var(--imageBg);<br /> }<br /> .another-image-container{<br />     --imageBg: url("image2.jpg") no-repeat;<br />     background: var(--imageBg);<br /> }```

This is very useful incases like icons or SVGs where we need to change images per request. Use cases like hover over or click events could be some of the examples to switch between image backgrounds using CSS custom properties.

Thank you for reading.

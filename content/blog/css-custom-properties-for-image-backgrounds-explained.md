---
id: 32705
title: CSS custom properties for image backgrounds explained
date: 2019-03-01T19:19:03+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32705
permalink: /css-custom-properties-for-image-backgrounds-explained/
xyz_twap:
  - "1"
# featuredImage: ../../static/images/design-with-code.jpg
featuredImage: ../../static/images/css-image-bg.jpeg
categories:
  - CSS
  - CSS3
tags:
  - CSS custom properties
  - image backgrounds
---

We have talked about CSS c[ustom properties](https://www.nikpro.com.au/using-css-variables-to-create-dynamic-css-transform-values/) or CSS [variables](https://www.nikpro.com.au/css-custom-properties-or-variables-with-more-examples/) in a few articles before. Here we explain how we can use them for background image if we needed to.

## Normal background colour

Mostly we might use a custom CSS property for a solid or even gradient background like this:

```
:root {
   --lightBackground: mistyrose;
 }
 .light-section {
   background: var(—-lightBackground);
 }
 .button {
   --lightBackground: lightblue;
   background: var(—-lightBackground);
 }
```

In the code above we use the same variable for both light section and the button. We use its normal colour for the light section. But for the button we changed the variable value to another colour and then assign that as the button background. A neat approach we could use with CSS custom properties.

## Image as a background

Additionally we could use CSS variables for image backgrounds. Here is a pen I created to demonstrate this:

https://codepen.io/azad6026/pen/OqMjvb

Basically we use the same technique. But this time we assign the image url to a CSS variable:

```
:root{
     --imageBg: url("image1.jpg") no-repeat;
 }
 .container,.another-image-container{
     height: 200px;
     width: 300px;
     margin: 10px auto;
 }
 .first-image-container{
     background: var(--imageBg);
 }
 .another-image-container{
     --imageBg: url("image2.jpg") no-repeat;
     background: var(--imageBg);
 }
```

This is very useful incases like icons or SVGs where we need to change images per request. Use cases like hover over or click events could be some of the examples to switch between image backgrounds using CSS custom properties.

Thank you for reading.

---
id: 32495
title: How to use background-size property in different use cases
date: 2018-11-01T19:38:43+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32495
permalink: /how-to-use-background-size-property-in-different-use-cases/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/background-size.jpg
categories:
  - CSS
---

There was a situation where I had to manipulate background-size property in a different use case. Generally we all might have experienced where we had to use a non-responsive image as a [background](https://www.nikpro.com.au/the-css-background-blend-mode-explained-with-examples/) and try to fit it in with different techniques.

Background-size property is a very useful property to adjust the image background when needed.

## The background-size property

Basically we could use background-size property with one and two values and keywords:

```
// Keyword values background-size: cover; background-size: contain; // two values ( width and height ) using different size units background-size: width height; // One value ( Only weight, the height is auto) background-size: width;
```

We can also have multiple backgrounds which we will seperate the values by coma. We can use any [CSS size units ](https://css-tricks.com/the-lengths-of-css/), including pixels, percentages, ems, viewport units, etc.:

```
background-size: 6px, auto, contain;
```

## What background-size does exactly?

Actually it sets the size of the image to what is needed. Whether it needs to remain the same size or it should cover the container or should it fit the specified space. Have a look at this pen <a href="https://css-tricks.com/almanac/properties/b/background-size/" target="_blank" rel="noreferrer noopener">from CSS-tricks</a>:

https://codepen.io/team/css-tricks/pen/NPMgem

### cover 

Using **cover** in the first example in the pen as the value we tell the browser to make sure that the **image should cover the container all the time.** Even if the browser is resized and it has to cut or stretch the image to fit it in:

```
.cover {
  background-size: cover;
}

//Also we could use two values to have the same result as cover, giving a 100% as width and auto as height

.cover {
  background-size: 100% auto;
}
```

### contain

On the other hand as the second example **contain **value will make sure that the whole image is always visible even if there are empty spaces around the edges of the image container:

```
.cover {
  background-size: cover;
}
```

### width and height

To make it a bit complex in the third example we have two backgrounds with two different background-sizes. We use the cover value for the second one. But for the first one we use **width and height values:**

```
.multi {
  background-size: 300px 100px, cover;
}
```

Therefor the first image which is a semi-transparent white overlay sits on the top left over the second covered background.

### Only one value (width)

At times we might need to set only the width for the background. In this cas we height will be auto:

```
.one-value {
  background-size: 50%;
}
```

So it depends on how we need the background behave inside the container we have the flexibility to change its sizing using the background-size property.

Thank you for reading.

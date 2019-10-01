---
id: 32451
title: "Modern techniques for image hover over effects using CSS transition and transform: part 2"
date: 2018-10-23T20:42:42+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32451
permalink: /modern-techniques-for-image-hover-over-effects-using-css-transition-and-transform-part-2/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/css-transform-effects.png
categories:
  - CSS
  - CSS3
tags:
  - CSS transform
  - hover over effect
  - transition
---

Following [the previous article](https://www.nikpro.com.au/modern-techniques-for-image-hover-over-effects-using-css-transition-and-animation-part-1/), I have prepared two more image hover over techniques using CSS [transform](https://www.nikpro.com.au/manipulate-elements-visually-with-css-transform-explained-with-examples/) and [transitions](https://www.nikpro.com.au/css-transitions-and-animations-explained-with-examples/). Try to manipulate them in CodePen and get different effects.

## #1: Round image hove over effect

This is one of my favourite ones. We will use a spinner around the image to spin using CSS transforms and having multicolour border it looks pretty and elegant:

https://codepen.io/azad6026/pen/pxOeZj

We gave spinner , the caption box and the main wrapper and the image wrapper a **round border-radius** to make a circle:

```
border-radius: 50%;

```

But the interesting part is when we hover over the image. The spinner wrapper will be transformed with a rotation of 180deg and it looks like a ring wrapping the content:

```
.hovered-item.circle.effect1 a:hover .spinner {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
}
```

Also at the same time we transition the opacity to fade in the caption box with a nice delay:

```
.hovered-item.circle.effect1 a:hover .info {
    opacity: 1;
}
```

## #2: Slide in caption effect

Practically we will use this one to keep the image in the sight even when its hovered over. But showing its caption in one side so that we can have direct explanation around that:

https://codepen.io/azad6026/pen/NOLpro

Firstly we transition the transform property of the image:

```
img{
    transition: transform 0.4s;
}
```

Also for the **figcaption** element which is the caption wrapper we have set the transform-origin property to 0 to change it from it s default which is 50%. Because we need its transform to start from the left edge of the container. The&nbsp;**transform**&#8211;**origin**&nbsp;property is used to change the position of the&nbsp;**origin**&nbsp;of&nbsp;**transformation**&nbsp;of an element:

```
figcaption{
  transform-origin: 0 0;
  transform: rotateY(-90deg);
}
```

Therefor after hovering over the image we transform the figcaption element and it will slide in to the container with a smooth transition:

```
figure:hover figcaption {
    transform: rotateY(0deg);
    transition: transform 0.4s, opacity 0.1s;
}
```

Also using translate we&nbsp;reposition the image by 25% to the right:

```
figure:hover img{
  transform: translateX(25%);
}
```

As a result it is all a transform animation which is quiet useful and easy to manage. We are able to manipulate our elements behaviour using transform property in variety of ways and transition them as we wish.

Thank you for reading.

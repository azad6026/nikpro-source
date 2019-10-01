---
id: 32446
title: "Modern techniques for image hover over effects using CSS transition and animation: part 1"
date: 2018-10-23T11:48:30+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32446
permalink: /modern-techniques-for-image-hover-over-effects-using-css-transition-and-animation-part-1/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/hover-over-1.jpg
categories:
  - CSS
  - CSS3
tags:
  - animation
  - hover over
  - transition
---

Using CSS[transitions](https://www.nikpro.com.au/css-transitions-and-animations-explained-with-examples/) along with [animation ](https://www.nikpro.com.au/learn-how-to-use-css-animation-using-keyframes-with-examples/)there are tons of techniques we could use to create modern image hover over effects. In this article we will have a look at some beautiful yet simple and elegant ways of having these nice effects. Specially when some captions are involved.

## #1: Image hover over with flying caption section

Basically in every effect we are manipulating captions based on our design:

https://codepen.io/azad6026/pen/jevybZ

For example in this one once we hover over the image its scale will change via transform property.&nbsp;

**figure:hover img{  
&nbsp; transform: scale(1.1**);  
}

At the same time captions are kind of flying in with a nice background. We do that by changing the opacity and positioning:

```
figure:hover figcaption {
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    filter: alpha(opacity=100);
    opacity: 1;
    top: 0;
}
// to make h3 and p to fly in
figure:hover h3, figure:hover p {
    left: 0px;
}
```

Practically we get advantage of transitions to have a smooth animation like effect for each animated section:

```
figcaption,figcaption h3 ,figcaption p,img{
  transition: all .9s ease;
  transition-delay: .5s;
}
//We could have written that all in one line :
// transition: all .9s ease .5;
```

## #2: Fade in and out images using hover and animation

Lets animate the image using hover and keyframes (animation). Have a look a this pen :

https://codepen.io/azad6026/pen/gBdmmd

Firstly the top image should be hovered over so that it fades out and the second image will be fade in. Therefor we change transition the opacity of the image:

```
.simple img{
-webkit-transition: opacity 4s ease-in-out;
  -moz-transition: opacity 4s ease-in-out;
  -o-transition: opacity 4s ease-in-out;
  transition: opacity 4s ease-in-out;
}
// Changing the opacity to see the other image
.simple img.top:hover {
  opacity:0;
}
```

Secondly we have the same images that animate in a timeframe. It looks like a very simple [gallery](https://www.nikpro.com.au/how-to-build-a-simple-gallery-using-flexbox-and-javascript/) or slider that we have created just by simple CSS. Here is the animation with four transition steps defined into it:

```
@keyframes FadeInOut {
  0% {
  opacity:1;
}
45% {
opacity:1;
}
55% {
opacity:0;
}
100% {
opacity:0;
}
}
```

As a result the opacity of top image stays up to 45% and at 55% it become 0 and the image will fade out:

```
.animated img.top {
  animation-name: FadeInOut;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 6s;
  animation-direction: alternate;
}
// We could put it all in one line as well:
animation: FadeInOut ease-in-out infinite 6s alternate;
```

Although it looks simple but it has the core concept of animation that could be made more complex as well. In the next article I will cover two more useful and cool CSS effects on images.

Thank you for reading.

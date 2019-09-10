---
id: 32446
title: 'Modern techniques for image hover over effects using CSS transition and animation: part 1'
date: 2018-10-23T11:48:30+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32446
permalink: /modern-techniques-for-image-hover-over-effects-using-css-transition-and-animation-part-1/
xyz_twap:
  - "1"
image: /images/hover-over-1-1568x882.jpg
categories:
  - CSS
  - CSS3
tags:
  - animation
  - hover over
  - transition
---
Using CSS[transitions](http://www.nikpro.com.au/css-transitions-and-animations-explained-with-examples/) along with [animation ](http://www.nikpro.com.au/learn-how-to-use-css-animation-using-keyframes-with-examples/)there are tons of techniques we could use to create modern image hover over effects. In this article we will have a look at some beautiful yet simple and elegant ways of having these nice effects. Specially when some captions are involved.

## #1: Image hover over with flying caption section

Basically in every effect we are manipulating captions based on our design:

<p data-height="400" data-theme-id="0" data-slug-hash="jevybZ" data-default-tab="css,result" data-user="azad6026" data-pen-title="imageflying captions" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/jevybZ/">image flying captions</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

For example in this one once we hover over the image its scale will change via transform property.&nbsp;

**figure:hover img{  
&nbsp; transform: scale(1.1**);  
}

At the same time captions are kind of flying in with a nice background. We do that by changing the opacity and positioning:

```figure:hover figcaption {<br />    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);<br />    filter: alpha(opacity=100);<br />    opacity: 1;<br />    top: 0;<br />}<br />// to make h3 and p to fly in<br />figure:hover h3, figure:hover p {<br />    left: 0px;<br />}```

Practically we get advantage of transitions to have a smooth animation like effect for each animated section:

```figcaption,figcaption h3 ,figcaption p,img{<br />  transition: all .9s ease;<br />  transition-delay: .5s;<br />}<br />//We could have written that all in one line :<br />// transition: all .9s ease .5;```

## #2: Fade in and out images using hover and animation

Lets animate the image using hover and keyframes (animation). Have a look a this pen :

<p data-height="900" data-theme-id="0" data-slug-hash="gBdmmd" data-default-tab="css,result" data-user="azad6026" data-pen-title="Animate images with and without hover over" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/gBdmmd/">Animate images with and without hover over</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Firstly the top image should be hovered over so that it fades out and the second image will be fade in. Therefor we change transition the opacity of the image:

```.simple img{<br />-webkit-transition: opacity 4s ease-in-out;<br />  -moz-transition: opacity 4s ease-in-out;<br />  -o-transition: opacity 4s ease-in-out;<br />  transition: opacity 4s ease-in-out;<br />}<br />// Changing the opacity to see the other image<br />.simple img.top:hover {<br />  opacity:0;<br />}```

Secondly we have the same images that animate in a timeframe. It looks like a very simple [gallery](http://www.nikpro.com.au/how-to-build-a-simple-gallery-using-flexbox-and-javascript/) or slider that we have created just by simple CSS. Here is the animation with four transition steps defined into it:

```@keyframes FadeInOut {<br />  0% {<br />  opacity:1;<br />}<br />45% {<br />opacity:1;<br />}<br />55% {<br />opacity:0;<br />}<br />100% {<br />opacity:0;<br />}<br />}```

As a result the opacity of top image stays up to 45% and at 55% it become 0 and the image will fade out:

```.animated img.top {<br />  animation-name: FadeInOut;<br />  animation-timing-function: ease-in-out;<br />  animation-iteration-count: infinite;<br />  animation-duration: 6s;<br />  animation-direction: alternate;<br />}<br />// We could put it all in one line as well:<br />animation: FadeInOut ease-in-out infinite 6s alternate;```

Although it looks simple but it has the core concept of animation that could be made more complex as well. In the next article I will cover two more useful and cool CSS effects on images.

Thank you for reading.
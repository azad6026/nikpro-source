---
id: 32635
title: "How to use positon : sticky in CSS to create awesome sticky header and flexible sticky elements without Javascript"
date: 2019-01-05T20:10:14+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32635
permalink: /how-to-use-positon-sticky-in-css-to-create-awesome-sticky-header-and-flexible-sticky-elements-without-javascript/
xyz_twap:
  - "1"
# image: ../../static/images/sticky-elements.png
categories:
  - CSS
  - CSS3
tags:
  - sticky positioning
---

Creating [sticky elements](http://www.nikpro.com.au/create-modern-sticky-footer-using-css-grid-and-flexbox-and-calc-function/) on the page and specifically sticky header has always been a Javascript thing. We used to create a class with position: fixed and assign it to the sticky element based on user&#8217;s scroll.

## Position: sticky the new solution

Using **position: sticky** in CSS we create an sticky element which sticks the element to its **container&nbsp;** once user scrolls. Although depend on the scroll direction we should give the element one of the **top, bottom, left or right** properties for the sticky value to work. According to MDN:

<blockquote class="wp-block-quote">
  <p>
    The element is positioned according to the normal flow of the document, and then offset relative to its<em>&nbsp;nearest scrolling ancestor</em>&nbsp;and&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/All_About_The_Containing_Block" target="_blank" rel="noreferrer noopener" aria-label="containing block.&nbsp; (opens in a new tab)">containing block.&nbsp;</a>
  </p>
  
  <p>
    Sticky positioning can be thought of as a hybrid of relative and fixed positioning. A stickily positioned element is treated as relatively positioned until it crosses a specified threshold, at which point it is treated as fixed until it reaches the boundary of its parent.&nbsp;
  </p>
</blockquote><figure class="wp-block-image is-resized">

<img src="http://www.nikpro.com.austickr.png" alt="" class="wp-image-32636" width="594" height="197" srcset="http://testgatsby.localstickr.png 389w, http://testgatsby.localstickr-300x99.png 300w" sizes="(max-width: 594px) 100vw, 594px" /> <figcaption>sticky positioning in CSS</figcaption></figure>

Here is a simple example:

```
#one { position: sticky; top: 10px; }
```


### Sticky titles with position: sticky

We will have a look at a great demo from MDN. Basically in this example each section title will stick on the top once we scroll down its container:

<p data-height="500" data-theme-id="0" data-slug-hash="JbdJRZ" data-default-tab="html,result" data-user="simevidas" data-pen-title="Sticky positioning" class="codepen">
  See the Pen <a href="https://codepen.io/simevidas/pen/JbdJRZ/">Sticky positioning</a> by Šime Vidas (<a href="https://codepen.io/simevidas">@simevidas</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Firstly the **dt tag** which holds the title have this important CSS:

```
dt {<br>  position: -webkit-sticky; //safari support<br>  position: sticky;<br>  top: -1px;<br>}<br>
```


Sticky value for position property makes it behave as a relative positioned before scrolling. Also it has a top property which is needed as we scroll down. Once we scroll down the behaviour of the element will change to fixed positioning and the title sticks on the top.

Secondly, once we pass that section and start the new section, the position for the **dt tag** behaves like a relative position again. Because as we learnt an element with position: sticky; property will stick to its own container. More like a local fixed element after scrolling. Therefore after we scroll and pass its container we cannot see it stuck anymore. <figure class="wp-block-image is-resized">

<img src="http://www.nikpro.com.austicky-creative-way.png" alt="" class="wp-image-32638" width="597" height="358" /> <figcaption>Flexible sticky elements</figcaption></figure>

This is absolutely great. Practically it is very flexible and useful as we can manage how we want the element to stick on the DOM. This <a rel="noreferrer noopener" aria-label="link (opens in a new tab)" href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sticky_element" target="_blank">link</a> is another example which creates a sticky header with sticky positioning..

The header has a **sticky positioning and a top property.** Very simple and neat without any Javascript.

Sticky value has a 86% support globally in browsers as per <a href="https://caniuse.com/#feat=css-sticky" target="_blank" rel="noreferrer noopener" aria-label="caiuse (opens in a new tab)">caiuse</a> so far which is great.

With CSS evolving very fast we can now use native CSS properties such as position; sticky to do behavioural CSS related jobs. This is exciting and challenging at the same time. We should make sure to take the best decision based on the login and situation.

Thank you for reading

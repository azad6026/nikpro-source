---
id: 32549
title: 'Perfect understanding of align-items, align-content and justify-content in FlexBox with examples: Part 2'
date: 2018-11-18T13:26:20+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32549
permalink: /perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-2/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/css-flexbbox-justify-content-.png
categories:
  - CSS
  - CSS3
tags:
  - flexbox
  - justify-content
---
In the [previous article,](http://www.nikpro.com.au/perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-1/) we learnt about align-items property and briefly talked about align-content and justify-content properties.&nbsp;

In this article we will talk about justify-content and we will see how similar it is to align-items.

## The justify-content property

Basically&nbsp;**justify-content aligns individual items** inside a flex container along the **main axis.**

&nbsp;Therefore what this means is in a flex container with the default flex-direction of row it will align items in the horizontal axis. Also in a column flex direction it aligns them in vertical axis which is the main axis in this case. This is the syntax:


```
.container {  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;}
```


#### Align items using justify-content in flex-direction: row

Have a look at this pen that shows justify-content with all its values:

<p data-height="1050" data-theme-id="0" data-slug-hash="bQwRoL" data-default-tab="html,result" data-user="azad6026" data-pen-title="FlexBox justify content in row " class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/bQwRoL/">FlexBox justify content in row </a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Firstly just like align-items we have flex-start and flex-end and center with same functionality. The only difference is justify-content does work in main axis ( here horizontal):<figure class="wp-block-image">

<img src="http://www.nikpro.com.austart-end-center-justify.png" alt="" class="wp-image-32553" srcset="http://testgatsby.localstart-end-center-justify.png 429w, http://testgatsby.localstart-end-center-justify-287x300.png 287w" sizes="(max-width: 429px) 100vw, 429px" /> <figcaption>common values of justify-content and align-items (row direction)</figcaption></figure> 

But we have three new values which are all starting with space as they define how the space is distributed between itms.

The **space-between** divides the available space inside container in the **main axis in between items and remove space from the start and end of the container**. So there is no space between the first and last item with the container.

The **space-around** divides the space around all items. Space-around adds the same amount of space on each side to all items but in this case first and last item will have half space of the other items as they don&#8217;t have any other item in one of their sides.&nbsp;

The **space-evenly** which is <a rel="noreferrer noopener" aria-label="The space-evenly which is fairly new (opens in a new tab)" href="https://caniuse.com/#search=space-evenly" target="_blank">fairly new</a>&nbsp;adds the exact amount space for all items including first and last items:<figure class="wp-block-image">

<img src="http://www.nikpro.com.aujustify-space-items.png" alt="" class="wp-image-32554" srcset="http://testgatsby.localjustify-space-items.png 429w, http://testgatsby.localjustify-space-items-280x300.png 280w" sizes="(max-width: 429px) 100vw, 429px" /> <figcaption>space values of justify-content property</figcaption></figure> 

As a result justify-content property aligns items in the main axis with six different values that could be used in various cases. 

Therefore as an example and as we explained [here](http://www.nikpro.com.au/a-quick-review-of-how-to-centre-elements-or-blocks-using-flexbox-in-css/)&nbsp;we can perfectly centre an element in both axis using align-items: center; and justify-content: center; in a FLexBox container.

#### Align items using justify-content in flex-direction: column

Similar rules apply to this property in a column flex-direction. But the difference is the main axis here is the vertical axis. Therefore the items will be aligned along this axis:

<p data-height="1000" data-theme-id="0" data-slug-hash="vQJPGW" data-default-tab="html,result" data-user="azad6026" data-pen-title="FlexBox justify-content in column direction" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/vQJPGW/">FlexBox justify-content in column direction</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Remember that in this case **flex-direction is column**. So the items will be centred along the vertical axis. Also flex-start and flex-end will align items on top and bottom of the container as below:<figure class="wp-block-image">

<img src="http://www.nikpro.com.auflex-end-start-centre-justify-column.png" alt="" class="wp-image-32558" srcset="http://testgatsby.localflex-end-start-centre-justify-column.png 429w, http://testgatsby.localflex-end-start-centre-justify-column-285x300.png 285w" sizes="(max-width: 429px) 100vw, 429px" /> <figcaption>column direction with flex-start , flex-end and center values</figcaption></figure> 

Additionally the space values will distribute the free space of the container along the main axis which is vertical axis here. Accordingly we will have the expected result:<figure class="wp-block-image">

<img src="http://www.nikpro.com.auflex-space-values-justify-content.png" alt="flex-space-values-justify-content" class="wp-image-32559" srcset="http://testgatsby.localflex-space-values-justify-content.png 429w, http://testgatsby.localflex-space-values-justify-content-289x300.png 289w" sizes="(max-width: 429px) 100vw, 429px" /> <figcaption>space values in justify-content in column direction</figcaption></figure> 

As we **learnt justify-content is the equivalent version of align-items in main axis**. It divides the remaining space between all flex items as per its value. 

In the [next article](http://www.nikpro.com.au/perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-3/) we will learn about **align-content which is the equivalent version of justify-content but in cross axis** (in terms of values) and we can use it only for flex containers with more that one line of items. (wrapped flex container).

Thank you for reading.
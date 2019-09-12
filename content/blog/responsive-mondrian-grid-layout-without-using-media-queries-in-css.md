---
id: 32207
title: 'Responsive Mondrian grid  layout without using media queries in CSS'
date: 2018-09-15T20:30:50+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32207
permalink: /responsive-mondrian-grid-layout-without-using-media-queries-in-css/
xyz_twap:
  - "1"
# image: ../../static/images/mondrian-responsive.png
categories:
  - CSS
  - CSS3
---
Following the [previous article](http://www.nikpro.com.au/exciting-mondrian-grid-layout-explained-with-an-example-part-1/) we will have look at a responsive Mondrian grid layout without using media queries. As we have covered this layout in details in that post we will explain important part here to make sure all in clear.

## The responsive Mondrain grid layout

Basically I am using the same layout as the [non responsive](http://www.nikpro.com.au/exciting-mondrian-grid-layout-explained-with-an-example-part-1/) Mondrian layout. Same HTML markup as well. This is the pen I have created for this one:

<p data-height="400" data-theme-id="0" data-slug-hash="KxBEOQ" data-default-tab="css,result" data-user="azad6026" data-pen-title="Responsive Mondrian Layout" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/KxBEOQ/">Responsive Mondrian Layout</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Additionally most of  the CSS is the same. I explain the differences between both fixed and responsive Mondrian grid layout below:

### Defining columns and rows

Firstly the non responsive layout we specified the grid container columns and rows like this:


```
grid-template-columns: repeat(5, calc(70vw/5));
grid-template-rows: repeat(5, calc(80vw/5));
```


Therefor we specified how many columns and rows we need and asked the browser to take care of the rest by calculating the width and height with calc function. 

In the responsive Mondrian grid we replace them with this code:


```
grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
grid-auto-rows: 160px;
```


As a result we are using auto-fit to specify number of columns. What <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/repeat" target="_blank" rel="noopener noreferrer">auto-fit</a> does is it fills the available space with as much items available and then it collapses the empty spaces.The good thing is all the space is always occupied by items and no unused space is left. 

Moreover we use [minmax function](http://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/) to calculate the columns. We specify the minimum width to 160px and by declaring 1fr ( 1 fraction) as the maximum width, we are telling the grid to give one fraction of available space to the rest of the items. More on this in the below. But I also need to explain that we use **grid-auto-rows **to specify the size of an implicitly-created grid row track.

### Responsive items in the grid

Except for the third item which I increased the column width to **grid-column: span 3;** all the code is the same. So read on [here](http://www.nikpro.com.au/exciting-mondrian-grid-layout-explained-with-an-example-part-1/) for detailed explanation. But I need to explain how they fit in the layout now.

In the non-responsive layout the items always take the space specified.  In the responsive layout thanks to auto-fit the first item takes its own specified columns first and then the rest of the space will be shared for the rest of the itemes by one fraction unit.

Also the order of the items will change to make the items fit to the grid. Because at some point because the third item cannot fit in the available space it drops off the first row and the red item which is the forth one will replace it. And the third item takes its needed space in the fifth row in this case.

Practically grid layout system is great for laying out responsive layout as you don&#8217;t even need to specify media queries as it takes care of it. Although the layout should be declared properly. Thanks for reading.
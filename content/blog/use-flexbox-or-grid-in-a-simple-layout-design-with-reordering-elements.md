---
id: 32697
title: Use FlexBox or Grid in a simple layout design with reordering elements
date: 2019-02-18T21:37:54+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32697
permalink: /use-flexbox-or-grid-in-a-simple-layout-design-with-reordering-elements/
xyz_twap:
  - "1"
# featuredImage: ../../static/images/design-with-code.jpg
featuredImage: ../../static/images/flexbox-grid.png
categories:
  - CSS
tags:
  - flexbox
  - grid
  - Reorder
---

We all heard about <a rel="noreferrer noopener" aria-label="where to use FlexBox and grid  (opens in a new tab)" href="https://rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/" target="_blank">where to use FlexBox and grid </a>everywhere and still might wonder about it.

One of the many use cases and real word examples is when we need to change the order of the elements in the design.

We will have a look at the same simple design using [FlexBox](https://www.nikpro.com.au/create-modern-sticky-footer-using-css-grid-and-flexbox-and-calc-function/) and [Grid](https://www.nikpro.com.au/compare-the-same-layout-using-flexbox-and-grid-layout-system-in-css/) system to implement this and compare the solutions.<figure class="wp-block-image">

![FlexBox – Grid](/images/flexbox-grid-1024x260.png)

## When do we use FlexBox and Grid

Generally it is kind of a good practice if we use Grid system for designing our layout and use FlexBox to align the content. However this is true for most use cases but in some cases we could use both or even choose FlexBox over Grid in design.

### Using FlexBox

![FlexBox](/images/flexbox-1024x510.png)

Basically in the pen below, I have used FlexBox to design a simple layout. Three simple boxes with different colours. I wanted to re order the boxes to the third one to be the first and the second one be the last one and the first one goes to the second place.

https://codepen.io/azad6026/pen/ZwVoLP

The reason is I had a small design the other day and I couldn&#8217;t change the markup for a good reason and I had to reorder the sections. Therefore the best solution was using CSS. Using FlexBox. Practically after making the container a flexible parent, we need to use the order property as below to reshuffle the boxes:

````
lt;strong>.container{
   display: flex;<br>}<br>.item{
   flex:1;<br>}<br>.item1{
   order: 3;<br>}<br>.item2{
   order: 1;<br>}<br>.item3{
   order: 2;<br>}
```


## Using Grid

Additionally we could use grid instead of flex as the value of the display property in the parent container. Therefore we will have this pen:

https://codepen.io/azad6026/pen/VgqxqW

Therefore the code looks like this:

<pre>
.container{
   display: grid;   grid-template-columns: repeat(3,1fr);   grid-template-rows: 1fr;<br>}<

```


Although we don&#8217;t need to define the rows but I prefer that here for simplicity. Then we need to define which box belongs to which column.

<pre>lt;strong>.item1{
   grid-column: 3/-1;<br>}<br>.item2{
   grid-column: 1/2;<br>}<br>.item3{
   grid-column: 2/3;<br>}

```


But with only this code you will see that the first box sits on the last column. However the other boxes feel into the next row. As a result they will not fill up the first row.

Actually this is how grid works. Because we asked the very first box i the markup to move to the last column in the grid. Then we asked the second one to sit in the first column and the last box to sit in the second column.

That is happening actually. But because the items follow each other in order in the grid, they cannot simply move up to the first row. So we need to add one more line of code to each box:

<pre>
.item{
   grid-row: 1/1;<br>}

```


Specifying which row they should sit in and occupy. Finally the design is done.

Notebally this is not a preferred approach if we need the order of the text to change. Because this does not change the actual markup. And the text readers will read the content as it is in html.

But if we need to reorder some of the small sections we could use these techniques. FlexBox solution has less code and more flexibility it seems but if needed the layout to also be responsive we can consoder grid a better solution. Changing the template to have responsive code.

Thank you for reading.
```
````

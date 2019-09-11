---
id: 32193
title: 'Exciting mondrian grid layout explained with an example: part 1'
date: 2018-09-13T03:01:12+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32193
permalink: /exciting-mondrian-grid-layout-explained-with-an-example-part-1/
xyz_twap:
  - "1"
image: ../../static/images/mondrian1.jpeg
categories:
  - CSS
  - CSS3
---
In this article we explain an exciting introductory mondrian grid layout. I deep dive into this one with core [grid layout](http://www.nikpro.com.au/css-grid-layout-review-with-examples-part-1/) concepts. This one is a non-responsive version. In the next article we will make a responsive one.

Here is the pen I have created and built this one in. I got the idea from the amazing <a href="http://jensimmons.com/" target="_blank" rel="noopener noreferrer">Jen simmons </a>which is one of the core developers of grid layout system:

<p data-height="400" data-theme-id="0" data-slug-hash="jvxEgW" data-default-tab="css,result" data-user="azad6026" data-pen-title="non-responsive mondrian grid layout" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/jvxEgW/">non-responsive mondrian grid layout</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Basically it is inspired by a painter named Mondrian who has painted this kind of creative layouts. Therefor they are great examples for a grid. 

## The Mondrian grid layout HTML

Firstly the markup is pretty simple. We have an unordered list here which each list item contains an image. The unordered list is the grid container then.

## The CSS for Mondrian grid layout

Secondly comes the CSS. I will explain this step by step. We begin with the general style for images and lists. We added 100% for the image width to make sure they will fit in their list item container and take the whole space there. The rest is just normal CSS.

Practically we need the **ul  **element to be the grid container as we need the list items to be grid items. We also add a background to it to have a nice blue colour for empty spaces of the Mondrian grid layout.

```ul { 
    background: #0056b8;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(5, calc(70vw/5));
    grid-template-rows: repeat(5, calc(80vw/5));
}```

### The grid container 

As you can see we have added the grid code to the **ul**. Therefor: 

  * we defined it to be a grid. 
  * Also we have changed the auto-flow to dense to make sure items fill up all he space.
  * we have defined **grid-templeate-columns with repeat(5, calc(70vw/5)).** What it does is it tells the grid to create columns with the width of 70vw/5 and repeat this 5 times. Therefor we will have 5 columns of that width.
  * Next we have defined **grid-templeate-rows with repeat(5, calc(80vw/5)).** What it does is it tells the grid to create rows with the width of 80vw/5 and repeat it 5 times. 

The calculation is based on the images and how we want to align them. Great. We now have our grid defined. Next up we need to define each and every list item containing images.

### Each list item code for Mondrian grid layout

Generally we need to remember that grid items fill the space one after another the way we have created the markup ( this is the default unless we change that). So we decide how much space they are allowed to take.

#### First item explained

We have this code for the very first **li **meaning the first image:

```li:nth-child(1) {
    grid-column: span 2;
    grid-row: span 1;
}```

We are using [nth-child() Pseudo selector](http://www.nikpro.com.au/the-css-nth-child-selector-explained-with-examples/) to reach out each list item. Also we use **grid-column** and **grid-row** to define how many column and row the item can occupy in the rid. Therefor there are different syntaxes that could be used here. I use span in this example. So **grid-column:** **span 2; **means you can expand or take 2 columns in the grid. Moreover **grid-row: span 1;** defines one row could be used by this item. And you will see the result for the first item.

#### Second and third and forth item

In a Mondrian grid layout we can expect various kind of layouts. So items can take different tope of space and change the layout. Itm 3 takes one column and item 3 will take 2 columns:

```li:nth-child(2) { 
    grid-column: span 1;
    grid-row: span 4;
  }
  li:nth-child(3) { 
    grid-column: span 2;
  }```

We haven&#8217;t specified rows for third item meaning it takes one row which is he default.

Forth item takes one column which is the default so we don&#8217;t need to specify it and four rows. Therefor as there is no more column available in the first row it drops of to the second row and sits there with four rows long. That is why you see the blue background at the end which is the background colour of the **ul** and it is not a list item.

#### Fifth item

Great. All good so far. However wen we specify the fifth item to take two column and two rows it cannot find the enough space just beside the forth item. Therefor it jumps to the next available spot and sits there. Which is right after the second item (the gold item):

```li:nth-child(5) { 
    grid-column: span 2;
    grid-row: span 2;
 }
 li:nth-child(6) { 
    grid-column: span 4;
    grid-row: span 1;
 }```

Finally the last item finds enough space at the very bottom where item two ends and it takes its own four columns and 1 row.

In the next article we learn how to make a responsive version of this Mondrian grid layout. Thanks for reading.
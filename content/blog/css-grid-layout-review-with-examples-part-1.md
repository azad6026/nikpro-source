---
id: 31798
title: 'CSS Grid layout review with examples: Part 1'
date: 2018-07-06T22:48:19+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31798
permalink: /css-grid-layout-review-with-examples-part-1/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/css-grid-layout.png
categories:
  - CSS
tags:
  - grid cell
  - grid layout
---
This post is the first post about CSS grid layouts. It is more based on examples and I don&#8217;t want to go to details as there are many sources for this. I want it to be more practical and visual instead.

## A grid container

The grid container is boxes placed within certain boundaries and every website has made upon that. The below gif by gif by <a class="markup--anchor markup--figure-anchor" href="https://dribbble.com/bnistr" target="_blank" rel="nofollow noopener noreferrer" data-href="https://dribbble.com/bnistr">chris bannister</a> shows the grid layout:

![gif by chris bannister](/images/chis-bannister.gif)

Simply a grid is just horizontal and vertical lines that define the placement of other design elements.

### Grid Lines

They are the horizontal and vertical lines that divide the grid.

### The grid Cell

A Grid cell is the smallest unit of area in a grid layout.

### Grid Area {#2a9d.graf.graf--h4.graf-after--figure}

  A grid area may be as small as the area contained within a grid cell. Or it may be as large as all the cells within the grid.

**Now we will have a look at some examples from **

<a href="https://gridbyexample.com/examples/" target="_blank" rel="noopener noreferrer">grid by example</a>.

### Line-based placement

https://codepen.io/rachelandrew/pen/RPXNod

The main container has display: grid; Property which defines the grid. It also has grid-template-columns: 100px 100px 100px; property which defines three column of 100px width.We could use fr which is fr. The `fr` unit allows you to set the size of a track as a fraction of the free space of the grid container. For example, this will set each item to one third the width of the grid container:

grid-template-columns: 1fr fr 1fr;

Each cell has grid-column-startproperty that sets the staarting column of the cell and grid-column-end  sets the column that the cell end in. We have the same properties with row to define the grid cell positioning inside the rows as well. grid-row-start and  `grid-row-end.`

### Shorthand &#8211; grid-row and grid-column

In the example below the shorthand syntax has been used column and row properties:

https://codepen.io/rachelandrew/pen/VLoYPV
  
Grid by Example 3: Line-based placement shorthand</a> by Rachel Andrew: 
  
https://codepen.io/rachelandrew

We use `grid-column: 3 / 4;` and `grid-row: 1 / 2;` to define start and end of the column and row.( start from 3rd column and end in column for and so on).

### Placement named lines

We could also name the cells ( or lines as grid layout is made of lines) as in the below example:

https://codepen.io/rachelandrew/pen/yNmyoM


For example to define the rows we use names like this: 
```
grid-template-rows: [row1-start] auto [row2-start] auto [row2-end]; 
```
which is more definitive and descriptive if you wish.

### Using repeat notation

The values for repeat are the number of times you want the expression to repeat and then the expression. In this example:

https://codepen.io/rachelandrew/pen/yNmyPb


Instead of naming the columns and rows, we use the shorter syntax called repeat notation like this:

```
grid-template-columns: repeat(4, 100px ) ;
```
  
Which means we create 4 columns with 100px width.

We saw the grid layout with some practical examples. In the next article we will show more examples and will explain mroe properties in practice around grid layout. 

---
id: 31880
title: Build responsive CSS grid layouts using minmax() with auto-fill and auto-fit
date: 2018-07-19T21:30:25+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31880
permalink: /build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/
enclosure:
  - |
    https://cdn.css-tricks.com/wp-content/uploads/2017/12/auto-fill-devtools.mov
    3544113
    video/quicktime
    
  - |
    https://cdn.css-tricks.com/wp-content/uploads/2017/12/auto-fit-devtools.mov
    3265503
    video/quicktime
    
image: ../../static/images/minmax-auto-fill-auto-fit.jpg
categories:
  - CSS
  - CSS3
tags:
  - auto-fill
  - auto-fit
  - CSS grid
  - minmax()
---

Since introducing minmax() function, auto-fit and auto-fill properties , we could build responsive [CSS grid layouts](http://www.nikpro.com.au/css-grid-layout-review-with-examples-part-1/) using minmax() with auto-fill and auto-fit without needing media queries.

In this post we will look at some examples of how we can use them to produce a flexible layout which tends to be responsive as well.

## The repeat() keyword

In a grid element, we can use the **repeat()** keyword to repeat all or part of our track definition. The following definition would create a grid with 10, 100 pixel width column tracks.

```
.wrapper {
  grid-template-columns: repeat(10, 100px);
}
```

We could create 10 flexibly sized equal width tracks by using the fr unit.

```
.wrapper {
  grid-template-columns: repeat(10, 1fr);
}
```
In these cases we will always have fixed width or flexible grid but with only 10 columns limit. We will need a grid so that asmany columns as possible could be fit in it in different widths. For this gaol in mind, we could use auto-fill and auto-fit.

## Using auto-fill and auto-fit

To create a grid with as many 100 pixel tracks as will fit in the container we can use the auto-fill keyword rather than a number.

```
.wrapper {
  grid-template-columns: repeat(auto-fill, 100px);
}
```

We could also use ato-fit to achieve the same result:

```
.wrapper {
  grid-template-columns: repeat(auto-fit, 100px);
}
```

With auto-fill and auto-fit we create a grid with as many tracks as will fit into the container, and will taking any grid-gap value into account, If you use the auto-fill keyword empty tracks will remain as part of the grid. If you were to use the alternate auto-fit keyword, this would behave in the same way as described above but once all grid items have been placed any completely empty tracks will be dropped or collapsed. 

We will explain it with examples shortly.

## Adding minmax() to do the magic

To create a complete flexible grid , flexible in size of tracks and number, we need [minmax()](https://drafts.csswg.org/css-grid/#valdef-grid-template-columns-minmax). We can give this function a minimum and maximum size that we want our track to be. So the following would make tracks a minimum of 200 pixels and a maximum of 200 pixels.

```
.wrapper {
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
}
```

To make it even better and fully flexible, we will use the fraction unit as ou maximum value:

```
.wrapper {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

See the example below:

https://codepen.io/rachelandrew/pen/GZQYOL

It has as many 200 pixel column tracks as will fit into the container with the remaining space shared equally between the columns. 

## Understanding auto-fill and auto-fit

Watch the video blow and carefully check how **auto-fill** adjusts the empty ewual columns in its container while resits container is resized:


https://cdn.css-tricks.com/wp-content/uploads/2017/12/auto-fill-devtools.mov
 
fill that row up! Add as many columns as you can. Even if they are empty— they should all still show up. If you have enough space to add a column, add it. 

Now watch this video and see how auto-fit actually fits only occupied and not empty columns into its container and it collapses or drops the empty ones.
    
https://cdn.css-tricks.com/wp-content/uploads/2017/12/auto-fit-devtools.mov
          
## auto-fit behavior:

Make whatever columns you have fit into the available space. Expand them as much as you need to fit the row size. Empty columns must not occupy any space. Put that space to better use by expanding the filled.

## auto-fill vs. auto-fit example

You can check this example that we have both auto-fill on top and auto-fit on the bottom to see their different behaviour. Resize the browser and see for yourself.
      
https://codepen.io/rachelandrew/pen/dpYzkq

To sum up I should mention the difference between auto-fill and auto-fit is only noticeable if you have a wide enough window for more columns to fill in the space. 

With auto-fit, the content will stretch to fill the entire row width. Whereas with auto-fill, the browser will allow empty columns to occupy space in the row like their non-empty neighbours. They will be allocated a fraction of the space even if they have no grid items in them, thus affecting the size/width of the latter.

Thank you for reading.

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
    
image: /wp-content/uploads/2018/07/minmax-auto-fill-auto-fit.jpg
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

In a grid element, we can use the **repeat()** keyword to repeat all or part of our track definition. The following definition would create a grid with 10, 100 pixel width column tracks.

`<strong>.wrapper {<br />
</strong>`

`<strong>  grid-template-columns: repeat(10, 100px);<br />
</strong>`

`<strong>}</strong>`

We could create 10 flexibly sized equal width tracks by using the fr unit.

`<strong>.wrapper {<br />
</strong>`

`<strong>  grid-template-columns: repeat(10, 1fr);<br />
</strong>`

`<strong>}</strong>`

In these cases we will always have fixed width or flexible grid but with only 10 columns limit. We will need a grid so that asmany columns as possible could be fit in it in different widths. For this gaol in mind, we could use auto-fill and auto-fit.

## Using auto-fill and auto-fit

To create a grid with as many 100 pixel tracks as will fit in the container we can use the auto-fill keyword rather than a number.

**`.wrapper {`**

**`  grid-template-columns: repeat(auto-fill, 100px);<br />
`** 

**`}`**

We could also use ato-fit to achieve the same result:

**`.wrapper {`**

**`  grid-template-columns: repeat(auto-fit, 100px);<br />
`** 

**`}`**

 With auto-fill and auto-fit we create a grid with as many tracks as will fit into the container, and will taking any grid-gap value into account, If you use the auto-fill keyword empty tracks will remain as part of the grid. If you were to use the alternate auto-fit keyword, this would behave in the same way as described above but once all grid items have been placed any completely empty tracks will be dropped or collapsed. 

We will explain it with examples shortly.

## Adding minmax() to do the magic

To create a complete flexible grid , flexible in size of tracks and number, we need [minmax()](https://drafts.csswg.org/css-grid/#valdef-grid-template-columns-minmax). We can give this function a minimum and maximum size that we want our track to be. So the following would make tracks a minimum of 200 pixels and a maximum of 200 pixels.

`<strong>.wrapper {<br />
</strong>`

`<strong>  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));<br />
</strong>`

**`}`**

To make it even better and fully flexible, we will use the fraction unit as ou maximum value:

`<strong>.wrapper {<br />
</strong>`

`<strong>  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));<br />
</strong>`

**`}`**

See the example below:

<p class="codepen" data-height="350" data-theme-id="0" data-slug-hash="GZQYOL" data-default-tab="css,result" data-user="rachelandrew" data-embed-version="2" data-pen-title="Grid by Example 28: minmax() in auto-fill repeating tracks">
  See the Pen <a href="https://codepen.io/rachelandrew/pen/GZQYOL/">Grid by Example 28: minmax() in auto-fill repeating tracks</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



It has as many 200 pixel column tracks as will fit into the container with the remaining space shared equally between the columns. 

## Understanding auto-fill and auto-fit

Watch the video blow and carefully check how **auto-fill** adjusts the empty ewual columns in its container while resits container is resized:

<div class="fluid-width-video-wrapper">
  <video src="https://cdn.css-tricks.com/wp-content/uploads/2017/12/auto-fill-devtools.mov" controls="controls" width="300" height="150"> </p> 
  
  <div class="fluid-width-video-wrapper">
    <span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><video name="fitvid2"></video>
  </div>
  
  <p>
    </video></div> 
    
    <div>
      <code>auto-fill</code> behavior:
    </div>
    
    <div>
      &#8220;<em>fill</em> that row up! Add as many columns as you can. <strong>Even if they are empty</strong>— they should all still show up. If you have enough space to add a column, add it. 
    </div>
    
    <div>
       
    </div>
    
    <div>
      Now watch this video and see how auto-fit actually fits only occupied and not empty columns into its container and it collapses or drops the empty ones.
    </div>
    
    <div class="fluid-width-video-wrapper">
      <video src="https://cdn.css-tricks.com/wp-content/uploads/2017/12/auto-fit-devtools.mov" controls="controls" width="300" height="150"> </p> 
      
      <div class="fluid-width-video-wrapper">
        <span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><video name="fitvid4"></video>
      </div>
      
      <p>
        </video></div> 
        
        <div>
          <code>auto-fit</code> behavior:
        </div>
        
        <div>
          &#8220;make whatever columns you have fit into the available space. Expand them as much as you need to fit the row size. <strong>Empty columns must not occupy any space</strong>. Put that space to better use by expanding the filled.
        </div>
        
        <div>
           
        </div>
        
        <div>
          <h2>
            auto-fill vs. auto-fit example
          </h2>
          
          <p>
            You can check this example that we have both auto-fill on top and auto-fit on the bottom to see their different behaviour. Resize the browser and see for yourself.
          </p>
        </div>
        
        <div>
           
        </div>
        
        <p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="dpYzkq" data-default-tab="css,result" data-user="rachelandrew" data-embed-version="2" data-pen-title="Grid by Example 37: auto-fill vs. auto-fit">
          See the Pen <a href="https://codepen.io/rachelandrew/pen/dpYzkq/">Grid by Example 37: auto-fill vs. auto-fit</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
        </p>
        
        <p>
        </p>
        
        <div>
          To sum up I should mention the difference between auto-fill and auto-fit is only noticeable if you have a wide enough window for more columns to fill in the space.
        </div>
        
        <div>
          With <code>auto-fit</code>, the content will stretch to fill the entire row width. Whereas with <code>auto-fill</code>, the browser will allow empty columns to occupy space in the row like their non-empty neighbours. They will be allocated a fraction of the space even if they have no grid items in them, thus affecting the size/width of the latter.
        </div>
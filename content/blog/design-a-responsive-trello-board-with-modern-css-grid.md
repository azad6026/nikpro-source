---
id: 32725
title: Design a responsive trello board with modern CSS grid
date: 2019-04-06T20:13:43+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32725
permalink: /design-a-responsive-trello-board-with-modern-css-grid/
xyz_twap:
  - "1"
image: kh-trello-board-e1554545697640.png
categories:
  - CSS3
  - Uncategorised
tags:
  - card layout
---

We have explained [different CSS grid](http://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/) [responsive layouts before.](http://www.nikpro.com.au/the-minmax-function-in-css-grid-explained-with-examples/) But as a specific example we will learn about a responsive <a rel="noreferrer noopener" aria-label="trello board (opens in a new tab)" href="https://trello.com/b/1Jz6SorC/the-dev-board" target="_blank">trello card layout</a> borrowing from this thorough article about grids from <a rel="noreferrer noopener" aria-label="CSS tricks. (opens in a new tab)" href="https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/" target="_blank">CSS tricks.</a>

## Card layout trello as a common use case

Basically it is one of the best use cases of CSS grid. Designing a responsive column based layout which is mostly known as card layouts calling each column a card. Lets see the pen:

<p class="codepen" data-height="515" data-theme-id="0" data-default-tab="html,result" data-user="imjuangarcia" data-slug-hash="MLyQPO" style="height: 515px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Trello-Style Card Layout">
  <span>See the Pen <a href="https://codepen.io/imjuangarcia/pen/MLyQPO/"> Trello-Style Card Layout</a> by Juan Martín García (<a href="https://codepen.io/imjuangarcia">@imjuangarcia</a>) on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### The main grid setup

Practically the main grid container specifies how we lay down the layout. We could find the code here:

<pre class="wp-block-preformatted"><strong>.column__list {<br />   display: grid;<br />   grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));<br />   grid-gap: .5rem;<br />   align-items: flex-start;<br /> }</strong></pre>

Using auto-fill in the repeat function we make sure that we achieve a fluid layout that each empty grid cell will be populated by a column once there is enough space for it. Therefore the minmax() function defines the minimum and maximum size of each grid cell to be calculated and occupied.

The original layout in trello site is not responsive. We can even achieve that by adding these two lines:

<pre class="wp-block-preformatted"><strong>grid-auto-flow: column;<br />grid-auto-columns: minmax(260px, 1fr);</strong></pre>

Originally the default flow of the grid is based on rows. If we change it to column, then we get a scrollbar in our grid as we expand the width of the container by resizing it. And adding grid-auto-columns we define the size of auto-generated columns in this case. Here these two lines are not in use though.

### Design each main card

Practically each main column or card is based on grid themselves:

<pre class="wp-block-preformatted"><strong>.card__list {<br />   display: grid;<br />   grid-template-rows: auto;<br />   grid-gap: .5rem;<br />   margin: .5rem 0;<br /> }</strong></pre>

What matters is **grid-template-rows** set to **auto**. Because we need rows to have flexible heights based in their content.

Also inner columns of each card use grid as well. Therefore the design looks smooth and consistent throughout the layout.

Using just a few lines of code in CSS grid using **[auto-fill](http://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/)** [or](http://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/) **[auto-fit](http://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/)** [](http://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/)and **minmax() function** is absolutely enough to design a beautiful responsive layout that works on every size with no need to media queries.

Thank you for reading.

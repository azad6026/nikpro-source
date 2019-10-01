---
id: 32725
title: Design a responsive trello board with modern CSS grid
date: 2019-04-06T20:13:43+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32725
permalink: /design-a-responsive-trello-board-with-modern-css-grid/
xyz_twap:
  - "1"
# featuredImage: ../../static/images/design-with-code.jpg
featuredImage: ../../static/images/trello-board.png
categories:
  - CSS3
  - Uncategorised
tags:
  - card layout
---

We have explained [different CSS grid](https://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/) [responsive layouts before.](https://www.nikpro.com.au/the-minmax-function-in-css-grid-explained-with-examples/) But as a specific example we will learn about a responsive <a rel="noreferrer noopener" aria-label="trello board (opens in a new tab)" href="https://trello.com/b/1Jz6SorC/the-dev-board" target="_blank">trello card layout</a> borrowing from this thorough article about grids from <a rel="noreferrer noopener" aria-label="CSS tricks. (opens in a new tab)" href="https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/" target="_blank">CSS tricks.</a>

## Card layout trello as a common use case

Basically it is one of the best use cases of CSS grid. Designing a responsive column based layout which is mostly known as card layouts calling each column a card. Lets see the pen:

https://codepen.io/imjuangarcia/pen/MLyQPO

### The main grid setup

Practically the main grid container specifies how we lay down the layout. We could find the code here:

```
.column__list {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
   grid-gap: .5rem;
   align-items: flex-start;
 }
```

Using auto-fill in the repeat function we make sure that we achieve a fluid layout that each empty grid cell will be populated by a column once there is enough space for it. Therefore the minmax() function defines the minimum and maximum size of each grid cell to be calculated and occupied.

The original layout in trello site is not responsive. We can even achieve that by adding these two lines:

```
grid-auto-flow: column;
grid-auto-columns: minmax(260px, 1fr);
```

Originally the default flow of the grid is based on rows. If we change it to column, then we get a scrollbar in our grid as we expand the width of the container by resizing it. And adding grid-auto-columns we define the size of auto-generated columns in this case. Here these two lines are not in use though.

### Design each main card

Practically each main column or card is based on grid themselves:

```
.card__list {
   display: grid;
   grid-template-rows: auto;
   grid-gap: .5rem;
   margin: .5rem 0;
 }
```

What matters is **grid-template-rows** set to **auto**. Because we need rows to have flexible heights based in their content.

Also inner columns of each card use grid as well. Therefore the design looks smooth and consistent throughout the layout.

Using just a few lines of code in CSS grid using **[auto-fill](https://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/)** [or](https://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/) **[auto-fit](https://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/)** [](https://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/)and **minmax() function** is absolutely enough to design a beautiful responsive layout that works on every size with no need to media queries.

Thank you for reading.

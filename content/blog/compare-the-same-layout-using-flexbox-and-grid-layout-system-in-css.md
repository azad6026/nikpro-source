---
id: 32366
title: Compare the same layout using FlexBox and Grid layout system in CSS
date: 2018-10-07T20:42:32+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32366
permalink: /compare-the-same-layout-using-flexbox-and-grid-layout-system-in-css/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/flexbox-vs-grid.png
categories:
  - CSS
  - CSS3
tags:
  - flexbox
  - grid
---

Using same layout and HTML we will have a comparison of [FlexBox](https://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-1/) and [grid](https://www.nikpro.com.au/exciting-mondrian-grid-layout-explained-with-an-example-part-1/) layout. The idea is from the great front end developer Rachel Andrew in <a href="https://www.smashingmagazine.com/2018/10/flexbox-use-cases/?utm_source=Responsive+Design+Weekly&utm_campaign=aede0b16e0-RWD_Newsletter_329&utm_medium=email&utm_term=0_df65b6d7c8-aede0b16e0-59048533&mc_cid=aede0b16e0&mc_eid=6f8be64191" target="_blank" rel="noopener noreferrer">Smashing Magazine</a>. I will explain her example here.

## FlexBox for just display items

Practically FlexBox is great to just display items along each other regardless of having the same size for al items. We can display items perfectly fine in the layout:

https://codepen.io/rachelandrew/pen/EdPjgE

As an example with using flex: 1 1 auto; or just flex: auto; we give items the whole space they can get based on their content.

## Grid layout to have horizontal and vertical alignment

Generally with grid we could have alignment in both directions as grid is a two dimensional system. But FlexBox is one dimensional basis. We could perfectly align a layout in grid like below:

https://codepen.io/rachelandrew/pen/LgGVyX

As we explained in [this](https://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/) article about using minmax() and auto-fit here we also use that t create columns:

```
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
```

Therefor each column will be at least 150px wide and the rest of the columns in the row will divide the space using one fraction of unit.

### Same layout in FlexBox

Alternatively we could build the same layout in FlexBox:

https://codepen.io/rachelandrew/pen/vVLOZq

So in here we have we have two lines of code to make it happen. We use **flex: 1 1 150px;** to calculate the column width for items and we gave the container flex-wrap: wrap; to wrap items into multiple lines.

Clearly with grid we align items perfectly and in FlexBox we use all the space given which takes us to where it is really good at over grid:

## FlexBox over Grid

Technically if we need items to wrap in a few lines but also take as much space as needed in a line basis layout FlexBox is the perfect choice. Take a look at the same layout with different usage:

https://codepen.io/rachelandrew/pen/EdPVNz

Ideally this is great for tag management and category based links for example. We just added this line to the container to make it centre:

```
justify-content: center;
```

We didn&#8217;t need a strict layout for this case. Also as we can see FlexBox is the perfect choice to centre items so far:

https://codepen.io/rachelandrew/pen/BqjoxY

To wrap up this is from Rachel Andrew to explain both FlexBox and Grid:

<blockquote class="wp-block-quote">
  <p>
    The grid example is of two-dimensional layout. Layout in rows and columns at the same time. The Flexbox example is one-dimensional layout. We have wrapped flex lines but space distribution is happening on a line by line basis. Each line is essentially acting as a new flex container in the flex-direction.
  </p>
</blockquote>

Thank you for reading.

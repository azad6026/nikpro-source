---
id: 32258
title: The minmax() function in CSS grid explained with examples
date: 2018-09-21T20:48:39+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32258
permalink: /the-minmax-function-in-css-grid-explained-with-examples/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/minmax-function.jpg
categories:
  - CSS
  - CSS3
tags:
  - grid layout
  - minmax() function
---

We will explain the minmax() function in CSS grid with examples in this article.We have seen in in some [previous articles](https://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/) about CSS grid before. But it is essential to have a good understanding of it.

## The minmax() function syntax

Technically as a function it can take two parameters of min and max. According to MDN each parameter can be a `<length>`, a `<percentage>`, a `<flex>` value, or one of the keyword values `max-content`, `min-content`, or `auto`.

Basically `max-content`represents the largest max-content contribution of the grid items occupying the grid track. Also `min-content` represents the largest min-content contribution of the grid items occupying the grid track.

### A grid layout with minmax()

https://codepen.io/azad6026/pen/mGoWQo

As an example we have a design which we create grid columns with minmax() function inside it:

As it is explained inside the HTML markup the first column can be as wide as its container as it has max-contnet. But at most it can be 300px as specified inside the first minmax() function:

```
grid-template-columns: minmax(max-content, 300px) minmax(200px, 1fr) 150px;
```

In the other hand the second column has a minimum with of 200px. But its maximum width is 1fraction of the remaining space. Kind of a flexible width.

In addition the third column has a fixed 150px width column which does not change.

#### **Percentage as value**

```
grid-template-columns: minmax(200px, 50%) 1fr 1fr;
```

Moreover we can use percentage to calculate the width in minmax() function:

Here the first column has a maximum width of 50% of the container and will not get smaller than 200px.

<figure class="wp-block-image">

<img src="https://www.nikpro.com.auminmax-example.jpg" alt="" class="wp-image-32261" srcset="https://testgatsby.localminmax-example.jpg 800w, https://testgatsby.localminmax-example-300x192.jpg 300w, https://testgatsby.localminmax-example-768x492.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" /> <figcaption>A grid example using minmax() function</figcaption></figure>

#### **min-content and max-content**

As another option we can use min and max content:

```
grid-template-columns: minmax(min-content, min-content) minmax(auto, auto) minmax(max-content, max-content);
```

As a result the third column expands to fit the entire length of the string. Since both the minimum and maximum values are set to `max-content`, the width of the column remains the same.

Also in the first column the content within the cell is shifted in order to take up the least amount of horizontal space possible, without causing any overflow.

The second column has min and max value as auto. Auto as a maximum, is equivalent to the `max-content` value.. Also as a minimum, the `auto` value represents the largest minimum size the cell can be. This &#8220;largest minimum size&#8221; is different from the `min-content` value, and specified by `min-width`/`min-height`.

#### A responsive grid without media queries

As explained in [Mondrian layout](https://www.nikpro.com.au/responsive-mondrian-grid-layout-without-using-media-queries-in-css/) and grid layouts [with minmax() function](https://www.nikpro.com.au/build-responsive-css-grid-layouts-using-minmax-with-auto-fill-and-auto-fit/) we can use it to build responsive grid layouts:

```
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

We use repeat function and auto-fit as its first argument and the minmax() function with a minimum fixed width and fr as max width to make sure the layout can expand according to the viewport width. It will beautifully build a responsive grid layout.

Thank you for reading.

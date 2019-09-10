---
id: 32050
title: How FlexBox and auto margin work together with examples
date: 2018-08-19T21:49:50+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32050
permalink: /how-flexbox-and-auto-margin-work-together-with-examples/
image: /images/flexbox-and-auto-magin.jpg
categories:
  - CSS
  - CSS3
---
There are really useful use cases that we might need [FlexBox](http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-1/) and auto margin to work together. In this article I will show this with some examples for a better understanding.

## FlexBox and auto margin

The idea is actually to make a FlexBox child independent from the container and place in where we need it to be not the default place that the flex force it to. Let me give you an example. Imagine the code below:

```&lt;div class="parent">
  &lt;div class="child1">&lt;/div><br />&lt;div class="child2">&lt;/div>
&lt;/div>```

If we want to have or place one child in the edge or middle edge of the container or right in the very centre of it we can. Using the magic of auto margins. The simplest way of doing this for example for placing that item in the centre of the parent container looks like this:

```.parent {
  display: flex
}

.child2 {
  margin: auto;
}```

As a result the **.child2** will be place in the centre of the remaining space of the container. By remaining I mean whatever space **.child1** is occupying is specified for item 1 and the rest will be where the item 2 will be in the centre of it.

### How FlexBox and auto margin works

It is actually simple and understandable. The auto margin in any direction (in case of margin:auto it applies to all directions top left right and bottom) will push the item or child to have the maximum space from that direction. Have a look at this pen I have created for this topic to have a better understanding:

<p data-height="600" data-theme-id="0" data-slug-hash="MqgvKy" data-default-tab="css,result" data-user="azad6026" data-pen-title="FlexBox and auto margin" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/MqgvKy/">FlexBox and auto margin</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

It is a full example of four FlexBox and auto margin examples. Let us explain them all.

#### First example with margin-left: auto;

Each container has two child. The green child is the one that has a normal standing and I have coloured the one that I change the place with auto margin with another colour.

In the first example it is blue. You see that by adding **margin-left: auto; ** the child has been pushed to the far right of the container meaning its left margin is in the maximum. This is good for if we want a two item flex container to have its items spread simply to the top edges.

#### Second example with margin-top:auto;

This is interesting. In the second example which is the red child we added **margin-top: auto;** which forces the item to have the maximum distance from the top but it stays in its second spot in the container as the other sides hasn&#8217;t been changed.

#### Third example with margin: auto 0px auto auto;

In the yellow child int his example we actually change **all margin sides except the top side** to auto meaning the item is to be place in the edge centre on the right side of the container. Great to stick an item in our list in one edge.

#### Fourth example with margin: auto;

And this is the last one which is white. As I mentioned earlier doing mixing FlexBox and **auto margin** in this case places the manipulated child to be placed in the centre of the remaining space. And the white box in our case has just done that.

Using FlexBox and auto margin could make a big difference in how we place items inside the flex container without using much code and cleverly just changing the margins.It is useful in separate menus or wide spread items inside a flex container. Thanks for reading.
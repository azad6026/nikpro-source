---
id: 31728
title: 'Flexbox explained in a simple way with examples: Part 2'
date: 2018-06-26T18:39:25+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31728
permalink: /flexbox-explained-in-a-simple-way-with-examples-part-2/
image: /wp-content/uploads/2018/06/css-flexbox-2-1568x696.png
categories:
  - CSS
tags:
  - flex items
  - flexbox
---
In the [last article](http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-1/) we explained the parent container properties of Flexbox layout. In this article, we will go through the flex items properties and demonstrate them with some examples at the end.

## Flexbox item properties {#flexbox-item-properties}

## order {#order}

This property applies the order of appearance of each flex item inside the layout container. The default order is as the layout has been set up. To make an item to appear first if it is not already, change the order to -1. The default value is 0. The items can be reordered without restructuring the HTML.

<pre class="wp-block-preformatted"><strong>
 .flex-item {
  -webkit-order: -1 ; /* Safari */
  order: -1 ;
 }
</strong></pre>

## flex-grow {#flex-grow}

Flex grow property defines the flex grow factor, which shows how much the flex item will grow relative to the rest of the flex items in the flex container when positive free space is available.Negative numbers are invalid.

<pre class="wp-block-preformatted"><strong>
  <strong>.flex-item { </strong>
  <strong>  -webkit-flex-grow: 2; /* Safari */ </strong>
  <strong>  flex-grow: 2 ; </strong>
  <strong>}</strong>
</strong></pre>

If all flex items have the same flex grow propert ( by default it is 0) , then they will all have same sizes inside the flex container layout.

## flex-shrink {#flex-shrink}

The flex-shrink defines the flex shrink factor, which shows how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is available. By default all flex items can be shrunk, but if we set it to 0 (don&#8217;t shrink) they will maintain the original size.

<pre class="wp-block-preformatted"><strong>
  <strong>.flex-item { </strong>
  <strong>  -webkit-flex-shrink: 2; /* Safari */ </strong>
  <strong>  flex-shrink: 2 ; </strong>
  <strong>}</strong>
</strong></pre>

## flex-basis {#flex-basis}

flex basis defines the size of the item based on the item&#8217;s width and height before free space is distributed according to the flex factors. The default value is auto.

<pre class="wp-block-preformatted"><strong>
  <strong>.flex-item { </strong>
  <strong>  -webkit-flex-basis: auto | ; /* Safari */ </strong>
  <strong>  flex-basis: auto | ; </strong>
  <strong>}</strong>
</strong></pre>

## flex {#flex}

Flex property is the shorthand for the flex-grow, flex-shrink and flex-basis properties. Among other values it also can be set to auto (1 1 auto) and none (0 0 auto).

<pre class="wp-block-preformatted"><strong>
  <strong>.flex-item { </strong>
  <strong>  -webkit-flex: 0 1 auto; /* Safari */</strong>
  <strong>  flex: 0 1 auto;</strong>
  <strong>}</strong>
</strong></pre>

It is best practice to use the shorthand over the individual properties as it correctly resets any unspecified components to accommodate common uses.

## align-self {#align-self}

Align-self property allows the default alignment (or the one specified by align-items) to be overridden for each flex item inside the flex container. Refer to [align-items](http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-1#align-items) explanation for flex container to understand the available values. The default value is auto.

<pre class="wp-block-preformatted"><strong>
  <strong>.flex-item { </strong>
  <strong>  -webkit-align-self: auto | flex-start | flex-end | center | baseline | stretch; /* Safari */ </strong>
  <strong>  align-self: auto | flex-start | flex-end | center | baseline | stretch; </strong>
  <strong>}</strong>
</strong></pre>
  The value of auto for align-self computes to the value of align-items on the element’s parent, or stretch if the element has no parent.


You can play around with flex items in this playground by Dimitar on CodePen. Hover over the items individually and you can change the flex items and see how it actually effects the layout and their positions.

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="yydezN" data-default-tab="html,result" data-user="justd" data-embed-version="2" data-pen-title="Flexbox Properties Demonstration">
  See the Pen <a href="https://codepen.io/justd/pen/yydezN/">Flexbox Properties Demonstration</a> by Dimitar (<a href="https://codepen.io/justd">@justd</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



Hope these series of articles have helped you to learn and understand Flexbox better and deeper.

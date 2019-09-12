---
id: 31809
title: 'CSS Grid layout review with examples: Part 2'
date: 2018-07-07T21:37:04+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31809
permalink: /css-grid-layout-review-with-examples-part-2/
# image: ../../static/images/grid-item-positioning.jpg
categories:
  - CSS
tags:
  - css grid layouts
  - grid align itms
---
In the [previous post](http://www.nikpro.com.au/css-grid-layout-review-with-examples-part-1/) we demonstrated the css grid layout with some  examples and learnt the concepts. We showed how to define a grid layout with display property and how to define columns and rows and also the positioning of grid item. Also we demonstrated some shorthands like repeat that are useful in practice.

In this post we check some more examples and will learn more syntaxes and ideas of grid examples using <a href="https://gridbyexample.com/examples/" target="_blank" rel="noopener noreferrer">grid by examples.</a>

### Line-based placement named lines with spans

You can give lines (grid line) the same name and then use the span keyword to target lines of a certain name.  Here we start at a certain column line by using <code class="highlighter-rouge">col &lt;line number&gt;</code> and span by saying <code class="highlighter-rouge">span &lt;number of lines&gt;</code>. See below:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="oXKgeQ" data-default-tab="css,result" data-user="rachelandrew" data-embed-version="2" data-pen-title="Grid by Example 8: Line-based placement named lines with span">
  See the Pen <a href="https://codepen.io/rachelandrew/pen/oXKgeQ/">Grid by Example 8: Line-based placement named lines with span</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



### Placing footer in the page without clearing

In this example we place the footer in its grid-template-areas by defining its grid-area and it sits right where it should. No clearing is required as in the float positioning:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="GJVgOV" data-default-tab="css,result" data-user="rachelandrew" data-embed-version="2" data-pen-title="Grid by Example 12: No clearing required">
  See the Pen <a href="https://codepen.io/rachelandrew/pen/GJVgOV/">Grid by Example 12: No clearing required</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



### Using z-index for overlaid items

You guessed it right. You can use z-index property for items that are overlaid with other items and make them live in the grid and control their position by yourself:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="KpOwQW" data-default-tab="css,result" data-user="rachelandrew" data-embed-version="2" data-pen-title="Grid by Example 15: Layering items">
  See the Pen <a href="https://codepen.io/rachelandrew/pen/KpOwQW/">Grid by Example 15: Layering items</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



### Redefining the grid areas using media queries

We all know about responsive design and media queries. In the grid layout, we can control and redefine the positioning of grid layout items using grid-area in media queries. In this example in two break points the grid areas have been redefined and if you resize your browser you will see how the layout will change.

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="waVBpK" data-default-tab="css,result" data-user="rachelandrew" data-embed-version="2" data-pen-title="Grid by Example 13: Redefining grid areas with media queries">
  See the Pen <a href="https://codepen.io/rachelandrew/pen/waVBpK/">Grid by Example 13: Redefining grid areas with media queries</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



### Nested Grid

A grid item could be a grid container itself by simply setting the display property to grid. In example below the D item of the parent grid has become a grid container of the rest of the items itself:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="NqQPBR" data-default-tab="css,result" data-user="rachelandrew" data-embed-version="2" data-pen-title="Grid by Example 21: a nested Grid">
  See the Pen <a href="https://codepen.io/rachelandrew/pen/NqQPBR/">Grid by Example 21: a nested Grid</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



### A simple minmax() example

In grid layout we could use the minmax() notation to specify the minimum and maximum width for an item. The rest of items will take the leftover spaces after this item took position.

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="RRxPyk" data-default-tab="css" data-user="rachelandrew" data-embed-version="2" data-pen-title="Grid by Example 31: simple minmax() example">
  See the Pen <a href="https://codepen.io/rachelandrew/pen/RRxPyk/">Grid by Example 31: simple minmax() example</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



### Box alignment with align-items property

Just like <a href="http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-1/" target="_blank" rel="noopener noreferrer">Flexbox</a> we could align items in the grid container and <a href="http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-2/" target="_blank" rel="noopener noreferrer">grid item</a> as well. In this example the gird container has align-items set to center and the last item(box e) has its own alignment align-self property set to stretch.

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="WQNqKy" data-default-tab="css,result" data-user="rachelandrew" data-embed-version="2" data-pen-title="Grid by Example 24: align-items">
  See the Pen <a href="https://codepen.io/rachelandrew/pen/WQNqKy/">Grid by Example 24: align-items</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



There are lots of other examples that you could create or take a look while you are researching around grid layout system. We cover most important and useful parts of grid layout that could be a beginning to learn more about them. Hope it was helpful to you.
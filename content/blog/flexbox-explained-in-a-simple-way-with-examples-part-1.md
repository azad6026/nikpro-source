---
id: 31721
title: 'Flexbox explained in a simple way with examples: Part 1'
date: 2018-06-25T20:52:14+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31721
permalink: /flexbox-explained-in-a-simple-way-with-examples-part-1/
image: /images/css-flexbox-2-1568x696.png
categories:
  - CSS
tags:
  - flexbox
---
Flexbox has opened the doors for lots of flexibility in our layouts and explaining all its power takes more that a post or even two. I will demonstrate different layouts with Flexbox explaining in a simple way with examples.

First we need to know about Flexbox container properties and then its immediate children or Flexbox items properties and then combine them together to make the desired layout. I will show you the parent container&#8217;s properties first and we will build a layout using its properties.

To set up the parent container as Flexbox just add display property like this:

```
  .flex-container{
    display: -webkit-flex; /* Safari */
    display: flex;
  }<br /> Or to show it just like an inline element:
  .flex-container {
    display: -webkit-inline-flex; /* Safari */
    display: inline-flex;
  }
```
  All children of the container automatically become flex-items. Now we explain each parent property and we will see them in an example:


## flex-direction {#flex-direction}

  It specifies how flex items are laid out in the parent container.They can be laid out in two main directions, like rows horizontally or like columns vertically.
```
  .flex-container {<br />    flex-direction: row | row-reverse | column | column-reverse;<br /> } 
```
## flex-wrap {#flex-wrap}

The initial flexbox concept is the container to set its items in one single line. The flex-wrap property controls if the flex container lay out its items in single or multiple lines, and the direction the new lines are stacked in.
```
.flex-container {
    flex-wrap: nowrap | wrap | wrap-reverse;
} 
```
## flex-flow {#flex-flow}

This property is a shorthand for setting the flex-direction and flex-wrap properties.
```
.flex-container { 
    flex-flow: <‘flex-direction’> || <‘flex-wrap’>
} 
```
## justify-content {#justify-content}

The justify-content property aligns flex items along the main axis of the current line of the flex container. It helps distribute left free space when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size.
```
.flex-container {  
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
} 
```
## <a id="align-items"></a>align-items {#align-items}

Flex items can be aligned in the cross axis of the current line of the flex container, similar to `justify-content` but in the perpendicular direction. This property sets the default alignment for all flex items, including the anonymous ones.
```
.flex-container {
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
} 
```
See these three examples of how to change the layout using these properties.

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="JZByeO" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="Flexbox Example 1">
  See the Pen <a href="https://codepen.io/azad6026/pen/JZByeO/">Flexbox Example 1</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

## align-content {#align-content}

The align-content property aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
```
.flex-container {  
   <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | stretch<span class="token punctuation">;</span>  
} 
```
You can play around with flex items in this playground by Dimitar on CodePen. Cahnge the properties of parent by clicking on the radio buttons

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="yydezN" data-default-tab="html,result" data-user="justd" data-embed-version="2" data-pen-title="Flexbox Properties Demonstration">
  See the Pen <a href="https://codepen.io/justd/pen/yydezN/">Flexbox Properties Demonstration</a> by Dimitar (<a href="https://codepen.io/justd">@justd</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



These were all parent container&#8217;s properties. In the next article we will have a look at flex items properties.

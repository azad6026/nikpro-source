---
id: 31967
title: Custom form and gird layouts with FlexBox
date: 2018-08-03T20:56:31+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31967
permalink: /custom-form-and-gird-layouts-with-flexbox/
image: /images/flexbox-layout-form.jpg
categories:
  - CSS
  - CSS3
tags:
  - flexbox
  - form
  - grid layout
---
We will take a look at FlexBox custom form and FlexBox grid layout here. We have talked about FlexBox basics and design properties in [this post](http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-1/) and [this post](http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-2/) before. Therefor we will use that knowledge here.

## Custom form by FlexBox

Take a look at this pen which is a FlexBox custom form that I created using some examples from [quackit.](http://quackit.com) Two forms with different designs for inputs:

<p data-height="600" data-theme-id="0" data-slug-hash="bjKdJZ" data-default-tab="html,result" data-user="azad6026" data-pen-title="Custom form with flexBox 1" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/bjKdJZ/">Custom form with flexBox 1</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

In the first FlexBox custom form we use flex-end to justify the content and set flex to 1 (flex-grow) for inputs. They take as much space as they can. However in the second form , we set flex to 2 for inputs and 1 for labels so they have a balanced layout of 2 to 1 at the end. 

### Two column form

In the next pen we have two identical forms using flex-direction set to column for each column. We also play around with order to have text area in the left and right side accordingly.

<p data-height="600" data-theme-id="0" data-slug-hash="GBGpve" data-default-tab="html,result" data-user="azad6026" data-pen-title="Custom form wit FlexBox 2" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/GBGpve/">Custom form wit FlexBox 2</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

## FlexBox grid layout

In this pen we create an interesting grid layout which could be used and inspired for creating games and multiple column layouts:

<p data-height="265" data-theme-id="0" data-slug-hash="oMyjPa" data-default-tab="html,result" data-user="azad6026" data-pen-title="Flexible gris up to 12 column with FLexBox" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/oMyjPa/">Flexible gris up to 12 column with FLexBox</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

This FlexBox grid layout starts from one row for the first column continuing to the twelve column with twelve rows. The interesting part is it takes two lines of code to make it. The display : flex; and flex-direction : column. for each column inside the wrapper. Aa a result they lay out on top of each other and make this beautiful grid layout with FlexBox.

### Another example of FlexBox grid layout

For the last example take a look at this css-tricks example of a FlexBox grid layout:

<p data-height="500" data-theme-id="0" data-slug-hash="bedKLV" data-default-tab="html,result" data-user="chriscoyier" data-pen-title="Easy Flexbox Grid" class="codepen">
  See the Pen <a href="https://codepen.io/chriscoyier/pen/bedKLV/">Easy Flexbox Grid</a> by Chris Coyier (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

We have got three grid sections. In each section it uses justify-content as default which is flex-start (so you don&#8217;t need to mention it in your code.)

And each column has flex:1; so that they can line up with the same width. However for the third grid layout the justify-content is set to space-between and each have a width of 32%. to make sure they will fill the remaining space. ( Flex items take as much space as their content otherwise. Try to remove this line and you will see the result).

We created FlexBox custom form and FlexBox grid layouts with some examples. FlexBox has some very powerful property toolsets to make Flexible yet custom layouts based on the needs. Although for grid layouts it is best to use [CSS grids](http://www.nikpro.com.au/css-grid-layout-review-with-examples-part-1/) as they have been made to build all kinds of grid layouts. Thanks for reading.
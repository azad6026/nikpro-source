---
id: 32748
title: Equal height column card layouts with aligned content using FlexBox and Grid explained with examples
date: 2019-05-04T21:45:29+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32748
permalink: /equal-height-column-card-layouts-with-aligned-content-using-flexbox-and-grid-explained-with-examples/
xyz_twap:
  - "1"
image: /wp-content/uploads/2019/05/equal-height-column-1.png
categories:
  - CSS
  - CSS3
tags:
  - equal height column
  - flexbox
  - grid
---

We all have been in this situation where we needed to have a few equal height column card layouts with aligned content inside them. Using FlexBox and Grid in seperate examples I will explain how to make the card layouts and in which use cases they are best suited.

## Equal height column markup

Firstly we better clarify which use case is best for these solutions. Both solutions work perfectly on box layouts and their direct children. Meaning there is no good solution if you have nested items inside your layout box. Lets check the markup:

<pre class="wp-block-preformatted"><strong>&lt;div class="container"&gt;<br /> &lt;div class="layout-box"&gt;<br /> &lt;h3&gt;Layout Box title&lt;/h3&gt;<br /> &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum&lt;/p&gt;<br /> &lt;button&gt;read more&lt;/button&gt;<br /> &lt;/div&gt; <br />&lt;div class="layout-box"&gt;<br /> &lt;h3&gt;Layout Box title&lt;/h3&gt;<br /> &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum&lt;/p&gt;<br /> &lt;button&gt;read more&lt;/button&gt;<br /> &lt;/div&gt; <br />&lt;div class="layout-box"&gt;<br /> &lt;h3&gt;Layout Box title&lt;/h3&gt;<br /> &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum&lt;/p&gt;<br /> &lt;button&gt;read more&lt;/button&gt;<br /> &lt;/div&gt; <br /><br />&lt;/div&gt; </strong></pre>

Interestingly all the layout boxes have three direct children. H3, p and button. Therefore our code will apply to them. There is no grandchild to affect the layout. We will explain that a bit more later.

## FlexBox to make equal height column

Not only we want the columns to be equal height but also we need the button to stick to the bottom of the box so that it looks neat. <a href="https://codepen.io/azad6026/pen/LoPmVE" target="_blank" rel="noreferrer noopener" aria-label="Here is the pen I created for that (opens in a new tab)">Here is the pen I created for that</a>:

<p class="codepen" data-height="537" data-theme-id="0" data-default-tab="html,result" data-user="azad6026" data-slug-hash="LoPmVE" style="height: 537px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="equal height column card layouts in Flexbox">
  <span>See the Pen <a href="https://codepen.io/azad6026/pen/LoPmVE/"> equal height column card layouts in Flexbox</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.</span>
</p>

I have used grid to make three responsive boxes. But to make the inner alignment flexbox does the job:

<pre class="wp-block-preformatted"><strong>.layout-box{<br />   display: flex;<br />   flex-direction: column;<br /> }<br /> button{<br />   margin-top: auto;<br /> } </strong></pre>

We have seen usefulness of auto margin in [this post](http://www.nikpro.com.au/how-flexbox-and-auto-margin-work-together-with-examples/) before. That makes the button to stick in the bottom of the card layout.

## Grid to make equal height column

Practically the exact same layout but using grid system to accomplish it. Here is <a rel="noreferrer noopener" aria-label="the pen I have created (opens in a new tab)" href="https://codepen.io/azad6026/pen/WBeaGB" target="_blank">the pen I have created</a> for it:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="azad6026" data-slug-hash="WBeaGB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="equal height column card layouts in grid">
  <span>See the Pen <a href="https://codepen.io/azad6026/pen/WBeaGB/"> equal height column card layouts in grid</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<pre class="wp-block-preformatted"><strong>.layout-box{<br />   display: grid;<br />   grid-template-rows: auto 1fr auto;<br /> }</strong></pre>

Basically using grid-template-rows we are giving all the extra space to the middle section which is the p tag so that the h3 and the button tag will stick to the edges of the layout.Really neat.

## Sub-gird is needed

The problem is the height of the inner children. I intentionally made one of the titles longer so that the problem is clear.We can give it a min0height or use a fixed height in grid row but they are not great solutions.

According to Rachel Andrew&#8217;s article <a rel="noreferrer noopener" aria-label="here (opens in a new tab)" href="https://www.smashingmagazine.com/2018/07/css-grid-2/" target="_blank">here</a>, sub-grid will solve the problem where we specify the children as display: subgrid; and they inherit properties from the parent box and can be aligned the same way.

But it is not supported in any browser yet and we will have a complete example once it is officially released later.

Thank you for reading.

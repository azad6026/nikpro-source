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
# image: ../../static/images/equal-height-column-1.png
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


```

&lt;div class="container"&gt;
    &lt;div class="layout-box"&gt;
        &lt;h3&gt;Layout Box title&lt;/h3&gt;
        &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum&lt;/p&gt;
        &lt;button&gt;read more&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="layout-box"&gt;
        &lt;h3&gt;Layout Box title&lt;/h3&gt;
        &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum&lt;/p&gt;
        &lt;button&gt;read more&lt;/button&gt;
    &lt;/div&gt; 
    &lt;div class="layout-box"&gt;
        &lt;h3&gt;Layout Box title&lt;/h3&gt;
        &lt;p&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum&lt;/p&gt;
        &lt;button&gt;read more&lt;/button&gt;&lt;/div&gt;
    &lt;/div&gt; 

```


Interestingly all the layout boxes have three direct children. H3, p and button. Therefore our code will apply to them. There is no grandchild to affect the layout. We will explain that a bit more later.

## FlexBox to make equal height column

Not only we want the columns to be equal height but also we need the button to stick to the bottom of the box so that it looks neat.

https://codepen.io/azad6026/pen/LoPmVE

I have used grid to make three responsive boxes. But to make the inner alignment flexbox does the job:


```

.layout-box{   
  display: flex;  
  flex-direction: column;
}
button{  
  margin-top: auto;
} 

```


We have seen usefulness of auto margin in [this post](http://www.nikpro.com.au/how-flexbox-and-auto-margin-work-together-with-examples/) before. That makes the button to stick in the bottom of the card layout.

## Grid to make equal height column

Practically the exact same layout but using grid system to accomplish it. Here is <a rel="noreferrer noopener" aria-label="the pen I have created (opens in a new tab)" href="https://codepen.io/azad6026/pen/WBeaGB" target="_blank">the pen I have created</a> for it:

https://codepen.io/azad6026/pen/WBeaGB


```

.layout-box{
  display: grid;
  grid-template-rows: auto 1fr auto;
}

```


Basically using grid-template-rows we are giving all the extra space to the middle section which is the p tag so that the h3 and the button tag will stick to the edges of the layout.Really neat.

## Sub-gird is needed

The problem is the height of the inner children. I intentionally made one of the titles longer so that the problem is clear.We can give it a min0height or use a fixed height in grid row but they are not great solutions.

According to Rachel Andrew&#8217;s article <a rel="noreferrer noopener" aria-label="here (opens in a new tab)" href="https://www.smashingmagazine.com/2018/07/css-grid-2/" target="_blank">here</a>, sub-grid will solve the problem where we specify the children as display: subgrid; and they inherit properties from the parent box and can be aligned the same way.

But it is not supported in any browser yet and we will have a complete example once it is officially released later.

Thank you for reading.

---
id: 32511
title: Build a social profile card component using FlexBox
date: 2018-11-03T20:59:14+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32511
permalink: /build-a-social-profile-card-component-using-flexbox/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/11/align-center.png
categories:
  - CSS
  - CSS3
tags:
  - align-items
---
In this article we will demonstrate a social profile card component [built and designed using FlexBox.](http://www.nikpro.com.au/a-felxbox-dice-as-an-example-of-different-flexbox-properties/) The techniques look simple but it helps to improve our FlexBox knowledge to build more complex components. 

I got the idea from <a href="https://freshman.tech/flexbox/" target="_blank" rel="noreferrer noopener">freshman</a> and tweaked it for our needs. This is the pen for what we are going to explain:

<p class="codepen" data-height="400" data-theme-id="0" data-slug-hash="XyWRVg" data-default-tab="css,result" data-user="azad6026" data-pen-title="Profile card component">
  See the Pen <a href="https://codepen.io/azad6026/pen/XyWRVg/">Profile card component</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



## Social profile card markup

The whole idea is to design a social profile card that can be of any social media. The very first thing is to design the HTML. These are the main elements of the markup structure:

<pre class="wp-block-preformatted"><strong>&lt;div class="photo"&gt;
  &lt;div class="top"&gt;
   // the top links go here
  &lt;/div&gt;
  &lt;div class="middle"&gt;&lt;h3&gt;Coding is my passion!&lt;/h3&gt;&lt;/div&gt;
  &lt;div class="bottom"&gt;
   // the image and link in the bottom go here
  &lt;/div&gt;
&lt;/div&gt;</strong></pre>

As we see the div with **.photo** class is the main container. So we design its layout like below:

<pre class="wp-block-preformatted"><strong>.photo{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}</strong></pre><figure class="wp-block-image">

<img class="wp-image-32513" src="http://www.nikpro.com.au/wp-content/uploads/2018/11/justify.png" alt="" srcset="http://testgatsby.local/wp-content/uploads/2018/11/justify.png 512w, http://testgatsby.local/wp-content/uploads/2018/11/justify-300x163.png 300w" sizes="(max-width: 512px) 100vw, 512px" /> </figure> 

Firstly we change the direction of the [flex container](http://www.nikpro.com.au/create-a-simple-website-layout-using-flexbox/) to column so that the .**top** and .**middle** and  .**bottom** divs which are the immediate children of .photo div could be stacked on top of each other. Meaning we need to design them each in the location that their name suggest.

Also we justify the content with **space-between** so that they have space in between them only.

### The top bar

For the top bar we want the buttons to have even space in between them and look centred in the middle so the user can see them both at once:

<pre class="wp-block-preformatted"><strong>.top {
  display: flex;
  justify-content: space-around;
}</strong></pre>

Therefor we need to **justify the content** using **space-around** which makes sure buttons are positioned with space before, between, and after the lines.

In addition we want the button content to be centred. We will use **align-items** property to nicely centre all the [items inside the flex container](http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-2/):

<pre class="wp-block-preformatted"><strong>.top button{
  display: flex;
  align-items: center;
}</strong></pre><figure class="wp-block-image">

<img class="wp-image-32514" src="http://www.nikpro.com.au/wp-content/uploads/2018/11/align5.png" alt="" srcset="http://testgatsby.local/wp-content/uploads/2018/11/align5.png 687w, http://testgatsby.local/wp-content/uploads/2018/11/align5-300x104.png 300w" sizes="(max-width: 687px) 100vw, 687px" /> </figure> 

### The simple middle part

Not much in here. We don&#8217;t need FlexBox here. When we can simply centre the text using text-align property:

<pre class="wp-block-preformatted"><strong>.middle{
  text-align: center;
}</strong></pre>

### The social card bottom section

Just like the top section we make .bottom the main flex container and as we want elements on the right we use flex-end to justify them to the end of flex container:

<pre class="wp-block-preformatted"><strong>.bottom {
  display: flex;
  justify-content: flex-end;
}</strong></pre>

One more thing is to align the image and the text both centred using align-item property as expected:

<pre class="wp-block-preformatted"><strong>.photographer {
  display: flex;
  align-items: center;
}</strong></pre>

This will work. But in HTML the image is before the text. As we don&#8217;t want or in reality cannot change the markup we will use FlexBox order property to move the text after the image so it appears after it:

<pre class="wp-block-preformatted"><strong>.photographer-name {
  order: 2;
}</strong></pre>

Finally we have our social profile card ready. This is just a simple design which we can refer to as a start to design more complex layouts in FlexBox.

Thank you for reading.
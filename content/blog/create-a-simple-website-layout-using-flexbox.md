---
id: 32100
title: Create a simple website layout using FlexBox
date: 2018-08-27T21:16:44+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32100
permalink: /create-a-simple-website-layout-using-flexbox/
image: /images/website-kayout-using-FlexBox.png
categories:
  - CSS
  - CSS3
tags:
  - flexbox
  - website layout
---
In this article we quickly check how we can create a simple website layout using FlexBox. You can read about basics of FlexBox in [this](http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-1/) and [this](http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-2/) article.

## The simple website layout using FlexBox

To create the simple website layout using FlexBox we create a simple markup first:

<pre class="wp-block-preformatted"><strong>&lt;body></strong><br /><strong>  &lt;header>Header&lt;/header></strong><br /><strong>  &lt;main></strong><br /><strong>    &lt;article>Article&lt;/article></strong><br /><strong>    &lt;nav>Nav&lt;/nav></strong><br /><strong>    &lt;aside>Aside&lt;/aside></strong><br /><strong>  &lt;/main></strong><br /><strong>  &lt;footer>Footer&lt;/footer></strong><br /><strong>&lt;/body></strong></pre>

Originally it is the holy grail layout as it is infamous for it. We can use a few solutions to make the desired website layout using FlexBox. 

### The CSS for the website layout using FlexBox

Obviously the body should take care of the FlexBox as a container:

<pre class="wp-block-preformatted"><strong>body {
  display: flex;
  flex-direction: column;
}</strong></pre>

Because the child elements should stack from top to bottom, the default direction of the Flexbox must be changed to column here.

Therefor with that in place we only need to set the main tag style to make it flexible to hold aside and nav inside it as flex items. Therefor we do this:

<pre class="wp-block-preformatted"><strong>main {
   flex: 1;
   display: flex;</strong><br /><strong>}</strong></pre>

However we set the flex-grow(flex) to 1 (`flex: 1` is equivalent to `flex-grow: 1` , `flex-shrink: 1` and `flex-basis: 0)` so that main can take the remaining space as it is. Although we give article flex : 1 as well to make sure it takes all the space available to it. 

<pre class="wp-block-preformatted"><strong>article {
   flex: 1;</strong><br /><strong>}</strong></pre>

Although we can change the position of the nav in the markup to make it to be the starting left tag but we don&#8217;t do this here.

We will use FlexBox order property instead. remember there are cases we cannot change the markup and best approach is to use CSS. Therefor we will do this  :

<pre class="wp-block-preformatted"><strong>nav {
  order: -1
}</strong></pre>

Which forces the nav element to be the first item inside its container. The result should look like this so far:

<p data-height="400" data-theme-id="0" data-slug-hash="mGPqvZ" data-default-tab="css,result" data-user="azad6026" data-pen-title="Website layout using  FlexBox" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/mGPqvZ/">Website layout using FlexBox</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

## The website layout using FlexBox another way

As another approach to create the same website layout using FlexBox we can change the flex container. We don&#8217;t really need the body to be the container and we can leave off the header and footer from the FLexBox container as they don&#8217;t need it. We can use main as the flex container and just compute its height as in this way it needs to be calculated by us:

<pre class="wp-block-preformatted"><strong>main {</strong><br /><strong>  height: calc(100vh - 40vh);</strong><br /><strong>}</strong></pre>

The height of `main` must be equal to `calc(100vh — height of header — height of footer ).`You must give header and footer a height though.

Crating website layout has mede easy having FlexBox in hand. A better approach is to create layouts with CSS Grid layouts and use FlexBox for inner parts like menus. We will have a seperate article on that subject f=soon. Thanks for reading.
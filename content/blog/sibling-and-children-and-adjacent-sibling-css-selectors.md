---
id: 32306
title: Sibling and children and adjacent sibling CSS selectors
date: 2018-09-28T21:52:44+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32306
permalink: /sibling-and-children-and-adjacent-sibling-css-selectors/
xyz_twap:
  - "1"
image: ../../static/images/css-selectors.png
categories:
  - CSS
---
As some general [CSS](http://nikpro.com.au/category/css) [selectors](http://www.nikpro.com.au/the-css-nth-child-selector-explained-with-examples/) we will try sibling and children and Adjacent sibling  selectors in this article. We will see the differences and their usages.

## General descendant selector

Basically if we ever wanted to select **all descendant of an element** we will use this selector. What we need is to give same style to all similar elements no matter how deep they are buried in that selector:

```ul li { color: green;}```

In this case we will select all lis items inside unordered list or nested inside its children.

## Only child Selector

On the other hand we might need to select only the **direct children** of the unordered list. Meaning we only need elements of one level deep into the parent. We will have this code then:

```ul > li { color : red; }<br /></pre>

Visually this is the image of how it will look like from Chris Coyier&#8217;s [article](https://css-tricks.com/child-and-sibling-selectors/) here:<figure class="wp-block-image">

<img src="http://www.nikpro.com.auselector-example.png" alt="" class="wp-image-32307" srcset="http://testgatsby.localselector-example.png 570w, http://testgatsby.localselector-example-300x205.png 300w" sizes="(max-width: 570px) 100vw, 570px" /> </figure> 

Therefor we clearly see the difference between these two CSS selectors.

## General sibling selector

Technically we need to know that this selector selects all siblings. Not just those who immediately succeed the first element but also also those who appear anywhere:

```p ~ p { margin: 0 0 5px 0; }```

We can see the visual showcase of this here in this image:<figure class="wp-block-image">

<img src="http://www.nikpro.com.augeneral-sibling-example.png" alt="general sibling example" class="wp-image-32309" srcset="http://testgatsby.localgeneral-sibling-example.png 570w, http://testgatsby.localgeneral-sibling-example-300x156.png 300w" sizes="(max-width: 570px) 100vw, 570px" /> </figure> 

Although the last **p** element is not directly followed by an article but it has been selected by **p ~ p** selector as well.

## Adjacent sibling selector

Finally we can combine both above CSS selectors and make an adjacent sibling selector which selects and element which directly follows the first element:<figure class="wp-block-image">

<img src="http://www.nikpro.com.auadjacent-selector-example.png" alt="adjacent selector example" class="wp-image-32308" srcset="http://testgatsby.localadjacent-selector-example.png 570w, http://testgatsby.localadjacent-selector-example-300x156.png 300w" sizes="(max-width: 570px) 100vw, 570px" /> </figure> 

As a result the last p element is not selected by **p + p** selector this time which makes sense.

As an example you can see a pen I created using all these CSS selectors here:

<p data-height="500" data-theme-id="0" data-slug-hash="ZqERyP" data-default-tab="html,result" data-user="azad6026" data-pen-title="ZqERyP" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/ZqERyP/">ZqERyP</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Thank you for reading.
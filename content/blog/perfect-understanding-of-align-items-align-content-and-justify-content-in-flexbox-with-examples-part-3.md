---
id: 32563
title: 'Perfect understanding of align-items, align-content and justify-content in FlexBox with examples: Part 3'
date: 2018-11-18T20:30:06+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32563
permalink: /perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-3/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/11/align-content.png
categories:
  - CSS
  - CSS3
tags:
  - align-content
  - flexbox
---
In the [part1](http://www.nikpro.com.au/perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-1/) and [part2](http://www.nikpro.com.au/perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-2/) of these article series we learnt about align-items and justify-content properties. In this part we will finish off with **align-content** property which is a useful one when we have flex items with more than one line of items.

## The align-content property

We can get advantage of this property only when we have more wrapped items inside or flex container. It aligns items in the cross axis using the same values as [justify-content](http://www.nikpro.com.au/perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-2/) property.

#### In a row flex direction

<p data-height="900" data-theme-id="0" data-slug-hash="BGpLgv" data-default-tab="html,result" data-user="azad6026" data-pen-title="FlexBox align-content in row" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/BGpLgv/"></a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

As e can clearly see **align-content does what align-items** does as for functionality. They both do alignment in c**ross axis**. But the difference is align-items applies the value to the items individually and align-content applies it to them as a flex content. Meaning **it aligns the whole content** as per the value.<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/11/FlexBox-align-content-in-row1.png" alt="" class="wp-image-32565" srcset="http://testgatsby.local/wp-content/uploads/2018/11/FlexBox-align-content-in-row1.png 656w, http://testgatsby.local/wp-content/uploads/2018/11/FlexBox-align-content-in-row1-300x235.png 300w" sizes="(max-width: 656px) 100vw, 656px" /> </figure> <figure class="wp-block-image"><img src="http://www.nikpro.com.au/wp-content/uploads/2018/11/FlexBox-align-content-in-row2.png" alt="" class="wp-image-32566" srcset="http://testgatsby.local/wp-content/uploads/2018/11/FlexBox-align-content-in-row2.png 656w, http://testgatsby.local/wp-content/uploads/2018/11/FlexBox-align-content-in-row2-300x114.png 300w" sizes="(max-width: 656px) 100vw, 656px" /><figcaption>align-content property values in a row flex direction</figcaption></figure> 

It is also similar to justify-content as per the values. They bot have exact values. And the difference is the axis that they align the flex container items in. **_Main axis for justify-content and cross axis for align-content._**

#### In a column flex direction

Just like the other two properties it works in both flex direction. In a column flex container the cross axis is horizontal. Which is the direction this property aligns the flex content alongside it:

<p data-height="900" data-theme-id="0" data-slug-hash="jQLgyM" data-default-tab="html,result" data-user="azad6026" data-pen-title="FlexBox align-content in column flex direction" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/jQLgyM/"></a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

All the same as in a row flex direction but in a different axis:<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/11/FlexBox-align-content-in-column-flex1.png" alt="" class="wp-image-32567" srcset="http://testgatsby.local/wp-content/uploads/2018/11/FlexBox-align-content-in-column-flex1.png 656w, http://testgatsby.local/wp-content/uploads/2018/11/FlexBox-align-content-in-column-flex1-300x231.png 300w" sizes="(max-width: 656px) 100vw, 656px" /> </figure> <figure class="wp-block-image"><img src="http://www.nikpro.com.au/wp-content/uploads/2018/11/FlexBox-align-content-in-column-flex2.png" alt="" class="wp-image-32568" srcset="http://testgatsby.local/wp-content/uploads/2018/11/FlexBox-align-content-in-column-flex2.png 656w, http://testgatsby.local/wp-content/uploads/2018/11/FlexBox-align-content-in-column-flex2-300x115.png 300w" sizes="(max-width: 656px) 100vw, 656px" /><figcaption>align-content in column flex direction</figcaption></figure> 

Clearly this is perfect for wen we have a few lines of flex items and need to perfectly align them with various options that we get.

In these series we learnt about [align-items](http://www.nikpro.com.au/perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-1/) , [justify-content](http://www.nikpro.com.au/perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-2/) and align-content properties which if ew use FlexBox we will most likely need to use them. Therefore we should solemnly understand them. Hope these articles help in that case.

Thank you for reading.
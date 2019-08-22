---
id: 32538
title: 'Perfect understanding of align-items, align-content and justify-content in FlexBox with examples: Part 1'
date: 2018-11-17T20:55:44+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32538
permalink: /perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-1/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/11/alignment.png
categories:
  - CSS
  - CSS3
tags:
  - align-items
  - flexbox
---
In this article we will be exploring&nbsp;align-content, align-items and justify-content properties in [FlexBox](http://www.nikpro.com.au/a-quick-review-of-how-to-centre-elements-or-blocks-using-flexbox-in-css/). Then we compare them and will understand their differences and similarities. I have created a few pens to demonstrate the task as well.&nbsp;

## align-content, align-items and justify-content similarities

Generally the main purpose of these three properties in FlexBox is justify and alignment of the flex container content. Both horizontally and vertically. Therefore it might be confusing which one should we use for which use case.

### Similar points:

We start with similarities of the three properties:

  * They are **_all apply to the flex container itself not the flex items._**
  * Both **align-content and align-items** are used for alignment in _**cross axis**_
  * Both justify-content and align-content have same values but in different use cases.
  * Also&nbsp;**align-items ( in cross axis)** and **justify-content ( in&nbsp;main axis)**&nbsp; adjust and align the individual items in those axises.
  * They all help to **distribute the remaining space** in the container in between items.

### Difference points

  * The align-items property aligns individual items not the whole container inside it wile the other two align all items like a pack inside container.
  * The **align-content** works only when there are a few lines of flex items wrapping. As it aligns the container&#8217;s lines in the cross axis. The other two work in one line of items as well.

### Very important Note about main axis and cross axis

Technically main-axis means the flex-direction ( and not horizontal axis). So if you have a flex container with **flex-direction : column;**&nbsp;your main axis is vertical and your cross axis is horizontal.&nbsp; We will demonstrate it with examples.

## &nbsp;The align-items property

In the example below we have 5 Flex containers with each showing the individual property values. 

#### align-items in flex-direction: row( the default)

This is the default flex container with **flex-direction: row which is the default.** So **main-axis is horizontal axis and cross axis is vertical axis**:

<p data-height="800" data-theme-id="0" data-slug-hash="WYRGML" data-default-tab="html,result" data-user="azad6026" data-pen-title="FlexBox align-items" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/WYRGML/">FlexBox align-items</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

The syntax for align-items is:

<pre class="wp-block-preformatted"><strong>.container {  align-items: flex-start | flex-end | center | baseline | stretch;}</strong></pre>

Therefore it has five different values. We use this property to **_align flex items in the cross axis_** meaning vertical from top to bottom.&nbsp;

The **default** value is **stretch**. Meaning the items will cover all the possible available area from top to bottom.&nbsp;

The **center** value perfectly centres the items in the middle of the container along the vertical or **cross** axis.<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/11/center-stretch-alignment.png" alt="align-items center and stretch values" class="wp-image-32544" srcset="http://testgatsby.local/wp-content/uploads/2018/11/center-stretch-alignment.png 429w, http://testgatsby.local/wp-content/uploads/2018/11/center-stretch-alignment-300x204.png 300w" sizes="(max-width: 429px) 100vw, 429px" /> </figure> 

Also the&nbsp;**flex-start**&nbsp; **starts** the alignment of the items on the **top&nbsp;**and **flex-end** starts them in the **bottom** as you see in above pen.

Also the interesting **baseline** value aligns the baseline of the items&#8217; content no matter what the content is. See how item 3 has smaller font or item 4 has two lines of text but all perfectly aligned by their baseline or their content line.&nbsp;<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/11/base-stat-ens.png" alt="base-start-end values" class="wp-image-32543" srcset="http://testgatsby.local/wp-content/uploads/2018/11/base-stat-ens.png 429w, http://testgatsby.local/wp-content/uploads/2018/11/base-stat-ens-150x150.png 150w, http://testgatsby.local/wp-content/uploads/2018/11/base-stat-ens-300x300.png 300w" sizes="(max-width: 429px) 100vw, 429px" /> <figcaption>  
align-items baseline and flex-start and flex-end values</figcaption></figure> 

It is essential to understand that align-items property aligns items based on the remaining space on the cross axis. If the container does not have extra vertical space we will not see the values effect.&nbsp;

#### align-items in flex-direction: column

If we change the flex-direction to column, we will see the same effect in different axis though:

<p data-height="600" data-theme-id="0" data-slug-hash="wQqrwd" data-default-tab="html,result" data-user="azad6026" data-pen-title="FlexBox align-items in column direction" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/wQqrwd/">FlexBox align-items in column direction</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

We see that center value centres items in the vertical horizontal axis this time which is the cross axis. Also stretch which is the default stretches all items in the cross axis ( horizontal). Remember that by changing the flex-direction the main axis and cross axis will change. And so the align-items property values effects:<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/11/align-items-column-direction.png" alt="" class="wp-image-32545" srcset="http://testgatsby.local/wp-content/uploads/2018/11/align-items-column-direction.png 537w, http://testgatsby.local/wp-content/uploads/2018/11/align-items-column-direction-300x283.png 300w" sizes="(max-width: 537px) 100vw, 537px" /> <figcaption>align-items property in flex column direction</figcaption></figure> 

Also **baseline** value aligns all baseline (starting) of text in all boxes at the very **same point from the left which is the cross axis( horizontal)**. Flex-start and flex-end align items in the **start or end** of the container as expected in the **cross axis**.

In the [next article](http://www.nikpro.com.au/perfect-understanding-of-align-items-align-content-and-justify-content-in-flexbox-with-examples-part-1/) we will learn about justify-content property and align-content property now that we know all about align-items property.

Thank you for reading.
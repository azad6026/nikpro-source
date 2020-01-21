---
id: 35000
title: CSS logical properties explained - Part 1 (definition)
date: 2020-01-21T22:36:27+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=35000
permalink: /css-logical-properties-explained-part-1-definition/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/css3-shadows.jpg
categories:
  - CSS
tags:
  - block
  - inline
  - logical properties
---
# CSS logical properties

With CSS evolving every year and having new ways of layout design, knowing new properties that help on that is essential. We will explain the new **CSS logical properties** which are an evolution in layout systems just like FlexBox and Grid. I will explain it in a different point of view from what you might have seen before.

## CSS logical properties definition

We are all used to **physical naming** of the CSS properties. Meaning these properties are defining how and where that property is used. (Margin-top, border-bottom, width, height,…).

But these properties could only be meaningful if the **language flow (writing mode) ** is from left to right and the website direction is from top to bottom. Interesting hah! We are only used to English on the web. But web has evolved and we need more control over the content and the language.

## CSS block , inline , start and end properties

Block and Inline. These are the properties replacing the **direction and flow** definition in properties. 

### Block represents direction of the website

Logically if the website is scrolling from top to bottom, block is vertical and if the website is scrolling from right to left, block is horizontal. Also start and end properties will specify the endpoints on each direction.

Therefore here is the difference for margin properties in each case:

In vertical sites :

```
// Old way
margin-top: 1rem;

// New way
margin-block-start: 1rem; 
```

In horizontal sites:

```
// Old way
margin-right: 1rem;

// New way
margin-block-start: 1rem; 
```

Amazing. The block property shows the direction of the site. The margin-block-start  property is the margin-top in vertical direction because the site direction is from the top. And it is equal to margin-right in a horizontal site because the site (elements blocks of the site) flow from right to left. Make sure you understand the **direction of the site**. 

### Inline represents the writing mode or text flow of the site

In each direction the text has a flow (This can be define with writing-mode property). English flows from **left to right** like most languages. But Farsi and Arabic and some other languages flow from **right to left**. Also Japanese and some languages flow from **top to bottom**.

We define **left and right** using **inline and start/end** properties. Inline-start means left in English flow and means right in Farsi/ Arabic. Furthermore It means top in Japanese flow.

```
// English:

 margin-inline-start = margin-left

// Farsi/Arabic 

margin-inline-start = margin-right

// Japanese

 margin-inline-start = margin-top
 ```

## Width and height Properties

Similar for width and height, we will consider the direction to define them. In left to right and right to left languages width is from left to right. Therefore we use size property combining with inline and block properties:

```
// English/Farsi/Arabic
 width = inline-size 
 height = block-size
```

And  in a top to bottom language such as Japanese, we see the opposite:

```
// Japanese
inline-size = height
block-size = width
```

Please check out this CodePen from <a href="https://medium.com/@elad" target="_blank"> Elad Shechter</a> and change the language to see some of the properties in action:

https://codepen.io/elad2412/pen/oQJmYQ
 

In the next article, I will demonstrate some real examples of how e use these properties in different layouts. 

Thank you for reading.

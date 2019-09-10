---
id: 32241
title: CSS display:contents basic introduction
date: 2018-09-18T21:34:18+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32241
permalink: /css-displaycontents-basic-introduction/
xyz_twap:
  - "1"
image: displaycontents.png
categories:
  - CSS
  - CSS3
tags:
  - 'display: contents'
---
In this article we will have a look at a basic introduction of display:contents in CSS. We need to learn about this useful property with some examples.

## What is display:contents?

We take a look at how Manuel Rego [takes a stab at explaining it](https://blogs.igalia.com/mrego/2018/01/11/display-contents-is-coming/) :

<blockquote class="wp-block-quote is-style-default">
  <p>
    <code>display:contents</code> makes that the div doesn’t generate any box, so its <strong>background, border and padding</strong> are not rendered. However the inherited properties like colour and font have effect on the child (span element) as expected.
  </p>
</blockquote>

Generally display: contents makes the container that we apply this property, to get disappeared.

#### **display:contents as an example**

Firstly we will take a look at this example from <a href="https://rachelandrew.co.uk/archives/2016/01/29/vanishing-boxes-with-display-contents/" target="_blank" rel="noopener noreferrer">Rachel Andrew</a>. We will see how giving this property to the outer element makes all box styling disappear:

<p data-height="350" data-theme-id="0" data-slug-hash="rxvMWG" data-default-tab="html,result" data-user="rachelandrew" data-pen-title="display: contents" class="codepen">
  See the Pen <a href="https://codepen.io/rachelandrew/pen/rxvMWG/">display: contents</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

As a result we loose all the box style such as border and background and padding and so on in the outer box. So display: contents is good if we need an element for the sake of semantic HTML but not as a styled element.

#### Here is another example [with FlexBox](http://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-1/)

Practically we could use display:contents to change the HTML to make our own layouts. In this example from <a href="https://rachelandrew.co.uk/archives/2016/01/29/vanishing-boxes-with-display-contents/" target="_blank" rel="noreferrer noopener">Rachel Andrew</a> we have the inner two boxes wrapped in a container. Using display: contents we remove the box and make those two inner boxes child of Flexbox container:

<p data-height="350" data-theme-id="0" data-slug-hash="zraOMV" data-default-tab="css,result" data-user="rachelandrew" data-pen-title="display: contents and flexbox" class="codepen">
  See the Pen <a href="https://codepen.io/rachelandrew/pen/zraOMV/">display: contents and flexbox</a> by rachelandrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

### Accessibility issue

However we better know that browsers will remove any element with a `display`:`contents` set on it from the [accessibility tree](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs). Therefor this will cause the element and all its descendant elements to no longer be announced by screen reading technology.

Although display:contents still doesn&#8217;t have full support in browsers but we better start learning and trying it. Another discussion is to use it for subgrids. I will leave that for another post as it is a complete subject by itself. Thanks for reading.
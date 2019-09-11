---
id: 31514
title: Different ways to hide an element in css
date: 2018-08-08T22:11:21+00:00
author: admin
excerpt: |
  <p>There are different ways to hide an element in css. We will cover them here.</p>
  <h2>Hide With Opacity</h2>
  <p>Although with setting opacity to zero, it seems that the element is hidden but it is actually still an intractable element and occupies its place in the page.<!--more--></p>
layout: post
guid: http://www.nikpro.com.au/?p=31514
permalink: /different-ways-to-hide-an-element-in-css/
image: ../../static/images/css-tips.jpg
categories:
  - CSS
  - CSS3
tags:
  - hide an element in css
---

This is a repost of some useful and different techniques to hide an element in css.

## Hide an element With Opacity

Although with setting opacity to zero, it seems that the element is hidden but it is actually still an intractable element and occupies its place in the page.

- It is in the DOM and if you add some hover over to it for example, it works jus like other elements.
- Besides, it is visible in screen readers and will be read.
- Opacity meant to be used for the transparency of the element not its visibility.

Try this demo and hover over the hidden box in the middle:

## Hide With Position

Another way to hide an element is to position it far away from the viewport so that is is not visible unless you zoom enormously.

- It still can be read by screen readers which is good in terms of accessibility but not good as it meant to be hidden ( place it far left then!)
- It is still intractable.
- It shouldn&#8217;t receive focus property as it makes an unexpected jump action when user focuses on it.
- It is used usually to create checkboxes and radio buttons.

See this demo.If you click on box 1 or 3, box 2 which is hidden by position element appears in its place in the middle.

## Hide With Clip-Path

You can hide elements by clipping them.

Support for clip-path in SVG is supported in all browsers with [basic SVG](https://caniuse.com/#feat=svg) support.

In this demo, if you hover over box 1 or 3 , it changes the visibility of box 2 using clip-path property change.

- Element is in the DOM and can be manipulated and interacted.
- Hover or click are not possible outside the clipped region.
- This property is able to be animated in different ways as well.

## Hide With Visibility

With Visiblity property set to hidden, although the element is still in the DOM, but cannot be interacted with.

- It is hidden from the screen readers and occupies its space.
- It can receive animation though if  initial and final status have different values.
- The children of hidden element could receive events if they have direct visibility set to visible value.

In this demo, if you hover over the middle hidden element, it becomes visible. Also the element&#8217;s child is visible itself. If you hover over the box itself, cursor will not become pointer but if you hover over the green box which is its visible child, cursor changes again as events are available for it and the box become visible.

## Hide With Display

Here is the perfect solution for the job. Through display property set to none, you will have the element hidden in the best possible way:

- The box model for this element will not be generated at all as though it does not exist and does not occupy space.
- The element cannot be interacted with and also its children elements.
- Screen readers cannot read it since it does not exist.
- But is is still available to be manipulated through the DOM.

Here is a demo you can check it out:

### Conclusion

We talked about different ways of hiding an element in CSS. Although they all help in various ways but we need to make sure how we want to interact and manipulate element and choose wisely as it can affect the entire layout or DOM via the element. As said above, Display property is the best solution to hide an element entirely and also keep it still intractable through DOM.

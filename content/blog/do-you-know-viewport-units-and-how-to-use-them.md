---
id: 32143
title: Do you know viewport units and how to use them
date: 2018-09-06T21:18:12+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32143
permalink: /do-you-know-viewport-units-and-how-to-use-them/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/viewport-units-screens.jpg
categories:
  - CSS
  - CSS3
tags:
  - viewport units
---

Have you used viewport units of [CSS3](https://nikpro.com.au/category/css3) level and do you actually know them. We will have a look at them in this article with some examples.

## Viewport units definition

This new set of units consists of four different units. Two for each axis (meaning width and height), and a minimum and maximum value of the two.

- **`vw`**: 1/100th viewport width
- **`vh`**: 1/100th viewport height
- **`vmin`**: 1/100th of the smallest side
- **`vmax`**: 1/100th of the largest side

Basically viewport units are like percentages. But the difference is that percentage is related to the element container and is based n that. However viewport units are related to the browser window of the device. Lets see some use cases.


<img src="https://www.nikpro.com.auviewport-units.png" alt="" class="wp-image-32145" srcset="https://testgatsby.localviewport-units.png 522w, https://testgatsby.localviewport-units-300x238.png 300w" sizes="(max-width: 522px) 100vw, 522px" /> <figcaption>100vh for height and 100vw for width </figcaption>


## Using the units in typography

Generally it is common to use them for font sizes. Then the font size will update itself based on the browser size. But as you can see in the below image it will change dramatically fast we need to use a better approach:


<img src="https://www.nikpro.com.aupure-responsive_nvzwrs-1.gif" alt="" class="wp-image-32146" /> <figcaption>image from <a href="https://css-tricks.com/fun-viewport-units/" target="_blank" rel="noopener noreferrer">CSS-tricks</a></figcaption>


Moreover we need to use calc() function to have more control over the font size growth:

```
h1 {
  font-size: calc(20px + 1.5vw);
}
```

Therefor this line means the h1 tag will have a font-size of 20 pixels plus 1.5% of the viewport width. So in the width of 1000px we will have a font size of 20px + 15px;

## Usage in grid system

Obviously we could of course use them an any use cases. We could create our grid system based on them:

```
.grid {}

.grid::before,
.grid::after {
  clear: both;
  content: '';
  display: block;
}

.grid__item {
  box-sizing: border-box;
  float: left;
  height: 50vw;
  padding: 2em;
  width: 50vw;
}
```

Interestingly the important thing here is at some point items will overflow on each other. **_“When the value of ‘overflow’ on the root element is ‘auto’, any scroll bars are assumed not to exist._.” \_\_** from W3G

This is the pen for this example:

https://codepen.io/timseverien/pen/uhzgo

#### Easy sticky footers

Thankfully we could create easy sticky footers. Change your body `height: 100vh` to `min-height: 100vh` and the footer will stay in place at the bottom of your screen until it&#8217;s pushed down by content.

As a matter of fact there are lots of other use cases that you can play around with these units and see if you understand them. There is a full article on <a href="https://css-tricks.com/fun-viewport-units/" target="_blank" rel="noopener noreferrer">CSS-tricks</a> to be checked as well. Thanks for reading.

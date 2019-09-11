---
id: 32122
title: Another look at CSS variables features with some examples
date: 2018-09-01T21:08:49+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32122
permalink: /another-look-at-css-variables-features-with-some-examples/
image: ../../static/images/css-variables-features.jpg
categories:
  - CSS
  - CSS3
tags:
  - css variables features.jpg
---
We will take another look at CSS variables features with some examples in this article. Previously in [this link](http://www.nikpro.com.au/how-to-update-css-variables-using-javascript-with-examples/) we learnt about them in a practical example. Here we see more code in details.

## CSS variables scope

Generally one of the CSS variables features is their scope. In another word their definition in the CSS code. As an example this is a global variable as it is in root:

```:root {
	--main-color: green;
}```

If we want our variable to only be visible for a specific class, we can just define it in its local scope:

```.title {
	--title-color: blue;
	color: var(--title-color);
}```

Therefor **&#8211;title-color** is being used only in the **title** class and its related tags. Also we could change the code to the below:

```.title {
  --main-color: aqua;
  color: var(--main-color);
}```

Basically we change the **&#8211;main-color** here and using the root colour and change it. This is the dynamic aspect of CSS variable features.

## CSS variables Calc() 

Practically `calc()` was mostly used for calculating widths and heights of responsive elements. If we want a container width to become 100px shorter than 100% this is how to do it:

```.container {
  width: calc(100% - 100px);
}```

We could also use `calc()` for unitless CSS variables like below:

```:root {
	--duration: 2000;
}

div {
  animation-duration: calc(var(--duration) * 1ms);
}```

Simply this combines the duration and the provided unit. Although when using `calc()` in combination with unitless as one of the CSS Variables features , performance can become a problem. Setting it directly is much faster.

## CSS variables features in Javascript

Thankfully we could also update CSS variables in Javascript just like a normal style. In normal style this is what we do:

```element.style.setProperty(’color’, ’red’);<br /></pre>

Additionally we could do the same for CSS variables:

```element.style.setProperty(’--color’, ’red’); </pre>

Or even update them in an inline Javascript code:

```element.style = "--color: red";```

While working with CSS variables be aware in which scope our variable is defined. And if needed to change it, it will affect many children and thus create large amounts of style recalculation. Thanks for reading.
---
id: 31935
title: "Some useful HTML attribute and elements ;meter keyboard contenteditable &#8230;"
date: 2018-07-29T21:46:23+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31935
permalink: /some-useful-html-attribute-and-elements-meter-keyboard-contenteditable/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/html-elements.jpeg
categories:
  - HTML
  - HTML5
tags:
  - contenteditable
  - keyboard
  - mark
  - meter
  - q element
---

Some useful HTML element and attribute like <a href="https://www.nikpro.com.au/html5-semantic-tags-and-where-to-use-them/" target="_blank" rel="noopener noreferrer">meter</a> are covered in this post. Writing HTML markup everyday might become very ordinary and repeatable that we might not explore and learn more about useful available elements and attributes that we might want to use at some point. Lets check some of them. This is the pen I created for demonstration.

https://codepen.io/azad6026/pen/ajVKqa

### Meter element

This HTML element show two kind of values. A fractional vales or a scalar value within a range. You will specify the range by min and max attributes:

`<p>Heat the oven to <meter min="200" max="500"`  
`value="350">350 degrees</meter>.</p>`

You could also specify a low and a high value for the meter element. The low value must be greater than min and the high value must  be less the max value:

`<label for="pressure">Pressure (low value is good)</label>`  
` <meter id="pressure" name="pressure" min="0" max="100"``low="25" high="75" optimum="20" value="50"> `  
`is OK`  
`</meter>`

### The q element

A HTML element to show a short inline quotation.For long quotation use the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" target="_blank" rel="noopener noreferrer">blockquote</a> element;

`<p>In <cite>2001: A Space Odyssey</cite>, Dave asks HAL to open the pod bay door and HAL answers: <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q></p>`

You can add a url to the q element using cite attribute as well. This is another example:

`<p>According to Mozilla's website,`  
` <q ``cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0``was released in 2004 and became a big success.</q></p> `

### Keyboard element

<span class="seoSummary">The kbd element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device </span>using its default monospace font.

`<p>Please press <kbd>shift</kbd> + <kbd>Cmd</kbd> + <kbd>r</kbd> to refresh a page in mac.</p>`

To describe an input comprised of multiple keystrokes we can nest kbd elements as well:

`<p>You can also create a new document using the keyboard shortcut`  
`<kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd>.</p>`

### Mark element

It represents text which is marked or highlighted for reference or notation purposes.It could also highlight search terms in the contnet like below:

`<p>It is a dark time for the Rebellion. Although the Death`  
`Star has been destroyed, <mark class="match">Imperial</mark>`  
`troops have driven the Rebel forces from their hidden base and`  
`pursued them across the galaxy.</p>`

`<p>Evading the dreaded <mark class="match">Imperial</mark>`  
`Starfleet, a group of freedom fighters led by Luke Skywalker`  
`has established a new secret base on the remote ice world of`  
`Hoth.</p>`

Don&#8217;t use mark for syntax highlighting purposes; instead, use the **span **element with appropriate CSS applied to it.

### contenteditable attribute

The contenteditable attribute specifies whether the content of an element is editable or not. When the contenteditable attribute is not set on an element, the element will inherit it from its parent. It must take one of the following values:

- true or the *empty string*, which indicates that the element must be editable;
- false, which indicates that the element must not be editable.

`<p contenteditable="true">This is an editable paragraph.</p>`

`<p class="editable" contenteditable='true'>Start writing here...</p>`

You can use the HTMLElement.isContentEditable property to test the computed Boolean value of this property.

We saw a few very useful HTM elements and attributes here. To write a fully semantic and readable markup it is good to know about them and use them as we see fit. Here is the pen again for you to play around with. Thanks for reading.

https://codepen.io/azad6026/pen/ajVKqa

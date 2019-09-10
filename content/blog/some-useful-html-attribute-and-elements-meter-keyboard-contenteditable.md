---
id: 31935
title: 'Some useful HTML attribute and elements ;meter keyboard contenteditable &#8230;'
date: 2018-07-29T21:46:23+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31935
permalink: /some-useful-html-attribute-and-elements-meter-keyboard-contenteditable/
image: /images/html-elements.jpeg
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
Some useful HTML element and attribute like <a href="http://www.nikpro.com.au/html5-semantic-tags-and-where-to-use-them/" target="_blank" rel="noopener noreferrer">meter</a> are covered in this post. Writing HTML markup everyday might become very ordinary and repeatable that we might not explore and learn more about useful available elements and attributes that we might want to use at some point. Lets check some of them. This is the pen I created for demonstration.

<p class="codepen" data-height="500" data-theme-id="0" data-slug-hash="ajVKqa" data-default-tab="html,result" data-user="azad6026" data-pen-title="Some HTML elements and attributes">
  See the Pen <a href="https://codepen.io/azad6026/pen/ajVKqa/">Some HTML elements and attributes</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



### Meter element

This HTML element show two kind of values. A fractional vales or a scalar value within a range. You will specify the range by min and max attributes:

`<strong><p>Heat the oven to <meter min="200" max="500"</strong>`  
`<strong>value="350">350 degrees</meter>.</p></strong>`

You could also specify a low and a high value for the meter element. The low value must be greater than min and the high value must  be less the max value:

`<strong><label for="pressure">Pressure (low value is good)</label></strong>`  
`<strong><meter id="pressure" name="pressure" min="0" max="100"</strong>``<strong>low="25" high="75" optimum="20" value="50"></strong>`  
`<strong>is OK</strong>`  
`<strong></meter></strong>`

### The q element

A HTML element to show a short inline quotation.For long quotation use the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" target="_blank" rel="noopener noreferrer">blockquote</a> element;

`<strong><p>In <cite>2001: A Space Odyssey</cite>, Dave asks HAL to open the pod bay door and HAL answers: <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q></p></strong>`

You can add a url to the q element using cite attribute as well. This is another example:

`<strong><p>According to Mozilla's website,</strong>`  
`<strong><q </strong>``<strong>cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0</strong>``<strong>was released in 2004 and became a big success.</q></p></strong>`

### Keyboard element

<span class="seoSummary">The kbd element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device </span>using its default monospace font.

`<strong><p>Please press <kbd>shift</kbd> + <kbd>Cmd</kbd> + <kbd>r</kbd> to refresh a page in mac.</p></strong>`

To describe an input comprised of multiple keystrokes we can nest kbd elements as well:

`<strong><p>You can also create a new document using the keyboard shortcut</strong>`  
`<strong><kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd>.</p></strong>`

### Mark element

It represents text which is marked or highlighted for reference or notation purposes.It could also highlight search terms in the contnet like below:

`<strong><p>It is a dark time for the Rebellion. Although the Death</strong>`  
`<strong>Star has been destroyed, <mark class="match">Imperial</mark></strong>`  
`<strong>troops have driven the Rebel forces from their hidden base and</strong>`  
`<strong>pursued them across the galaxy.</p></strong>`

`<strong><p>Evading the dreaded <mark class="match">Imperial</mark></strong>`  
`<strong>Starfleet, a group of freedom fighters led by Luke Skywalker</strong>`  
`<strong>has established a new secret base on the remote ice world of</strong>`  
`<strong>Hoth.</p></strong>`

Don&#8217;t use mark for syntax highlighting purposes; instead, use the **span **element with appropriate CSS applied to it.

### contenteditable attribute

The contenteditable attribute specifies whether the content of an element is editable or not. When the contenteditable attribute is not set on an element, the element will inherit it from its parent. It must take one of the following values:

  * true or the _empty string_, which indicates that the element must be editable;
  * false, which indicates that the element must not be editable.

`<strong><p contenteditable="true">This is an editable paragraph.</p></strong>`

`<strong><p class="editable" contenteditable='true'>Start writing here...</p></strong>`

You can use the HTMLElement.isContentEditable property to test the computed Boolean value of this property. 

We saw a few very useful HTM elements and attributes here. To write a fully semantic and readable markup it is good to know about them and use them as we see fit. Here is the pen again for you to play around with. Thanks for reading.

<p class="codepen" data-height="600" data-theme-id="0" data-slug-hash="ajVKqa" data-default-tab="html,result" data-user="azad6026" data-pen-title="Some HTML elements and attributes">
  See the Pen <a href="https://codepen.io/azad6026/pen/ajVKqa/">Some HTML elements and attributes</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>
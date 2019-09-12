---
id: 31784
title: HTML5 Best Practices and what to avoid
date: 2018-07-04T21:37:12+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31784
permalink: /html5-best-practices-and-what-to-avoid/
# image: ../../static/images/html5-best-practices.png
categories:
  - HTML5
  - Web Development
tags:
  - best practices
  - tags
---
As we mentioned in a post about [HTNL5 new tags](http://www.nikpro.com.au/html5-semantic-tags-and-where-to-use-them/) and where to use them, we want to talk about HTML5 best practices and what bad practices to avoid . It is essential to have a well structured markup that could be read and maintain easily.

### Doctype 

First things first. Doctype should be your first line in you HTML code and its HTML5 is the recommended one:

`<!DOCTYPE html>`

### Closing tags 

All tags should have a closing tag unless they are self closing tags. Self closing tags are:

`<br>, <hr>, <img>, <input>, <link>, <meta><area>, <base>, <col>, <command>, <embed>, <keygen>, <param>, <source>, <track>, <wbr> `  

### Optional tags  

Know them? HTML and body and head are actually optional. Yes that is right. They are considered as present even if you oit them.

### The &#8220;lang&#8221; attribute

Although earlier we said HTML is an optional tag but for internationalisation purposes it is best practice to have the &#8220;lang&#8221; attribute in the markup.

### Avoid XML declarations unless

Unless you right a XML document.You don&#8217;t need this declaration before Doctype:

**<?xml version=&#8221;1.0&#8243; encoding=&#8221;UTF-8&#8243; standalone=&#8221;yes&#8221;?>**

### The &#8220;base&#8221; tag

It is a ver useful tag but remember it makes all links relative to the href it specifies:

`<base href="http://www.example.com/" />`

unless you specify the link explicitly.

For example, an internal link `href="#internal" `will be interpreted as `href="http://www.example.com/#internal"`

Also, linking an external webpage like`href="example.org" `will be interpreted as `href="http://www.example.com/example.org"`

It is safer to always use absolute paths for your links.

### Title tag

For accessibility you should always declare this tag in the page.

### Character encoding

Always declare `<meta charset='utf-8'>` to ensure the page will be viewed correctly.

### Description meta tag

It is best practice to use it as search engines and crawlers pull that out as page description when they crawl the page:

 `<meta name="description">`

### Do not use deprecated tags

**`<big>`, `<center>`, `<strike>`, `<blink>`**

These tags are deprecated. Never use them. Also avoid using stylistic tags  like<hgroup> and <i> and <em>. Instead use CSS as it is best practice.

### No <br> tag to format the layout

The <br> tag is not for layout formatting and you should use CSS margin and padding to add spaces. You better use <br> inside an element to addd line breaks:

`<label>Please use the following text area:<br><br />
`

`  <textarea name="loremipsum"></textarea><br />
`

`</label>`

### Type Attribute

The type attribute is not necessary for link and script tags. All browsers expect a link tag for a stylesheet and a script tag as a Javascript tag. So always do this:

`<link rel="stylesheet" href="style.css" /><br />
`

`<script src="script.js"></script>`

### The alt attribute

Always use alt attribute for your images as an alternative when the image couldn&#8217;t get loaded.

### The title attribute

Do not use title attribute for images. It is best practice not to as it is a tooltip that is shown with the image and in lacks in compatibility with touch only browsers in phones and tablets. Use &#8220;alt&#8221; attribute to describe the image.

### The <pre> and <code> tags

The <code> tag does not preserve any newline or white spaces but <pre> tag does. So use <pre>tag alone to avoid this.

### Comments

Use comments on closing tags especially divs to increase the readability of your code:

**`<div class="myclass">`**  
**`<div class="nextclass">`**  
**`...`**  
**`</div><!-- .nextclass" -->`**  
**`</div><!-- .myclass -->`**

We will talk about General coding best practices later on. Also will explain about CSS best practices in a seperate article. Hope this HTML guideline was helpful.
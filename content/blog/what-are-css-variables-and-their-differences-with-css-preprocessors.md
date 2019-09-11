---
id: 31699
title: What are CSS variables and their differences with CSS Preprocessors
date: 2018-06-22T22:30:11+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31699
permalink: /what-are-css-variables-and-their-differences-with-css-preprocessors/
image: ../../static/images/cssvariables.jpg
categories:
  - CSS
tags:
  - css variables
---
In this post we learn about CSS variables and their differences with CSS Preprocessors.  As we know the variables have been introduces some time ago and they solve the very problem of using variables in CSS for reusable properties. Lets have a look at this example:

* * *

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="xzjydB" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="css varialbles example 1">
  (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



You simply define the variable in root and use it wherever you want to. It is pure CSS. It does not need to be complied as in CSS Preprocessors like SASS or LESS or Styles , etc. Lets see the equivalent code in SCSS:

* * *

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="oydayg" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="CSS Variables vs SASS example 2">
  See the Pen <a href="https://codepen.io/azad6026/pen/oydayg/">CSS Variables vs SASS example 2</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



This SCSS code has the exact similar result as the previous example.

We will have a look at another example that shows cascading of variables in CSS variables which demonstrates their cascading ability throughout the code.

* * *

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="yEjRdQ" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="CSS variables casscade">
  See the Pen <a href="https://codepen.io/azad6026/pen/yEjRdQ/">CSS variables casscade</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



The body H2 will have orange colour which means the children could have different colours using CSS variables.

You could also manipulate them through Javascript. Also CSS variables are available through DOM so you can change them according to media query changes. It means you can change a property value based on your device width. 

Lets see the differences in terms of tech sight.

## Why use CSS Variables 

  * They are **native CSS** and browsers understand them but Preprocessors need to be compiled before serving to browser

  * They **cascade**. You could set up a new variable inside any selector to override its current value 

  * They have **access to DOM** so they an be manipulated through **JavaScript**

  * Their values could be changed with **media queries and browsers respond accordingly**

## Why use Preprocessors

The browser support. With them you don&#8217;t need to worry about it as they will be compiled to pure CSS. 

## Should we us CSS variables

<a href="http://www.nikpro.com.au/css-grid-layouts-and-css-new-variables-should-we-get-started/" target="_blank" rel="noopener noreferrer">Absolutely</a>. They are ready to be used. There are lots of other things that you need to read <a href="https://csswizardry.com/2016/10/pragmatic-practical-progressive-theming-with-custom-properties/" target="_blank" rel="noopener noreferrer">here</a> and <a href="http://kizu.ru/en/fun/conditions-for-css-variables/" target="_blank" rel="noopener noreferrer">here</a> to learn more about CSS variable. Browser support. In desktop only internet explorer does not support it. IE phone and opera mobile do not support it in mobiles. So good support so far.

Read up about CSS variables in this <a href="https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855" target="_blank" rel="noopener noreferrer">article</a> an watch the videos at the end of this css tricks <a href="https://css-tricks.com/difference-between-types-of-css-variables/" target="_blank" rel="noopener noreferrer">article</a>.

&nbsp;

&nbsp;
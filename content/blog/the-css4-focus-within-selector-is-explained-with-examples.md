---
id: 31945
title: The CSS4 :focus-within selector is explained with examples
date: 2018-07-31T19:50:15+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31945
permalink: /the-css4-focus-within-selector-is-explained-with-examples/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/focus-within.png
categories:
  - Content Writing
  - CSS4
tags:
  - css4
  - focus
  - focus-within
---
The CSS4 :focus-within selector is an exciting CSS level 4 selector. It is a pseudo class ( like [nth-child](http://www.nikpro.com.au/the-css-nth-child-selector-explained-with-examples/)) that represents an element that receives focus or it has a child element that receives focus. It actually asks the browser to apply a style to a parent when any of its children are in focus. 

Also it could be used in dropdown menus when we do not want to lose focus or in tables or in forms when user focuses on its inputs. Or simply any element that has children and needs its focus to be taken care of. We will take a look at some examples.

## :focus-within selector in forms

While a user filling up a form it would be great if the form style could be changed so that they don&#8217;t lose focus and concentrate on the task. Check this pen:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="rrpgej" data-default-tab="html,result" data-user="azad6026" data-pen-title=":focus-within form">
  See the Pen <a href="https://codepen.io/azad6026/pen/rrpgej/">:focus-within form</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



Once you click on one of the inputs ( meaning a form child element), form&#8217;s background and colour style is changing:

`form:focus-within {`  
`  background: #ccc;`  
`  color: black;`  
`}`

## :focus-within selector in tables

A really good example of using :focus-within pseudo class is inside tables. Whenever you hover over a row of a cell, the whole row&#8217;s style could be changed to show the user focus. Check out this pen:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="YjYbxR" data-default-tab="html,result" data-user="azad6026" data-pen-title=":focus-within in tables">
  See the Pen <a href="https://codepen.io/azad6026/pen/YjYbxR/">:focus-within in tables</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



And we used :focus-within for the rows as below:

`tbody tr:focus-within,`  
`tbody tr:hover {`  
`  background: blue;`  
`}`

## :focus-within selector in dropdown menu

I use the example in <a href="https://css-tricks.com/solved-with-css-dropdown-menus/" target="_blank" rel="noopener noreferrer">CSS tricks</a> here and explain the important part of it. This is the example in CodePen:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="pVvXmK" data-default-tab="css,result" data-user="una" data-pen-title="Simple CSS Dropdown Menu with Hover and :focus-within and Focus states and ARIA">
  See the Pen <a href="https://codepen.io/una/pen/pVvXmK/">Simple CSS Dropdown Menu with Hover and :focus-within and Focus states and ARIA</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



In the menu adding **role=&#8221;navigation&#8221;  **helps on web accessibility. Also The **aria-label **attribute is used to define a string that labels the current element. We use **aria-label=&#8221;submenu&#8221;** in the dropdown to make it more accessible.

However in order for a navigation bar to be accessible, one should be able to tab through it and focus on the proper item in a sensible order. Additionally to have a screen reader accurately read out loud what is being focused on.

Using :focus-within selector we can achieve these:

`ul li:hover > ul,,ul li:focus-within > ul`` {`  
`  visibility: visible;`  
`  opacity: 1;`  
`  display: block;`  
`}`

This way when we tab to the second item, our submenu pops up. As we tab through the submenu, the visibility remains! We then append our code to include **`:focus` **states alongside **`:hover`** to give keyboard users the same experience as our mouse users:

`ul li:hover > ul,`  
`ul li:focus-within > ul,`  
`ul li ul:hover,`  
`ul li ul:focus {`  
`  visibility: visible;`  
`  opacity: 1;`  
`  display: block;`  
`}`

There are also other use cases of :focus-within that you could read about in <a href="https://css-tricks.com/keeping-parent-visible-child-focus/" target="_blank" rel="noopener noreferrer">this</a> link for divs and a comprehensive article on dropdown menus <a href="https://css-tricks.com/solved-with-css-dropdown-menus/" target="_blank" rel="noopener noreferrer">here</a> as well. Thanks for reading.
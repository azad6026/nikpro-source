---
id: 31768
title: Template literals in JS6 explained
date: 2018-07-01T20:38:59+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31768
permalink: /template-literals-in-js6-explained/
image: ../../static/images/tmplate-literals-1568x506.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - backtick
  - expressons
  - template literals
  - template strings
---
Continuing our explanation of <a href="http://www.nikpro.com.au/what-is-spread-syntax-in-es6-and-how-to-use-it/" target="_blank" rel="noopener noreferrer">ES6 new features</a>, template literals are a new way to create a string. They are simply the backtick (\`) character that we can use instead of single quotes or double quotes to connect strings in different situations. String concatenations has never been easy before. It improves readability as well. We will explain it with some examples. 

The back tick key is usually located in the top left corner of your keyboard, below the escape key and next to the 1 key.

## Basic usage

``<span class="token keyword">let</span> newString <span class="token operator">=</span> <span class="token template-string"><span class="token string">`A string`</span></span><span class="token punctuation">;</span>``

As you see, the backticks have surrounded the string. That&#8217;s it.But it has lots of advantages we will see later.

## Multi line Usage

To have a multi line string we used to use (\n) where we need the new line to be:

**`<span class="token keyword">var</span> myMultiString <span class="token operator">=</span> <span class="token string">'Some text that I want\nOn two lines!'</span><span class="token punctuation">;</span>`**

With the backticks it will be written as it should:

**``<span class="token keyword">var</span> myMultiString <span class="token operator">=</span> <span class="token string">`Some text that I want</span>``**

**``<span class="token string">On two lines!`</span><span class="token punctuation">;</span>``**

## Usage in Expressions

This is a new approach in strings using template literal syntax:

``<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token template-string"><span class="token string">`JS6`</span></span><span class="token punctuation">;</span> ``

``console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Hi my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>``

The `${}` syntax allows us to put some expression in it and it shows the value. In this case we can just simply do this:

``console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Hi my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token string">'ES6'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>``

We can evaluate any sort of variables we would like here:

`<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> `

``  firstName<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`Dave`</span></span>```<span class="token punctuation">,</span> `

``<span class="token function">  sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`Hi my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span> ``

`<span class="token punctuation">  }</span> `

`<span class="token punctuation">}</span>`

Inside the person object we have a sayName method which takes an expression using template literals and through ${} we can access the object properties.

And this is another example:

`<span class="token keyword">let</span> price <span class="token operator">= 20</span><span class="token punctuation">;</span> `

`<span class="token keyword">let</span> tax <span class="token operator">=</span> 10%<span class="token punctuation">;</span> `

``<span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token template-string"><span class="token string">`The total prices is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>price <span class="token operator">*</span> tax</span></span><span class="token template-string"><span class="token interpolation"><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>``

## Usage in HTML templates

Using template literals in HTML templates is really nice and useful to add content in our strings:

Imagene this object:

`<span class="token punctuation">{</span> `

`<span class="token string">"id"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> `

`<span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"Bulbasaur"</span><span class="token punctuation">,</span> `

`<span class="token string">"base_experience"</span><span class="token punctuation">:</span> <span class="token number">64</span>`

`<span class="token punctuation">}</span>`

Now we will use a function to add the data from the object:

`<span class="token keyword">function</span> <span class="token function">createMarkup</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span> `

``<span class="token keyword">return</span> <span class="token template-string"><span class="token string">` <article class="newData"> </span></span>``

`<span class="token template-string"><span class="token string"><h3></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></h3> </span></span>`

``<span class="token template-string"><span class="token string"><p>This name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">} is created now</span></span> <span class="token string"></p> </article> `</span></span> ``

`<span class="token punctuation">}</span>`

## Tagged Templates {#article-header-id-3.has-header-link}

You create a function and this function will look like any other function, however it looks different when you call it:

`<span class="token keyword">function</span> <span class="token function">myTaggedLiteral</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span> <span class="token punctuation">{</span> `

`  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span><span class="token punctuation">;</span> `

`<span class="token punctuation">}</span> `

``myTaggedLiteral<span class="token template-string"><span class="token string">`test`</span></span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// ["test"]</span>``

We apply a Template Literal where the parentheses would be. And there are no parameters here. When having parameters weneed to take care of it:

`<span class="token keyword">function</span> <span class="token function">myTaggedLiteral</span><span class="token punctuation">(</span>strings<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> `

`  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strings<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> `

`<span class="token punctuation">}</span> `

`<span class="token keyword">let</span> someText <span class="token operator">=</span> <span class="token string">'Neat'</span><span class="token punctuation">;</span> `

``myTaggedLiteral<span class="token template-string"><span class="token string">`test </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>someText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span> ``

`<span class="token comment" spellcheck="true">// ["test", ""]</span> `

`<span class="token comment" spellcheck="true">// "Neat"</span>`

This is pretty powerful: it allows you to take the data used in a string and manipulate it to your liking.

`<span class="token keyword">function</span> <span class="token function">myTaggedLiteral</span><span class="token punctuation">(</span>strings<span class="token punctuation">,</span> value<span class="token punctuation">,</span> value2<span class="token punctuation">)</span> <span class="token punctuation">{</span> `

`  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strings<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> `

`<span class="token punctuation">}</span> `

`<span class="token keyword">let</span> someText <span class="token operator">=</span> <span class="token string">'Neat'</span><span class="token punctuation">;</span> `

``myTaggedLiteral<span class="token template-string"><span class="token string">`test </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>someText<span class="token interpolation-punctuation punctuation">}</span></span> <span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span> ``

`<span class="token comment" spellcheck="true">// ["test", ""]</span> <span class="token comment" spellcheck="true">// "Neat"</span> <span class="token comment" spellcheck="true">// 5</span>`

There are <a href="https://css-tricks.com/template-literals/" target="_blank" rel="noopener noreferrer">other use cases</a> as well which are more advanced but the concept remains the same. 
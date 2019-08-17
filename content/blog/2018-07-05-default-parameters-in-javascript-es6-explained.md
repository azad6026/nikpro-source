---
id: 31793
title: Default parameters in Javascript ES6 explained
date: 2018-07-05T22:42:29+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31793
permalink: /default-parameters-in-javascript-es6-explained/
image: /wp-content/uploads/2018/07/es6-default-parameters.jpg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - default parameters
  - property shorthands
---
We have been learning about new features in Javascript ES6 in [this post](http://www.nikpro.com.au/for-loop-in-javascript-and-es6-explained/) and [this one](http://www.nikpro.com.au/template-literals-in-js6-explained/) and [this post](http://www.nikpro.com.au/what-is-spread-syntax-in-es6-and-how-to-use-it/) so far. Here we will explain default parameters in Javascript ES6 and its wide usage in our code practices.

## ES6 default parameters

A default parameter is used when an argument is omitted or &#8220;undefined&#8221;. It can be a static value like a number or a new function. This is how we implemented parameters prior to ES6:

`<strong>function getInfo (name, year, color) {</strong>`  
`<strong>  year = (typeof year !== 'undefined') ? year : 2018;</strong>`  
`<strong>  color = (typeof color !== 'undefined') ? color : 'Blue';</strong>`  
`<strong>  // remainder of the function...</strong>`  
`<strong>}</strong>`

  In this example, only the name is a mandatory parameter and the other two have default values. We will have these outputs:

`<strong>getInfo('Chevy', 1957, 'Green');</strong>`  
`<strong>getInfo('Benz', 1965); // default for color is "Blue"</strong>`  
`<strong>getInfo('Honda'); // defaults are 2018 and "Blue"</strong>`

So if we don&#8217;t put in all the check guards in the code, we will have undefined value for not initialised parameters.

Es6 has made it so much easier though. This is the function equivalent in ES6:

`<strong>function getInfo (name, year = 2018, color = 'blue') {</strong>`  
`<strong>  // function body here...</strong>`  
`<strong>}</strong>`

We still get the same results if we call the function but it is less code and easy to read and maintain.

### Dealing with optional values

If you do not initialise the optional default parameters, you would have to specify &#8220;undefined&#8221; as a word&#8221;.

`<strong>function getInfo (name = 'Pat', year, color) {</strong>`  
`<strong>  // function body here...</strong>`  
`<strong>}</strong>`

`<strong><span class="token function">getInfo</span><span class="token punctuation">(</span>undefined<span class="token punctuation">,</span> <span class="token number">1995</span><span class="token punctuation">,</span> <span class="token string">'Orange'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></strong>`

because if you don&#8217;t , it will consider as name. It applies to other parameters (year and color)  as well:

`<strong><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token string">'Charlie'</span><span class="token punctuation">,</span> undefined<span class="token punctuation">,</span> <span class="token string">'Pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></strong>`

Also if you specify null as a parameter it might cause unexpected problems.:

`<strong><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token string">'Frankie'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">'Purple'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></strong>`

Null is considered as the absence of an object&#8217;s value but undefined is viewed as something that happens incidentally (like when function returns undefined)

### Property shorthands

In default parameters we are shortening the initialisation. This is another basic example of using default parameters with property shorthands syntax:

`<strong>// Basic syntax</strong>`  
`<strong>function multiply (a, b = 2) {</strong>`  
`<strong> return a * b;</strong>`  
`<strong>}</strong>`  
`<strong>multiply(5); // 10</strong>`

Default parameters are also available to later default parameters:

`<strong>function foo (num = 1, multi = multiply(num)) {</strong>`  
`<strong> return [num, multi];</strong>`  
`<strong>}</strong>`  
`<strong>foo(); // [1, 2]</strong>`  
`<strong>foo(6); // [6, 12]</strong>`

Here we have the first function as a parameter of the next one. Very neat and clean code that is far more readable this way.

Yet another example:

`<strong>const a = 'foo', b = 42, c = function () {};</strong>`

`<strong>// Previously we would use these constants like this.</strong>`  
`<strong>const alphabet = {</strong>`  
`<strong>a: a,</strong>`  
`<strong>b: b,</strong>`  
`<strong>c: c</strong>`  
`<strong>};</strong>`

But with the new shorthand we can actually do this now, which is equivalent to the above.

`<strong>const alphabet = { a, b, c };</strong>`

All in one single line.

There are lots of other examples and situations we could use them. Overall, default parameters increases the code readability and make initialisation easier and shorter as well. With big API codes and large applications it is essential to have clean and maintainable code along the way.
---
id: 31992
title: Some arrow function benefits with examples explained
date: 2018-08-07T21:43:55+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31992
permalink: /some-arrow-function-benefits-with-examples-explained/
image: /wp-content/uploads/2018/08/arrow-fun.png
categories:
  - JAVASCRIPT
tags:
  - arrow functions
  - this keyword
---
We have talked about arrow functions in [this article](http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) before and in this article we will take a look at arrow function benefits as we use them.

## Shorter syntax

Obviously they are really short and neat and one you have them in your code it looks a lot shorter and cleaner. These are the general syntax:

<pre class="wp-block-preformatted"><strong>// No parameters</strong><br /><strong>() => { statements }</strong><br /><strong>// single parameter</strong><br /><strong>(param) => { statements }</strong><br /><strong>param => { statements } </strong><br /><strong>// multiple parameters</strong><br /><strong>(param1,param2,....paramN) => { statements }</strong><br /><strong>// Returning objects</strong><br /><strong>// enclose objects by parenthesis so they can be treated as objects</strong><br /><strong>(param1,param2) => ( { id: 1 , key: value });</strong></pre>

Which if we want to shorten it actually they look like this:

<pre class="wp-block-preformatted"><strong>parameters => expression</strong><br /><strong>// is equivalent to:</strong><br /><strong>function (parameters){</strong><br /><strong>  return expression;</strong><br /><strong>}</strong></pre>

**A simple example**

In your browser console type this in and see the result for yourself:

<pre class="wp-block-preformatted"><strong><code>var double = num => num * 2&lt;br/>double(2);&lt;br/>// 4&lt;br/>double(3);&lt;br/>// 6</code></strong></pre>

The great thing is with ES6 you get to skip _function_ keyword and _return_ keyword as well some parenthesis, braces and semicolons. This is another example:

<pre class="wp-block-preformatted"><strong>var imgUrlArray = [</strong><br /><strong>        imgUrl1,</strong><br /><strong>        imgUrl2</strong><br /><strong>];</strong><br /><strong>//ES5</strong><br /><strong>imgUrlArray.map(function (img){</strong><br /><strong>     return img;</strong><br /><strong>});</strong><br /><strong>//ES6</strong><br /><strong>imgUrlArray.map(img => img);</strong></pre>

Also this is an example with the [map](http://www.nikpro.com.au/practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/) method in both versions:

<pre class="wp-block-preformatted"><strong>// Expressions</strong><br /><strong>// ES5</strong><br /><strong>var plusOne = [1,2,3,4,5].map(function(num){ return num + 1 });</strong><br /><strong>// ES6<br />var plusOne = [1,2,3,4,5].map(num => num + 1);  // implicit return</strong></pre>

## No &#8220;this&#8221; binding with arrow functions

Another important thing about arrow function benefits is that there is no binding to &#8220;this&#8221; keyword in them. It does not bind &#8220;this&#8221; like a regular function:

An arrow function **_does not_** newly define its own `this` when it&#8217;s being executed.The value of `this` is always inherited from the enclosing scope:

<pre class="wp-block-preformatted"><em>// ES5</em><br />function Counter(){<br />   this.seconds = 0;<br />   <code>window.setInterval(&lt;strong>function&lt;/strong>() {&lt;br/>    &lt;strong>this&lt;/strong>.seconds&lt;strong>++&lt;/strong>;&lt;br/>  }.bind(&lt;strong>this&lt;/strong>), 1000);&lt;br/></code>}<br /><em>//ES6</em><br />function Counter(){<br />this.seconds =0;<br />window.setInterval( () => this.seconds++,1000 );<br />}</pre>

You clearly see the difference and no binding of &#8220;this&#8221; in arrow functions. ES6 arrow functions don’t bind their own arguments either:

<pre class="wp-block-preformatted"><strong>const funct = () => {</strong><br /><strong>       console.log(arguments); <em>// This will throw reference error</em></strong><br /><strong>}</strong><br /><strong><em>// undefined</em></strong></pre>

Which is interesting and it is not something that we might be facing in code all the time. 

**How about constructors**

Although we can use arrow functions in most cases but we need to be careful around constructors. Arrow functions cannot be used as constructors:

<pre class="wp-block-preformatted"><strong>var Person= (param) => {</strong><br /><strong>     this.name = param;</strong><br /><strong>}</strong><br /><strong>var Boy = new Person('Ram');</strong><br /><strong><em>// Throws error that Person is not a constructor</em></strong><br /></pre>

Therefor if we create a constructor with them it will throw an error like above.

**And the new keyword**

And they certainly cannot be used with new keyword aswell:

<pre class="wp-block-preformatted"><strong>var func = () => { console.log("Hello"); };</strong><br /><strong>var func1 = new func();</strong><br /><strong><em>// Uncaught TypeError: func is not a constructor</em></strong></pre>

These are main arrow function benefits and awarenesses that could be useful once coding around them. Thanks for reading.
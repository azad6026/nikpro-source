---
id: 31858
title: What are primitives and their differences with objects in Javascript?
date: 2018-07-14T22:54:17+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31858
permalink: /what-are-primitives-and-their-differences-with-objects-in-javascript/
image: primitives.png
categories:
  - JAVASCRIPT
tags:
  - fondumentals
  - primitives
---
In this post we will refresh our knowledge on [core concepts of Javascript](http://www.nikpro.com.au/how-to-create-classes-in-javascript-es6/). What are primitives and their differences with objects in Javascript? We will demonstrate them with some examples.

## Define a Primitive

A primitive is a data that is not an object, cannot be changed and does not have any methods. In [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript "JavaScript: JavaScript (JS) is a programming language mostly used to dynamically script webpages on the client side, but it is also often utilized on the server-side, using packages such as Node.js."){.glossaryLink}, there are 6 primitive data types: [string](https://developer.mozilla.org/en-US/docs/Glossary/string "string: In any computer programming language, a string is a sequence of characters used to represent text."){.glossaryLink}, [number](https://developer.mozilla.org/en-US/docs/Glossary/number "number: In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums."){.glossaryLink}, [boolean](https://developer.mozilla.org/en-US/docs/Glossary/boolean "boolean: In computer science, a boolean is a logical data type that can have only the values true or false."){.glossaryLink}, [null](https://developer.mozilla.org/en-US/docs/Glossary/null "null: In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations."){.glossaryLink}, [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined "undefined: A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments."){.glossaryLink}, [symbol.](https://developer.mozilla.org/en-US/docs/Glossary/symbol "symbol: This glossary page describes both a data type, called "symbol", and the class-like function, called "Symbol()", that (among other things) creates instances of the symbol data type."){.glossaryLink}

They are not variables but can be assigned to variables. The variable may be assigned a new value but the primitive remains the same. See below examples:

`<strong>// Using a string method doesn't mutate the string</strong>`  
`<strong>var bar = "baz";</strong>`  
`<strong>console.log(bar); // baz</strong>`  
`<strong>bar.toUpperCase()</strong>`  
`<strong>console.log(bar); // baz ( It will not change to BAZ)</strong>`

`<strong>// Using an array method mutates the array</strong>`  
`<strong>var foo = [];</strong>`  
`<strong>console.log(foo); // []</strong>`  
`<strong>foo.push("plugh");</strong>`  
`<strong>console.log(foo); // ["plugh"]</strong>`

`<strong>// Assignment gives the primitive a new (not a mutated) value</strong>`  
`<strong>bar = bar.toUpperCase(); // BAZ</strong>`

As you can see methods do no affect primitive&#8217;s value but assignment gives them a new value. Here is another example:

`<strong>// The Primitive </strong>`  
`<strong>let foo = 5;</strong>`

`<strong>// A function to change the Primitive value</strong>`  
`<strong>function addTwo(foo) {</strong>`  
`<strong>foo = foo + 2;</strong>`  
`<strong>}</strong>`

``<strong>// Pass our Primitive as an argument to `addTwo()` function</strong>``  
`<strong>addTwo(foo);</strong>`

`<strong>// Get the current Primitive value</strong>`  
`<strong>console.log(foo); // 5</strong>`

Before doing ANYTHING inside the function, **JavaScript took a copy of the original passed &#8211; Primitive &#8211; argument** to work with it inside our function. Any changes inside our function **won&#8217;t** affect the ORIGINAL `foo` at all, as we are working on our COPY of it. Inside the function, it refers to `foo` _the parameter   &#8211;   _<code class=" language-js">&lt;span class="token function">addTwo&lt;/span>&lt;span class="token punctuation">(&lt;/span>foo&lt;span class="token punctuation">)&lt;/span></code>_ _ not `foo` &#8211; _the variable &#8211; _<code class=" language-js">&lt;span class="token keyword">let&lt;/span> foo &lt;span class="token operator">=&lt;/span> &lt;span class="token number">5&lt;/span>&lt;span class="token punctuation">;&lt;/span></code>

So this is the meaning of primitives being immutable.We are always working on a copy of them without touching the original value. To get the value of a primitive, we use the valueof() method. For the above example we could use it like this:

foo.Valueof(); // 5

## Primitive wrapper objects

The primitive types boolean, string and number can be wrapped by their object counterparts. These objects are instances of the Boolean, String and Number constructors respectively. See the below definitions:

`<strong>typeof true; //"boolean"</strong>`  
`<strong>typeof Boolean(true); //"boolean"</strong>`  
`<strong>typeof new Boolean(true); //"object"</strong>`  
`<strong>typeof (new Boolean(true)).valueOf(); //"boolean"</strong>`

`<strong>typeof "abc"; //"string"</strong>`  
`<strong>typeof String("abc"); //"string"</strong>`  
`<strong>typeof new String("abc"); //"object"</strong>`  
`<strong>typeof (new String("abc")).valueOf(); //"string"</strong>`

`<strong>typeof 123; //"number"</strong>`  
`<strong>typeof Number(123); //"number"</strong>`  
`<strong>typeof new Number(123); //"object"</strong>`  
`<strong>typeof (new Number(123)).valueOf(); //"number"</strong>`

And the vice versa is true. So the objects could be coerced to their primitives:

`<strong>//object coerced to primitive </strong>`  
`<strong>var Twelve = new Number(12); </strong>`  
`<strong>var fifteen = Twelve + 3; </strong>`  
`<strong>fifteen; //15</strong>`  
`<strong>typeof fifteen; //"number" (primitive)</strong>`  
`<strong>typeof Twelve; //"object"; (still object)</strong>`

`<strong>//another object coerced to primitive</strong>`  
`<strong>new String("hippo") + "potamus"; //"hippopotamus" </strong>`

`<strong>//object not coerced (because 'typeof' operator can work with objects)</strong>`  
`<strong>typeof new String("hippo") + "potamus"; //"objectpotamus"</strong>`

### Why does `"abc".length` return a value?

Javascript will coerce between primitives and objects. So for &#8220;abc&#8221; the string value is coerced to a string object to access to length property. See an example below:

`<strong>String.prototype.returnMe= function() {</strong>`  
`<strong>return this;</strong>`  
`<strong>}</strong>`  
`<strong>var a = "abc";</strong>`  
`<strong>var b = a.returnMe(); </strong>`

`<strong>a; //"abc" </strong>`  
`<strong>typeof a; //"string" (still a primitive)</strong>`  
`<strong>b; //"abc"</strong>`  
`<strong>typeof b; //"object"</strong>`

and tis example for a number primitive:

`<strong>Number.prototype.toString = function() {</strong>`  
`<strong>return typeof this;</strong>`  
`<strong>}</strong>`

`<strong>(123).toString(); //"object"</strong>`

By this means primitives have access to all the properties (including methods) defined by their respective object constructors. But even with this we cannot assign values to primitives:

`<strong>var primitive = "september";</strong>`  
`<strong>primitive.vowels = 3;</strong>`

`<strong>primitive.vowels; //undefined;</strong>`

Primitives are immutable and we cannot modify them by tweaking the properties of the object wrapper:

`<strong>var me = new String("Angus");</strong>`  
`<strong>me.length = 2; //(error in strict mode)</strong>`  
`<strong>me.length; //5 (not 2 - thanks @joseanpg)</strong>`  
`<strong>me.valueOf(); "Angus"</strong>`

Primitives could be very confusing if we don&#8217;t understand what they really are and what are object&#8217;s differences with their primitives counterparts. I hope this helped.
---
id: 31858
title: What are primitives and their differences with objects in Javascript?
date: 2018-07-14T22:54:17+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31858
permalink: /what-are-primitives-and-their-differences-with-objects-in-javascript/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/primitives.png
categories:
  - JAVASCRIPT
tags:
  - fondumentals
  - primitives
---
In this post we will refresh our knowledge on [core concepts of Javascript](https://www.nikpro.com.au/how-to-create-classes-in-javascript-es6/). What are primitives and their differences with objects in Javascript? We will demonstrate them with some examples.

## Define a Primitive

A primitive is a data that is not an object, cannot be changed and does not have any methods. In [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript "JavaScript: JavaScript (JS) is a programming language mostly used to dynamically script webpages on the client side, but it is also often utilized on the server-side, using packages such as Node.js."){.glossaryLink}, there are 6 primitive data types: [string](https://developer.mozilla.org/en-US/docs/Glossary/string "string: In any computer programming language, a string is a sequence of characters used to represent text."){.glossaryLink}, [number](https://developer.mozilla.org/en-US/docs/Glossary/number "number: In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums."){.glossaryLink}, [boolean](https://developer.mozilla.org/en-US/docs/Glossary/boolean "boolean: In computer science, a boolean is a logical data type that can have only the values true or false."){.glossaryLink}, [null](https://developer.mozilla.org/en-US/docs/Glossary/null "null: In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations."){.glossaryLink}, [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined "undefined: A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments."){.glossaryLink}, [symbol.](https://developer.mozilla.org/en-US/docs/Glossary/symbol "symbol: This glossary page describes both a data type, called "symbol", and the class-like function, called "Symbol()", that (among other things) creates instances of the symbol data type."){.glossaryLink}

They are not variables but can be assigned to variables. The variable may be assigned a new value but the primitive remains the same. See below examples:

`// Using a string method doesn't mutate the string`  
`var bar = "baz";`  
`console.log(bar); // baz`  
`bar.toUpperCase()`  
`console.log(bar); // baz ( It will not change to BAZ)`

`// Using an array method mutates the array`  
`var foo = [];`  
`console.log(foo); // []`  
`foo.push("plugh");`  
`console.log(foo); // ["plugh"]`

`// Assignment gives the primitive a new (not a mutated) value`  
`bar = bar.toUpperCase(); // BAZ`

As you can see methods do no affect primitive&#8217;s value but assignment gives them a new value. Here is another example:

`// The Primitive `  
`let foo = 5;`

`// A function to change the Primitive value`  
`function addTwo(foo) {`  
`foo = foo + 2;`  
`}`

``// Pass our Primitive as an argument to `addTwo()` function``  
`addTwo(foo);`

`// Get the current Primitive value`  
`console.log(foo); // 5`

Before doing ANYTHING inside the function, **JavaScript took a copy of the original passed &#8211; Primitive &#8211; argument** to work with it inside our function. Any changes inside our function **won&#8217;t** affect the ORIGINAL `foo` at all, as we are working on our COPY of it. Inside the function, it refers to `foo` _the parameter   &#8211;   _<code class=" language-js"><span class="token function">addTwo</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>_ _ not `foo` &#8211; _the variable &#8211; _<code class=" language-js"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

So this is the meaning of primitives being immutable.We are always working on a copy of them without touching the original value. To get the value of a primitive, we use the valueof() method. For the above example we could use it like this:

foo.Valueof(); // 5

## Primitive wrapper objects

The primitive types boolean, string and number can be wrapped by their object counterparts. These objects are instances of the Boolean, String and Number constructors respectively. See the below definitions:

`typeof true; //"boolean"`  
`typeof Boolean(true); //"boolean"`  
`typeof new Boolean(true); //"object"`  
`typeof (new Boolean(true)).valueOf(); //"boolean"`

`typeof "abc"; //"string"`  
`typeof String("abc"); //"string"`  
`typeof new String("abc"); //"object"`  
`typeof (new String("abc")).valueOf(); //"string"`

`typeof 123; //"number"`  
`typeof Number(123); //"number"`  
`typeof new Number(123); //"object"`  
`typeof (new Number(123)).valueOf(); //"number"`

And the vice versa is true. So the objects could be coerced to their primitives:

`//object coerced to primitive `  
`var Twelve = new Number(12); `  
`var fifteen = Twelve + 3; `  
`fifteen; //15`  
`typeof fifteen; //"number" (primitive)`  
`typeof Twelve; //"object"; (still object)`

`//another object coerced to primitive`  
`new String("hippo") + "potamus"; //"hippopotamus" `

`//object not coerced (because 'typeof' operator can work with objects)`  
`typeof new String("hippo") + "potamus"; //"objectpotamus"`

### Why does `"abc".length` return a value?

Javascript will coerce between primitives and objects. So for &#8220;abc&#8221; the string value is coerced to a string object to access to length property. See an example below:

`String.prototype.returnMe= function() {`  
`return this;`  
`}`  
`var a = "abc";`  
`var b = a.returnMe(); `

`a; //"abc" `  
`typeof a; //"string" (still a primitive)`  
`b; //"abc"`  
`typeof b; //"object"`

and tis example for a number primitive:

`Number.prototype.toString = function() {`  
`return typeof this;`  
`}`

`(123).toString(); //"object"`

By this means primitives have access to all the properties (including methods) defined by their respective object constructors. But even with this we cannot assign values to primitives:

`var primitive = "september";`  
`primitive.vowels = 3;`

`primitive.vowels; //undefined;`

Primitives are immutable and we cannot modify them by tweaking the properties of the object wrapper:

`var me = new String("Angus");`  
`me.length = 2; //(error in strict mode)`  
`me.length; //5 (not 2 - thanks @joseanpg)`  
`me.valueOf(); "Angus"`

Primitives could be very confusing if we don&#8217;t understand what they really are and what are object&#8217;s differences with their primitives counterparts. I hope this helped.
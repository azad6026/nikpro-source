---
id: 31861
title: Truthy or Falsy values in Javascript and how to work with them?
date: 2018-07-15T17:35:41+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31861
permalink: /truthy-or-falsy-values-in-javascript-and-how-to-work-with-them/
image: truthy-falsy.jpg
categories:
  - JAVASCRIPT
tags:
  - falsy values
  - truhy values
---
[JavaScript variables](http://www.nikpro.com.au/the-differences-between-var-and-let-and-const-in-javascript/) are loosely/dynamically typed and the language doesn’t care how a value is declared or changed. A **truthy** or **falsy** value is a value that translates to ture/false when evaluated in a [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean "Boolean: In computer science, a Boolean is a logical data type that can have only the values true or false."){.glossaryLink} context. Examples of _falsy_ values in JavaScript (which translate to false and thus _bypass_ the `if`block):

`<strong>if (false)</strong>`  
`<strong>if (null)</strong>`  
`<strong>if (undefined)</strong>`  
`<strong>if (0)</strong>`  
`<strong>if (NaN)</strong>`  
`<strong>if ('')</strong>`  
`<strong>if ("")</strong>`  
`<strong>if (document.all)</strong>`

### True or false

These are different types of data we can define as:

`<strong>let x;</strong>`  
`<strong>x = 1; // x is a number</strong>`  
`<strong>x = '1'; // x is a string</strong>`  
`<strong>x = [1]; // x is an array</strong>`

When using  <code class=" language-undefined">==</code> (loose or abstract equality) for comparison, Javascript converts each side to a string and then does the comparison:

`<strong>// all true</strong>`  
`<strong>1 == '1';</strong>`  
`<strong>1 == [1];</strong>`  
`<strong>'1' == [1];</strong>`

But using  <code class=" language-undefined">===</code> (strict equality)  Javascript considers type and all will evaluate to false:

`<strong>// all false</strong>`  
`<strong>1 === '1';</strong>`  
`<strong>1 === [1];</strong>`  
`<strong>'1' === [1];</strong>`

Internally, JavaScript sets a value to one of six primitive data types:

  * **Undefined** (a variable with no defined value)
  * **Null** (a single null value)
  * **Boolean** (true or false)
  * **Number** (this includes <code class=" language-undefined">Infinity</code> and <code class=" language-undefined">NaN</code> – not a number!)
  * **String** (textual data)
  * **Symbol** (a unique and immutable primitive new to ES6/2015)

Everything else is an **Object** — including **arrays**.

### How evaluation works

As well as a type, each value also has an inherent boolean value, generally known as either _truthy_ or _falsy_.  So the following values are **always falsy**:

  * <code class=" language-undefined">false</code>
  * <code class=" language-undefined"></code> (zero)
  * <code class=" language-undefined">''</code> or <code class=" language-undefined">""</code> (empty string)
  * <code class=" language-undefined">null</code>
  * <code class=" language-undefined">undefined</code>
  * <code class=" language-undefined">NaN</code> (e.g. the result of <code class=" language-undefined">1/0</code>)

And everything else including these are truthy:

  * <code class=" language-undefined">'0'</code> (a string containing a single zero, it is not zero)
  * <code class=" language-undefined">'false'</code> (a string containing the text “false”)
  * <code class=" language-undefined">[]</code> (this is an empty array)
  * <code class=" language-undefined">{}</code> (an empty object)
  * <code class=" language-undefined">function(){}</code> (this is an “empty” function)

It means we cannot use a single value for evaluation in statements as it is always true:

`<strong>if (value) {</strong>`  
`<strong>  // value is truthy</strong>`  
`<strong>}</strong>`  
`<strong>else {</strong>`  
`<strong>  // value is falsy</strong>`  
`<strong>  // it could be false, 0, '', null, undefined or NaN</strong>`  
`<strong>}</strong>`

### The rules to follow

Remember these rules while evaluating truthy and falsy:

  1. **<code class=" language-undefined">false</code>**, zero and empty strings are all equivalent.
  2. **<code class=" language-undefined">null</code>** and **<code class=" language-undefined">undefined</code>** are equivalent to themselves and each other but nothing else.
  3. **<code class=" language-undefined">NaN</code>** is not equivalent to anything – _including another **<code class=" language-undefined">NaN</code>**!_
  4. **<code class=" language-undefined">Infinity</code>** is truthy – _but cannot be compared to **<code class=" language-undefined">true</code>** or **<code class=" language-undefined">false</code>**!_
  5. An empty array is truthy – _yet comparing with **<code class=" language-undefined">true</code>** is **<code class=" language-undefined">false</code>** and comparing **with<code class=" language-undefined">false</code>** is **<code class=" language-undefined">true</code>**?!_

These are some examples:

`<strong>// all true</strong>`  
`<strong>false == 0;</strong>`  
`<strong>0 == '';</strong>`  
`<strong>null == undefined;</strong>`  
`<strong>[] == false;</strong>`  
`<strong>!![0] == true;</strong>`

`<strong>// all false</strong>`  
`<strong>false == null;</strong>`  
`<strong>NaN == NaN;</strong>`  
`<strong>Infinity == true;</strong>`  
`<strong>[] == true;</strong>`  
`<strong>[0] == true;</strong>`

### Use **<code class=" language-undefined">===</code>** strict equality and avoid type conversion issues

`<strong>// instead of</strong>`  
`<strong>if (x == y) // ...</strong>`  
`<strong>// runs if x and y are both truthy or both falsy</strong>`  
`<strong>// e.g. x = null and y = undefined</strong>`

`<strong>// use</strong>`  
`<strong>if (x === y) // ...</strong>`  
`<strong>// runs if x and y are identical...</strong>`  
`<strong>// except when both are NaN</strong>`

### Stop direct comparisons

It is rare to compare two false or true values:

`<strong>// instead of</strong>`  
`<strong>if (x == false) // ...</strong>`  
`<strong>// runs if x is false, 0, '', or []</strong>`

`<strong>// use</strong>`  
`<strong>if (!x) // ...</strong>`  
`<strong>// runs if x is false, 0, '', NaN, null or undefined</strong>`

### Convert to real boolean value when necessary

Double-negative !! always generates false by <code class=" language-undefined">false</code>, <code class=" language-undefined"></code>, <code class=" language-undefined">""</code>, <code class=" language-undefined">null</code>, <code class=" language-undefined">undefined</code>and <code class=" language-undefined">NaN.</code>

So in this case do as follows:

`<strong>// instead of x or y on the side of comparison</strong>`  
`<strong>if (x === y) // ...</strong>`  
`<strong>// runs if x and y are identical...</strong>`  
`<strong>// except when both are NaN</strong>`

`<strong>// use double-negative to make sure tey generate what you expect</strong>`  
`<strong>if (!!x === !!y) // ...</strong>`  
`<strong>// runs if x and y are identical...</strong>`  
`<strong>// including when either or both are NaN</strong>`

Always be careful around truthy and falsy values. For example an empty string or a NAN could make the debugging very hard and painful. 
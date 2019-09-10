---
id: 32291
title: Javascript ES6 modern rest parameters are explained with examples
date: 2018-09-26T21:33:29+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32291
permalink: /javascript-es6-modern-rest-parameters-are-explained-with-examples/
xyz_twap:
  - "1"
image: rest-params-1568x882.jpeg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - destructuring
  - rest parameters
  - spread syntax
---
We have covered spread syntax in [an article](http://www.nikpro.com.au/what-is-spread-syntax-in-es6-and-how-to-use-it/) before and here we will explain Javascript ES6 modern rest parameter in this article.

## The rest parameters syntax

According to MDN A function&#8217;s last parameter can be prefixed with `...`  which makes the last parameter a &#8220;rest&#8221; parameter .

Then we have all remaining arguments to be placed within &#8220;standard&#8221; javascript array. Only the last parameter can be a &#8220;rest parameter&#8221;:

<pre class="wp-block-preformatted"><strong><code>function f(a, b, ...theArgs) {
  // ...
}&lt;br/>&lt;br/>// Using &lt;a href="http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/">arrow functions&lt;br/>&lt;br/>&lt;/a>const f = (a,b,  ...theArgs) => {&lt;br/>&lt;strong>&lt;code> // ...</code></strong><br />}&lt;/code>&lt;/strong></pre>

Technically we need to know that the `arguments` object is not a real array, while rest parameters are [`Array `](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)instances, meaning methods like [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) or [`pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) can be applied on it directly;<figure class="wp-block-image">

<img src="http://www.nikpro.com.aurestprams.png" alt="" class="wp-image-32293" srcset="http://testgatsby.localrestprams.png 599w, http://testgatsby.localrestprams-300x182.png 300w" sizes="(max-width: 599px) 100vw, 599px" /> </figure> 

### Destructuring rest parameters

Basically we can destructure an array using rest parameters in different ways.Take a look at some examples. I use arrow function syntax in these examples:

<pre class="wp-block-preformatted"><strong>const myFun = (a, b, …manyMoreArgs) => {
  console.log("a", a); 
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs); 
}</strong><br /><br /><strong><code>myFun("one", "two", "three", "four", "five", "six");

// a, one
// b, two
// manyMoreArgs, [three, four, five, six]</code></strong><br /></pre>

As an example we have &#8230;manyMoreArgs as rest parameters. Therefor whatever argument to be assigned after the first two arguments will be part of the rest parameters:

<pre class="wp-block-preformatted"><strong><code>// using the same function definition from example above

myFun("one", "two", "three");

// a, one
// b, two
// manyMoreArgs, [three]&lt;br/>&lt;br/>// Another call&lt;br/>&lt;br/>&lt;code>myFun("one", "two");

// a, one
// b, two
// manyMoreArgs, []</code><br />&lt;/code></strong></pre>

Although in the last function call the last parameter wasn&#8217;t specified but we still have an array which is empty.

### Using array methods on rest parameters

AS I mentioned above we could use array methods on rest parameter args because it is an array. Take a look at these example:

<pre class="wp-block-preformatted"><strong><code>const sortRestArgs = (...theArgs) => {
  return theArgs.sort();
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7</code></strong></pre>

But we cannot do the same with arguments as they are not an array:

<pre class="wp-block-preformatted"><strong><code>// This is wrong and will not work. &lt;br/>const sortArguments = (&lt;strong>&lt;code>arguments</code></strong>) => {
  return <code>arguments</code>.sort();
}&lt;/code>&lt;/strong></pre>

Best approach is to convert it to an array and then use array methods:

<pre class="wp-block-preformatted"><strong><code>const &lt;code>sortArguments</code> = (arguments) => {
  const args = Array.from(arguments);
   return args.sort();
}

console.log(<code>sortArguments</code>(5, 3, 7, 1)); // 1, 3, 5, 7&lt;/code></strong></pre>

We demonstrated **rest parameter** syntax which allows us to represent an indefinite number of arguments as an array and we can get advantage of array methods using them.

Thanks for reading.
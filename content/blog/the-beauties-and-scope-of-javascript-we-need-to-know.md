---
id: 31986
title: The beauties and scope of Javascript we need to know
date: 2018-08-06T21:56:26+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31986
permalink: /the-beauties-and-scope-of-javascript-we-need-to-know/
image: /images/js-specials.png
categories:
  - JAVASCRIPT
tags:
  - array
  - nan
  - 'null'
  - scope
---
There are lots of things around Javascript that makes it so special and in some ways different from other languages. Lets take a look at a few odd scope of Javascript with examples.

## Functions and scopes

The scope which something code executes in is defined that which variables are accessible:

<pre class="wp-block-preformatted"><strong><code>var animal = 'dog';
function getAnimal(adjective) { alert(adjective+' '+this.animal); }
getAnimal('lovely'); //alerts 'lovely dog';</code></strong></pre>

In the example above our variable and function are both declared in the global scope (i.e. on `window`). Because this always points to the current scope, in this example it points to `window`. So we forced the function to be called in the global scope. We can use the built-in method call instead:

<pre class="wp-block-preformatted"><strong><code>var animal = 'dog';
function getAnimal(adjective) { alert(adjective+' '+this.animal); };
var myObj = {animal: 'camel'};
getAnimal.call(myObj, 'lovely'); //alerts 'lovely camel'</code></strong></pre>

Therefor the function is not called in the window scope but in the myObj scope. We could also use apply method which takes arrays instead of individual arguments:

<pre class="wp-block-preformatted"><strong><code>getAnimal.apply(myObj, ['lovely']); //func args sent as array</code></strong></pre>

## Nulls and NAN

Null means the **total absence of meaningful value.**  Here is an example of Null:

<pre class="wp-block-preformatted"><strong><code>alert(typeof null); //alerts 'object'</code></strong></pre>

And that is right. Null is of type object although it does not have a value. But the odd thing is null is not considered an instance _of_ an object. As we know every number is an instance of the `Number` object, every object is an instance of the `Object` object, and so on.) But this does not work about Null. Here is the proof:

<pre class="wp-block-preformatted"><strong>alert(null instanceof Object); //evaluates false</strong></pre>

This is even more odd when you do the same with NAN:

<pre class="wp-block-preformatted"><strong><code>alert(typeof NaN); //alerts 'Number'
alert(NaN === NaN); //evaluates false</code></strong></pre>

NAN is a number but it is not equal to itself.In fact `NaN` is **not equal to anything**. The only way to confirm that something is `NaN` is via the function `isNaN()`.

## Arrays odds

It takes the [truthy and falsy](http://www.nikpro.com.au/truthy-or-falsy-values-in-javascript-and-how-to-work-with-them/) concept here. In JavaScript, **every non-boolean value has a built-in boolean flag** that is called on when the value is asked to behave like a boolean; like, for example, when you compare it to a boolean.

<pre class="wp-block-preformatted"><strong><code>alert(new Array() == false); //evaluates true</code></strong></pre>

Because apples cannot be compared to pears, when JavaScript is asked to compare values of differing data types, it first “**coerces**” them into a common data type. `False`, `zero`, `null`, `undefined`, empty strings and `NaN` all end up becoming `false` — not permanently, just for the given expression. An example to the rescue:

<pre class="wp-block-preformatted">So this is an example to the rescue: </pre>

<pre class="wp-block-preformatted"><strong><code>var someVar = 0;
alert(someVar == false); //evaluates true</code></strong></pre>

Here, we’re attempting to compare the number `` to the boolean `false`. Because these data types are not compatible,** JavaScript coerces our variable into its truthy or falsy equivalent,** which in the case of `` (as I said above) is falsy. Look at this one now:

<pre class="wp-block-preformatted"><strong><code>var someVar = []; //empty array
alert(someVar == false); //evaluates true
if (someVar) alert('hello'); //alert runs, so someVar evaluates to true</code></strong></pre>

The best thing is to use value and type comparison operator, **===**, and it is less confusing:

<pre class="wp-block-preformatted"><strong><code>var someVar = 0;
alert(someVar == false); //evaluates true – zero is a falsy
alert(someVar === false); //evaluates false – zero is a number, not a boolean</code></strong></pre>

Great. Now we know what is going on as the value and type has been compared and all makes sense.

There are lots of things in Javascript that makes it so special a language which we covered only the popular ones here. Perhaps it need a full article to cover them all. Thanks for reading.
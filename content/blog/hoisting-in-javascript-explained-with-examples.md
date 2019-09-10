---
id: 31973
title: Hoisting in Javascript explained with examples
date: 2018-08-04T20:26:42+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31973
permalink: /hoisting-in-javascript-explained-with-examples/
image: hoisting.png
categories:
  - JAVASCRIPT
tags:
  - declaration
  - hoisting
---
There is a confusing term called **hoisting in Javascript** that is interesting to be explained and needs to be understand as one of the [fundamentals](http://www.nikpro.com.au/higher-order-functions-in-javascript-with-examples/). I will explain hoisting in Javascript with examples.

## What is hoisting?

In Javascript no matter where you define or declare your variables, you still can use it in your code. 

Meaning **you don&#8217;t have to declare your variable** on the top all the time. You can declare it after using it. Also you can call a function **before** you declare it in our code. 

### What is happening?

The reality is Javascript **puts the variable and function declaration into the memory before compile time** and it will have access to them along the way. So where they physically been defined does not matter. Lets take a look a some examples. 

## Hoisting in variable declaration

In the below example we declare the variable after using it and it works just as it should:

<pre class="wp-block-preformatted"><strong>x = 5; // Assign 5 to x</strong><br /><br /><strong>elem = document.getElementById("demo"); // Find an element </strong><br /><strong>elem.innerHTML = x;                     // Display x in the element</strong><br /><br /><strong>var x; // Declare x</strong></pre>

We normally might be doing it the other way around declaring variable first. However it gives us the same result:

<pre class="wp-block-preformatted"><strong>var x; // Declare x</strong><br /><strong>x = 5; // Assign 5 to x</strong><br /><br /><strong>elem = document.getElementById("demo"); // Find an element </strong><br /><strong>elem.innerHTML = x;</strong>  </pre>

## Hoisting in function declaration

It is actually great case of function declaration as we could call them before even declaring them:

<pre class="wp-block-preformatted"><strong><code>catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Chloe"
*/</code></strong></pre>

We called the catName function with its argument before declaring it. We usually take the below approach which has the same output:

<pre class="wp-block-preformatted"><strong><code>function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tigger");

/*
The result of the code above is: "My cat's name is Tigger"
*/</code></strong></pre>

## Hoisting in initialisation

No. There is no hoisting for initialisation. So if you use a variable which is declared and initialised, you have to use it afterwards. This is no accepted:

<pre class="wp-block-preformatted"><strong><code>console.log(num); // Returns undefined 
var num;
num = 6;&lt;br/></code></strong></pre>

However you can initialise variable and use it and then declare it:

<pre class="wp-block-preformatted"><strong><code>num = 6;
console.log(num); // returns 6
var num;</code></strong></pre>

Here is another example for initialisation:

<pre class="wp-block-preformatted"><strong><code>var x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y

// The above example is implicitly understood as this: 
var x = 1; // Initialize x
var y; // Declare y
console.log(x + " " + y); // '1 undefined'
y = 2; // Initialize y</code></strong></pre>

## Best practices

Always declare your variables on the top of their scope. And initialise them afterwards if you needed to initialise them. Therefor you will not get undefined as a result in your code. You can read on in <a href="https://codeburst.io/javascript-what-is-hoisting-dfa84512dd28" target="_blank" rel="noopener noreferrer">this link</a> as well. Thanks for reading.
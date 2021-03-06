---
id: 31973
title: Hoisting in Javascript explained with examples
date: 2018-08-04T20:26:42+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31973
permalink: /hoisting-in-javascript-explained-with-examples/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/hoisting.png
categories:
  - JAVASCRIPT
tags:
  - declaration
  - hoisting
---
There is a confusing term called **hoisting in Javascript** that is interesting to be explained and needs to be understand as one of the [fundamentals](https://www.nikpro.com.au/higher-order-functions-in-javascript-with-examples/). I will explain hoisting in Javascript with examples.

## What is hoisting?

In Javascript no matter where you define or declare your variables, you still can use it in your code. 

Meaning **you don&#8217;t have to declare your variable** on the top all the time. You can declare it after using it. Also you can call a function **before** you declare it in our code. 

### What is happening?

The reality is Javascript **puts the variable and function declaration into the memory before compile time** and it will have access to them along the way. So where they physically been defined does not matter. Lets take a look a some examples. 

## Hoisting in variable declaration

In the below example we declare the variable after using it and it works just as it should:


```
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
```


We normally might be doing it the other way around declaring variable first. However it gives us the same result:


```
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;  
```


## Hoisting in function declaration

It is actually great case of function declaration as we could call them before even declaring them:


```
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Chloe"
*/
```


We called the catName function with its argument before declaring it. We usually take the below approach which has the same output:


```
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tigger");

/*
The result of the code above is: "My cat's name is Tigger"
*/
```


## Hoisting in initialisation

No. There is no hoisting for initialisation. So if you use a variable which is declared and initialised, you have to use it afterwards. This is no accepted:


```
console.log(num); // Returns undefined 
var num;
num = 6;<br/>
```


However you can initialise variable and use it and then declare it:


```
num = 6;
console.log(num); // returns 6
var num;
```


Here is another example for initialisation:


```
var x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y

// The above example is implicitly understood as this: 
var x = 1; // Initialize x
var y; // Declare y
console.log(x + " " + y); // '1 undefined'
y = 2; // Initialize y
```


## Best practices

Always declare your variables on the top of their scope. And initialise them afterwards if you needed to initialise them. Therefor you will not get undefined as a result in your code. You can read on in <a href="https://codeburst.io/javascript-what-is-hoisting-dfa84512dd28" target="_blank" rel="noopener noreferrer">this link</a> as well. Thanks for reading.
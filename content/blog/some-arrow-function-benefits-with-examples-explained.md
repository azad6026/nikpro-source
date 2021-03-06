---
id: 31992
title: Some arrow function benefits with examples explained
date: 2018-08-07T21:43:55+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31992
permalink: /some-arrow-function-benefits-with-examples-explained/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/arrow-fun.png
categories:
  - JAVASCRIPT
tags:
  - arrow functions
  - this keyword
---
We have talked about arrow functions in [this article](https://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) before and in this article we will take a look at arrow function benefits as we use them.

## Shorter syntax

Obviously they are really short and neat and one you have them in your code it looks a lot shorter and cleaner. These are the general syntax:


```
// No parameters
() => { statements }
// single parameter
(param) => { statements }
param => { statements } 
// multiple parameters
(param1,param2,....paramN) => { statements }
// Returning objects
// enclose objects by parenthesis so they can be treated as objects
(param1,param2) => ( { id: 1 , key: value });
```


Which if we want to shorten it actually they look like this:


```
parameters => expression
// is equivalent to:
function (parameters){
  return expression;
}
```


**A simple example**

In your browser console type this in and see the result for yourself:


```
var double = num => num * 2<br/>double(2);<br/>// 4<br/>double(3);<br/>// 6
```


The great thing is with ES6 you get to skip _function_ keyword and _return_ keyword as well some parenthesis, braces and semicolons. This is another example:


```
var imgUrlArray = [
        imgUrl1,
        imgUrl2
];
//ES5
imgUrlArray.map(function (img){
     return img;
});
//ES6
imgUrlArray.map(img => img);
```


Also this is an example with the [map](https://www.nikpro.com.au/practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/) method in both versions:


```
// Expressions
// ES5
var plusOne = [1,2,3,4,5].map(function(num){ return num + 1 });
// ES6
var plusOne = [1,2,3,4,5].map(num => num + 1);  // implicit return
```


## No &#8220;this&#8221; binding with arrow functions

Another important thing about arrow function benefits is that there is no binding to &#8220;this&#8221; keyword in them. It does not bind &#8220;this&#8221; like a regular function:

An arrow function **_does not_** newly define its own `this` when it&#8217;s being executed.The value of `this` is always inherited from the enclosing scope:

```
<em>// ES5</em>
function Counter(){
   this.seconds = 0;
   window.setInterval(function() {<br/>    this.seconds++;<br/>  }.bind(this), 1000);<br/>}
<em>//ES6</em>
function Counter(){
this.seconds =0;
window.setInterval( () => this.seconds++,1000 );
}
```


You clearly see the difference and no binding of &#8220;this&#8221; in arrow functions. ES6 arrow functions don’t bind their own arguments either:


```
const funct = () => {
       console.log(arguments); <em>// This will throw reference error</em>
}
<em>// undefined</em>
```


Which is interesting and it is not something that we might be facing in code all the time. 

**How about constructors**

Although we can use arrow functions in most cases but we need to be careful around constructors. Arrow functions cannot be used as constructors:


```
var Person= (param) => {
     this.name = param;
}
var Boy = new Person('Ram');
<em>// Throws error that Person is not a constructor</em>

```


Therefor if we create a constructor with them it will throw an error like above.

**And the new keyword**

And they certainly cannot be used with new keyword aswell:


```
var func = () => { console.log("Hello"); };
var func1 = new func();
<em>// Uncaught TypeError: func is not a constructor</em>
```


These are main arrow function benefits and awarenesses that could be useful once coding around them. Thanks for reading.
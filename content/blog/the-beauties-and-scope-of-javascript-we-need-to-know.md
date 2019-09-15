---
id: 31986
title: The beauties and scope of Javascript we need to know
date: 2018-08-06T21:56:26+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31986
permalink: /the-beauties-and-scope-of-javascript-we-need-to-know/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/js-specials.png
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


```
var animal = 'dog';
function getAnimal(adjective) { alert(adjective+' '+this.animal); }
getAnimal('lovely'); //alerts 'lovely dog';
```


In the example above our variable and function are both declared in the global scope (i.e. on `window`). Because this always points to the current scope, in this example it points to `window`. So we forced the function to be called in the global scope. We can use the built-in method call instead:


```
var animal = 'dog';
function getAnimal(adjective) { alert(adjective+' '+this.animal); };
var myObj = {animal: 'camel'};
getAnimal.call(myObj, 'lovely'); //alerts 'lovely camel'
```


Therefor the function is not called in the window scope but in the myObj scope. We could also use apply method which takes arrays instead of individual arguments:


```
getAnimal.apply(myObj, ['lovely']); //func args sent as array
```


## Nulls and NAN

Null means the **total absence of meaningful value.**  Here is an example of Null:


```
alert(typeof null); //alerts 'object'
```


And that is right. Null is of type object although it does not have a value. But the odd thing is null is not considered an instance _of_ an object. As we know every number is an instance of the `Number` object, every object is an instance of the `Object` object, and so on.) But this does not work about Null. Here is the proof:


```
alert(null instanceof Object); //evaluates false
```


This is even more odd when you do the same with NAN:


```
alert(typeof NaN); //alerts 'Number'
alert(NaN === NaN); //evaluates false
```


NAN is a number but it is not equal to itself.In fact `NaN` is **not equal to anything**. The only way to confirm that something is `NaN` is via the function `isNaN()`.

## Arrays odds

It takes the [truthy and falsy](http://www.nikpro.com.au/truthy-or-falsy-values-in-javascript-and-how-to-work-with-them/) concept here. In JavaScript, **every non-boolean value has a built-in boolean flag** that is called on when the value is asked to behave like a boolean; like, for example, when you compare it to a boolean.


```
alert(new Array() == false); //evaluates true
```


Because apples cannot be compared to pears, when JavaScript is asked to compare values of differing data types, it first “**coerces**” them into a common data type. `False`, `zero`, `null`, `undefined`, empty strings and `NaN` all end up becoming `false` — not permanently, just for the given expression. An example to the rescue:

```
So this is an example to the rescue: 
```



```
var someVar = 0;
alert(someVar == false); //evaluates true
```


Here, we’re attempting to compare the number `` to the boolean `false`. Because these data types are not compatible,** JavaScript coerces our variable into its truthy or falsy equivalent,** which in the case of `` (as I said above) is falsy. Look at this one now:


```
var someVar = []; //empty array
alert(someVar == false); //evaluates true
if (someVar) alert('hello'); //alert runs, so someVar evaluates to true
```


The best thing is to use value and type comparison operator, **===**, and it is less confusing:


```
var someVar = 0;
alert(someVar == false); //evaluates true – zero is a falsy
alert(someVar === false); //evaluates false – zero is a number, not a boolean
```


Great. Now we know what is going on as the value and type has been compared and all makes sense.

There are lots of things in Javascript that makes it so special a language which we covered only the popular ones here. Perhaps it need a full article to cover them all. Thanks for reading.
---
id: 31711
title: All you need to know about arrow functions in Javascript
date: 2018-06-24T22:32:50+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31711
permalink: /all-you-need-to-know-about-arrow-functions-in-javascript/
# image: ../../static/images/arrow-function-example.png
categories:
  - JAVASCRIPT
tags:
  - arrow functions
  - this keyword
---

Arrow functions are one of the very exciting features that ES6 has introduced to the wild. We will cover all you need to know about arrow functions to have a good understanding of what they are and how they could be used.

## Explain it with an example

This is a normal [function](http://www.nikpro.com.au/javascript-functions-simplified-the-best-explanation-of-functions/) that returns the parameter name:

```
function sayName(name){
    return(name);
}
```

This function has only one parameter and returns a value. To convert it to an arrow function, a few rules should be considered:

- In arrow functions , there is no name for the function and the functions are anonymous.
- The parameter should be wrapped in parentheses ( for one parameter we can omit this)
- we do the implicit return meaning there is no need to return keyword anymore.

So we will write the above function again and its arrow function equivalent:

```
function sayName(name){
    return(name.length);
}
//Arrow function equivalent:

const sayName = name => name.length
```

I used a constant variable to define a name and assign he arrow function to it as they do not have a name. It is not part of the arrow function itself. To call the function above you can simply log it to console:


```
console.log(sayName(&#8216;Azadeh&#8217;));
```

In the example above we had one parameter so we didn&#8217;t need to wrap in inside parentheses. In this example we have to though:

```
var doc = function docLog() {  
  console.log(document);  
};
//Arrow function equivalent
var doc = () => { 
  console.log(document); 
};  
doc(); // #document&#8230; 
```

Wen there is no parameter, it is compulsory to use parentheses before the arrow for function to work.

## Important note: &#8220;this&#8221; does not exist in Arrow function

That is right. As we know, each function have its own&#8221;this&#8221; that it refers to which could be confusing and making problems in our applicaitions depends on the situation. In arrow functions this problem is solved as they do not create &#8220;this&#8221; or they do not have any at all.So they are best to be used inside objects as they can refer to the object&#8217;s this implicitly. Take a look at this example:

```
function Person() {  
   // The Person() constructor defines &#8216;this&#8217; as an instance of itself.  
  this.age = 0;     // age in this case is for that person instance  
  setInterval(function growUp() {  
    this.age++;  
  }, 1000);  
}
```

The person constructor defines &#8220;this&#8221; as an instance of itself. In non-strict mode, the growUp function creates its own this which is a global object and it is different from the Person object &#8220;this&#8221;. To solve this problem arrow functions are the best:

```
function Person(){  
  this.age = 0;
  setInterval(() => {  
   this.age++; // |this| properly refers to the person object  
  }, 1000);  
}
```

Here, &#8220;this&#8221; inside arrow function in the setInterval function(replacement for growUp function), refers to &#8220;this&#8221; of the Person object.

### Last note

One more thing about arrow functions is that they cannot be use as a constructor as you cannot call new on them. It will throw an error:

```
var Foo = () => {};  
var foo = new Foo(); // TypeError: Foo is not a constructor
```

And they do not have prototype properties:

```
var Foo = () => {};  
```

Thank you for reading.

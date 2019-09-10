---
id: 31708
title: The differences between var and let and const in Javascript
date: 2018-06-23T22:22:22+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31708
permalink: /the-differences-between-var-and-let-and-const-in-javascript/
image: var-let-const.jpeg
categories:
  - JAVASCRIPT
tags:
  - const
  - let
  - var
---
In this post we take a look at the differences between var and let and const in [Javascript](http://www.nikpro.com.au/the-beauty-of-javascript/). There are confusions sometimes of where to use which and what are the best practices.

To declare a variable we used to use **var** before ES6 introduced **let**. With var, you can declare a variable anywhere and redeclare it again meaning you can change its value by redeclaring it. Because var is function scope but let and **const** are block scope which means they scope inside curly braces.

## Example of let and var

Lets take a look at this example I made:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="PaameG" data-default-tab="js,result" data-user="azad6026" data-embed-version="2" data-pen-title="var vs let vs const">
  See the Pen <a href="https://codepen.io/azad6026/pen/PaameG/">var vs let vs const</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



### var

For var variable, we can redeclare it by reassigning it another value and it always works fine.It has changed from 2 to 3.  It will cause problems though. In applications with lots if declarations and variables, var is buggy and no good to use. 

### <a id="let"></a>let

With lee, we just cannot redeclare a variable. This is why let has been introduced. It is there so if accidentally a variable has been redeclared inside block scope, we make sure its values will not change. This is really good and reliable. And if you do redeclare a let variable. it gives you an error and your application will not run. It says this variable has been declared before. ( You can see in the example we cannot redeclare the name variable to &#8220;John&#8221;. Let is great to be used in loops like for loops as the value keep changing and it is more reliable.

But in the other hand, we can change the value of let variable to something else. This is great as we actually know what we are doing and we will not make mistakes.

### const

After those comes const which is a data type that its value cannot be changed at all. It is not immutable as they say. Although a const value cannot be changed but its properties value could be changed. Meaning if you have a const object with some attributes, you can change its values by reassigning new value to them.

In the example you can see that we cannot change the &#8220;team&#8221; value as it gives the type error &#8221; the const has been declared before&#8221;. But we can reassign the value of person.hobby to &#8220;Coding&#8221; as we are not changing the const value itself but its attribute&#8217;s values.

## Where to use which

So if we need a constant value to **keep it still and not change its existence**, we should use **const**.

If we need a variable that **its value could be changed inside block scope but could not be redeclare**, we should consider **let**.

If we need a variable that should be **redeclared inside function scope**, we need to use **var**. But it is **not recommended as it causes unwanted problems and accidental mistakes.**
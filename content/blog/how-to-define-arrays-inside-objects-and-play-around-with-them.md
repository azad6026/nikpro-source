---
id: 31602
title: How to define arrays inside objects and play around with them
date: 2018-06-05T21:47:10+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31602
permalink: /how-to-define-arrays-inside-objects-and-play-around-with-them/
image: ../../static/images/array-1568x490.png
categories:
  - JAVASCRIPT
tags:
  - arrays
  - braces
  - functions
  - objects
---
Lately I have posted an article about simple mistake around objects in [this link](http://www.nikpro.com.au/be-aware-when-playing-around-inside-objects-a-simple-example-explained/) emphasising how important curly braces are. Here in this article I want to show you other mistakes around arrays inside objets that might be useful to you.

I have created a simple pen in codepen ro demonstrate what I mean. My main focus is the array.Inside objects, arrays are defined as objects as well. Unlike a variable, which used assignment operator, in array we use colons to give them vale. And for arrays we use brackets to hold the values. Simple and important. But to give the array an initial value, we need to use braces around an item and then inside it first comes the item property name and after a colon, inside cotations we need to add the value like this:

**todoList : [{todoItem : &#8220;I am an item&#8221;}]**

And then we can add items to it with this addItem function:

**addItems : function(todoItem){**  
**    this.todoList.push({**  
**    todoItem : todoItem**  
**});**

The mistake I talked about in t[his link](http://www.nikpro.com.au/be-aware-when-playing-around-inside-objects-a-simple-example-explained/) was if we define the array like this:

**todoList : [ &#8220;I am an item&#8221;]**

Obviously in this case, array is not defined as an object and cannot be used as one.So in the addItem function we have to do this instead:

**addItems : function(todoItem){**

**   this.todoList.push(todoItem);**

**});**

<p data-height="265" data-theme-id="0" data-slug-hash="gKrjKr" data-default-tab="html,result" data-user="azad6026" data-embed-version="2" data-pen-title="Arrays inside objects">
  So we removed the braces as the todoList is not accepting an object and just adding simple value to the list. In this pen I have shoed how it looks like if we have an array which is defined as an object with initial value. And an array without initial value which they are exactly the same in nature but un the first one we have specified an item to show how items should be added inside object arrays. (this is just an example, so be aware these arrays accept empty input if you just hit the button)
</p>

<p class="codepen" data-height="438" data-theme-id="0" data-slug-hash="gKrjKr" data-default-tab="html,result" data-user="azad6026" data-embed-version="2" data-pen-title="Arrays inside objects">
  See the Pen <a href="https://codepen.io/azad6026/pen/gKrjKr/">Arrays inside objects</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



It looks simple and obvious but it is actually a fundamental concept about objects that should be taken care of. How to define an object which arrays are the best to practice ( with for having the same nature) , how to initialise them and make sure about syntax errors that might take aways hours in large and complicated code to be found.

Hope this post was helpful to you.
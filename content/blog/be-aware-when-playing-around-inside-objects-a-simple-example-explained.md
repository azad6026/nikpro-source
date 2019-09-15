---
id: 31566
title: 'Be aware when playing around inside objects : a simple example explained'
date: 2018-06-02T21:03:01+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31566
permalink: /be-aware-when-playing-around-inside-objects-a-simple-example-explained/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/arrays-in-objects.jpg
categories:
  - JAVASCRIPT
  - Practice
tags:
  - arrays
  - braces
  - objects
---
So it might look pretty simple and straight forward especially for JavaScript experts but it worth to mention and explain what I came across today once more with an example that I used to myself.

Here is the case. There is an object in the code and we want to add some arrays and values inside it. We simply want to create an array inside object using a method to add array values.

This is our object with the array inside it:

<span style="color: #3366ff;">var todoListObject = {</span>  
<span style="color: #3366ff;">    todoList : [&#8216;One&#8217;,&#8217;Two&#8217;,&#8217;Three&#8217;]</span>  
<span style="color: #3366ff;">};</span>

Next step is to create a method inside the object that add a new value to the array. A method is basically a function. The important thing about methods is that we could use or manipulate the array for example using &#8220;this&#8221; keyword that refers to the object itself, here being todoListObject.

So the method will look like:

**<span style="color: #3366ff;">var todoListObject = {</span>**  
**<span style="color: #3366ff;">    todoList :[&#8216;One&#8217;,&#8217;Two&#8217;,&#8217;Three&#8217;],</span>**  
**<span style="color: #3366ff;">    addNewValue : function(todoItem){</span>**  
**<span style="color: #3366ff;">        this.todoList.push(todoItem);</span>**  
**<span style="color: #3366ff;">    }</span>**  
**<span style="color: #3366ff;">};</span>**

the todoItem is the item to be added to the array as methods can take parameters, todoItem will be pushed to the end of todoList using &#8220;this&#8221; keyword which refers to todoListObject object itself. So addNewValue is a method and it is actually the function&#8217;s name.

If we add a value by calling the method like this:

**<span style="color: #3366ff;">todoListObject.addNewValue(&#8216;Four&#8217;);</span>**

We have this result:

**<span style="color: #3366ff;">console.log(todoListObject.todoList);</span>**

**<span style="color: #3366ff;">[&#8216;One&#8217;,&#8217;Two&#8217;,&#8217;Three&#8217;,&#8217;Four&#8217;]</span>**

So far looks normal.

The interesting part that I wanted to point out is if we change the method to this:

**<span style="color: #3366ff;">var todoListObject = {</span>**  
**<span style="color: #3366ff;">    todoList :[&#8216;One&#8217;,&#8217;Two&#8217;,&#8217;Three&#8217;],</span>**  
**<span style="color: #3366ff;">    addNewValue : function(todoItem){</span>**  
**<span style="color: #3366ff;">        this.todoList.push({todoItem});</span>**  
**<span style="color: #3366ff;">    }</span>**  
**<span style="color: #3366ff;">};</span>**

Did you notice the difference?

Looks the same but the result is not because we have added braces around the todoItem to be pushed and now it considers as an object to be added to the array. If we call the method again:

**<span style="color: #3366ff;">todoListObject.addNewValue(&#8216;Four&#8217;);</span>**

The result is :

**<span style="color: #3366ff;">console.log(todoListObject.todoList);</span>**

**<span style="color: #3366ff;">[&#8216;One&#8217;,&#8217;Two&#8217;,&#8217;Three&#8217;,Object{</span>**

**<span style="color: #3366ff;">todoItem : &#8216;Four&#8217;</span>**

**<span style="color: #3366ff;">}]</span>**

Good Ha! The braces do all the job. They specify that an object with property of todoItem and value of Four will be added to the array. 

This is one of those things that when you found out about why your code is not working as expected or does not give error, you will go Ahhha that&#8217;s it. Love you JavaScript. 
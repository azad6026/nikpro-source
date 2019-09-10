---
id: 31542
title: JavaScript Functions Simplified; The Best Explanation of functions
date: 2018-05-12T19:30:22+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31542
permalink: /javascript-functions-simplified-the-best-explanation-of-functions/
image: functions-1568x1023.png
categories:
  - JAVASCRIPT
tags:
  - functions
---

There are lots of explanations and tutorials about Javascript and specifically functions out there which we all may have tried. But thus far from all I have seen, a unique approach around the whole language is what Gordon Zhu has implemented in [watchandcode.com  ](http://watchandcode.com)that is a practical way and very deep understanding of every major part of JavaScript.

I will explain functions here as my own take away which I hope be helpful to you too.

Just imagine  a resturant menu which probabley would have lots of different foods with their own receipies. Although each food would have its own recepie but each category of food will have a similar one.

For example, seafoods would have quiet similar recipe but different ingredients. So in the kitchen, they will use similar &#8220;process&#8221; with their own &#8220;steps&#8221; and they will make the dish accordingly.

We would write the &#8220;process&#8221;  and its &#8220;steps&#8221; and we can write a recipe like this:

- <span style="color: #000080;"><strong>Add the ingredients</strong></span>
- <span style="color: #000080;"><strong>Cook the Food </strong></span>

As you see, the whole process contains a few steps depends on the food that needs to be made.

**Functions in JavaScript are the same. As their name suggest, they function or do something in one or more steps. They might need some inputs like ingredients in our food recipe and they might have an output like serving the food here. **

Now lets write our own recipe in a function format.

First we need the Function word in the beginning as specifier of the &#8220;Process&#8221; following by the name of it as what it does. In order to make the function be able to take inputs which are called arguments,we need parntheses in front of function name and the whole process would be wrapped in curley braces:

Function makeSeafoood (ingredients){

- <span style="color: #000080;"><strong>Add the ingredients</strong></span>
- <span style="color: #000080;"><strong>Cook the Food </strong></span>

}

And this is a function. Of course it is not a JS valid code yet, but it is pretty much the fundamental of a function.

Let&#8217;s make it all valid code then.

First, we used ingredients as the input of the function, but we know it contains lots of tings so we could use an array of various ingredients to specify it. And in JavaScript we declare variables like this:

var ingredients = { &#8216;item1&#8217;, &#8216;item2&#8242; ,&#8217;item 3&#8217;} // like rice, fish, onion ,&#8230;.

Now ingredients have been specified. Now we use the action &#8220;cook&#8221; as the actual statement inside the function and add the ingredients as expected:

**Function makeSeafoood (ingredients)**{

Cook(**ingredients);**

}

It is that simple. Now we have a function based on our example which in a real world we will make it functional but the concept which was our goal remains intact.

Hope it has been useful to you.

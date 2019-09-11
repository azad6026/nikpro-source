---
id: 31902
title: Build a clock with Javascript and CSS using CSS transform
date: 2018-07-23T21:11:11+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31902
permalink: /build-a-clock-with-javascript-and-css-using-css-transform/
xyz_twap:
  - "1"
image: ../../static/images/clock-without-js.png
categories:
  - CSS
  - JAVASCRIPT
tags:
  - clock
  - CSS transform
---
We will build a clock with Javascript and [CSS transform](http://www.nikpro.com.au/manipulate-elements-visually-with-css-transform-explained-with-examples/) and the Date() function. The original idea is from [wesbos.com  ](http://wesbos.com)which has nice Javascript ideas for all. I have created a pen for it and I will explain it as it is. This is the pen:

<p class="codepen" data-height="350" data-theme-id="0" data-slug-hash="NBpXdv" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="JS + CSS  clock">
  See the Pen <a href="https://codepen.io/azad6026/pen/NBpXdv/">JS + CSS clock</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



We have three divs for seconds and minutes and hours by the class of &#8220;hand&#8221;. We will explain the most important part of the clock here. So without the Javascript and the transform line of code in the .hand class in CSS this is what you will see:

<img class="alignnone wp-image-31903 size-full" src="http://www.nikpro.com.auclock-without-transform.png" alt="" width="953" height="544" srcset="http://testgatsby.localclock-without-transform.png 953w, http://testgatsby.localclock-without-transform-300x171.png 300w, http://testgatsby.localclock-without-transform-768x438.png 768w" sizes="(max-width: 953px) 100vw, 953px" /> 

All three hands are above each other pointing to the nine it seams. So first we need to make them point to twelve where the clock actually starts. 

### The transform code

This is where the transform comes in:

`transform-origin: 100%;`  
`transform: rotate(90deg);`

We change the transform-origin from 50% which is its default value to 100%. Because we need to make the hands to turn inside the clock and their pin point will stick to the middle of the clock. So we change the x axis point to be started from the very middle of the clock.

However this is not enough. Although it will ake the hands to turn pointing right to the middle but they do not start from twelve &#8216;o clock. They are stuck to nine &#8216;o clock at the moment.Thus we rotate them by 90 degrees and that will do the trick:

<img class="alignnone wp-image-31904 size-full" src="http://www.nikpro.com.auclock-without-js.png" alt="" width="952" height="543" srcset="http://testgatsby.localclock-without-js.png 952w, http://testgatsby.localclock-without-js-300x171.png 300w, http://testgatsby.localclock-without-js-768x438.png 768w" sizes="(max-width: 952px) 100vw, 952px" /> 

We have the clock ready now. Lets add the Javascript. As always we get the elements we need to work on:

`const secondHand = document.querySelector('.second-hand'); // the seconds hand pointer`  
`const minsHand = document.querySelector('.min-hand'); // the minutes hand pointer`  
`const hourHand = document.querySelector('.hour-hand'); // the hour hand pointer`

Great. All set. We have to write a function to create our clock behaviour and run it every second:

`setInterval(setDate, 1000);`

We need to write the seDate function. First we will get the seconds from the Date function:

`const now = new Date();`  
`const seconds = now.getSeconds();`

We need to turn this into degrees so that we could use transform in CSS to update the seconds hand.

`const secondsDegrees = ((seconds / 60) * 360) ;`

This will give us what we want. We divide the seconds by 60 which gives a percentage and as transform has 360 degrees , we multiply it by then.But the problem is because we add a 90 degree offset to our hand in the beginning, each second will have 15 seconds offset as well if that makes sense. Therefor we need to add 90 degree offset to the code to make it work:

`const secondsDegrees = ((seconds / 60) * 360) + 90;`

Now we update the transform property of our seconds hand using the [ES6 template literals](http://www.nikpro.com.au/template-literals-in-js6-explained/) syntax:

``secondHand.style.transform = `rotate(${secondsDegrees}deg)`;``

And this gives us the seconds for the clock.

Same thing applies for the minutes hand:

`const mins = now.getMinutes();`  
`const minsDegrees = ((mins / 60) * 360) + 90;`  
``minsHand.style.transform = `rotate(${minsDegrees}deg)`;``

And for the hours hand as well:

`const hour = now.getHours();`  
`const hourDegrees = ((hour / 12) * 360) + 90;`  
``hourHand.style.transform = `rotate(${hourDegrees}deg)`;``

All done. With a few lines of code we built a clock and combining transform with the Date function. We will build a modern clock with Javascript and react later on in a seperate post. But this was to show a simple approach to use the basic techniques.
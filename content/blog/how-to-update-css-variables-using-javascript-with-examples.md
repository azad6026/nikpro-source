---
id: 31852
title: How to update CSS variables using Javascript with an example
date: 2018-07-13T22:55:23+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31852
permalink: /how-to-update-css-variables-using-javascript-with-examples/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/css-var-change.png
categories:
  - CSS
  - JAVASCRIPT
tags:
  - arrow functions
  - css variables
  - datasets
---

Have you tried to update [CSS variables](https://www.nikpro.com.au/what-are-css-variables-and-their-differences-with-css-preprocessors/) using Javascript? In this post we will explain how to do this with examples. This is an example from <a href="https://www.wesbos.com" target="_blank" rel="noopener noreferrer">Wesbos</a> courses and it is really useful and informative.

## The Example

It is the beauty of CSS variables that unlike CSS preprocessors they could be updated with Javascript after creation. I have created a pen in codepen for our example and you can see the result here:

https://codepen.io/azad6026/pen/wxKgvY

Let us explain what it does first. We have three variables that could be changed. The spacing and the blur through the spacebar and the colour through the colour set. It you change the spacing or blur bar, you will instantly see the padding and the image blur is changing. Also the same applies when you change the colour set. The JS word on the heading and the image background colour are using that colour and they change as you change them. So what is happening.

### First the CSS

If you know about CSS variables and <a href="https://www.nikpro.com.au/what-are-css-variables-and-their-differences-with-css-preprocessors/" target="_blank" rel="noopener noreferrer">how to define them</a> you can see that we have defined three variables in our CSS:

`:root {`  
`--base: #ffc600;`  
`--spacing: 10px;`  
`--blur: 10px;`  
`}`

And then we use them in our image and our heading:

`img {`  
`padding: var(--spacing);`  
`background: var(--base);`  
`filter: blur(var(--blur));`  
`}`  
`.hl {`  
`color: var(--base);`  
`}`

If you are not familiar with how to define and use CSS variables, read <a href="https://www.nikpro.com.au/what-are-css-variables-and-their-differences-with-css-preprocessors/" target="_blank" rel="noopener noreferrer">this</a> to learn their difference with preprocessors and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">this</a> to understand them better. But here we use var to be able to use our variables wherever we need. This is how it has been implemented to CSS itself.

### Now the HTML

So far we know how to define and use our CSS variables. .In HTML code the part that we care about is the inputs:

`<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">`

This is the spacing input. And the other two are the same with name and type changing. Also all inputs are sorrounded in a div by a class called controls.

Now we need to learn how to change the CSS through inputs and make the magic happen.

### Next is update CSS variables with Javascript 

First we need to access to our inputs:

`const inputs = document.querySelectorAll('.controls input');`

This gives us a NodeList that we could use its forEach method to update the property for each input. Be aware the NodeList is different from an array and it is very limited in case of methods. You can test it for yourself creating a simple array and log it in console and log the inputs in console and check the methods available.

Next we need to loop through inputs and listen to the change event and update the value by calling update function:

`inputs.forEach(input => input.addEventListener('change', handleUpdate));`

We used <a href="https://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/" target="_blank" rel="noopener noreferrer">arrow functions</a> here to make the code nice and neat. We should listen to the mousemove event as well as if we don&#8217;t because the spacebar can be moved with mouse and it will be quick, the change event will not catch that. So we will do the same for mouse moves as well:

`inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));`

All good so far. We need to create the function to update the values now. We need to get the document element and set the style property to the changed value:

`function handleUpdate() {`  
`` document.documentElement.style.setProperty(`--${this.name}`, this.value); ``  
`}`

In this case each time we change an input, it takes its name in `${this.name}`for example spacing and set it s value to what we have changed it to. So &#8211;spacing will get the value for spacing named input.

#### Using datases

It looks good but one thing missing. For spacing and blur the value has a suffix of px. If we don&#8217;t add that in, the spacing will be 20 for example and not 10px and it is not correct. That is why in HTML we have a `data-sizing="px"`so that we could use it here. In HTML tags, you could use datasets as data dash whatever you need to use it in your code. We called it data dash sizing so it makes sense. Now we add it in the function:

`function handleUpdate() {`  
`const suffix = this.dataset.sizing || '';`  
`` document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); ``  
`}`

So we created a suffix that gets the sizing dataset or it gets nothing which we added for colour variable as it does not need px as suffix to be added.

Also in the second line of the function we added the suffix to the value so the value will be 10px for example. Try out each line in your console to see the result while you are changing the inputs and it makes more sense. That was all for this.

It is great that we could update CSS variables on the fly with Javascript. It makes the style more flexible and we could build cool staff with it. Here is the example again:

https://codepen.io/azad6026/pen/wxKgvY

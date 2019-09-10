---
id: 31884
title: Create a HTML5 canvas to start drawing like windows paint
date: 2018-07-20T22:07:17+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31884
permalink: /create-a-html5-canvas-to-start-drawing-like-windows-paint/
image: /images/html5-canvas.jpg
categories:
  - HTML
  - HTML5
  - JAVASCRIPT
tags:
  - draw
  - 'HTML% canvas'
---
In this post we will create a HTML5 canvas element to start drawing. We will learn about canvas behaviour in action. Added in HTML5 like [many other tags](http://www.nikpro.com.au/html5-semantic-tags-and-where-to-use-them/), the **HTML <a style="text-decoration: none; color: #3f87a6; margin: 0px; padding: 0px; border: 0px;" title="Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a> element** can be used to draw graphics via scripting in JavaScript.  We sill create an example based on a <a href="http://www.wesbos.com" target="_blank" rel="noopener noreferrer">wesbos</a> course example and will explain the code in details. 

This is what we are going to explain:

<p class="codepen" data-height="400" data-theme-id="0" data-slug-hash="qyqwNd" data-default-tab="js,result" data-user="azad6026" data-embed-version="2" data-pen-title="HTML5 canvas">
  See the Pen <a href="https://codepen.io/azad6026/pen/qyqwNd/">HTML5 canvas</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



Put your mouse inside the result section and try to draw something. A line or something else. Yes that is awesome. You draw like paint in windows. Well almost. But this is not the point. The point is the canvas that you are drawing on.That is created by HTML5 and Javascript is controlling the drawing.

## Our HTML5 canvas

Understandably it is only one tag which defines the canvas. Each canvas should have a width and height and an id so that Javascript can manipulate its behaviour.

## Javascript sections

### Events

If you watch carefully, when you draw on the canvas, your mouse is having a few interactions with the canvas. You point the muse down to start drawing and move it to draw and then point it up and out of the canvas to stop drawing. We have four mouse events to take care of.

### The canvas specifics

You need to specify a few things for canvas like starting and stopping points, a flag that shows drawing status ( we always need flags with true-false status in our codes to make an indication of some actions that go on and of).

### The draw function

Finally of course we need a drawing function that takes care of updating starting and ending points of drawing, changes the direction of drawing and takes care of colours as well.

## The Code

#### Declare the canvas

I have made explanation for all lines. First get the canvas and add its specifics:

`//get the canvas with its id`

`<strong>const canvas = document.querySelector('#draw');</strong>`

`//specify it is a 2d canvas using getContext method which returns a drawing <em>context</em> on the <em>canvas</em>`

`<strong>const ctx = canvas.getContext('2d');</strong>`

`//overwrite canvas's height and width to make it reflect the window size`

`<strong>canvas.width = window.innerWidth;</strong>`  
`<strong>canvas.height = window.innerHeight;</strong>`

`//<em>lineJoin</em> property sets or returns the type of corner created, when two lines meet.The <em>lineCap</em> property sets or returns. The style of the end caps for a line. We make them both round and if you draw in the canvas you see what I mean.`

`<strong>ctx.lineJoin = 'round';</strong>`  
`<strong>ctx.lineCap = 'round';</strong>`

`//<em>lineWidth</em> property of the <em>Canvas</em> 2D API sets the thickness of lines in space units. `

`<strong>ctx.lineWidth = 100;</strong>`

#### The end points

Then we need to declare a few things. Specifying the ending points of the drawing as 0,0 and specifying a variable for colour (hue) and also set the direction to true so we can draw straight and once we draw back we will change it in the draw function.

`<strong>let lastX = 0; </strong>//x end point`  
`<strong>let lastY = 0; </strong>// Y end point`

`// Hue is a degree on the colour wheel from 0 to 360. 0 is red, 120 is green, 240 is blue. We use hsl which I explain later```  
`<strong>let hue = 0; </strong>`  
`<strong>let direction = true; </strong>// set the direction flag to true`

#### Setup the events

Before explaining this section I remind about how each element have lots of properties and methods. Each element has e.offsetX and e.offsetY which we use here to update our drawing ending points coordination.(do console.log(e) in your console to see them).

Now we specify what we need to happen when the mouse is interacting with the canvas. We have four events as mentioned above and we will specify each as below:

`// for mousedown event , we need to update our flag for drawing and set it to true which means we want to start drawing.``we  also need to update our ending points here. We use <a href="http://www.nikpro.com.au/default-parameters-in-javascript-es6-explained/" target="_blank" rel="noopener noreferrer">ES6 syntax</a> to update them all in one line.`

`<strong>canvas.addEventListener('mousedown', (e) => {</strong>`  
`<strong>isDrawing = true;</strong>`  
`<strong>[lastX, lastY] = [e.offsetX, e.offsetY];</strong>`  
`<strong>});</strong>`

`// Obviously we draw while mouse is moving`  
`<strong>canvas.addEventListener('mousemove', draw);</strong>`

`// And for these two events that we are not drawing, we make sure the drawing flag is off.`  
`<strong>canvas.addEventListener('mouseup', () => isDrawing = false);</strong>`  
`<strong>canvas.addEventListener('mouseout', () => isDrawing = false);</strong>`

#### Draw function

After all we write our draw function. We need to update colour, start and end points, drawing thickness and its direction.

`<strong>function draw(e) {</strong>`  
`// stop the fn from running when they are not moused down`  
`<strong>if (!isDrawing) return; </strong>`

`//HSL color values are specified with: hsl(hue, saturation, lightness).We set satuation and lightness to some percentages and use the hue variable to change the degree of the colour wheel`  
``<strong>ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;</strong>``

`//begin the paint with beginPath method`  
`<strong>ctx.beginPath();</strong>`  
`// start from here and update start point`  
**`ctx.moveTo(lastX, lastY);`**  
`// go to the offset values and update end point`  
`<strong>ctx.lineTo(e.offsetX, e.offsetY);</strong>`

`//to draw we need to call stroke method of the canvas`  
`<strong>ctx.stroke();</strong>`

`//update the ending points to connect them and draw the line`  
`<strong>[lastX, lastY] = [e.offsetX, e.offsetY];</strong>`

`//increase the hue variable to change the colour. Hue is a degree on the color wheel from 0 to 360 and reset it.`  
`<strong>hue++;</strong>`  
`<strong>if (hue >= 360) {</strong>`  
`<strong>hue = 0;</strong>`  
`<strong>}</strong>`

`//at some point (when the lineWidth is than 100 or thinner than 1) change the direction flag.This is what we see when the drawing reaches a certain thickness, it suddenly become narrow and thin and starts over.`  
`<strong>if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {</strong>`  
`<strong>direction = !direction;</strong>`  
`<strong>}</strong>`

`//If direction is true, increase the linewidth and if not decrease it. `  
`<strong>if(direction) {</strong>`  
`<strong>ctx.lineWidth++;</strong>`  
`<strong>} else {</strong>`  
`<strong>ctx.lineWidth--;</strong>`  
`<strong>}</strong>`  
`<strong>}</strong>`

So while drawing, a few things are happening. The colour is updating at certain points. The ending points is updating so that we can draw connected lines and draw. Play around with values and try to change things to see how it affects the drawing to understand it better.

Lots of things can be done by canvas element and Javascript which could be used in modern designs. We will have a look at some examples in the future.
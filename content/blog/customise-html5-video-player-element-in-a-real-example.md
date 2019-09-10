---
id: 31938
title: Customise HTML5 video player element in a real example
date: 2018-07-30T21:43:46+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31938
permalink: /customise-html5-video-player-element-in-a-real-example/
image: /images/htnl5-video.jpg
categories:
  - HTML5
  - JAVASCRIPT
tags:
  - mousemove event
  - video events
  - video methods
---
We will customise the HTML5 video player tag in this article with a real example. The HTML5 video element has useful properties and methods that we could manipulate and use for our customisation. I have created a pen in CodePen for our example:

<p class="codepen" data-height="400" data-theme-id="0" data-slug-hash="yqpBgM" data-default-tab="css,result" data-user="azad6026" data-pen-title="Customise HTML5 video player">
  See the Pen <a href="https://codepen.io/azad6026/pen/yqpBgM/">Customise HTML5 video player</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



We will learn how to play/pause the video with buttons. How to skip the video back and forth and how to use the progress bar to move it forward and backward. There is a lot going on thanks to <a href="http://wesbos.com" target="_blank" rel="noopener noreferrer">wes bos</a> whom I got the idea from to put it in an article.

## The HTML video player

First we look at our HTML code and see what is important here:

`<strong><div class="player"></strong>`  
`<strong>  <video class="player__video viewer" src="https://player.vimeo.com/external/194837908.sd.mp4s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"></video></strong>`

`<strong>  <div class="player__controls"></strong>`  
`<strong>    <div class="progress"></strong>`  
`<strong>      <div class="progress__filled"></div></strong>`  
`<strong>    </div></strong>`  
`<strong>    <button class="player__button toggle" title="Toggle Play">►</button></strong>`  
`<strong>    <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1"></strong>`  
`<strong>    <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1"></strong>`  
`<strong>    <button data-skip="-10" class="player__button">« 10s</button></strong>`  
`<strong>    <button data-skip="25" class="player__button">25s »</button></strong>`  
`<strong>  </div></strong>`  
`<strong></div></strong>`

The range inputs are used for measuring the volume and playbackRate based on our calculations in Javascript. 

The progress bar is just a div tag we styled to use and it is used to move the video forth and back and even drag it along the bar.

The skip buttons has a data-skip attribute to manage the skip time for back and forth skipping. (<a href="http://www.nikpro.com.au/create-a-html5-canvas-to-start-drawing-like-windows-paint/" target="_blank" rel="noopener noreferrer">This</a> is an example of dataset attributes as well). Lets jump to Javascript code.

## Javascript code

The very first thing we always need to do is to get all the elements we need to work with and get ready for coding.

### Getting all the elements

I have explained each and every element right in front of it. 

`<strong>const player = document.querySelector('.player');</strong>`// container element  
`<strong>const video = player.querySelector('.viewer');</strong>` // the video element  
`<strong>const progress = player.querySelector('.progress');</strong>` // progress container  
`<strong>const progressBar = player.querySelector('.progress__filled');</strong>` // the progress bar  
`<strong>const toggle = player.querySelector('.toggle');</strong>` // toggle button for play/pause the video  
`<strong>const skipButtons = player.querySelectorAll('[data-skip]');</strong>` //both skip buttons  
`<strong>const ranges = player.querySelectorAll('.player__slider');</strong>` // both volume and playbackRate ranges inputs

Now that all is ready, we move to our event listeners to see what needs to be listened to for each task.

#### Play and pause the video events

We have two elements that need to fire the togglePlay function which is the function to play or pause the video. Here is how we listen for the click events:

`<strong>video.addEventListener('click', togglePlay);</strong>`  
`<strong>toggle.addEventListener('click', togglePlay);</strong>`

Alongside we need to write the function to toggle the action. We use the HTML5 video element **paused** property to check if it is paused and play it accordingly:

`<strong>function togglePlay() {</strong>`  
`<strong>  if (video.paused) {</strong>`  
`<strong>    video.play();</strong>`  
`<strong>  } else {</strong>`  
`<strong>    video.pause();</strong>`  
`<strong>  }</strong>`  
`<strong>}</strong>`

All good. But it would be nicer if we using ternary operator and shorten the code as much as possible:

`<strong>function togglePlay() {</strong>`  
`<strong>  video.paused ?</strong>``<strong>video.play() :</strong>``<strong>video.pause();</strong>`  
`<strong>}</strong>`

Or we can even use a **const **value and set the method and then call it likewise. Whichever method is called it will play or pause the video:

`<strong>function togglePlay() {<br />
  const method = video.paused ? 'play' : 'paused';<br />
  video[method]();<br />
}}</strong>`

Which is more of a modern way.

#### Update the button icon

While we play and pause the video , the button icon for the toggle button should be updated. Therefore we have these two events  to listen to:

`<strong>video.addEventListener('play', updateButton);</strong>`  
`<strong>video.addEventListener('pause', updateButton);</strong>`

and we need to write the update function afterwards:

`<strong>function updateButton() {</strong>`  
`<strong>  const icon = this.paused ? '►' : '❚ ❚';</strong>`  
`<strong>  toggle.textContent = icon;</strong>`  
`<strong>}</strong>`

We are using ternary operator and like the togglePlay function using a const to save the value in it. So this.paused (this refers to video) is checking if the video has been paused and then it applies relevant icon as a result. Then it updates the content of the toggle element with it.

#### Range inputs

WE need to listen to two events to catch any change in the range inputs. The **change** event itself and the **mousemove **event. So if any mouse move happened or the input changed we could listen to both.

`<strong>ranges.forEach(function(range) { range.addEventListener('change', handleRangeUpdate);</strong>`  
`<strong>});</strong>`

`<strong>ranges.forEach(function(range) { range.addEventListener('mousemove', handleRangeUpdate);</strong>`  
`<strong>});</strong>`

Or the shorter and neater way with ES6 arrow functions:

`<strong>ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));</strong>`  
`<strong>ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));</strong>`

In these two forEach methods we listen to change and mousemove events and call the callback function handleRangeUpdate which we are going to write:

`<strong>function handleRangeUpdate() {</strong>`  
`<strong>  video[this.name] = this.value;</strong>`  
`<strong>}</strong>`

In the function, we update the name property of video inputs which are volume and playbackRange with their relevant values.

#### Skip buttons

We need to listen to click event for this to work for both skip buttons. We selected the buttons using data-skip attribute on the get elements section:

`<strong>skipButtons.forEach(function(button){ button.addEventListener('click', skip);});</strong>`

or the shorter version with arrow functions:

`<strong>skipButtons.forEach(button => button.addEventListener('click', skip));</strong>`

Lets write the function. In the buttons if we simply console.log(this.dataset) inside the function:

`<strong>function skip() {</strong>`  
`<strong> console.log(this.dataset.skip);</strong>`  
`<strong>}</strong>`

As we click on the buttons we get different values for this value of dataset object which is actually the amount we skipped the video. it needs to be added to the currentTime property of the video:

`<strong>function skip() {</strong>`  
`<strong> video.currentTime += parseFloat(this.dataset.skip);</strong>`  
`<strong>}</strong>`

and we wrap **this.dataset.skip** inside a parseFloat to convert it to a number as it is a string value.

#### Update the progress bar 

We need the progress scroller to update in real time with the video. We need to listen to timeupdate event which will update itself when the video updates its time code:

`<strong>video.addEventListener('timeupdate', handleProgress);</strong>`

And then write the handleProgress function.As of the style of .progress__filled class for the progress bar, we have the flex-basis property set to 50% and that property is actually based on the width of the element. So if we update that property with the percentage of the video&#8217;s current time divided by the video&#8217;s length, we visually update the progress bar. This is the percentage of the video&#8217;s current time:

`<strong>const percent = (video.currentTime / video.duration) * 100;</strong>` // currentTime and duration are video element properties

And in Javascript we need to set the flex-basis property to that amount as percentage. Here is the function:

`<strong>function handleProgress() {</strong>`  
`<strong>  const percent = (video.currentTime / video.duration) * 100;</strong>`   
``<strong>  progressBar.style.flexBasis = `${percent}%`;</strong>``  
`<strong>}</strong>`

Then we update the progressBar accordingly. We used ES6 <a href="http://www.nikpro.com.au/template-literals-in-js6-explained/" target="_blank" rel="noopener noreferrer">template literals</a> to update the flex-basis property in the second line. Also if we use the skip buttons the progress bar updates itself too.

#### The scrub

Finally we want to update the video if we scrub the progress bar.First we write the event to be listened to on the progress bar:

`<strong>progress.addEventListener('click', scrub);</strong>`

To write the corresponding function lets just log the event:

`<strong>function scrub(e) {</strong>`  
`<strong>  console.log(e);</strong>`  
`<strong>}</strong>`

Therefor You will see by clicking the bar in the console we get a mouseevent property called offsetX that is actually the point that we click the bar. We also get a offsetWidth property which is the bar width. then dividing them will give us a percentage of where the bar is clicked. And we multiply it by video&#8217;s duration to get the time. Then we update the currentTime of the video with that:

`<strong>function scrub(e) {</strong>`  
`<strong>  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;</strong>`  
`<strong>  video.currentTime = scrubTime;</strong>`  
`<strong>}</strong>`

#### Draggable bar

Next task is to make the bar draggable. We need to listen to mousemove, mousedown and mouseup events as dragging involves those events in.

`<strong>progress.addEventListener('mousemove', scrub);</strong>`

However if we only listen to mousemove the event happens over and over which is not great. We need to control it with a flag that indicates if the user fires the mousedown event it means they started to drag and if not, do not un the function at all. We create the flag and set it to false:

**let mousedown = false; **

Afterwards we listen to those events:

`<strong>progress.addEventListener('mousedown', () => mousedown = true);</strong>`  
`<strong>progress.addEventListener('mouseup', () => mousedown = false);</strong>`

Which we used arrow functions in the callback function. So when mousedoen happens, the flag sets to true and with mouseup, it sets to false again. And we update our mousemove event handler as well:

`<strong>progress.addEventListener('mousemove', () => {</strong>`

`<strong>  if(musedown){</strong>`

`<strong>    scrub();</strong>`

`<strong>  }</strong>`

`<strong>);</strong>`

But there is a shorter way:

`<strong>progress.addEventListener('mousemove', (e) => mousedown && scrub(e));</strong>`

Actually what this does is when the mousemove happens, it checks if the mousedoen is true. If it is, it runs the scrub function with the event passed into it ( as in the function as well). If the mousedown is false it does not go further than && operator.

And that was all. We have a HTML5 video that runs different events and functions as we expect. Here is the video again. Thanks for reading.

<p class="codepen" data-height="400" data-theme-id="0" data-slug-hash="yqpBgM" data-default-tab="css,result" data-user="azad6026" data-pen-title="Customise HTML5 video player">
  See the Pen <a href="https://codepen.io/azad6026/pen/yqpBgM/">Customise HTML5 video player</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>
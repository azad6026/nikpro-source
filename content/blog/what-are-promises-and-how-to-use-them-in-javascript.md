---
id: 31847
title: What are promises and how to use them in Javascript
date: 2018-07-12T22:31:12+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31847
permalink: /what-are-promises-and-how-to-use-them-in-javascript/
image: es6-promises.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - callbacks
  - promises
---
One of the new features that has natively been added since ES6 is the promises. What are promises and how to use them in Javascript effectively? We will lean how to use it first and then we will create one.

## How and where to use a promise

A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.") is an object representing the eventual completion or failure of an asynchronous operation. JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another.Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

This is the old way of using callback functions:

`<strong>function successCallback(result) {</strong>`  
`<strong>console.log("Audio file ready at URL: " + result);</strong>`  
`<strong>}</strong>`

`<strong>function failureCallback(error) {</strong>`  
`<strong>console.log("Error generating audio file: " + error);</strong>`  
`<strong>};</strong>`

`<strong>createAudioFileAsync(audioSettings, successCallback, failureCallback);</strong>`

Using a promise , we will do this instead:

`<strong>const promise = createAudioFileAsync(audioSettings); </strong>`  
`<strong>promise.then(successCallback, failureCallback);</strong>`

Which we can use the shorthand like this:

`<strong>createAudioFileAsync(audioSettings).then(successCallback, failureCallback);</strong>`

This is **an _asynchronous function call_.** And ** then **returns the promise. We explain it with examples.

### What do promise guarantees

  * Using promises, it is guaranteed that callbacks will not get called until the event loop has been completed.
  * Also callbacks added by **then will be called **even if asynchronous calls being failed or succeeded.
  * Each callback is executed one after another, in the order in which they were inserted.

### Using multiple promises

To execute two or more asyncronous operations one after another, we could se promises as promise chain:

`<strong>const promise2 = doSomething().then(successCallback, failureCallback);</strong>`

This promise2 represents the completion of dosomething and also the callback functions succcessCallback and failureCallback. Each promise represents the completion of another asynchronous step in the chain.

Doing several asynchronous operations was a pain beore:

`<strong>doSomething(function(result) {</strong>`  
`<strong>  doSomethingElse(result, function(newResult) {</strong>`  
`<strong>    doThirdThing(newResult, function(finalResult) {</strong>`  
`<strong>      console.log('Got the final result: ' + finalResult);</strong>`  
`<strong>    }, failureCallback);</strong>`  
`<strong>  }, failureCallback);</strong>`  
`<strong>}, failureCallback);</strong>`

With promises , we attach the callbackes to the returned promises instead and build a promise chain:

`<strong>doSomething().then(function(result) {</strong>`  
`<strong>  return doSomethingElse(result);</strong>`  
`<strong>})</strong>`  
`<strong>.then(function(newResult) {</strong>`  
`<strong>  return doThirdThing(newResult);</strong>`  
`<strong>})</strong>`  
`<strong>.then(function(finalResult) {</strong>`  
`<strong>console.log('Got the final result: ' + finalResult);</strong>`  
`<strong>})</strong>`  
`<strong>.then(null, failureCallback).</strong>`

Using [arrow functions](http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) in ES6 we can write the above example like this:

`<strong>doSomething()</strong>`  
`<strong>.then(result => doSomethingElse(result))</strong>`  
`<strong>.then(newResult => doThirdThing(newResult))</strong>`  
`<strong>.then(finalResult => {</strong>`  
``<strong>  console.log(`Got the final result: ${finalResult}`);</strong>``  
`<strong>})</strong>`  
`<strong>.then(null, failureCallback); // we can write catch(failureCallback); in this line as a shorthand</strong>`

Remember to always return a result otherwise callbacks will not catch the result of the previous promise. Now that we know how to use them n practice, we better define them.

<img class="aligncenter wp-image-31849 size-full" src="http://www.nikpro.com.aupromised-land.jpeg" alt="" width="640" height="480" srcset="http://testgatsby.localpromised-land.jpeg 640w, http://testgatsby.localpromised-land-300x225.jpeg 300w" sizes="(max-width: 640px) 100vw, 640px" /> 

## How to create a promise

The **`Promise`** object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.Essentially, a promise is a returned object you attach callbacks to, instead of passing callbacks into a function. This is the syntax to create a promise:

`<strong>new Promise( /* executor */ function(resolve, reject) { ... } );</strong>`

This is and example of a simple promise:

`<strong>const myFirstPromise = new Promise((resolve, reject) => {</strong>`  
`<strong>  // do something asynchronous which eventually calls either:</strong>`  
`<strong>  //</strong>`  
`<strong>  // resolve(someValue); // fulfilled</strong>`  
`<strong>  // or</strong>`  
`<strong>  // reject("failure reason"); // rejected</strong>`  
`<strong>});I </strong>`

The promise constructor takes in one argument: a **callback** function with two parameters — **resolve** and **reject**. We then can use it as we learnt above:

`<strong>promise.then(function(result) {</strong>`  
`<strong>  console.log("Promise worked");</strong>`  
`<strong>}, function(err) {</strong>`  
`<strong>console.log("Something broke");</strong>`  
`<strong>});</strong>`

If promise was successful, a resolve will happen and the console will log Promise worked, otherwiseSomething broke.

### A real example

We use an example to [connect to an API](http://www.nikpro.com.au/how-to-connect-to-an-api-with-javascript-in-a-real-app/) to explain it here:

`<strong>const loadImage = url => {</strong>`  
`<strong>   return new Promise(function(resolve, reject) {</strong>`

`<strong>     //Open a new XHR</strong>`  
`<strong>     var request = new XMLHttpRequest();</strong>`  
`<strong>     request.open('GET', url);</strong>`

`<strong>     // When the request loads, check whether it was successful</strong>`  
`<strong>     request.onload = function() {</strong>`  
`<strong>       if (request.status === 200) {</strong>`  
`<strong>      // If successful, resolve the promise</strong>`  
`<strong>        resolve(request.response);</strong>`  
`<strong>      } else {</strong>`  
`<strong>       // Otherwise, reject the promise</strong>`  
`<strong>       reject(Error('An error occurred while loading image. error code:' + request.statusText));</strong>`  
`<strong>     }</strong>`  
`<strong>   };</strong>`

`<strong>     request.send();</strong>`  
`<strong>  });</strong>`

`<strong>};</strong>`

Once the image is successfully loaded, promise will resolve with the response from XHR. We now use this promise by calling the loadImage function:

`<strong>const embedImage = url => {</strong>`  
`<strong>  loadImage(url).then(function(result) {</strong>`  
`<strong>    const img = new Image();</strong>`  
`<strong>    var imageURL = window.URL.createObjectURL(result);</strong>`  
`<strong>    img.src = imageURL;</strong>`  
`<strong>    document.querySelector('body').appendChild(img);</strong>`  
`<strong>  },</strong>`  
`<strong>  function(err) {</strong>`  
`<strong>    console.log(err);</strong>`  
`<strong>  });</strong>`  
`<strong>}</strong>`

Here we use the promise to add the image to the DOM. Or if we failed to throw and error. 

The promises could be used in variety of functions and different situations. There are lots of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">resources</a> to check out and read and learn about them. what we covered was the introduction to the most important aspects of promises.
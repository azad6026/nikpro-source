---
id: 31847
title: What are promises and how to use them in Javascript
date: 2018-07-12T22:31:12+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31847
permalink: /what-are-promises-and-how-to-use-them-in-javascript/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/es6-promises.png
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

`function successCallback(result) {`  
`console.log("Audio file ready at URL: " + result);`  
`}`

`function failureCallback(error) {`  
`console.log("Error generating audio file: " + error);`  
`};`

`createAudioFileAsync(audioSettings, successCallback, failureCallback);`

Using a promise , we will do this instead:

`const promise = createAudioFileAsync(audioSettings); `  
`promise.then(successCallback, failureCallback);`

Which we can use the shorthand like this:

`createAudioFileAsync(audioSettings).then(successCallback, failureCallback);`

This is **an _asynchronous function call_.** And ** then **returns the promise. We explain it with examples.

### What do promise guarantees

  * Using promises, it is guaranteed that callbacks will not get called until the event loop has been completed.
  * Also callbacks added by **then will be called **even if asynchronous calls being failed or succeeded.
  * Each callback is executed one after another, in the order in which they were inserted.

### Using multiple promises

To execute two or more asyncronous operations one after another, we could se promises as promise chain:

`const promise2 = doSomething().then(successCallback, failureCallback);`

This promise2 represents the completion of dosomething and also the callback functions succcessCallback and failureCallback. Each promise represents the completion of another asynchronous step in the chain.

Doing several asynchronous operations was a pain beore:

`doSomething(function(result) {`  
`  doSomethingElse(result, function(newResult) {`  
`    doThirdThing(newResult, function(finalResult) {`  
`      console.log('Got the final result: ' + finalResult);`  
`    }, failureCallback);`  
`  }, failureCallback);`  
`}, failureCallback);`

With promises , we attach the callbackes to the returned promises instead and build a promise chain:

`doSomething().then(function(result) {`  
`  return doSomethingElse(result);`  
`})`  
`.then(function(newResult) {`  
`  return doThirdThing(newResult);`  
`})`  
`.then(function(finalResult) {`  
`console.log('Got the final result: ' + finalResult);`  
`})`  
`.then(null, failureCallback).`

Using [arrow functions](http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) in ES6 we can write the above example like this:

`doSomething()`  
`.then(result => doSomethingElse(result))`  
`.then(newResult => doThirdThing(newResult))`  
`.then(finalResult => {`  
``  console.log(`Got the final result: ${finalResult}`);``  
`})`  
`.then(null, failureCallback); // we can write catch(failureCallback); in this line as a shorthand`

Remember to always return a result otherwise callbacks will not catch the result of the previous promise. Now that we know how to use them n practice, we better define them.

<img class="aligncenter wp-image-31849 size-full" src="http://www.nikpro.com.aupromised-land.jpeg" alt="" width="640" height="480" srcset="http://testgatsby.localpromised-land.jpeg 640w, http://testgatsby.localpromised-land-300x225.jpeg 300w" sizes="(max-width: 640px) 100vw, 640px" /> 

## How to create a promise

The **`Promise`** object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.Essentially, a promise is a returned object you attach callbacks to, instead of passing callbacks into a function. This is the syntax to create a promise:

`new Promise( /* executor */ function(resolve, reject) { ... } );`

This is and example of a simple promise:

`const myFirstPromise = new Promise((resolve, reject) => {`  
`  // do something asynchronous which eventually calls either:`  
`  //`  
`  // resolve(someValue); // fulfilled`  
`  // or`  
`  // reject("failure reason"); // rejected`  
`});I `

The promise constructor takes in one argument: a **callback** function with two parameters — **resolve** and **reject**. We then can use it as we learnt above:

`promise.then(function(result) {`  
`  console.log("Promise worked");`  
`}, function(err) {`  
`console.log("Something broke");`  
`});`

If promise was successful, a resolve will happen and the console will log Promise worked, otherwiseSomething broke.

### A real example

We use an example to [connect to an API](http://www.nikpro.com.au/how-to-connect-to-an-api-with-javascript-in-a-real-app/) to explain it here:

`const loadImage = url => {`  
`   return new Promise(function(resolve, reject) {`

`     //Open a new XHR`  
`     var request = new XMLHttpRequest();`  
`     request.open('GET', url);`

`     // When the request loads, check whether it was successful`  
`     request.onload = function() {`  
`       if (request.status === 200) {`  
`      // If successful, resolve the promise`  
`        resolve(request.response);`  
`      } else {`  
`       // Otherwise, reject the promise`  
`       reject(Error('An error occurred while loading image. error code:' + request.statusText));`  
`     }`  
`   };`

`     request.send();`  
`  });`

`};`

Once the image is successfully loaded, promise will resolve with the response from XHR. We now use this promise by calling the loadImage function:

`const embedImage = url => {`  
`  loadImage(url).then(function(result) {`  
`    const img = new Image();`  
`    var imageURL = window.URL.createObjectURL(result);`  
`    img.src = imageURL;`  
`    document.querySelector('body').appendChild(img);`  
`  },`  
`  function(err) {`  
`    console.log(err);`  
`  });`  
`}`

Here we use the promise to add the image to the DOM. Or if we failed to throw and error. 

The promises could be used in variety of functions and different situations. There are lots of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">resources</a> to check out and read and learn about them. what we covered was the introduction to the most important aspects of promises.
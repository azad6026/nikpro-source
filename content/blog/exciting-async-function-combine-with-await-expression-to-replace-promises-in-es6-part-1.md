---
id: 32348
title: 'Exciting Async function combine with await expression to replace promises in ES6: part 1'
date: 2018-10-05T21:58:49+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32348
permalink: /exciting-async-function-combine-with-await-expression-to-replace-promises-in-es6-part-1/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/js-async-await.png
categories:
  - ES6
  - JAVASCRIPT
---
Just like [other](http://www.nikpro.com.au/javascript-es6-modern-rest-parameters-are-explained-with-examples/) ES6 features async function and await expression made a huge difference inside Javascript language. Combining these two we can better control promises and replace them when needed.

## Async function declaration

Technically async function defines an asynchronous function that has an implicit [Promise](http://www.nikpro.com.au/what-are-promises-and-how-to-use-them-in-javascript/) to return its result. We simply add async to the beginning of the function.<figure class="wp-block-image">

<img src="http://www.nikpro.com.auasyncawaitsyntaax.png" alt="" class="wp-image-32349" srcset="http://testgatsby.localasyncawaitsyntaax.png 1280w, http://testgatsby.localasyncawaitsyntaax-300x94.png 300w, http://testgatsby.localasyncawaitsyntaax-768x240.png 768w, http://testgatsby.localasyncawaitsyntaax-1024x320.png 1024w" sizes="(max-width: 1280px) 100vw, 1280px" /> <figcaption>Async function syntax with await expression</figcaption></figure> 

Generally we know that everything in Javascript executes synchronously. Therefor to make asynchronous calls we need to change the code structure so that we get the results we desire. As a comparison to promises this is how it looks like:


```
// Async/Await version<br />async function helloAsync() {<br />  return "hello";<br />}<br />// Promises version<br />function helloAsync() {<br />  return new Promise(function (resolve) {<br />    resolve("hello");<br />  });<br />}
```


## Await expression

In addition await expression which only works inside an async function (otherwise throws an Error) pauses the async function&#8217;s execution and returns whatever the function returns when it is done. Therefor the function&#8217;s promise is being resolved in another word.<figure class="wp-block-image">

<img src="http://www.nikpro.com.auasync-javascript.jpg" alt="" class="wp-image-32351" srcset="http://testgatsby.localasync-javascript.jpg 1050w, http://testgatsby.localasync-javascript-300x103.jpg 300w, http://testgatsby.localasync-javascript-768x263.jpg 768w, http://testgatsby.localasync-javascript-1024x351.jpg 1024w" sizes="(max-width: 1050px) 100vw, 1050px" /> </figure> 

### Async await simple example

Normally we write code which looks like this using promises and **then** method:


```
const makeRequest = () =><br />  getJSON()<br />    .then(data => {<br />      console.log(data)<br />      return "done"<br />    })<br />makeRequest()
```


We know that getJSON returns a promise and then we use that data and return &#8220;done&#8221;. We could write it this way using async await:

```
<br />const makeRequest = async () => {<br />  console.log(await getJSON())<br />  return "done"<br />}<br />makeRequest()
```


Any **`async`** function returns a **promise implicitly**, and the **resolve value of the promise will be whatever you `return` from the function** (which is the string `"done"` in this case).

Therefor we have await for getJSON which means it console.log waits until getJSON resolves its promise and returns its value.

### Error handling in async function

Obviously we have to use error handling to make sure we will catch unwanted results and errors. One of the best ways is to put the code in the old try and catch block:


```
const makeRequest = async () => {<br />  try {<br />    // this parse may fail<br />    const data = JSON.parse(await getJSON())<br />    console.log(data)<br />  } catch (err) {<br />    console.log(err)<br />  }<br />}
```


We see how clean and neat the code looks like. Also it is more maintainable and easy to understand.<figure class="wp-block-image">

<img src="http://www.nikpro.com.auasync-await-foreach.png" alt="" class="wp-image-32352" srcset="http://testgatsby.localasync-await-foreach.png 1068w, http://testgatsby.localasync-await-foreach-300x129.png 300w, http://testgatsby.localasync-await-foreach-768x329.png 768w, http://testgatsby.localasync-await-foreach-1024x439.png 1024w" sizes="(max-width: 1068px) 100vw, 1068px" /> <figcaption>Using async function in a forEach loop</figcaption></figure> 

### A promise chain with Async function and await

Sometimes working with API&#8217;s we might have chain of promises. Imagine <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank" rel="noopener noreferrer">this code</a>:


```
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}
```


The returned data has been split into a few parts. Using Async function and its await expression we could change the code to below:


```
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url); 
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```


Basically we are using try catch block to make it easier to manage. The important note here is the return value of async function does not have await on it because it implicitly wrapped in Promise.Resolve.

In the [next article](http://www.nikpro.com.au/async-function-and-await-expression-combine-with-promise-all-explained-part-2/) I will demonstrate this subject with more advanced examples.

Thank you for reading.
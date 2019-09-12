---
id: 32357
title: 'Async function and await expression combine with promise.all explained: part 2'
date: 2018-10-06T20:50:22+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32357
permalink: /async-function-and-await-expression-combine-with-promise-all-explained-part-2/
xyz_twap:
  - "1"
# image: ../../static/images/js-async-await.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - async await
  - promise.all
---
Continuing our [first article](http://www.nikpro.com.au/exciting-async-function-combine-with-await-expression-to-replace-promises-in-es6-part-1/) around async function and await expression, we will explain them using promise.all in this post. Ideally we will see how to use them in a beneficial and in the right place.

## Await a few promises

There are times that we might need to call a few promises at the same time and need to wait for them to resolve.  Therefor we don&#8217;t need to wait for them one by one. We could use promise.all.

### Promise.all

According to MDN the `Promise.all(iterable)` method returns a single [`Promise.`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) That promise resolves when all of the promises in the method have resolved or when it contains no promises. Also it rejects with the reason of the first promise that rejects.

#### A simple example

```<code>var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});</code>```

As a result the values as an output from all three resolved promises. If a promise fails promise.all fails as well:

```<code>var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p);
});</code>```

As a result the second promise is rejected:

```<code>// logs
// Promise { &lt;state>: "pending" } 
// the stack is now empty
// Promise { &lt;state>: "rejected", &lt;reason>: 44 }</code>```

Now that we know how it works we checkout and example with async await.<figure class="wp-block-image">

<img src="http://www.nikpro.com.aupromise.all_.png" alt="" class="wp-image-32359" srcset="http://testgatsby.localpromise.all_.png 1600w, http://testgatsby.localpromise.all_-300x124.png 300w, http://testgatsby.localpromise.all_-768x317.png 768w, http://testgatsby.localpromise.all_-1024x423.png 1024w, http://testgatsby.localpromise.all_-1568x648.png 1568w" sizes="(max-width: 1600px) 100vw, 1600px" /> <figcaption>promise.all</figcaption></figure> 

#### Advanced example with async await

Practically we can use them for real world example like this one in <a href="https://gist.github.com/wesbos/1866f918824936ffb73d8fd0b02879b4" target="_blank" rel="noopener noreferrer">Github</a>. We want to make some API requests along with making a coffee. Read along the comments:

```// This is a function to make coffee which takes 2 seconds!! really?<br />function getCoffee() {<br />  return new Promise(resolve => {<br />    setTimeout(() => resolve('&#x2615;'), 2000); // it takes 2 seconds to make coffee !!<br />  });<br />}<br /><br />// we add async to the whole function<br />async function go() {<br />  try {<br />    // and first, make our coffee<br />    const coffee = await getCoffee();<br />    console.log(coffee); // &#x2615;<br />    // then we grab some data over an Ajax request and wait for it too<br />    const user = await axios('https://api.github.com/users/user');<br />    console.log(user.data); // mediocre code<br />    // not always we want to wait.<br />    // make three requests and save their promises for us<br />    const wordPromise = axios('http://www.setgetgo.com/randomword/get.php');<br />    const userPromise = axios('https://randomuser.me/api/');<br />    const namePromise = axios('https://uinames.com/api/');<br />    // then we await all three promises to come back and <a href="http://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/">destructure</a> the result into their own variables using ES6 features<br />    const [word, user, name] = await Promise.all([wordPromise, userPromise, namePromise]);<br />    console.log(word.data, user.data, name.data); // cool, {...}, {....}<br />  } catch (e) {<br />    console.error(e); // &#x1f4a9;<br />  }<br />}<br />go();```

Great. Successfully we have saved a few unnecessary await as we didn&#8217;t really need to wait for them to be resolved one by one.<figure class="wp-block-image">

<img src="http://www.nikpro.com.aupromisesasync.jpeg" alt="" class="wp-image-32362" srcset="http://testgatsby.localpromisesasync.jpeg 744w, http://testgatsby.localpromisesasync-300x161.jpeg 300w" sizes="(max-width: 744px) 100vw, 744px" /> <figcaption>Lets  await the promises</figcaption></figure> 

Also we could use it when a promise uses other promise&#8217;s return value and also there is a third promise as well:

<pre class="wp-block-preformatted"><br />const makeRequest = () => {<br />  return promise1()<br />    .then(value1 => {<br />      // do something<br />      return promise2(value1)<br />        .then(value2 => {<br />          // do something          <br />          return promise3(value1, value2)<br />        })<br />    })<br />}```

If we use promise.all only:

```const makeRequest = () => {<br />  return promise1()<br />    .then(value1 => {<br />      // do something<br />      return Promise.all([value1, promise2(value1)])<br />    })<br />    .then(([value1, value2]) => {<br />      // do something          <br />      return promise3(value1, value2)<br />    })<br />}```

But the simplest and best option here is to use async await and make it clean and more semantic:

```const makeRequest = async () => {<br />  const value1 = await promise1()<br />  const value2 = await promise2(value1)<br />  return promise3(value1, value2)<br />}```

We do both promises asynchronously and the third promise keeps the returned value.

Here we explained a few more examples in promises implementing async await and promise.all. We will talk more about complex examples in the future.

Thank you for reading.
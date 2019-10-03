---
id: 32357
title: "Async function and await expression combine with promise.all explained: part 2"
date: 2018-10-06T20:50:22+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32357
permalink: /async-function-and-await-expression-combine-with-promise-all-explained-part-2/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/js-async-await.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - async await
  - promise.all
---

Continuing our [first article](https://www.nikpro.com.au/exciting-async-function-combine-with-await-expression-to-replace-promises-in-es6-part-1/) around async function and await expression, we will explain them using promise.all in this post. Ideally we will see how to use them in a beneficial and in the right place.

## Await a few promises

There are times that we might need to call a few promises at the same time and need to wait for them to resolve.  Therefor we don&#8217;t need to wait for them one by one. We could use promise.all.

### Promise.all

According to MDN the `Promise.all(iterable)` method returns a single [`Promise.`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) That promise resolves when all of the promises in the method have resolved or when it contains no promises. Also it rejects with the reason of the first promise that rejects.

#### A simple example

```
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
```

As a result the values as an output from all three resolved promises. If a promise fails promise.all fails as well:

```
var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p);
});
```

As a result the second promise is rejected:

```
// logs
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "rejected", <reason>: 44 }
```

Now that we know how it works we checkout and example with async await.

<img src="https://www.nikpro.com.aupromise.all_.png" alt="promise.all" class="wp-image-32359" srcset="https://testgatsby.localpromise.all_.png 1600w, https://testgatsby.localpromise.all_-300x124.png 300w, https://testgatsby.localpromise.all_-768x317.png 768w, https://testgatsby.localpromise.all_-1024x423.png 1024w, https://testgatsby.localpromise.all_-1568x648.png 1568w" sizes="(max-width: 1600px) 100vw, 1600px" />

#### Advanced example with async await

Practically we can use them for real world example like this one in <a href="https://gist.github.com/wesbos/1866f918824936ffb73d8fd0b02879b4" target="_blank" rel="noopener noreferrer">Github</a>. We want to make some API requests along with making a coffee. Read along the comments:

```
// This is a function to make coffee which takes 2 seconds!! really?
function getCoffee() {
  return new Promise(resolve => {
    setTimeout(() => resolve('&#x2615;'), 2000); // it takes 2 seconds to make coffee !!
  });
}

// we add async to the whole function
async function go() {
  try {
    // and first, make our coffee
    const coffee = await getCoffee();
    console.log(coffee); // &#x2615;
    // then we grab some data over an Ajax request and wait for it too
    const user = await axios('https://api.github.com/users/user');
    console.log(user.data); // mediocre code
    // not always we want to wait.
    // make three requests and save their promises for us
    const wordPromise = axios('https://www.setgetgo.com/randomword/get.php');
    const userPromise = axios('https://randomuser.me/api/');
    const namePromise = axios('https://uinames.com/api/');
    // then we await all three promises to come back and <a href="https://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/">destructure</a> the result into their own variables using ES6 features
    const [word, user, name] = await Promise.all([wordPromise, userPromise, namePromise]);
    console.log(word.data, user.data, name.data); // cool, {...}, {....}
  } catch (e) {
    console.error(e); // &#x1f4a9;
  }
}
go();
```

Great. Successfully we have saved a few unnecessary await as we didn&#8217;t really need to wait for them to be resolved one by one.

<img src="https://www.nikpro.com.aupromisesasync.jpeg" alt="lets  await the promises" class="wp-image-32362" srcset="https://testgatsby.localpromisesasync.jpeg 744w, https://testgatsby.localpromisesasync-300x161.jpeg 300w" sizes="(max-width: 744px) 100vw, 744px" />

Also we could use it when a promise uses other promise&#8217;s return value and also there is a third promise as well:

```

const makeRequest = () => {
  return promise1()
    .then(value1 => {
      // do something
      return promise2(value1)
        .then(value2 => {
          // do something
          return promise3(value1, value2)
        })
    })
}
```

If we use promise.all only:

```
const makeRequest = () => {
  return promise1()
    .then(value1 => {
      // do something
      return Promise.all([value1, promise2(value1)])
    })
    .then(([value1, value2]) => {
      // do something
      return promise3(value1, value2)
    })
}
```

But the simplest and best option here is to use async await and make it clean and more semantic:

```
const makeRequest = async () => {
  const value1 = await promise1()
  const value2 = await promise2(value1)
  return promise3(value1, value2)
}
```

We do both promises asynchronously and the third promise keeps the returned value.

Here we explained a few more examples in promises implementing async await and promise.all. We will talk more about complex examples in the future.

Thank you for reading.

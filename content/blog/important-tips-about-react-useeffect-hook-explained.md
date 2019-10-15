---
id: 40000
title: Important tips about React useEffect hook explained
date: 2019-10-15T20:20:45+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=40000
permalink: /important-tips-about-react-useeffect-hook-explained/
featuredImage: ../../static/images/react-useeffect-tips.png
# featuredImage: ../../static/images/flexbox-dice.png
categories:
  - React
tags:
  - hooks
  - useEffect
---

In fact React useEffect hook could be tricky to understand as we use it in many different situations in our [functional components](https://nikpro.com.au/functional-component-in-react-explained-with-examples/). Here are some important tips that we need to know to use it effectively in various use cases. We use sme example code to make a better understanding.

## React useEffect API explanation

We know that [useEffect hook](https://reactjs.org/docs/hooks-reference.html#useeffect) is to be used in side effects, subscriptions, mutations and other side effects as per API:

```
useEffect(didUpdate);
```

This means all the effects related to Mounting, Unmounting and Updating happens in this hook. Simple and effective.

## The important tip in the syntax

Basically useEffect just like other hooks takes or better say could take two arguments. First one is the function that runs is every **render or update**:

```
 import React, { useState, useEffect } from 'react';

 const Example  =>  {
  // useState defines and maintaines the count variable simply
  const [count, setCount] = useState(0);

  // The title gets updated by updated count variable
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Generally we use this hook to manage our updates and side effects. In the above code, we simply update the title of the document using te DOM API by each click on the button. Therefore on each render the useEffect runs.

### useEffect second argument for performance and control

But as we mentioned useEffect accepts another argument that tells React "When" to run the side effect. What I mean by that is we might need the useEffec to run only when the value(s) are changed.Therefore we are able to use the second argument as an array of variables so React will watch the state variables for a change (here count):

```
  useEffect(() => {
    () => { document.title = `You clicked ${count} times`; },
    [count]
  });

```

As a result React will render the useEffect hook only if the variable changes. This decreases unwanted renders and skips the run when there is no need.

### One time render

Practically if we need to run the useEffect only once, the second argument should be an empty array:

```
  useEffect(() => {
    () => { document.title = `You clicked ${count} times`; },
    []
  });

```

### React cleanup or Unmount effect

However we might need cleanups or performing a componentWillUnmount job in some cases. We need to return a function from our hook to make that happen:

```
useEffect(() => {
  console.log(`Hi, you clicked ${count} times`)

  // Unmounting happens in the return
  return () => {
    console.log(`Unmounted`)
  }
})
```

Using useEffect hook efficiently could be tricky and confusing. Using these simple yet useful tips will help keep the code clean and simple. Read more in depth about React hooks in the [React docs](https://reactjs.org/docs/hooks-effect.html).

Thank you for reading.

---
id: 32032
title: Using map method in React components with examples explained
date: 2018-08-15T21:48:18+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32032
permalink: /using-map-method-in-react-components-with-examples-explained/
image: ../../static/images/reactmap.png
categories:
  - ES6
  - React
tags:
  - map method in React
---
It is interesting to know about using [map method](http://www.nikpro.com.au/javascript-es6-maps-with-examples/) in React components. I came across it and wanted to explain it in a few examples in this post.

### Using map in Javascript

In a normal Javascript example this is how we use map method to create a new mapped array ( using [arrow functions](http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) in practice):

```<code>const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);</code>```

Obviously the numbers array is intact and we have created a new array which has doubled values for each key.

### Using map method in React example

To be able to render a list using  map method in React we could do the same thing:

```<code>const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  &lt;li>{number}&lt;/li>
);</code>```

We just return the values in list items. And we can render it in our component in and unordered list:

```<code>ReactDOM.render(
  &lt;ul>{listItems}&lt;/ul>,
  document.getElementById('root')
);</code>```

The only problem is although the list is showing but each child should have a unique key prop. A “key” is a special string attribute you need to include when creating lists of elements. 

Using keys

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. 

**Using map method in React example with key**

Therefor we add the key for each list item to make sure each element is unique and identifiable:

```<code>const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  &lt;li key={number.toString()}>
    {number}
  &lt;/li>
);</code>```

So the above component will look like this using map method in React example:

```<code>function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    &lt;li key={number.toString()}>
      {number}
    &lt;/li>
  );
  return (
    &lt;ul>{listItems}&lt;/ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  &lt;NumberList numbers={numbers} />,
  document.getElementById('root')
);</code>```

Moreover we could inline the map results as we write JSX in React. So this is the same as above example:

```<code>function NumberList(props) {
  const numbers = props.numbers;
  return (
    &lt;ul>
      {numbers.map((number) =>
        &lt;ListItem key={number.toString()}
                  value={number} />
      )}
    &lt;/ul>
  );
}</code>```

**A post example**

As another example we can extract a post array with separate key value pairs using the id for the key:

```<code>const content = posts.map((post) =>
  &lt;Post
    key={post.id}
    id={post.id}
    title={post.title} />
);</code>```

As a result we could extract whatever needed from the array as long as we specify the key for each item. Using map method in React makes it easy and convenient to pull out data out of the array like list items and use them in our components. Thanks for reading.
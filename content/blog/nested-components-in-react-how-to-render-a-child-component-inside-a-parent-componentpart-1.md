---
id: 32518
title: Nested components in React; How to render a child component inside a parent component:Part 1
date: 2018-11-06T20:48:29+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32518
permalink: /nested-components-in-react-how-to-render-a-child-component-inside-a-parent-componentpart-1/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/react.png
categories:
  - React
tags:
  - nested components
---

Once we start writing real world applications in React we need to learn about nested components. How we could actually render a child component inside a parent component and how to pass the state and props. In a series of articles we are going to cover this with examples.

## Passing props down

Basically we have to understand that **props can only be passed down to the child components.** Meaning we **could never pass props from child to parent component**. Secondly **props are read only**. Meaning we **cannot update them as we do for states.**

Therefor knowing these two facts lets take a look at this very useful example from <a href="https://reactjs.org/docs/lists-and-keys.html" target="_blank" rel="noreferrer noopener">Reactjs</a>. We have got an array of numbers to show as a list in frontend:

```
const numbers = [1, 2, 3, 4, 5, 6];
```


Our first approach is to create a component to loop through the array and output them:

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
```


Obviously our list is created via a loop through our array with map to generate list items. As a result our NumberList component returns an unordered list of items:

```

ReactDOM.render( 
  <NumberList numbers={numbers} />, 
  document.getElementById('root')
);
```



<img class="wp-image-32521" src="https://www.nikpro.com.aupassdata.png" alt="pass data down" srcset="https://testgatsby.localpassdata.png 591w, https://testgatsby.localpassdata-300x175.png 300w" sizes="(max-width: 591px) 100vw, 591px" /> <figcaption>passing data and events between child and parent components</figcaption> 


## Extract components to nested components

Now if we [extract our component](https://www.nikpro.com.au/how-to-extract-components-in-react-with-example/) to two seperate component we could have nested components and see how to pass props in that case. Our NumberList Component will be changed and we extract it to two components:

```
// Child component
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}
// Parent component
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

Practically we have our **ListItem** component as the **child** component. Inside NumberList component we pass the props to the ListItem component once we initialise its properties:

```
const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
```

Therefor **ListItem component will have access to the mapped numbers**. As a result we can now create our list inside our child component using passed props:

```
 return <li>{props.value}</li>;
```

Finally we return our list in the parent component:

```
 return (
    <ul>
      {listItems}
    </ul>
  );
```

This is the core concept of passing props from top to bottom or from parent to child components in React. Understanding this will help to die into real world examples. In the next article we will see some more complex examples and we will pass states down as props into child components as well.

Thank you for reading.

---
id: 32022
title: React element blocks explained with some examples
date: 2018-08-13T20:26:05+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32022
permalink: /react-element-blocks-explained-with-some-examples/
# image: ../../static/images/reac-element.png
categories:
  - React
tags:
  - React element
  - render an element into the DOM
---
 

As it states in React docs a React element is the smallest [building block](http://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/) of a React application. It describes what you want to be shown in your screen. Components are made of these React elements in practice.

## Render React element into the DOM

This is a simple example of how to render a simple React element into the root of the DOM:


```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```


The element is actually a HTML code that could be considered as our view which will be rendered into our DOM. In this example we render the element into the HTML tag that have root id.

## React element in components

**An element is a plain object _describing_ a component instance or DOM node and its desired properties.** It contains only information about the component type (for example, a `Button`), its properties (for example, its `color`), and any child elements inside it. Thi is stated in the React blog. Take a look at this example:


```
<button class='button button-blue'>
  <b>
    OK!
  </b>
</button>
```


This is a DOM element that will be rendered as this in React:


```
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}
```


Moreover take a look at this example also which is a component described by React element and see how it will be rendered into the DOM:


```
const DeleteAccount = () => (
  <div>
    <p>Are you sure?</p>
    <DangerButton>Yep</DangerButton>
    <Button color='blue'>Cancel</Button>
  </div>
);
```


**An element describing a component is also an element, just like an element describing the DOM node. They can be nested and mixed with each other. **This will be rendered as the below code into the DOM:


```
const DeleteAccount = () => ({
  type: 'div',
  props: {
    children: [{
      type: 'p',
      props: {
        children: 'Are you sure?'
      }
    }, {
      type: DangerButton,
      props: {
        children: 'Yep'
      }
    }, {
      type: Button,
      props: {
        color: 'blue',
        children: 'Cancel'
      }
   }]
});<br />
```


As a result you see clearly that it creates the DOM based on our elements or the view  and renders them with their own properties as **props**. Each and every tag has its own props and children and type rendered as we specify in our element declaration.

  * `Button` is a DOM `<button>` with specific properties.
  * `DangerButton` is a `Button` with specific properties.
  * `DeleteAccount` contains a `Button` and a `DangerButton` inside a `<div>`.

**One more example**

Additionally take a look at this form as a React element as a form:


```
ReactDOM.render({
  type: Form,
  props: {
    isSubmitted: false,
    buttonText: 'OK!'
  }
}, document.getElementById('root'));
```


Firstly React will ask the `Form` component what element tree it returns, given those `props`. It will find out how to render the form elements into the DOM:


```
// React: You told me this...
{
  type: Form,
  props: {
    isSubmitted: false,
    buttonText: 'OK!'
  }
}

// React: ...And Form told me this...
{
  type: Button,
  props: {
    children: 'OK!',
    color: 'blue'
  }
}
```


Finally it will go on and will render all needed tags into the DOM:


```
// React: ...and Button told me this! I guess I'm done.
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}
```


From the declaration of component elements React will render the desired application blocks called elements into the DOM. We will see more complex elements and components in the future posts of React. Thanks for reading.
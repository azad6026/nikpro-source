---
id: 32022
title: React element blocks explained with some examples
date: 2018-08-13T20:26:05+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32022
permalink: /react-element-blocks-explained-with-some-examples/
image: reac-element.png
categories:
  - React
tags:
  - React element
  - render an element into the DOM
---
 

As it states in React docs a React element is the smallest [building block](http://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/) of a React application. It describes what you want to be shown in your screen. Components are made of these React elements in practice.

## Render React element into the DOM

This is a simple example of how to render a simple React element into the root of the DOM:

<pre class="wp-block-preformatted"><strong><code>const element = &lt;h1>Hello, world&lt;/h1>;
ReactDOM.render(element, document.getElementById('root'));</code></strong></pre>

The element is actually a HTML code that could be considered as our view which will be rendered into our DOM. In this example we render the element into the HTML tag that have root id.

## React element in components

**An element is a plain object _describing_ a component instance or DOM node and its desired properties.** It contains only information about the component type (for example, a `Button`), its properties (for example, its `color`), and any child elements inside it. Thi is stated in the React blog. Take a look at this example:

<pre class="wp-block-preformatted"><strong><code>&lt;button class='button button-blue'>
  &lt;b>
    OK!
  &lt;/b>
&lt;/button></code></strong></pre>

This is a DOM element that will be rendered as this in React:

<pre class="wp-block-preformatted"><strong><code>{
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
}</code></strong></pre>

Moreover take a look at this example also which is a component described by React element and see how it will be rendered into the DOM:

<pre class="wp-block-preformatted"><strong><code>const DeleteAccount = () => (
  &lt;div>
    &lt;p>Are you sure?&lt;/p>
    &lt;DangerButton>Yep&lt;/DangerButton>
    &lt;Button color='blue'>Cancel&lt;/Button>
  &lt;/div>
);</code></strong></pre>

**An element describing a component is also an element, just like an element describing the DOM node. They can be nested and mixed with each other. **This will be rendered as the below code into the DOM:

<pre class="wp-block-preformatted"><strong><code>const DeleteAccount = () => ({
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
});</code></strong><br /></pre>

As a result you see clearly that it creates the DOM based on our elements or the view  and renders them with their own properties as **props**. Each and every tag has its own props and children and type rendered as we specify in our element declaration.

  * `Button` is a DOM `<button>` with specific properties.
  * `DangerButton` is a `Button` with specific properties.
  * `DeleteAccount` contains a `Button` and a `DangerButton` inside a `<div>`.

**One more example**

Additionally take a look at this form as a React element as a form:

<pre class="wp-block-preformatted"><strong><code>ReactDOM.render({
  type: Form,
  props: {
    isSubmitted: false,
    buttonText: 'OK!'
  }
}, document.getElementById('root'));</code></strong></pre>

Firstly React will ask the `Form` component what element tree it returns, given those `props`. It will find out how to render the form elements into the DOM:

<pre class="wp-block-preformatted"><strong><code>// React: You told me this...
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
}</code></strong></pre>

Finally it will go on and will render all needed tags into the DOM:

<pre class="wp-block-preformatted"><strong><code>// React: ...and Button told me this! I guess I'm done.
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
}</code></strong></pre>

From the declaration of component elements React will render the desired application blocks called elements into the DOM. We will see more complex elements and components in the future posts of React. Thanks for reading.
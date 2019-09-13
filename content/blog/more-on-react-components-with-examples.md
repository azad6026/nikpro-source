---
id: 32007
title: More on React components with examples
date: 2018-08-10T21:40:25+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32007
permalink: /more-on-react-components-with-examples/
# image: ../../static/images/react-components.png
categories:
  - JAVASCRIPT
  - React
tags:
  - react components
---
We had a brief look at React components in [this article](http://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/) before. In this one we will learn more on rendering React components and extracting them.

## Rendering React components

Have a look at this functional React component and how it renders the output to the DOM:


```
<code>function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);</code>
```


The function uses **props** as its argument that makes it a valid component.  The <a href="https://reactjs.org/docs/rendering-elements.html" target="_blank" rel="noopener noreferrer">element</a> which we will talk about in a seperate article later represents the user defined component in this example. So in this example:

  * `ReactDOM.render()` is called with the `<Welcome name="Sara" />` element.
  * React calls the `Welcome` component with `{name: 'Sara'}` as the props.
  * As a result `Welcome` component returns a `<h1>Hello, Sara</h1>` element
  * React DOM updates the DOM to match `<h1>Hello, Sara</h1>`.

**Remember:** React treats components starting with lowercase letters as DOM tags. For example, `<div />`represents an HTML div tag, but `<Welcome />` represents a component and requires `Welcome` to be in scope.

### Referring to other components

As mentioned [here](http://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/) we can compose component to other components in React. We can reuse the same component as many times as needed. We can use an app component to render the Welcome component as many times:


```
<code>function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);</code>
```


Which the app component will be your main component and you will build your app upon that.

## Class components and Functional components

The very first component we created was a functional one:


```
<code>function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}</code>
```


And as we mentioned it is a valid component as it has props as its properties or argument. We could create exact same component in [ES6 way with a class:](http://www.nikpro.com.au/how-to-create-classes-in-javascript-es6/)


```
<code>class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}</code>
```


The Welcome class which is actually the component extends the React.Component core class and we use **this** to refer to the Welcome component itself. 

In this article we has a look at some core examples of components and learnt two different types of rendering the component. This will continue with more React based article and more complex and modern examples.
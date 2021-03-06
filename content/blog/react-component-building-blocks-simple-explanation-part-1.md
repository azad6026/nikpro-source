---
id: 32002
title: React component building blocks simple explanation part 1
date: 2018-08-09T20:22:28+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32002
permalink: /react-component-building-blocks-simple-explanation-part-1/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/ract-cpmonent.png
categories:
  - JAVASCRIPT
  - React
tags:
  - component
  - props
  - state
---

[React](https://www.nikpro.com.au/react-or-angular-how-much-it-matters/) component is like building block of a lego game. They have different use cases and <a href="https://reactjs.org/docs/components-and-props.html" target="_blank" rel="noopener noreferrer">each component</a> or here say block could be used in multiple sections or blocks.

## Create a React component

It is easy and beautifully organised in code how you create a React component:

```
import React from 'react';
class MyComponent extends React.Component {
  render () {
    return <div> This is a component </div>
  }
}

```

And as you might have guessed it is also easy to use it in our application as many times as we need just like this:

```
<MyComponent />

```

As simple as writing a HTML tag. Yes. It combines the virtual DOM with HTML and Javascript knowledge and creates amazing user interfaces.

## Use a React component inside another one

The great thing is you could use your own custom React component inside another component and make complex logic interface:

```
import React from 'react';
class MyComponent extends React.Component {
  render () {
    return <div> This is a component </div>
  }
}
class MyOtherComponent extends React.Component {
  render () {
    return (
      <div>
        <MyComponent />
      </div>
    )
  }
}
```

Besides it makes the code more maintainable and of course readable at the end.

### Props

Props are options that can be passed to a component to customise its functionality:

For example, I have a heading component which renders a heading with subtitle:

```
class MyHeading extends React.Component {
  render () {
    return <div>
      <h1>{this.props.heading}</h1>
      <p>{this.props.subtitle}</p> 
    </div>
  }
}
```

I can now use this component using its props which are actually the properties and can be setup just like HTML attributes:

```
<MyHeading heading="Whoo! this is awesome" subtitle="And this is a subtitle" />
<MyHeading heading="Whoo! this is More awesome" subtitle="And this is second subtitle" />
```

As you can see it is reusable and easy to read. You can pass anything in your heading and subtitle and it will be rendered inside you **MyHeading **component. And they are accessible by using **this.props** inside the component. Whatever prop you define on your component you can access them as **this.props.whateverNameYouGivenToYourProp. **

### State

State is unique to the component. Every component has it’s own **State **where it store & retrieve data from. This is an example:

```
import React from 'react';
class MyComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "Harry"
    };
  }
  render () {
    return <div> My name is {this.state.name} </div>
  }
}
```

The output for this component will be: **My name is Harry.**

We create a state in our constructor and then retrieve the data from state and using it inside our component.

The **{this.state.name} ** is how you embed a javascript expression inside your JSX. Whatever inside **{} **will be executed and its output is rendered in the browser. In case above JSX will retrieve data from **this.state.name **and embed it into our resulting html.

This was a very short article about most important building blocks of a React component. I will be writing about React from now on and we will deep dive into its world and learn together.Thanks for reading.

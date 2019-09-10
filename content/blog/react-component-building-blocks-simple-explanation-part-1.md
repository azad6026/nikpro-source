---
id: 32002
title: React component building blocks simple explanation part 1
date: 2018-08-09T20:22:28+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32002
permalink: /react-component-building-blocks-simple-explanation-part-1/
image: ract-cpmonent-1568x882.png
categories:
  - JAVASCRIPT
  - React
tags:
  - component
  - props
  - state
---
[React](http://www.nikpro.com.au/react-or-angular-how-much-it-matters/) component is like building block of a lego game. They have different use cases and <a href="https://reactjs.org/docs/components-and-props.html" target="_blank" rel="noopener noreferrer">each component</a> or here say block could be used in multiple sections or blocks.

## Create a React component

It is easy and beautifully organised in code how you create a React component:

<pre class="wp-block-preformatted"><strong>import React from 'react';</strong><br /><strong>class MyComponent extends React.Component {</strong><br /><strong>  render () {</strong><br /><strong>    return &lt;div> This is a component &lt;/div></strong><br /><strong>  }</strong><br /><strong>}</strong><br /></pre>

And as you might have guessed it is also easy to use it in our application as many times as we need just like this:

<pre class="wp-block-preformatted"><strong>&lt;MyComponent /></strong><br /></pre>

As simple as writing a HTML tag. Yes. It combines the virtual DOM with HTML and Javascript knowledge and creates amazing user interfaces.

## Use a React component inside another one

The great thing is you could use your own custom React component inside another component and make complex logic interface:

<pre class="wp-block-preformatted"><strong>import React from 'react';</strong><br /><strong>class MyComponent extends React.Component {</strong><br /><strong>  render () {</strong><br /><strong>    return &lt;div> This is a component &lt;/div></strong><br /><strong>  }</strong><br /><strong>}</strong><br /><strong>class MyOtherComponent extends React.Component {</strong><br /><strong>  render () {</strong><br /><strong>    return (</strong><br /><strong>      &lt;div></strong><br /><strong>        &lt;MyComponent /></strong><br /><strong>      &lt;/div></strong><br /><strong>    )</strong><br /><strong>  }</strong><br /><strong>}</strong></pre>

Besides it makes the code more maintainable and of course readable at the end.

### Props

Props are options that can be passed to a component to customise its functionality:

For example, I have a heading component which renders a heading with subtitle:

<pre class="wp-block-preformatted"><strong>class MyHeading extends React.Component {</strong><br /><strong>  render () {</strong><br /><strong>    return &lt;div></strong><br /><strong>      &lt;h1>{this.props.heading}&lt;/h1></strong><br /><strong>      &lt;p>{this.props.subtitle}&lt;/p> </strong><br /><strong>    &lt;/div></strong><br /><strong>  }</strong><br /><strong>}</strong></pre>

I can now use this component using its props which are actually the properties and can be setup just like HTML attributes:

<pre class="wp-block-preformatted"><strong>&lt;MyHeading heading="Whoo! this is awesome" subtitle="And this is a subtitle" /></strong><br /><strong>&lt;MyHeading heading="Whoo! this is More awesome" subtitle="And this is second subtitle" /></strong></pre>

As you can see it is reusable and easy to read. You can pass anything in your heading and subtitle and it will be rendered inside you **MyHeading **component. And they are accessible by using **this.props** inside the component. Whatever prop you define on your component you can access them as **this.props.whateverNameYouGivenToYourProp. **

### State

State is unique to the component. Every component has it’s own **State **where it store & retrieve data from. This is an example:

<pre class="wp-block-preformatted"><strong>import React from 'react';</strong><br /><strong>class MyComponent extends React.Component {</strong><br />  <br /><strong>  constructor(props) {</strong><br /><strong>    super(props);</strong><br /><strong>    this.state = {</strong><br /><strong>      name: "Harry"</strong><br /><strong>    };</strong><br /><strong>  }</strong><br /><strong>  render () {</strong><br /><strong>    return &lt;div> My name is {this.state.name} &lt;/div></strong><br /><strong>  }</strong><br /><strong>}</strong></pre>

The output for this component will be: **My name is Harry.**

We create a state in our constructor and then retrieve the data from state and using it inside our component.

The **{this.state.name} ** is how you embed a javascript expression inside your JSX. Whatever inside **{} **will be executed and its output is rendered in the browser. In case above JSX will retrieve data from **this.state.name **and embed it into our resulting html.

This was a very short article about most important building blocks of a React component. I will be writing about React from now on and we will deep dive into its world and learn together.Thanks for reading.
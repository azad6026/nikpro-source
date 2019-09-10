---
id: 32092
title: 'Using ES6 features in React  application codes : Destructuring'
date: 2018-08-25T21:10:25+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32092
permalink: /using-es6-destructuring-in-react-application-codes/
image: react-destructuring.png
categories:
  - ES6
  - React
---
Using [ES6](http://www.nikpro.com.au/category/es6) destructuring in React application codes make the life easier. Because the code will be more maintainable and readable and of course looks modern.In this article I will show some examples of implementing ES6 destructuring in React.

## ES6 destructuring in React

As we learnt destructuring in ES6 [in this article](http://www.nikpro.com.au/default-parameters-in-javascript-es6-explained/) we can use it to initialise props or to structure our rendered templates. Remember this from old way:

<pre class="wp-block-preformatted"><strong>var object = { one: 1, two: 2, three: 3 }</strong><br /><strong>var one = object.one;</strong><br /><strong>var two = object.two;</strong><br /><strong>var three = object.three</strong><br /><strong>console.log(one, two, three) // prints 1, 2, 3</strong></pre>

Thankfully with ES6 destructuring we can change the code to be as simple as below:

<pre class="wp-block-preformatted"><strong>let object = { one: 1, two: 2, three: 3 }</strong><br /><strong>let { one, two, three } = object;</strong><br /><strong>console.log(one, two, three) // prints 1, 2, 3</strong></pre>

You can easily read the code and predict what it does. Now lets have a look at a React component and use ES6 destructuring in React code. This is a [functional component](http://www.nikpro.com.au/more-on-react-components-with-examples/) in React:

<pre class="wp-block-preformatted"><strong>const Listing = (props) => (</strong><br /><strong>  &lt;div></strong><br /><strong>    &lt;p>Title: {props.listing.title}&lt;/p></strong><br /><strong>    &lt;p>Type: {props.listing.type}&lt;/p></strong><br /><strong>    &lt;p></strong><br /><strong>      Location: {props.listing.location.city},</strong><br /><strong>      {props.listing.location.state},</strong><br /><strong>      {props.listing.location.country}</strong><br /><strong>    &lt;/p></strong><br /><strong>  &lt;/div></strong><br /><strong>);</strong></pre>

Practically there is nothing wrong in this code. It takes the props from the function argument and creates a template to sow the data. The data comes from state of a class component which is stateful. Our focus is this template though.We can simplify this further by destructuring like below:

<pre class="wp-block-preformatted"><strong>const Listing = ({ listing }) => (</strong><br /><strong>  &lt;div></strong><br /><strong>    &lt;p>Title: {listing.title}&lt;/p></strong><br /><strong>    &lt;p>Type: {listing.type}&lt;/p></strong><br /><strong>    &lt;p></strong><br /><strong>      Location: {listing.location.city},</strong><br /><strong>      {listing.location.state},</strong><br /><strong>      {listing.location.country}</strong><br /><strong>    &lt;/p></strong><br /><strong>  &lt;/div></strong><br /><strong>);</strong></pre>

Therefor we are passing in the props argument and using that in the template instead. We can simplify it even more:

<pre class="wp-block-preformatted"><strong>const Listing = ({</strong><br /><strong>  listing: {</strong><br /><strong>    title,</strong><br /><strong>    type,</strong><br /><strong>    location: {</strong><br /><strong>      city,</strong><br /><strong>      state,</strong><br /><strong>      country</strong><br /><strong>    }</strong><br /><strong>  }</strong><br /><strong>}) => (</strong><br /><strong>  &lt;div></strong><br /><strong>    &lt;p>Title: {title}&lt;/p></strong><br /><strong>    &lt;p>Type: {type}&lt;/p></strong><br /><strong>    &lt;p>Location: {city}, {state}, {country}&lt;/p></strong><br /><strong>  &lt;/div></strong><br /><strong>);</strong></pre>

Basically we have destructed the keys inside Listings like title and type and location and location&#8217;s keys as well. It is nice and neat and easily maintainable.

## Using same ES6 destructuring in React class component

However if we wanted to implement the same rules for a class component with the same props definition it would look like the code below:

<pre class="wp-block-preformatted"><strong>import React, { Component } from 'react';</strong><br /><strong>class Listing extends Component {</strong><br /><strong>  render() {</strong><br /><strong>    const {</strong><br /><strong>      listing: {</strong><br /><strong>        title,</strong><br /><strong>        type,</strong><br /><strong>        location: {</strong><br /><strong>          city,</strong><br /><strong>          state,</strong><br /><strong>          country</strong><br /><strong>        }</strong><br /><strong>      }</strong><br /><strong>    } = this.props;</strong><br /><strong>return (</strong><br /><strong>      &lt;div></strong><br /><strong>        &lt;p>Title: {title}&lt;/p></strong><br /><strong>        &lt;p>Type: {type}&lt;/p></strong><br /><strong>        &lt;p></strong><br /><strong>          Location: {city}, {state}, {country}</strong><br /><strong>        &lt;/p></strong><br /><strong>      &lt;/div></strong><br /><strong>    )</strong><br /><strong>  }</strong><br /><strong>}</strong></pre>

As a result the props are nicely been destructured and rendered inside the component. It is the same result as functional approach but inside a stateful or class component.

In addition we will be using lots of ES6 features in React applications and I will be covering them with some practical examples in the future articles as well. Thanks for reading.
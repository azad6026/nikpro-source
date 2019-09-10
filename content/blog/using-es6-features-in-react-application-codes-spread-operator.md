---
id: 32097
title: 'Using ES6 features in React application codes: Spread operator'
date: 2018-08-26T21:24:59+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32097
permalink: /using-es6-features-in-react-application-codes-spread-operator/
image: /images/spread-operator-in-react.jpg
categories:
  - ES6
  - React
---
We will explain using ES6 spread operator in React following the [previous article](http://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/) about destructing. Spread operators are very handy when it comes to mutating props and changing states. We will see some examples.

## Using spread operator in React component state

Definitely there are times that we need to preserve the information of state and just add something to it. For example in a recipe online application which we want to add something to our ingredients. Instead of mutating the original ingredients like this:

<pre class="wp-block-preformatted"><strong>const <strong>updatedIngredients</strong> = this.state.ingredients;</strong><br />   </pre>

Best approach is to use spread operator in React component to preserve **ingredients **and just update it with the added info:

<pre class="wp-block-preformatted"><strong>const updatedIngredients = {</strong><br /><strong>            ...this.state.ingredients</strong><br /><strong>        };</strong></pre>

Therefor we actually using a copy of the ingredients and work on that and do not touch the original one.

## Using spread operator in React props

Basically the important usage of spread operator is to get a copy of an array and pass it as a new array. If you already have `props` as an object, and you want to pass it in JSX, you can use `...` as a “spread” operator to pass the whole props object. We normally create a [functional component](http://www.nikpro.com.au/more-on-react-components-with-examples/) like this:

<pre class="wp-block-preformatted"><strong><code>function App1() {
  return &lt;Greeting firstName="Ben" lastName="Hector" />;
}</code></strong></pre>

But using spread operator in React props makes it easier to read and understand:

<pre class="wp-block-preformatted"><strong><code>function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return &lt;Greeting {...props} />;
}</code></strong></pre>

## Passing data into state using spread operator in React

Moreover we could use the spread operator to pass arguments of the setState function to preserve the original state and add a new item to it:

<pre class="wp-block-preformatted"><strong>addIngredients(newIngredient) {</strong><br /><strong>    this.setState({ toDoNotes: [...this.state.ingredients, <strong>newIngredient</strong>]})</strong><br /><strong>  }</strong></pre>

Back to our recipe example we use the spread operator to pass the ingredients to the setState to update them and add a new ingredient.

## Using spread operator in React JSX code

Imagine this code in our JSX which uses props info inside and input:

<pre class="wp-block-preformatted"><strong>&lt;input </strong><br /><strong>  type={props.type} </strong><br /><strong>  id={props.id} </strong><br /><strong>  placeholder={props.placeholder}</strong><br /><strong>  value={props.value}</strong><br /><strong>  onChange={(e) => props.onchange(e.target.value)}</strong><br /><strong>  className={props.inputClass} /></strong></pre>

As a good practice we can use spread operator to pass in the info and clean up the code as below in our return statement:

<pre class="wp-block-preformatted"><strong> return (</strong><br /><strong>    &lt;div className={props.wrapClass}></strong><br /><strong>      &lt;label </strong><br /><strong>        htmlFor={props.id}</strong><br /><strong>        className={props.labelClass}</strong><br /><strong>      ></strong><br /><strong>        {props.label}</strong><br /><strong>      &lt;/label></strong><br /><strong>      &lt;input </strong><br /><strong>        {...props}</strong><br /><strong>        onChange={(e) => props.onchange(e.target.value)}</strong><br /><strong>        className={props.inputClass} /></strong><br /><strong>    &lt;/div></strong><br /><strong>  )</strong><br /><strong>}</strong></pre>

Nice and neat. We could use spread operator in React as many cases as possible. It is safe and it makes the code much cleaner and more maintainable. Thanks for reading.
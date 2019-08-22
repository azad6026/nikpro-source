---
id: 32028
title: Explaining props and state in React components
date: 2018-08-14T21:08:35+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32028
permalink: /explaining-props-and-state-in-react-components/
image: /wp-content/uploads/2018/08/props-and-state.png
categories:
  - ES6
  - React
tags:
  - props
  - props and state
  - state
---
We will explain props and state in React components in this post. These two important objects look very similar but logically they are different.

## Where to use props and state

The main difference between props and state is that we can use **props** in both [functional and class components](http://www.nikpro.com.au/more-on-react-components-with-examples/). This means we can use them as arguments in both functions and classes created as a component. 

in another hand though **state can only be used in class components.** This is a very essential note. State is a class component only object. 

## What are props and state

Literally props are properties or arguments into a component. We could use props to get data and set them and handle events and behaviours of the elements.

But state is a **plain JavaScript object** that allows you keep track of a component’s data. 

So props get passed to the component and state is managed through the component.

**A props example**

This is a modern functional component using props in its arguments.:

<pre class="wp-block-preformatted"><strong>const App = (props) => {
  return (
    &lt;div>
      { props.username }
    &lt;/div>
  )
}</strong></pre>

It is written using [arrow functions](http://www.nikpro.com.au/some-arrow-function-benefits-with-examples-explained/) and is neat and simple. Comparably take a look at this class component using state in its constructor: 

<pre class="wp-block-preformatted"><strong>class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: 'johndoe' }
  }
  render() {
    const { username } = this.state
    return(
      &lt;div>
        { username }
      &lt;/div>
    )
  }
}</strong></pre>

The constructor is the right place to initialise state. Initialising state is done by setting `this.state` to an object, like you can see above. An initialised state can be accessed in the `render()` method like username in the example. 

Thankfully we can use [destructing](http://www.nikpro.com.au/what-is-spread-syntax-in-es6-and-how-to-use-it/) and use const **status = this.state.username**  instead of username. Besides this is actually more convenient to be written like this:

<pre class="wp-block-preformatted"><strong>class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: 'johndoe' }
  }
 render() {
  return(
    &lt;div>
      { this.state.username }
    &lt;/div>
  )
}</strong></pre>

Therefor it is cleaner and more maintainable in practice. 

### Updating the state

As you see in these simple examples, props and state are used differently. State is responsible for user interaction changes. We update the state from above example with setState method which is responsible for udating state changes: 

<pre class="wp-block-preformatted"><strong>class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: 'johndoe' }
  }
  handleInputChange(username) {
    this.setState({username})
  }
  render() {
    const { username } = this.state
    return (
      &lt;div>
        &lt;div>
          &lt;input 
            type="text"
            value={this.state.username}
            onChange={event => this.handleInputChange(event.target.value)}
          />
        &lt;/div>
        &lt;p>Your username is, {username}&lt;/p>
      &lt;/div>
    )
  }
}</strong></pre>

Additionally we have an event handler called **handleInputChange** which takes the username as input and updates the state using setState which is a core React method of class component. The onChange event listener using the [event target value](http://www.nikpro.com.au/what-is-e-target-and-e-currenttarget-and-how-to-use-them/) of the input and sets the new username based on that.

**A note around props and state:** remember to use state only when needed. In most logical cases we will use functional components which as mentioned are stateless and we use props heavily to manipulate data. We use states only in a few core components so that it is more maintainable and easier to manage. We will explain more on this topic later. Thanks for reading.
---
id: 32118
title: Using ternary operator in React explained with examples
date: 2018-08-31T21:58:37+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32118
permalink: /using-ternary-operator-in-react-explained-with-examples/
image: ternary.png
categories:
  - React
tags:
  - ternary operator in React
---
Following the [previous](http://www.nikpro.com.au/using-es6-features-in-react-application-codes-spread-operator/) [articles](http://www.nikpro.com.au/using-es6-features-in-react-application-codes-spread-operator/) we talk about using ternary operator in React  with some examples.

## Conditional rendering using ternary operator in React 

Of course using if else statement has been around for ages. We can always use them in conditional rendering anywhere. But using ternary operator in React is now an important alternative which is simpler and more maintainable.

Firstly have a look at this example with if/else statement:

<pre class="wp-block-preformatted"><strong>const MyComponent = ({ name }) => {</strong><br /><strong>  if (name) {</strong><br /><strong>    return (</strong><br /><strong>      &lt;div className="hello"></strong><br /><strong>        Hello {name}</strong><br /><strong>      &lt;/div></strong><br /><strong>    );</strong><br /><strong>  }</strong><br /><strong>  return (</strong><br /><strong>    &lt;div className="hello"></strong><br /><strong>      Please sign in</strong><br /><strong>    &lt;/div></strong><br /><strong>  );</strong><br /><strong>};</strong></pre>

In [this functional](http://www.nikpro.com.au/functional-component-in-react-explained-with-examples/) component of a form we simply return the name if it exists of we ask the user to put in the name. However if we use the ternary [operator](http://www.nikpro.com.au/the-ternary-operator-in-javascript-with-some-examples-explained/) in React we make it look cleaner and neater just like this:

<pre class="wp-block-preformatted"><strong>const MyComponent = ({ name }) => (</strong><br /><strong>  &lt;div className="hello"></strong><br /><strong>    {name ? `Hello ${name}` : 'Please sign in'}</strong><br /><strong>  &lt;/div></strong><br /><strong>);</strong></pre>

All the if/else statement has become just one statement with the same result as above.  

In addition have a look at these examples of using ternary operator in Rect site itself:

<pre class="wp-block-preformatted"><strong><code>render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    &lt;div>
      The user is &lt;b>{isLoggedIn ? 'currently' : 'not'}&lt;/b> logged in.
    &lt;/div>
  );
}&lt;br/></code></strong></pre>

Conditionally we are using state to check if the user is logged in in a class component. Using ternary operator in React makes it super easy and quick to obtain the result. 

**Having** **a** **larger** **example**

We could use ternary operator In JSX code. To render some JSX code conditionally we could do this as needed:

<pre class="wp-block-preformatted"><strong><code>render() {
  const isLoggedIn = this.state</code></strong><code>.</code><strong><code>isLoggedIn;
  return (
    &lt;div>
      {isLoggedIn ? (
        &lt;LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        &lt;LoginButton onClick={this.handleLoginClick} />
      )}
    &lt;/div>
 </code></strong><code> );
}</code><strong><code>&lt;br/></code></strong></pre>

Remember it is best to use ternary opertor in short JSX code for having a clear and maintainable code. Thanks for reading. 
---
id: 32118
title: Using ternary operator in React explained with examples
date: 2018-08-31T21:58:37+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32118
permalink: /using-ternary-operator-in-react-explained-with-examples/
# image: ../../static/images/ternary.png
categories:
  - React
tags:
  - ternary operator in React
---
Following the [previous](http://www.nikpro.com.au/using-es6-features-in-react-application-codes-spread-operator/) [articles](http://www.nikpro.com.au/using-es6-features-in-react-application-codes-spread-operator/) we talk about using ternary operator in React  with some examples.

## Conditional rendering using ternary operator in React 

Of course using if else statement has been around for ages. We can always use them in conditional rendering anywhere. But using ternary operator in React is now an important alternative which is simpler and more maintainable.

Firstly have a look at this example with if/else statement:


```
const MyComponent = ({ name }) => {<br />  if (name) {<br />    return (<br />      <div className="hello"><br />        Hello {name}<br />      </div><br />    );<br />  }<br />  return (<br />    <div className="hello"><br />      Please sign in<br />    </div><br />  );<br />};
```


In [this functional](http://www.nikpro.com.au/functional-component-in-react-explained-with-examples/) component of a form we simply return the name if it exists of we ask the user to put in the name. However if we use the ternary [operator](http://www.nikpro.com.au/the-ternary-operator-in-javascript-with-some-examples-explained/) in React we make it look cleaner and neater just like this:


```
const MyComponent = ({ name }) => (<br />  <div className="hello"><br />    {name ? `Hello ${name}` : 'Please sign in'}<br />  </div><br />);
```


All the if/else statement has become just one statement with the same result as above.  

In addition have a look at these examples of using ternary operator in Rect site itself:


```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}<br/>
```


Conditionally we are using state to check if the user is logged in in a class component. Using ternary operator in React makes it super easy and quick to obtain the result. 

**Having** **a** **larger** **example**

We could use ternary operator In JSX code. To render some JSX code conditionally we could do this as needed:


```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}<br/>
```


Remember it is best to use ternary opertor in short JSX code for having a clear and maintainable code. Thanks for reading. 
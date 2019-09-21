---
id: 32108
title: Different stateless functional component in React explained
date: 2018-08-29T20:31:50+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32108
permalink: /different-stateless-functional-component-in-react-explained/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/rendering-functional-component.jpg
categories:
  - ES6
  - React
tags:
  - higher order components
  - stateless functional component
---
Following the [previous article](https://www.nikpro.com.au/functional-component-in-react-explained-with-examples/) we take a quick look at some different stateless functional component in React with examples.

### Return a few lines of JSX wrapped in a container 

Basically in stateless functional component we need to wrap the JSX code in a container to get rendered properly. Without that application will throw an error:


```
<a>const Profile = props => {<br/>  return (  <br/><br/>      <h1>{props.name}</h1><br/>      <p>{props.bio}</p><br/><br/>  );<br/>};<br/><br/><em>Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag</em><br /><br /></a>
```


Therefor we always need a wrapper to fix this as below:


```
const Profile = props => {<br />  return (  <br />    <div><br />      <h1>{props.name}</h1><br />      <p>{props.bio}</p><br />    </div>;<br />  );<br />};
```


Typically we use a div but you can use whatever suits your code. Also in this example we have just a one line code so we can drop the {} curly braces and the return statement based on [arrow functions capabilities](https://www.nikpro.com.au/some-arrow-function-benefits-with-examples-explained/):

```
<br />const Profile = props => <br />  <div><br />    <h1>{props.name}</h1><br />    <p>{props.bio}</p><br />  </div>;<br />
```


### Using higher order component as a wrapper

Higher order functions in React have a wide range of usage which we will cover later. However as their simplest usage of them we can use them to wrap our stateless functional component and use a reusable component instead of a div. Obviously it is a new component so it helps to shape the component structure of the application as well. A very simple higher order component which surely should be a stateless functional component itself could look like this:


```
const aux = (props) => props.children;<br />export default aux;
```


As a result we don&#8217;t even need to import React as we are not writing any JSX in its statement. Therefor we can use this stateless functional component sometimes called auxiliary function in our example:


```
const Profile = props => {<br />  return (  <br />    <Aux><br />      <h1>{props.name}</h1><br />      <p>{props.bio}</p><br />    </Aux>;<br />  );<br />};
```


Finally we can also destructure the incoming props and create a more modern stateless functional component body syntax:


```
const Profile = ({ name, bio }) =><br />  <Aux><br />    <h1>{name}</h1><br />    <p>{bio}</p><br />  </Aux>;
```


Technically this is a great approach of using higher order functions in our applications especially if we have lots of components that we can use one function to wrap them up with. In the next articles we will explain more of these components and show their other use cases. Thanks for reading.
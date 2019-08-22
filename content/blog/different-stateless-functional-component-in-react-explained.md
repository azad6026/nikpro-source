---
id: 32108
title: Different stateless functional component in React explained
date: 2018-08-29T20:31:50+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32108
permalink: /different-stateless-functional-component-in-react-explained/
image: /wp-content/uploads/2018/08/rendering-functional-component.jpg
categories:
  - ES6
  - React
tags:
  - higher order components
  - stateless functional component
---
Following the [previous article](http://www.nikpro.com.au/functional-component-in-react-explained-with-examples/) we take a quick look at some different stateless functional component in React with examples.

### Return a few lines of JSX wrapped in a container 

Basically in stateless functional component we need to wrap the JSX code in a container to get rendered properly. Without that application will throw an error:

<pre class="wp-block-preformatted"><strong><a><code>const Profile = props => {&lt;br/>  return (  &lt;br/>&lt;br/>      &lt;h1>{props.name}&lt;/h1>&lt;br/>      &lt;p>{props.bio}&lt;/p>&lt;br/>&lt;br/>  );&lt;br/>};&lt;br/>&lt;br/>&lt;em>Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag&lt;/em></code><br /><br /></a></strong></pre>

Therefor we always need a wrapper to fix this as below:

<pre class="wp-block-preformatted"><strong>const Profile = props => {</strong><br /><strong>  return (  </strong><br /><strong>    &lt;div></strong><br /><strong>      &lt;h1>{props.name}&lt;/h1></strong><br /><strong>      &lt;p>{props.bio}&lt;/p></strong><br /><strong>    &lt;/div>;</strong><br /><strong>  );</strong><br /><strong>};</strong></pre>

Typically we use a div but you can use whatever suits your code. Also in this example we have just a one line code so we can drop the {} curly braces and the return statement based on [arrow functions capabilities](http://www.nikpro.com.au/some-arrow-function-benefits-with-examples-explained/):

<pre class="wp-block-preformatted"><br /><strong>const Profile = props => </strong><br /><strong>  &lt;div></strong><br /><strong>    &lt;h1>{props.name}&lt;/h1></strong><br /><strong>    &lt;p>{props.bio}&lt;/p></strong><br /><strong>  &lt;/div>;</strong><br /></pre>

### Using higher order component as a wrapper

Higher order functions in React have a wide range of usage which we will cover later. However as their simplest usage of them we can use them to wrap our stateless functional component and use a reusable component instead of a div. Obviously it is a new component so it helps to shape the component structure of the application as well. A very simple higher order component which surely should be a stateless functional component itself could look like this:

<pre class="wp-block-preformatted"><strong>const aux = (props) => props.children;</strong><br /><strong>export default aux;</strong></pre>

As a result we don&#8217;t even need to import React as we are not writing any JSX in its statement. Therefor we can use this stateless functional component sometimes called auxiliary function in our example:

<pre class="wp-block-preformatted"><strong>const Profile = props => {</strong><br /><strong>  return (  </strong><br /><strong>    &lt;Aux></strong><br /><strong>      &lt;h1>{props.name}&lt;/h1></strong><br /><strong>      &lt;p>{props.bio}&lt;/p></strong><br /><strong>    &lt;/Aux>;</strong><br /><strong>  );</strong><br /><strong>};</strong></pre>

Finally we can also destructure the incoming props and create a more modern stateless functional component body syntax:

<pre class="wp-block-preformatted"><strong>const Profile = ({ name, bio }) =></strong><br /><strong>  &lt;Aux></strong><br /><strong>    &lt;h1>{name}&lt;/h1></strong><br /><strong>    &lt;p>{bio}&lt;/p></strong><br /><strong>  &lt;/Aux>;</strong></pre>

Technically this is a great approach of using higher order functions in our applications especially if we have lots of components that we can use one function to wrap them up with. In the next articles we will explain more of these components and show their other use cases. Thanks for reading.
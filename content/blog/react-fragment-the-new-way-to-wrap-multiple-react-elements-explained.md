---
id: 32254
title: React.Fragment the new way to wrap multiple React elements explained
date: 2018-09-20T19:55:19+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32254
permalink: /react-fragment-the-new-way-to-wrap-multiple-react-elements-explained/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/09/react-fragment.png
categories:
  - React
tags:
  - higher order functions
  - React.Fragment
---
React.Fragment is the new way to wrap elements in the return statement. We will explain it in this article with some examples. Similarly we had explained how to wrap multi-element return statements using higher order components [here](http://www.nikpro.com.au/different-stateless-functional-component-in-react-explained/) before.

## React.Fragment syntax pattern

What React.Fragment does is to wrap the return statement but does not create an actual tag around it. There will be no actual wrapper around the code inside the DOM.

Practically there are two syntax or patterns to use React.Fragment inside the code. Firstly we can use it just as it is. Or we can use empty opening and closing tags instead. Lets have a look at some examples.

### Wrapping table elements

Firstly imagine this example table from <a href="https://reactjs.org/docs/fragments.html#short-syntax" target="_blank" rel="noopener noreferrer">React site</a> which will include a Columns component. Columns component returns multiple table cells or <td>s:

<pre class="wp-block-preformatted"><strong><code> &lt;table>
        &lt;tr>
          &lt;Columns />
        &lt;/tr>
 &lt;/table></code></strong></pre>

Wrapping this Columns component return statement with a <div> is not correct in this case:

<pre class="wp-block-preformatted"><strong><code>class Columns extends React.Component {
  render() {
    return (
      &lt;div>
        &lt;td>Hello&lt;/td>
        &lt;td>World&lt;/td>
      &lt;/div>
    );
  }
}</code></strong></pre>

Which means the table will look like this at the end:

<pre class="wp-block-preformatted"><strong><code>&lt;table>
  &lt;tr>
    &lt;div>
      &lt;td>Hello&lt;/td>
      &lt;td>World&lt;/td>
    &lt;/div>
  &lt;/tr>
&lt;/table></code></strong></pre>

Definitely this is not a correct semantic table. We will need React.Fragment to generate the table and have no wrapper around the Columns component return statement:

<pre class="wp-block-preformatted"><strong><code>class Columns extends React.Component {
  render() {
    return (
      &lt;React.Fragment>
        &lt;td>Hello&lt;/td>
        &lt;td>World&lt;/td>
      &lt;/React.Fragment>
    );
  }
}</code></strong></pre>

As a result we get this table:

<pre class="wp-block-preformatted"><strong><code>&lt;table>
  &lt;tr>
    &lt;td>Hello&lt;/td>
    &lt;td>World&lt;/td>
  &lt;/tr>
&lt;/table></code></strong></pre>

Also we can use the shorter syntax in the Columns component which looks cool:

<pre class="wp-block-preformatted"><strong><code> &lt;>
    &lt;td>Hello&lt;/td>
    &lt;td>World&lt;/td>
  &lt;/></code></strong></pre>

We see that opening and closing tags are actually empty. Besides it really makes sense as they do not produce any actual tags. 

Also there is a pen for this in the React docs:

<p data-height="265" data-theme-id="0" data-slug-hash="VrEbjE" data-default-tab="html,result" data-user="reactjs" data-pen-title="Example: Fragments" class="codepen">
  See the Pen <a href="https://codepen.io/reactjs/pen/VrEbjE/">Example: Fragments</a> by React JS (<a href="https://codepen.io/reactjs">@reactjs</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Here is also a general usage of the React.Fragment wrapping multiple elements:

<pre class="wp-block-preformatted"><strong><code>render() {
  return (
    &lt;React.Fragment>
      &lt;ChildA />
      &lt;ChildB />
      &lt;ChildC />
    &lt;/React.Fragment>
  );
}</code></strong></pre>

Considerably we could use React.Fragment instead of using higher order functions in most cases. It is simple, easy to maintain and does exaxtly what needs to be done: only wrapping the content without generating a DOM element. 

Thank you for reading.
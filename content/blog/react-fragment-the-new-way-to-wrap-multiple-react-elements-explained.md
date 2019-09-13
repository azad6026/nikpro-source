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
# image: ../../static/images/react-fragment.png
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


```
<code> <table>
        <tr>
          <Columns />
        </tr>
 </table></code>
```


Wrapping this Columns component return statement with a <div> is not correct in this case:


```
<code>class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}</code>
```


Which means the table will look like this at the end:


```
<code><table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table></code>
```


Definitely this is not a correct semantic table. We will need React.Fragment to generate the table and have no wrapper around the Columns component return statement:


```
<code>class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}</code>
```


As a result we get this table:


```
<code><table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table></code>
```


Also we can use the shorter syntax in the Columns component which looks cool:


```
<code> <>
    <td>Hello</td>
    <td>World</td>
  </></code>
```


We see that opening and closing tags are actually empty. Besides it really makes sense as they do not produce any actual tags. 

Also there is a pen for this in the React docs:

<p data-height="265" data-theme-id="0" data-slug-hash="VrEbjE" data-default-tab="html,result" data-user="reactjs" data-pen-title="Example: Fragments" class="codepen">
  See the Pen <a href="https://codepen.io/reactjs/pen/VrEbjE/">Example: Fragments</a> by React JS (<a href="https://codepen.io/reactjs">@reactjs</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Here is also a general usage of the React.Fragment wrapping multiple elements:


```
<code>render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}</code>
```


Considerably we could use React.Fragment instead of using higher order functions in most cases. It is simple, easy to maintain and does exaxtly what needs to be done: only wrapping the content without generating a DOM element. 

Thank you for reading.
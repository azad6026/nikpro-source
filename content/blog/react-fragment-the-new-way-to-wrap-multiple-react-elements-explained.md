---
id: 32254
title: React.Fragment the new way to wrap multiple React elements explained
date: 2018-09-20T19:55:19+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32254
permalink: /react-fragment-the-new-way-to-wrap-multiple-react-elements-explained/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/react-fragment.png
categories:
  - React
tags:
  - higher order functions
  - React.Fragment
---

React.Fragment is the new way to wrap elements in the return statement. We will explain it in this article with some examples. Similarly we had explained how to wrap multi-element return statements using higher order components [here](https://www.nikpro.com.au/different-stateless-functional-component-in-react-explained/) before.

## React.Fragment syntax pattern

What React.Fragment does is to wrap the return statement but does not create an actual tag around it. There will be no actual wrapper around the code inside the DOM.

Practically there are two syntax or patterns to use React.Fragment inside the code. Firstly we can use it just as it is. Or we can use empty opening and closing tags instead. Lets have a look at some examples.

### Wrapping table elements

Firstly imagine this example table from <a href="https://reactjs.org/docs/fragments.html#short-syntax" target="_blank" rel="noopener noreferrer">React site</a> which will include a Columns component. Columns component returns multiple table cells or <td>s:

```
 <table>
        <tr>
          <Columns />
        </tr>
 </table>
```

Wrapping this Columns component return statement with a <div> is not correct in this case:

```
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```

Which means the table will look like this at the end:

```
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

Definitely this is not a correct semantic table. We will need React.Fragment to generate the table and have no wrapper around the Columns component return statement:

```
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```

As a result we get this table:

```
<table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table>
```

Also we can use the shorter syntax in the Columns component which looks cool:

```
 <>
    <td>Hello</td>
    <td>World</td>
  </>
```

We see that opening and closing tags are actually empty. Besides it really makes sense as they do not produce any actual tags.

Also there is a pen for this in the React docs:

https://codepen.io/reactjs/pen/VrEbjE

Here is also a general usage of the React.Fragment wrapping multiple elements:

```
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

Considerably we could use React.Fragment instead of using higher order functions in most cases. It is simple, easy to maintain and does exaxtly what needs to be done: only wrapping the content without generating a DOM element.

Thank you for reading.

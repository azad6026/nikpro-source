---
id: 32092
title: 'Using ES6 features in React  application codes : Destructuring'
date: 2018-08-25T21:10:25+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32092
permalink: /using-es6-destructuring-in-react-application-codes/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/react-destructuring.png
categories:
  - ES6
  - React
---
Using [ES6](https://www.nikpro.com.au/category/es6) destructuring in React application codes make the life easier. Because the code will be more maintainable and readable and of course looks modern.In this article I will show some examples of implementing ES6 destructuring in React.

## ES6 destructuring in React

As we learnt destructuring in ES6 [in this article](https://www.nikpro.com.au/default-parameters-in-javascript-es6-explained/) we can use it to initialise props or to structure our rendered templates. Remember this from old way:


```
var object = { one: 1, two: 2, three: 3 }
var one = object.one;
var two = object.two;
var three = object.three
console.log(one, two, three) // prints 1, 2, 3
```


Thankfully with ES6 destructuring we can change the code to be as simple as below:


```
let object = { one: 1, two: 2, three: 3 }
let { one, two, three } = object;
console.log(one, two, three) // prints 1, 2, 3
```


You can easily read the code and predict what it does. Now lets have a look at a React component and use ES6 destructuring in React code. This is a [functional component](https://www.nikpro.com.au/more-on-react-components-with-examples/) in React:


```
const Listing = (props) => (
  <div>
    <p>Title: {props.listing.title}</p>
    <p>Type: {props.listing.type}</p>
    <p>
      Location: {props.listing.location.city},
      {props.listing.location.state},
      {props.listing.location.country}
    </p>
  </div>
);
```


Practically there is nothing wrong in this code. It takes the props from the function argument and creates a template to sow the data. The data comes from state of a class component which is stateful. Our focus is this template though.We can simplify this further by destructuring like below:


```
const Listing = ({ listing }) => (
  <div>
    <p>Title: {listing.title}</p>
    <p>Type: {listing.type}</p>
    <p>
      Location: {listing.location.city},
      {listing.location.state},
      {listing.location.country}
    </p>
  </div>
);
```


Therefor we are passing in the props argument and using that in the template instead. We can simplify it even more:


```
const Listing = ({
  listing: {
    title,
    type,
    location: {
      city,
      state,
      country
    }
  }
}) => (
  <div>
    <p>Title: {title}</p>
    <p>Type: {type}</p>
    <p>Location: {city}, {state}, {country}</p>
  </div>
);
```


Basically we have destructed the keys inside Listings like title and type and location and location&#8217;s keys as well. It is nice and neat and easily maintainable.

## Using same ES6 destructuring in React class component

However if we wanted to implement the same rules for a class component with the same props definition it would look like the code below:


```
import React, { Component } from 'react';
class Listing extends Component {
  render() {
    const {
      listing: {
        title,
        type,
        location: {
          city,
          state,
          country
        }
      }
    } = this.props;
return (
      <div>
        <p>Title: {title}</p>
        <p>Type: {type}</p>
        <p>
          Location: {city}, {state}, {country}
        </p>
      </div>
    )
  }
}
```


As a result the props are nicely been destructured and rendered inside the component. It is the same result as functional approach but inside a stateful or class component.

In addition we will be using lots of ES6 features in React applications and I will be covering them with some practical examples in the future articles as well. Thanks for reading.
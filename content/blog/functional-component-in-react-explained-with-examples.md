---
id: 32105
title: Functional component in React explained with examples
date: 2018-08-28T21:39:29+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32105
permalink: /functional-component-in-react-explained-with-examples/
# image: ../../static/images/functional-component.png
categories:
  - ES6
  - React
tags:
  - ES6 features
  - functional component
---
We will take a look at functional component in React with examples in this article. Previously we have talked about components in React in [previous](http://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/) [articles](http://www.nikpro.com.au/more-on-react-components-with-examples/) . Therefor we want to a bit focus on functional component in React which are called stateless component.

## Functional component in React explained

Generally functional component in React are called stateless components. The reason is they simply don&#8217;t need states. 

Typically we well know that state should be defined inside a class component and in its constructor.

In a modern way though we are using ES6 [default parameters](http://www.nikpro.com.au/default-parameters-in-javascript-es6-explained/) without constructor to define states. 

Therefor in a functional component in React we only use props. Besides we use the data received through props from the stateful component.

Practically a functional component is to build small chunks of code that are reusable and don&#8217;t need to react with state. 

### A functional component in React

Basically functional components are just React components that aren’t created as their own separate class. They look like this:


```
<em>// Class component<br /></em>class Parent extends React.Component {<br /> render () {<br />  return(<br />   <Child bg<em>Color</em>={'blue'} /><br />  )<br /> }<br />}<br /><em>// Functional component<br /></em>const Child = () => {<br />  return (<br />    <div></div><br />  )<br />}
```


However to get access to the props via the functional component in React you should pass it in the function arguments. 

Thankfully there is no nee to use the this keyword here. Because it is not a class component:


```
const Child = (props) => {<br />  return (<br />    <div style={{backgroundColor: props.bgColor}} /><br />  )<br />}
```


A stateless component(or dumb) is just presentation of the state(props). It only can render props and it should only do that. A good example is a button component: 


```
const Button = props => (<br />   <button className="our_button" onClick={props.onClick}><br />      {props.label}<br />   </button><br />);
```


Hence here you don&#8217;t need state. Because component creates a button and styles it and adds a click handler which we get its onClick method from the stateful component via props.

### Another example with different syntaxes

Moreover this is another example of a parent class component and a child functional component in React. Although parent could use the createClass function or be extended from Component in React which is more modern :


```
const Username = React.createClass({
  render() {
    return <p>The logged in user is: {this.props.username}</p>;
  },
});
// OR:
class Username extends React.Component {
  render() {
    return <p>The logged in user is: {this.props.username}</p>;
  }
}
```


As an example wee could get the username via props in our functional component:


```
const Username = function(props) {
  return <p>The logged in user is: {props.username}</p>;
};
```


Alternatively which is a better way we could [use destructuring](http://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/) in our function


```
const Username = ({ username }) => <p>The logged in user is: {username}</p>;
```


Therefor it looks much more cleaner and neater. Functional components have better performance than a class component. The only time you need to use a class component is if state is needed . Otherwise a functional component is the best option in any other case. Thanks for reading.
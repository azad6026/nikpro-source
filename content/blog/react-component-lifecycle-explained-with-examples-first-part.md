---
id: 32325
title: 'React component lifecycle explained with examples: first part'
date: 2018-10-02T21:21:27+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32325
permalink: /react-component-lifecycle-explained-with-examples-first-part/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/reactlifecycle.jpeg
categories:
  - React
tags:
  - React component lifecycle
---
Understanding component lifecycle is crucial to learn how React actually works. Therefor in this article we will take a look at mounting methods that are called when a component has been created and inserted to the DOM.

## The component lifecycle methods

We could see the the component lifecycle methods in the below diagram. Once a component being created these methods get called in this order:

  * [**`constructor()`**](https://reactjs.org/docs/react-component.html#constructor)
  * [`static getDerivedStateFromProps()`](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
  * [**`render()`**](https://reactjs.org/docs/react-component.html#render)  
    
  * [**`componentDidMount()`**](https://reactjs.org/docs/react-component.html#componentdidmount)


<img src="https://www.nikpro.com.auReact-lifecycle-methods-diagram.png" alt="" class="wp-image-32330" srcset="https://testgatsby.localReact-lifecycle-methods-diagram.png 1103w, https://testgatsby.localReact-lifecycle-methods-diagram-300x112.png 300w, https://testgatsby.localReact-lifecycle-methods-diagram-768x288.png 768w, https://testgatsby.localReact-lifecycle-methods-diagram-1024x383.png 1024w" sizes="(max-width: 1103px) 100vw, 1103px" /> 
 

### The constructor

Generally we use the constructor if we need to initialise state or bind methods. Although with using the new syntax of initialisation state we don&#8217;t really need constructor.

According to Rect docs we **should not call `setState()`** in the `constructor()`. Instead, we should **assign the initial state to `this.state`** directly in the constructor:


```
constructor(props) {
  super(props);
  // Don't call this.setState() here!<br/>  // initialise state
  this.state = { counter: 0 };<br/>  // bund methods
  this.handleClick = this.handleClick.bind(this);
}
```


Moreover for any side-effects or subscriptions we shouldn&#8217;t use constructor. Instead we should use componentDidMound().

Also instead of the above constructor we could change the code to below:


```
// initialise state here, you don't need to use "this" keyword here
state = {
  counter: 0
}
// use arrow function which points to the class itself and there is no need to bind "this" to the event handler
handleClick = () => {

}
```


As you can see it is more readable and clean and there is no need to worry about constructor issues.

### The static getDerivedStateFromProps()

Based on React docs `getDerivedStateFromProps` is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing:


```
static getDerivedStateFromProps(props, state)
```


This method exists for [rare use cases](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state) where the state depends on changes in props over time. 

For example, it might be handy for implementing a `<Transition>` component that compares its previous and next children to decide which of them to animate in and out.


<img src="https://www.nikpro.com.aulifecycle.jpg" alt="" class="wp-image-32327" srcset="https://testgatsby.locallifecycle.jpg 638w, https://testgatsby.locallifecycle-300x225.jpg 300w" sizes="(max-width: 638px) 100vw, 638px" /> 
 

### The render() method

Technically we need only this  component lifecycle method as a required one in a [class component](https://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/). Actually it examines **this.props** and **this.state** and returns a type like React elements, arrays, portals, strings, numbers or booleans or null.


```
class App extends Component {
  render() {
    return (
      <div>
          <h1 className="App-title">Welcome to React</h1>
      </div>
    );
  }
}

```


basically it renders the same thing each time it invokes. So we should not  modify state there. It does not interact with the browser. This method should stay pure. Also it will not be invoked if [`shouldComponentUpdate()`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) returns false. We will check out this method later in the next article.

### The componentDidMount method

Generally in the component lifecycle this method is a great place to initialise the required DOM elements or load data from a server or do side effects. Because it will be invoked right after an instance of the component has been created.

Moreover we **may call `setState()` immediately** in `componentDidMount()`. AlthoughI it will trigger an extra rendering, but it will happen before the browser updates the screen:


```
componentDidMount(){
    this.getData();
  }
```


Using **Did**Mount makes it clear that data won’t be loaded until _after_ the initial render. Putting the data loading code in `componentDidMount` will ensure that data is only fetched from the client.

We will explain the component lifecycle updating methods in the next article.

Thank you for reading.
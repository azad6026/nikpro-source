---
id: 32623
title: "React fundamentals to build real world applications: how React renders elements"
date: 2018-12-31T20:14:06+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32623
permalink: /react-fundamentals-to-build-real-world-applications-how-react-renders-elements/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/react-render.png
categories:
  - JSX
  - React
tags:
  - render elements in react
---

This article is inspired by the very informative site called <a rel="noreferrer noopener" aria-label="Egghead.io (opens in a new tab)" href="https://egghead.io/lessons" target="_blank">Egghead.io</a> which I enjoy so much. Where I learnt things from deeply. Therefore I want to share a very important concept in React as how it renders elements comparing to pure Javascript.

## Rendering element using Javascript

Basically we create an element into the DOM using similar code as this:

```
// Create an element using only Javascript
 const parent = document.querySelector('#jstest');
 const jsElement = document.createElement('h2');
 jsElement.innerHTML = 'Hello There, I am created by Javascript';
 jsElement.classList.add('jsClass');
 parent.appendChild(jsElement);
```

As a test I have created a pen for all the examples in this article to see the differences and play around with it.

<!-- ![render elements in Javascript](/images/pure-js.png) -->
<figure class="wp-block-image is-resized">

<img src="/images/pure-js.png" alt="pure js"/> <figcaption>render elements in Javascript</figcaption>


We simply create a **h2 tag** and give it a class and content. Typically we use Javascript methods and properties to achieve the goal. And we append the element to the parent element. Lets create the same element using pure React with no JSX.

https://codepen.io/azad6026/pen/vvJeJr

## Rendering element using pure React

Generally React utilises the same concept but makes it much simpler with its own syntax:

```
// Create the same element using React
 const rootElement = document.querySelector('#reacttest');
 const reactElement = React.createElement('h2',{className :  'reactCalss', children: 'Hello There, I am created by React createElement'});
 console.log(reactElement);
 ReactDOM.render(reactElement,rootElement);
```

As a result we get the same element rendered on the page with different content and class name. But the most important thing is **React.createElement** does the job. It accepts a few arguments. First one is the element name(tag). Also as the second one we could use an object to declare the class and content. The content which is called **children** always comes last in the list of arguments.

### Children as props

Reasonably we need to learn about the React element and understand its object. If you log the created reacElement into the console this is what we get:

```
Object {
  $$typeof: [object Symbol] {},
  _owner: null,
  key: null,

  props: Object {
    children: "Hello There, I am created by React createElement",
    className: "reactCalss"
  },
  ref: null,
  type: "h2"
}
```

Clearly we see our content called children and the calss we have given as className. That is what comes from the code:

```
const reactElement = React.createElement('h2',{className :  'reactCalss', children: 'Hello There, I am created by React createElement'});
```

If we needed seperate content we could also have an array of children:

```
const reactElement = React.createElement('h2',{className :  'reactCalss', children: ['Hello There, ','I am created by React createElement']});
```

But we can make the code simpler and more readable using [JSX](https://www.nikpro.com.au/explaining-jsx-with-some-examples/) which empowers our React application.

## Rendering elements using JSX in React

Using JSX to render the element feels like writing HTML itself. But the best part is we can write Javascript inside the tags. Better say HTML inside Javascript because JSX is Javascript extension itself:

```
// Create the same element using JSX
 const jsxRoot = document.querySelector('#jsxtest');
 const content = "Hello there, I am created by React in JSX";
 const className = "jsx-class";
 // JSX with simple content&nbsp;
 const element1 = <h2 className={className}>{content}</h2>;
 //&nbsp; JSX with content as a function using arrow function
 const element2 = <h2 className={className}>{(() => content)()}</h2>;
 ReactDOM.render([element1,element2], jsxRoot);
```

We have used two approaches here. In the first element we put the content as {content} which is actually the children property from the mentioned above in pure React approach.

In the second element we called an arrow function to put the content in as we can use any Javascript code inside a JSX code. Pretty awesome.


<img src="https://www.nikpro.com.aujsx-react-1024x538.png" alt="jsx react" class="wp-image-32627" srcset="https://testgatsby.localjsx-react-1024x538.png 1024w, https://testgatsby.localjsx-react-300x158.png 300w, https://testgatsby.localjsx-react-768x403.png 768w, https://testgatsby.localjsx-react.png 1200w" sizes="(max-width: 1024px) 100vw, 1024px" /> <figcaption>render elements in React</figcaption>


## Rendering elements using props in React

Lastly we will declare the properties as props and pass them to the element using the rest parameters or spread syntax for them to get a copy of it. A very neat approach:

```
// Create the same element using props
 const propsRoot = document.querySelector('#propstest');
 const props = {
   className : "props-class",
   children : " Hi there, I am created by props in React"
 &nbsp;}
 const propsElement = <h2 {...props} />;
 ReactDOM.render(propsElement,propsRoot);
```

To override the {&#8230;props} properties we need to specify them tight after it inside the tag. For example to override the className we should change the code to this:

```
const props = {
   className : "props-class",
   children : " Hi there, I am created by props in React"
 &nbsp;}
 const propsElement = <h2 {...props} className="averrided-class" />;
 ReactDOM.render(propsElement,propsRoot);
```

In this technique we could add more arguments to our props and pass them to the element like events and other props.

In this article we learnt about how React actually enders an element and what is the concept of React.createElement behind the scenes. You can see the pen here again:

https://codepen.io/azad6026/pen/vvJeJr

Thank you for reading.

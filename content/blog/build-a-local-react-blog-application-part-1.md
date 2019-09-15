---
id: 32375
title: 'Build a local React blog application : part 1'
date: 2018-10-10T13:47:59+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32375
permalink: /build-a-local-react-blog-application-part-1/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/reactcomponent.png
categories:
  - ES6
  - React
tags:
  - local app
  - React blog application
---
I wish to explain how to build a local React blog application in a series of articles. This will be a local version and afterwards we will build one with a realtime [API server](http://www.nikpro.com.au/a-simple-explanation-about-restful-api-and-how-to-use-it/).

Generally in our local application we are able to add and remove posts from our app although the changes will not persist as there is no database involved. But we will learn the whole concept of a React application along the way. This is what we well talk about:

https://codepen.io/azad6026/pen/gBMRyL

This is not a step by step tutorial as I don&#8217;t believe in those. One of the best ways to learn in to read others codes and apps and understand it. It will give a clear picture of what should be done. Lets dive in.

## Components structure

Simply put, we first need to figure out the application structure. Ideally we will have an App component that renders the whole application. Other components are its children. Practically in this React blog application we have three components:

  * App component which renders the application
  * Posts Component which shows the posts list and holds the form
  * Post component which is the individual post template

Probably we could have the form in a seperate component. But we will look into that later on to improve the current app.

![Our UI structure are made up of components](/images/component-dom-tree.png)

### App component

Firstly we will take a look at the App component as the main component which is called **container** component:


```

class App extends React.Component {
    render() {
        return ( <React.Fragment>
	<Posts/>            
	</React.Fragment>
        );
    }
}

```


Using [React.Fragment](http://www.nikpro.com.au/react-fragment-the-new-way-to-wrap-multiple-react-elements-explained/) we add our transparent wrapper and we render the Posts component. 

Right here we can guess that **Post component** is a child of Posts component as we are not rendering it in our App component. And it should be as it is just a template that **shows an individual post** using **props**. We will explain that next.

### Components structure in React blog application

Each application is a user interface. So we are actually building a UI and will set up our logic based on that. Therefor it is important to plan user interface before going into logic. Each UI is a [React component](http://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/).

In our React blog application and in **each post** we just have a title and a content blog entries with a button to delete the post. This is a component: **Post.**

List of posts is a** loop of individual Post component** which we handle it in **Posts** component.

Additionally we have a form to submit the posts. But that does not need to be inside each post UI. So we put in inside another component ( here in **Posts** component).

### Data flow in our application

Basically in React data flows from parent to child. Read on <a href="https://reactjs.org/docs/components-and-props.html" target="_blank" rel="noopener noreferrer">here</a> if you don&#8217;t know about props and state. As a best practice depends on your application size there **should only be a very few or one component to handle state**. And the **rest of the components should be handled or fed by their parents via props.**  

In React blog application we **handle state in Posts** component and pass on data to **Post component via props.**<figure class="wp-block-image">

![Posts component will handle state in this case](/images/state-in-componen.jpg)

### Post component

Take a look at the Post component:


```

// The individual post component
const Post = props => (
	<article className="post" id={props.id}>
		<h2 className="post-title">{props.title}</h2>
		<hr />
		<p className="post-content">{props.content}</p>
		<button onClick={props.delete}>Delete this post</button>
	</article>
);

```


Firstly this component is a [functional](http://www.nikpro.com.au/functional-component-in-react-explained-with-examples/) component meaning it does not handle state and it is just a simple function that generates some JSX code which looks like HTML. It creates the UI for each post. In [JSX](http://www.nikpro.com.au/explaining-jsx-with-some-examples/) we need to use className to implement classes as above. 

Secondly we that it uses **props to get information and show them in the UI.** What we need is an **id , title, content and delete ( as a method)** to be handled inside the parent.

Lets see how are they handled inside its parent component which is **Posts**.

### Post component : handling state for each post

Firstly we will see how Posts component handles state and then pass on expected data for Post component. Then we have a look at the form and its state.<figure class="wp-block-image">

![React is all about components](/images/reactcomponent.png)

#### A class component

In ou React blog application the Posts component is a class component which is a stateful component:


```

class Posts extends React.Component {}

```


Therefor we can handle state which looks like this. I have used simpler and shorter text here:


```

state = {
        posts: [
            {
                title: "title one",
                content: "content here"
            },
            {
                title: "title two",
                content:"content here"
            },
            {
                title: "title three",
                content:"content here"
            }
        ],
        post: {
            title: "",
            content: ""
        }
};

```


We have initialised our posts array with some dummy posts. But in real applications we will have it an empty array which will be populated by server data.

Also we have individual post object to serve to Post component. To show the posts we need to loop through it [using map method](http://www.nikpro.com.au/using-map-method-in-react-components-with-examples-explained/) and populate the Post component with needed info:


```

render() {
    const posts = this.state.posts.map((post, index) => {
        return (
            <Post
                id={index}
                key={post.id}
                {...post}
                delete={() => this.handleDelete(event)}
            />
        );
    });
    }
 
```


What we do indie map method is we use index of each post as the id and we pass on post info [using spread syntax](http://www.nikpro.com.au/using-map-method-in-react-components-with-examples-explained/) :


```

{...post}

```


We could have done it like this:


```

title = {post.title}
content = {post.content}

```


But that is more elegant and modern. We also pass on the id as the map key as React will generate an Error saying a unique key is needed if we don&#8217;t.

#### Delete method

In addition to title, id and content we also need to create a delete method. We will pass that on as props as well. 

To delete an item we get the **post container index** ( in our app it is the article element) and **find that post inside posts array using [splice](http://www.nikpro.com.au/how-to-use-slice-and-splice-array-methods-in-javascript/) method**:


```

handleDelete = event => {
    const posts = [...this.state.posts];
    const index = event.target.parentNode.id;
    const updatedPosts = posts.splice(index, 1);
    this.setState({ posts: posts });
};

```



![a few tips about the code](/images/tips.png)

As we are inside our parent component we need to update our posts right after that so we use the **setState()** method.

However note that I have taken a copy of the original posts array using spread syntax. Therefor the original array will not be mutated.

Also as a side note to find the post we are clicking on its delete button I use **event.target** which [gives the information](http://www.nikpro.com.au/what-is-e-target-and-e-currenttarget-and-how-to-use-them/) about the button element and then using **parentNode** property we get its parent info which is the article element and then **getting the id as a unique value** to find out which article we want to delete.

Technically we now have all we need for Post component. Also we are able to show all the posts.

In the next article we will explain how we handle the form and submit a new post and update the DOM accordingly. Stay tuned.

Thank you for reading.

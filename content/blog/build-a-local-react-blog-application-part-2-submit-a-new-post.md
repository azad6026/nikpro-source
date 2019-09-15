---
id: 32388
title: 'Build a local React blog application : part 2,submit a new post'
date: 2018-10-11T20:40:12+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32388
permalink: /build-a-local-react-blog-application-part-2-submit-a-new-post/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/forms.png
categories:
  - React
tags:
  - local app
  - React blog application
---
We had a long article about our local React blog application in [part 1](http://www.nikpro.com.au/build-a-local-react-blog-application-part-1/). Continuously we will explain how to submit a new form and manage our state as well.

## The form requirements

Firstly we need to think what needs to be managed around the form. Unlike angular in React there is no prepared syntax or code to handle forms. We should handle it ourselves. And because everything in React is Javascript we actually can do it in different ways.

### Handle each form input

To submit the form we need to get the value of each input and track the changes in them. Therefor other than a method to submit the form we need a method for each input and handle its change via that.

One way is to create handleChange methods separately per input. As in here we have two input elements which one is textarea element we can create two methods. And then use their values and update state to save the data for submit method:


```

const value = event.target.value

```


But if we create seperate methods we will end up having too many methods that do the same thing for different elements. Only the method name will be different:


```

  <input onChange={this.handleTitleChange}/>
  <textarea onChange={this.handleContentChange}/>
  .
  .
  .
  

```


However we don&#8217;t need to do this. Thankfully there is a clever way around it and that is using name on each element. As we know each form input could have a unique name. We will use that to target each input and handle input changes all in one method using name and value:


```

const name = event.target.name
const value = event.target.value

```


### The form

Simply we create the form using a simple markup in JSX:


```

<form className="new-post-form" onSubmit={this.handleSubmit}>
  <label> Post title
    <input className="title-input" type="text" name="title" onChange={this.handleChange} />
  </label>
  <label> Post content
    <textarea rows="4" className="content-input" type="text" name="content" onChange={this.handleChange} />
  </label>
  <input className="submit-button" type="submit" value="submit" />
</form>

```


To handle change event on each input we use **handleChange** method. Also we gave **a unique name to each input** and the form element handles the **form submission** through onSubmit event. These three things should be managed inside the logic. 

As a side note we don&#8217;t need to specify the value attribute. We will get the value through the code:


```

// ES6 version of the handleChange method
handleChange = event => {
  // get the name and values from the focused input
  const [name, value] = [event.target.name, event.target.value];
  // get the post state
  const { post } = this.state;
  // update the state with the new value
  const newPost = {
      …post,
      [name]: value
  };
  this.setState({ post: newPost });
};

```


Preferably we are using ES6 [destructuring](http://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/) to initialise name and value and then [rest parameters](http://www.nikpro.com.au/javascript-es6-modern-rest-parameters-are-explained-with-examples/) to add the new post. Afterwards we update the state.

### Submit the form

Finally we are ready to submit the new values as a new post. We will handle it with handleSubmit method:



```

handleSubmit = event => {
const { post, posts } = [...this.state];
const newPosts = Array.from(posts);
newPosts.push(post);
this.setState({
    posts: newPosts
});
event.preventDefault();
};


```


Starting with getting  post and posts to work with, we then convert posts to a mappable array and push the new post to the old array. Afterwards we will update state to reflect the DOM. We also add event.preventDefault() to prevent submitting with enter.

As a result we now have a local blog application that we submit new post and show them all in the page and are able to delete them individually as well. 

We will finish it here but in the next application we will add image uploading and component refactoring to a higher level application. 

Thank you for reading.

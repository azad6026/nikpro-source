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
image: /wp-content/uploads/2018/10/forms.png
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

<pre class="wp-block-preformatted"><strong>const value = event.target.value</strong></pre><figure class="wp-block-image is-resized">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/10/input-change.jpeg" alt="" class="wp-image-32390" width="580" height="324" srcset="http://testgatsby.local/wp-content/uploads/2018/10/input-change.jpeg 301w, http://testgatsby.local/wp-content/uploads/2018/10/input-change-300x167.jpeg 300w" sizes="(max-width: 580px) 100vw, 580px" /> <figcaption>We need to handle input changes</figcaption></figure> 

But if we create seperate methods we will end up having too many methods that do the same thing for different elements. Only the method name will be different:

<pre class="wp-block-preformatted"><strong>&lt;input onChange={this.handleTitleChange}/>
&lt;textarea onChange={this.handleContentChange}/></strong><br /><strong>. </strong><br /><strong>.</strong><br /><strong>.
</strong></pre>

However we don&#8217;t need to do this. Thankfully there is a clever way around it and that is using name on each element. As we know each form input could have a unique name. We will use that to target each input and handle input changes all in one method using name and value:

<pre class="wp-block-preformatted"><strong><strong>const name = event.target.name</strong><br />const value = event.target.value</strong></pre>

### The form

Simply we create the form using a simple markup in JSX:

<pre class="wp-block-preformatted"><strong>&lt;form className="new-post-form" onSubmit={this.handleSubmit}></strong><br /><strong>&lt;label> Post title</strong><br /><strong>&lt;input className="title-input" type="text" name="title" onChange={this.handleChange} /></strong><br /><strong>&lt;/label></strong><br /><strong>&lt;label> Post content</strong><br /><strong>&lt;textarea rows="4" className="content-input" type="text" name="content" onChange={this.handleChange} /></strong><br /><strong>&lt;/label></strong><br /><strong>&lt;input className="submit-button" type="submit" value="submit" /></strong><br /><strong>&lt;/form>
</strong></pre>

To handle change event on each input we use **handleChange** method. Also we gave **a unique name to each input** and the form element handles the **form submission** through onSubmit event. These three things should be managed inside the logic. <figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/10/form-submit.jpg" alt="" class="wp-image-32391" srcset="http://testgatsby.local/wp-content/uploads/2018/10/form-submit.jpg 1280w, http://testgatsby.local/wp-content/uploads/2018/10/form-submit-300x169.jpg 300w, http://testgatsby.local/wp-content/uploads/2018/10/form-submit-768x432.jpg 768w, http://testgatsby.local/wp-content/uploads/2018/10/form-submit-1024x576.jpg 1024w" sizes="(max-width: 1280px) 100vw, 1280px" /> <figcaption>We handle the form submission using form element onSubmit event</figcaption></figure> 

As a side note we don&#8217;t need to specify the value attribute. We will get the value through the code:

<pre class="wp-block-preformatted"><strong>// ES6 version of the handleChange method<br />handleChange = event => {<br />      // get the name and values from the focused input</strong><strong>
        const [name, value] = <br />[event.target.name, event.target.value];<br />      // get the post state</strong><strong>
        const { post } = this.state;<br />      // update the state with the new value</strong><strong>
        const newPost = {</strong><strong>
            …post,</strong><strong>
            [name]: value</strong><strong>
        };<br />         this.setState({ post: newPost });</strong><strong>
    };</strong><br /></pre>

Preferably we are using ES6 [destructuring](http://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/) to initialise name and value and then [rest parameters](http://www.nikpro.com.au/javascript-es6-modern-rest-parameters-are-explained-with-examples/) to add the new post. Afterwards we update the state.

### Submit the form

Finally we are ready to submit the new values as a new post. We will handle it with handleSubmit method:

<pre class="wp-block-preformatted"><strong>handleSubmit = event => {</strong><strong>
        const { post, posts } = [...this.state];</strong><strong>
        const newPosts = Array.from(posts);</strong><strong>
        newPosts.push(post);</strong><strong>
        this.setState({</strong><strong>
            posts: newPosts</strong><strong>
        });</strong><strong><code>
    event.preventDefault();
};</code></strong></pre>

Starting with getting  post and posts to work with, we then convert posts to a mappable array and push the new post to the old array. Afterwards we will update state to reflect the DOM. We also add event.preventDefault() to prevent submitting with enter.

As a result we now have a local blog application that we submit new post and show them all in the page and are able to delete them individually as well. 

We will finish it here but in the next application we will add image uploading and component refactoring to a higher level application. 

Thank you for reading.

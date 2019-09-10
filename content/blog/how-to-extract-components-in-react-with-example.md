---
id: 32045
title: How to extract components in React with example
date: 2018-08-18T20:15:57+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32045
permalink: /how-to-extract-components-in-react-with-example/
image: /images/extracting-component.png
categories:
  - React
tags:
  - Extract components in React
---
There are ways on how to extract [components in React](http://www.nikpro.com.au/more-on-react-components-with-examples/) depends on the structure of your components. It is always best practice to separate logics as optimised as possible to avoid certain bad practices.

## When to extract components

There are lots of reasons on why you should do this:

  * The component ( Especially if it is your main App component) might get big and full of non related logic
  * You might have repetitive logic throughout component
  * Lots of using of connected components or using multiple similar compoetns

Whatever other reasons could be yours to do the extraction. Lets have a look at a good example around extract components in React. 

### Extract components in React in an example

I am using React site&#8217;s example as it is the best and clearest. Imagine a functional comment component we have:

<pre class="wp-block-preformatted"><strong><code>function Comment(props) {
  return (
    &lt;div className="Comment">
      &lt;div className="UserInfo">
        &lt;img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        &lt;div className="UserInfo-name">
          {props.author.name}
        &lt;/div>
      &lt;/div>
      &lt;div className="Comment-text">
        {props.text}
      &lt;/div>
      &lt;div className="Comment-date">
        {formatDate(props.date)}
      &lt;/div>
    &lt;/div>
  );
}</code></strong></pre>

It accepts **`author`** which is an object itself. **A`text`** that is a string, and **`date`** (a date) as props, and describes a comment on a social media website.

It is hard to use parts of this component as reusable parts. However doing extraction will make it easier and neater. First we can extract an **Avatar component** as a separate function component:

<pre class="wp-block-preformatted"><strong><code>function Avatar(props) {
  return (
    &lt;img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}</code></strong></pre>

It is recommended naming props from the component’s own point of view rather than the context in which it is being used. This is why we have given its prop a more generic name: **`user`** rather than **`author`**. Then we can use Avatar component just like this:

<pre class="wp-block-preformatted"><strong>&lt;Avatar user={props.author} /></strong></pre>

Now we can extract components again by extracting a UserInfo component. therefor it will look like this:

<pre class="wp-block-preformatted"><strong><code>unction UserInfo(props) {
  return (
    &lt;div className="UserInfo">
      &lt;Avatar user={props.user} />
      &lt;div className="UserInfo-name">
        {props.user.name}
      &lt;/div>
    &lt;/div>
  );
}</code></strong></pre>

As you can see we use Avatar here to render the user&#8217;s name and completing the UserInfo component by having all user(here author ) information in one place. Meaning one component.

After all the comment component will look like a simpler and easy to read component:

<pre class="wp-block-preformatted"><strong><code>function Comment(props) {
  return (
    &lt;div className="Comment">
      &lt;UserInfo user={props.author} />
      &lt;div className="Comment-text">
        {props.text}
      &lt;/div>
      &lt;div className="Comment-date">
        {formatDate(props.date)}
      &lt;/div>
    &lt;/div>
  );
}</code></strong></pre>

As a result if a part of your UI is used multiple times like using Buttons , Avatar, or is complex enough on its own Like comment, post or App, it is a good practice extract components and make them reusable and easier to manage components. Thanks for reading.
---
id: 32518
title: Nested components in React; How to render a child component inside a parent component:Part 1
date: 2018-11-06T20:48:29+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32518
permalink: /nested-components-in-react-how-to-render-a-child-component-inside-a-parent-componentpart-1/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/11/react.png
categories:
  - React
tags:
  - nested components
---
Once we start writing real world applications in React we need to learn about nested components. How we could actually render a child component inside a parent component and how to pass the state and props. In a series of articles we are going to cover this with examples.

## Passing props down

Basically we have to understand that **props can only be passed down to the child components.** Meaning we **could never pass props from child to parent component**. Secondly **props are read only**. Meaning we **cannot update them as we do for states.**

Therefor knowing these two facts lets take a look at this very useful example from <a href="https://reactjs.org/docs/lists-and-keys.html" target="_blank" rel="noreferrer noopener">Reactjs</a>. We have got an array of numbers to show as a list in frontend:

<pre class="wp-block-preformatted"><code>&lt;strong>const numbers = [1, 2, 3, 4, 5, 6];&lt;/strong></code></pre>

Our first approach is to create a component to loop through the array and output them:

<pre class="wp-block-preformatted"><code>function NumberList(props) {  </code>
<code>  const numbers = props.numbers;  </code>
<code>  const listItems = numbers.map((number) =&gt;    </code>
<code>    &lt;li&gt;{number}&lt;/li&gt;  </code>
<code>  );  </code>
<code>  return (    </code>
<code>    &lt;ul&gt;{listItems}&lt;/ul&gt;  </code>
<code>  );</code>
<code>}</code></pre>

Obviously our list is created via a loop through our array with map to generate list items. As a result our NumberList component returns an unordered list of items:

<pre class="wp-block-preformatted"><code>&lt;strong>ReactDOM.render(  &lt;/strong></code><strong>
</strong><code>&lt;strong>  &lt;NumberList numbers={numbers} /&gt;,  &lt;/strong></code><strong>
</strong><code>&lt;strong>  document.getElementById('root')&lt;/strong></code><strong>
</strong><code>&lt;strong>);&lt;/strong></code></pre><figure class="wp-block-image">

<img class="wp-image-32521" src="http://www.nikpro.com.au/wp-content/uploads/2018/11/passdata.png" alt="pass data down" srcset="http://testgatsby.local/wp-content/uploads/2018/11/passdata.png 591w, http://testgatsby.local/wp-content/uploads/2018/11/passdata-300x175.png 300w" sizes="(max-width: 591px) 100vw, 591px" /> <figcaption>passing data and events between child and parent components</figcaption> </figure> 

## Extract components to nested components

Now if we [extract our component](http://www.nikpro.com.au/how-to-extract-components-in-react-with-example/) to two seperate component we could have nested components and see how to pass props in that case. Our NumberList Component will be changed and we extract it to two components:

<pre class="wp-block-preformatted"><strong>// Child component
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return &lt;li&gt;{props.value}&lt;/li&gt;;
}
// Parent component
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =&gt;
    // Correct! Key should be specified inside the array.
    &lt;ListItem key={number.toString()}
              value={number} /&gt;
  );
  return (
    &lt;ul&gt;
      {listItems}
    &lt;/ul&gt;
  );
}</strong></pre>

Practically we have our **ListItem** component as the **child** component. Inside NumberList component we pass the props to the ListItem component once we initialise its properties:

<pre class="wp-block-preformatted"><strong>const listItems = numbers.map((number) =&gt;
    // Correct! Key should be specified inside the array.
    &lt;ListItem key={number.toString()}
              value={number} /&gt;
  );</strong></pre>

Therefor **ListItem component will have access to the mapped numbers**. As a result we can now create our list inside our child component using passed props:

<pre class="wp-block-preformatted"><strong> return &lt;li&gt;{props.value}&lt;/li&gt;;</strong></pre>

Finally we return our list in the parent component:

<pre class="wp-block-preformatted"><strong> return (
    &lt;ul&gt;
      {listItems}
    &lt;/ul&gt;
  );</strong></pre>

This is the core concept of passing props from top to bottom or from parent to child components in React. Understanding this will help to die into real world examples. In the next article we will see some more complex examples and we will pass states down as props into child components as well.

Thank you for reading.
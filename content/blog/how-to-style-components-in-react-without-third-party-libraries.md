---
id: 32471
title: Styling components in React without third-party libraries
date: 2018-10-27T20:38:07+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32471
permalink: /how-to-style-components-in-react-without-third-party-libraries/
xyz_twap:
  - "1"
# image: ../../static/images/css-style.png
categories:
  - React
tags:
  - CSS modules
  - styles in React
---
Basically three are three ways of styling [components](http://www.nikpro.com.au/how-to-extract-components-in-react-with-example/) in React without using any other libraries like styled components. We will cover them all in this article with different examples.

## Style components with inline styling

Generally we know inline styling as the very first and basic styling in CSS. It is perfectly safe and clean to be used in React components. But how we define them here is different as in HTML as we write it in a JSX code.

Starting with a simple example we can explain it better:

<pre class="wp-block-preformatted"><code>&lt;strong>const divStyle = {  &lt;/strong></code>
<code>&lt;strong>  color: 'blue',  &lt;/strong></code>
<code>&lt;strong>  background# image: ../../static/images/'url(' + imgUrl + ')',&lt;/strong></code>
<code>&lt;strong>};&lt;/strong></code>
<code>&lt;strong>HelloWorldComponent =&gt; (  &lt;/strong></code>
<code>&lt;strong>  &lt;div style={divStyle}&gt;Hello World!&lt;/div&gt;;&lt;/strong></code>
);```

First we have defined a camelCased constant which is an object to hold the style. The object name which is **divStyle** in this case is the key of the object. And the object value is the styles. So inline style in React is not a string but defines as an object. Another example:

```var divStyle = {
  color: 'white',
  background# image: ../../static/images/'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};
ReactDOM.render(&lt;div style={divStyle}&gt;Hello World!&lt;/div&gt;, mountNode);```

We can write normal styles here. We can either pass the variable name like above  **style = {divStyle} **or pass the style directly like below:

<pre class="wp-block-preformatted"><code>&lt;strong>HelloWorldComponent =&gt; (  &lt;/strong></code>
<code>&lt;strong>  &lt;div style={{ color: 'blue'}}&gt;Hello World!&lt;/div&gt;;&lt;/strong></code>
<code>&lt;strong>);&lt;/strong></code></pre><figure class="wp-block-image">

<img class="wp-image-32473" src="http://www.nikpro.com.aucssstye.png" alt="" /> <figcaption>**CSS in React**</figcaption> </figure> 

## Styling components with CSS stylesheet

Styling components with CSS stylesheet is a better and more maintainable way. Especially we could have seperate stylesheet per component which makes the code neater and the style more [specific](http://www.nikpro.com.au/how-cascade-in-css-works-this-partspecificity/) to the component.

We will need to import the file into the component and use the classes in our code. Here is a simple component called DottedBox using its very own CSS stylesheet:

```import React from 'react';
import './DottedBox.css';

const DottedBox = () =&gt; (
  &lt;div className="DottedBox"&gt;
    &lt;p className="DottedBox_content"&gt;Get started with CSS styling&lt;/p&gt;
  &lt;/div&gt;
);

export default DottedBox;```

Also this is the CSS file called DottedBox.css:

```.DottedBox {
  margin: 40px;
  border: 5px dotted pink;
}
.DottedBox_content {
  font-size: 15px;
  text-align: center;
}```<figure class="wp-block-image">

<img class="wp-image-32474" src="http://www.nikpro.com.aucss-in-react.jpg" alt="" srcset="http://testgatsby.localcss-in-react.jpg 638w, http://testgatsby.localcss-in-react-300x182.jpg 300w" sizes="(max-width: 638px) 100vw, 638px" /> </figure> 

## Styling components using CSS modules

Basically a CSS Module is a CSS file in which all class names and animation names are scoped locally by default. We could use React&#8217;s internal CSS modules which has some standard ones. Our component will look like this:

```import React from 'react';
import styles from './DashedBox.css';

const DashedBox = () =&gt; (
  &lt;div className={styles.container}&gt;
    &lt;p className={styles.content}&gt;Get started with CSS Modules style&lt;/p&gt;
  &lt;/div&gt;
);

export default DashedBox;```

On the other hand the CSS styles:

**…  
//App.css  
.logo {  
  animation: App-logo-spin infinite 20s linear;  
  height: 80px;  
}  
.header {  
  background-color: #222;  
  height: 150px;  
  padding: 20px;  
  color**: white;  
}  
…

But you need to run the **eject** command on your application to make CSS modules work. After ejecting <a href="https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2" target="_blank" rel="noreferrer noopener">we want to add these two lines</a> into our **webpack config both dev and prod setup**. modules: true means enable CSS module. localIdentName will give us n unique CSS classname. :

```modules: true,
localIdentName: '[name]__[local]__[hash:base64:5]'```

Therefore we can use CSS styles in our components like below:

```//App.js
import styles from './App.css';
...
&lt;div <em>className</em>={styles.app}&gt;
  &lt;header <em>className</em>={styles.header}&gt;
  &lt;img <em>src</em>={logo} <em>className</em>={styles.logo} <em>alt</em>="logo" /&gt;
  &lt;h1 <em>className</em>={styles.title}&gt;Welcome to React&lt;/h1&gt;
  &lt;/header&gt;
  &lt;p <em>className</em>={styles.intro}&gt;
  To get started, edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
  &lt;/p&gt;
&lt;/div&gt;```

Instead of using the class as a string as in CSS stylesheet, we need to use braces and add the CSS class name after **styles.** just like **className={styles.title}**. We could use any style in CSS modules.That is what makes it so powerful and useful.

That&#8217;s it. These three methods should be used in their own use cases. Sometimes we might need to change a colour based in a state change so inline style will be a perfect option. And if we don&#8217;t want too complicated styling CSS stylesheets are enough. In a real world app with tons of codes we better use CSS modules to save time and get the most out of CSS.

Thank you for reading.
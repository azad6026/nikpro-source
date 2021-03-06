---
id: 31693
title: Explaining JSX with some examples
date: 2018-06-21T21:59:22+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31693
permalink: /explaining-jsx-with-some-examples/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/jsx-react.png
categories:
  - JSX
  - React
tags:
  - elements
---
We all have heard of JSX. Lets explain it with some examples. First lets break the word down. JSX is a Javascript extension. It actually extends the language. It more looks like HTML or XML when you write it. But it is naturally Javascript. 

For browsers to understand it, it needs to be compiled with a compiler like [Babel](https://babeljs.io/). Ket us write some JSX examples and explain it better:

<p class="gatsby-code-jsx">
  const element = <h1>This is JSX</h1>;</p> 
  
  <p>
    You can clearly see the syntax looks like a mix of HTML and Javascript.It is not a template language. It comes with the full power of Javascript.
  </p>
  
  <h2 class="gatsby-code-jsx">
    React and JSX
  </h2>
  
  <p>
    <a href="https://www.nikpro.com.au/react-or-angular-how-much-it-matters/">React</a> embraces JSX to be used to define Elements and Components. It looks like rendering logic is mixed with UI logic. The fact is in react, logic and UI are not seperate as files. They are seperate as concerns by using and defining components.
  </p>
  
  <p>
    Although react does not require JSX. but it is easy to use and better to read so most react developers tend to use JSX in their applications.
  </p>
  
  <h2>
    JSX Examples 
  </h2>
  
  <p>
    Lets see how this code renders in react:
  </p>
  
  <hr />
  
  <p>
    const element = (
  <h1 className=&#8221;greeting&#8221;>
   Hello, world!
   </h1>
 );
  </p>
  
  <hr />
  
  <p>
    This is identical to this code in react:
  </p>
  
  <hr />
  
  <p>
    const element = React.createElement(
   &#8216;h1&#8217;,
   {className: &#8216;greeting&#8217;},
   &#8216;Hello, world!&#8217;
 );
  </p>
  
  <hr />
  
  <p>
    Babel compiles JSX down to React.createElement() calls.As you can see, class attribute is called className in camel case here. This code actually creates an object like this:
  </p>
  
  <hr />
  
  <p>
    const element = {
   type: &#8216;h1&#8217;,
   props: {
     className: &#8216;greeting&#8217;,
     children: &#8216;Hello, world!&#8217;
   }
 };
  </p>
  
  <hr />
  
  <p>
    This object is called an element which describes what is to be shown in the UI.
  </p>
  
  <p>
    Now check out this JSX code:
  </p>
  
  <hr />
  
  <p>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#8216;Azadeh&#8217;</span><span class="token punctuation">;</span>
  </p>
  
  <p>
    const element = <h1>Hello, {name}</h1>;
  </p>
  
  <hr />
  
  <p>
    We declare a variable called name and then use it inside JSX by wrapping it in curly braces. You can put any vald Javascript expression inside curly braces in JSX. Functions , objects, objects properties.
  </p>
  
  <p>
    Also we can write JSX inside functions.Here we used JSX to return the value which is an expression itself.
  </p>
  
  <hr />
  
  <p>
    function getGreeting(user) {
   if (user) {
     return <h1>Hello, {formatName(user)}!</h1>;
   }
   return <h1>Hello, Stranger.</h1>;
 }
  </p>
  
  <hr />
  
  <h2>
    Next
  </h2>
  
  <p>
    In the next articles , we will learn more about JSX and break it down to details. We will write more elements and components in react to explain JSX syntax clearly.
  </p>
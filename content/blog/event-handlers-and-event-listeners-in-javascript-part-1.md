---
id: 31774
title: 'Event handlers and Event Listeners in Javascript: Part 1'
date: 2018-07-02T22:20:28+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31774
permalink: /event-handlers-and-event-listeners-in-javascript-part-1/
# image: ../../static/images/event-listener-three-actors-model.png
categories:
  - JAVASCRIPT
tags:
  - event handlers
  - event listeners
  - events
---
The event listeners are used to respond to user interactions. There are a lot of different types of events that can occur, for example:

  * Clicking the mouse over a certain element or hovering the cursor over a certain element.
  * Pressing a key on the keyboard.
  * Resizing or closing the browser window.
  * A web page finishing loading.
  * A form being submitted.
  * A video being played, or paused, or finishing play.
  * An error occurring.

Each available event will have an event handler which is a block of code that runs when the event happens. Event handlers are called event listeners. The listener listens out for the event to happen and the handler is the actual code that runs after event fires. 

## First example

//The HTML

<p class="brush: html line-numbers  language-html">
  <code class=" language-html">&lt;span class="token tag">&lt;span class="token punctuation">&lt;&lt;/span>button&lt;span class="token punctuation">&gt;&lt;/span>&lt;/span>Change color&lt;span class="token tag">&lt;span class="token punctuation">&lt;/&lt;/span>button&lt;span class="token punctuation">&gt;&lt;/p>
&lt;p>&lt;/span>&lt;/span></code>//the Javascript
</p>

<pre class="brush: js line-numbers  language-js"><code class=" language-js">&lt;span class="token keyword">var&lt;/span> btn &lt;span class="token operator">=&lt;/span> document&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">querySelector&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'button'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span></code></pre>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">btn&lt;span class="token punctuation">.&lt;/span>onclick &lt;span class="token operator">=&lt;/span> &lt;span class="token keyword">function&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>&lt;br />
</code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">  document&lt;span class="token punctuation">.&lt;/span>body&lt;span class="token punctuation">.&lt;/span>style&lt;span class="token punctuation">.&lt;/span>backgroundColor &lt;span class="token operator">=&lt;/span> "red"&lt;span class="token punctuation">;&lt;/span> </code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">&lt;span class="token punctuation">}&lt;/span></code>
</p>

Or to makeit more readable you could do this:

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">&lt;span class="token keyword">function&lt;/span> &lt;span class="token function">bgChange&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>&lt;br />
</code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">  document&lt;span class="token punctuation">.&lt;/span>body&lt;span class="token punctuation">.&lt;/span>style&lt;span class="token punctuation">.&lt;/span>backgroundColor &lt;span class="token operator">=&lt;/span> "red"&lt;span class="token punctuation">;&lt;/span> </code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">&lt;span class="token punctuation">}&lt;/span> </code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">btn&lt;span class="token punctuation">.&lt;/span>onclick &lt;span class="token operator">=&lt;/span> bgChange&lt;span class="token punctuation">;&lt;br />
&lt;/span></code><br /> But the output is the same and clicking the button will change the background colour.
</p>

Lets now have a look of how we could implement event handlers and which one is better.

## <span class="highlight-span">Inline event handlers</span> {#Inline_event_handlers_—_don't_use_these.highlight-spanned}

It mixes your Javascript with HTML by attaching the event directly to an attribute of HTML code:

<pre class="brush: html line-numbers  language-html"><code class=" language-html">&lt;span class="token tag">&lt;span class="token punctuation">&lt;&lt;/span>button &lt;span class="token attr-name">onclick&lt;/span>&lt;span class="token attr-value">&lt;span class="token punctuation">=&lt;/span>&lt;span class="token punctuation">"&lt;/span>bgChange()&lt;span class="token punctuation">"&lt;/span>&lt;/span>&lt;span class="token punctuation">&gt;&lt;/span>&lt;/span>Press me&lt;span class="token tag">&lt;span class="token punctuation">&lt;/&lt;/span>button&lt;span class="token punctuation">&gt;&lt;/span>&lt;/span></code></pre>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">&lt;span class="token keyword">function&lt;/span> &lt;span class="token function">bgChange&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span></code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">  document&lt;span class="token punctuation">.&lt;/span>body&lt;span class="token punctuation">.&lt;/span>style&lt;span class="token punctuation">.&lt;/span>backgroundColor &lt;span class="token operator">=&lt;/span> "red"&lt;span class="token punctuation">;&lt;/span> </code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">&lt;span class="token punctuation">}&lt;/span></code><br /> Here we have assigned the bgChange function to onclick event of the button. This mix is a bad practice and could cause lots of problems in your code. Wha if you need to do the same action for multiple buttons? You will add lots of attributes?
</p>

Another approach in this case is to put the function body inside the HTML code as well:

<p class="brush: html line-numbers  language-html">
  <code class=" language-html">&lt;span class="token tag">&lt;span class="token punctuation">&lt;&lt;/span>button &lt;span class="token attr-name">onclick&lt;/span>&lt;span class="token attr-value">&lt;span class="token punctuation">=&lt;/span>&lt;span class="token punctuation">"&lt;/span>alert(&lt;span class="token punctuation">'&lt;/span>Hello, this is my old-fashioned event handler!&lt;span class="token punctuation">'&lt;/span>);&lt;span class="token punctuation">"&lt;/span>&lt;/span>&lt;span class="token punctuation">&gt;&lt;/span>&lt;/span>Press me&lt;span class="token tag">&lt;span class="token punctuation">&lt;/&lt;/span>button&lt;span class="token punctuation">&gt;&lt;/p>
&lt;p>&lt;/span>&lt;/span></code>
</p>

Separating your programming logic from your content also makes your site more friendly to search engines. It takes us to the next approach.

## <span class="highlight-span">addEventListener() and removeEventListener()</span> {#addEventListener()_and_removeEventListener().highlight-spanned}

This is [the newer approach](http://www.nikpro.com.au/what-is-spread-syntax-in-es6-and-how-to-use-it/) that is quiet similar to event handler approach but with a different syntax:

<pre class="brush: js line-numbers  language-js"><code class=" language-js">&lt;span class="token keyword">var&lt;/span> btn &lt;span class="token operator">=&lt;/span> document&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">querySelector&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'button'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
&lt;span class="token keyword">function&lt;/span> &lt;span class="token function">bgChange&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  document&lt;span class="token punctuation">.&lt;/span>body&lt;span class="token punctuation">.&lt;/span>style&lt;span class="token punctuation">.&lt;/span>backgroundColor &lt;span class="token operator">=&lt;/span> "red"&lt;span class="token punctuation">;&lt;/span>
&lt;span class="token punctuation">}&lt;/span>   

btn&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">addEventListener&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'click'&lt;/span>&lt;span class="token punctuation">,&lt;/span> bgChange&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span></code></pre>

We have two parameters inside the addEventListener. First one is the event name and the second is the handler function to run in response to the event. We could also put all the code inside the second parameter like this:

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">btn&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">addEventListener&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'click'&lt;/span>&lt;span class="token punctuation">,&lt;/span> &lt;span class="token keyword">function&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>&lt;br />
</code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">  document&lt;span class="token punctuation">.&lt;/span>body&lt;span class="token punctuation">.&lt;/span>style&lt;span class="token punctuation">.&lt;/span>backgroundColor &lt;span class="token operator">=&lt;/span>"red"&lt;span class="token punctuation">;&lt;/span>&lt;br />
&lt;span class="token punctuation">}&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span></code><br /> We could also remove the listener:
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">btn&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">removeEventListener&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'click'&lt;/span>&lt;span class="token punctuation">,&lt;/span> bgChange&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span></code>
</p>

With event listeners multiple functions could have same code in response to an event. 

In the inline approach, we cannot have multiple handlers on the same event for an element so this will not work:

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">myElement&lt;span class="token punctuation">.&lt;/span>onclick &lt;span class="token operator">=&lt;/span> functionA&lt;span class="token punctuation">;&lt;/span>&lt;br />
</code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">myElement&lt;span class="token punctuation">.&lt;/span>onclick &lt;span class="token operator">=&lt;/span> functionB&lt;span class="token punctuation">;&lt;br />
&lt;/span></code>
</p>

But with Event Listeners we could do this:

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">myElement&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">addEventListener&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'click'&lt;/span>&lt;span class="token punctuation">,&lt;/span> functionA&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>&lt;br />
</code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">myElement&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">addEventListener&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'click'&lt;/span>&lt;span class="token punctuation">,&lt;/span> functionB&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span></code>
</p>

Both functions will run when the element is clicked.

The main advantages of this mechanism is that you can remove event handler code if needed using `removeEventListener()`, and you can add multiple listeners of the same type to elements if required
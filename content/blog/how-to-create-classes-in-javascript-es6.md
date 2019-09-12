---
id: 31829
title: How to create classes in Javascript ES6
date: 2018-07-09T22:33:24+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31829
permalink: /how-to-create-classes-in-javascript-es6/
# image: ../../static/images/class-es6.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - class declaration
  - class expression
  - classes
  - super keyword
---
Following our [last posts](http://www.nikpro.com.au/default-parameters-in-javascript-es6-explained/) about new features in ES6, we will learn about how to create classes in Javascript ES6. Classes in ES6 have a nice and clean syntax which changes our usual way of using objects and prototypes.

## Class definition

We can define a class in two ways. declare it or express it.

### Class declaration 

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">&lt;span class="token keyword">class&lt;/span> &lt;span class="token class-name">Rectangle&lt;/span> &lt;span class="token punctuation">{&lt;/span>&lt;br />
</code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">&lt;span class="token function">  constructor&lt;/span>&lt;span class="token punctuation">(&lt;/span>height&lt;span class="token punctuation">,&lt;/span> width&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>&lt;br />
</code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">&lt;span class="token keyword">   this&lt;/span>&lt;span class="token punctuation">.&lt;/span>height &lt;span class="token operator">=&lt;/span> height&lt;span class="token punctuation">;&lt;/span>&lt;br />
    &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>width &lt;span class="token operator">=&lt;/span> width&lt;span class="token punctuation">;&lt;/span>&lt;br />
</code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">&lt;span class="token punctuation">  }&lt;/span>&lt;br />
</code>
</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js">&lt;span class="token punctuation">}&lt;/span></code>
</p>

Here we actually declare it with class keyword.

### Class expressions

<pre class="brush: js line-numbers  language-js"><code class=" language-js">&lt;span class="token comment" spellcheck="true">&lt;strong>// unnamed&lt;/strong>&lt;/span>&lt;strong>
&lt;span class="token keyword">let&lt;/span> Rectangle &lt;span class="token operator">=&lt;/span> &lt;span class="token keyword">class&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  &lt;span class="token function">constructor&lt;/span>&lt;span class="token punctuation">(&lt;/span>height&lt;span class="token punctuation">,&lt;/span> width&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>height &lt;span class="token operator">=&lt;/span> height&lt;span class="token punctuation">;&lt;/span>
    &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>width &lt;span class="token operator">=&lt;/span> width&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span>&lt;span class="token punctuation">;&lt;/span>
console&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">log&lt;/span>&lt;span class="token punctuation">(&lt;/span>Rectangle&lt;span class="token punctuation">.&lt;/span>name&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
&lt;span class="token comment" spellcheck="true">// output: "Rectangle"&lt;/span>
&lt;span class="token comment" spellcheck="true">// named&lt;/span>
&lt;span class="token keyword">let&lt;/span> Rectangle &lt;span class="token operator">=&lt;/span> &lt;span class="token keyword">class&lt;/span> &lt;span class="token class-name">Rectangle2&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  &lt;span class="token function">constructor&lt;/span>&lt;span class="token punctuation">(&lt;/span>height&lt;span class="token punctuation">,&lt;/span> width&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>height &lt;span class="token operator">=&lt;/span> height&lt;span class="token punctuation">;&lt;/span>
    &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>width &lt;span class="token operator">=&lt;/span> width&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span>&lt;span class="token punctuation">;&lt;/span>
console&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">log&lt;/span>&lt;span class="token punctuation">(&lt;/span>Rectangle&lt;span class="token punctuation">.&lt;/span>name&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
&lt;span class="token comment" spellcheck="true">// output: "Rectangle2"&lt;/span>&lt;/strong></code></pre>

The name given to a named class expression is local to the class&#8217;s body. It can be retrieved through the class&#8217;s (not an instance&#8217;s) [.name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property, though)

## Class body and method definitions {#Class_body_and_method_definitions}

The body of a class is executed in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), i.e., code written here is subject to stricter syntax for increased performance.

The `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor">constructor</a>` method is a special method for creating and initialising an object created with a `class`.A constructor can use the `super` keyword to call the constructor of the super class. ( As in react) In the below class we have a constructor and a method.

<pre class="brush: js line-numbers  language-js"><code class=" language-js">&lt;span class="token keyword">class&lt;/span> &lt;span class="token class-name">Rectangle&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  &lt;span class="token function">constructor&lt;/span>&lt;span class="token punctuation">(&lt;/span>height&lt;span class="token punctuation">,&lt;/span> width&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>height &lt;span class="token operator">=&lt;/span> height&lt;span class="token punctuation">;&lt;/span>
    &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>width &lt;span class="token operator">=&lt;/span> width&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
  &lt;span class="token comment" spellcheck="true">// Getter&lt;/span>
  &lt;span class="token keyword">get&lt;/span> &lt;span class="token function">area&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    &lt;span class="token keyword">return&lt;/span> &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">calcArea&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
  &lt;span class="token comment" spellcheck="true">// Method&lt;/span>
  &lt;span class="token function">calcArea&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    &lt;span class="token keyword">return&lt;/span> &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>height &lt;span class="token operator">*&lt;/span> &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>width&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span>
&lt;span class="token keyword">const&lt;/span> square &lt;span class="token operator">=&lt;/span> &lt;span class="token keyword">new&lt;/span> &lt;span class="token class-name">Rectangle&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token number">10&lt;/span>&lt;span class="token punctuation">,&lt;/span> &lt;span class="token number">10&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>

console&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">log&lt;/span>&lt;span class="token punctuation">(&lt;/span>square&lt;span class="token punctuation">.&lt;/span>area&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span> &lt;span class="token comment" spellcheck="true">// 100&lt;/span></code>
```


The interesting thing about classes in ES6 is that there is no function keyword to declare one. We could use the name right away.

## Class Extension

We could use extends keyword to create a new child class (of both types explained above) of another class.In the example below, the Dog class extends Animal class and using super to call class constructor and pass in the name.

<pre class="brush: js line-numbers  language-js"><code class=" language-js">&lt;span class="token keyword">class&lt;/span> &lt;span class="token class-name">Animal&lt;/span> &lt;span class="token punctuation">{&lt;/span> 
  &lt;span class="token function">constructor&lt;/span>&lt;span class="token punctuation">(&lt;/span>name&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name &lt;span class="token operator">=&lt;/span> name&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
  
  &lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    console&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">log&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name &lt;span class="token operator">+&lt;/span> &lt;span class="token string">' makes a noise.'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span>
&lt;span class="token keyword">class&lt;/span> &lt;span class="token class-name">Dog&lt;/span> &lt;span class="token keyword">extends&lt;/span> &lt;span class="token class-name">Animal&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  &lt;span class="token function">constructor&lt;/span>&lt;span class="token punctuation">(&lt;/span>name&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    &lt;span class="token keyword">super&lt;/span>&lt;span class="token punctuation">(&lt;/span>name&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span> &lt;span class="token comment" spellcheck="true">// call the super class constructor and pass in the name parameter&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>

  &lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    console&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">log&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name &lt;span class="token operator">+&lt;/span> &lt;span class="token string">' barks.'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span>
&lt;span class="token keyword">let&lt;/span> d &lt;span class="token operator">=&lt;/span> &lt;span class="token keyword">new&lt;/span> &lt;span class="token class-name">Dog&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'Mitzie'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
d&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span> &lt;span class="token comment" spellcheck="true">// Mitzie barks.&lt;/span></code>
```


**Note: **If there is a constructor present in subclass, it needs to first call super() before using &#8220;this&#8221;. This is very useful in react application classes.

You could also use class inheritence to extend old defined functions:

<pre class="brush: js line-numbers  language-js"><code class=" language-js">&lt;span class="token keyword">function&lt;/span> Animal &lt;span class="token punctuation">(&lt;/span>name&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name &lt;span class="token operator">=&lt;/span> name&lt;span class="token punctuation">;&lt;/span>  
&lt;span class="token punctuation">}&lt;/span>

Animal&lt;span class="token punctuation">.&lt;/span>prototype&lt;span class="token punctuation">.&lt;/span>speak &lt;span class="token operator">=&lt;/span> &lt;span class="token keyword">function&lt;/span> &lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  console&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">log&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name &lt;span class="token operator">+&lt;/span> &lt;span class="token string">' makes a noise.'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
&lt;span class="token punctuation">}&lt;/span>
&lt;span class="token keyword">class&lt;/span> &lt;span class="token class-name">Dog&lt;/span> &lt;span class="token keyword">extends&lt;/span> &lt;span class="token class-name">Animal&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  &lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    console&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">log&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name &lt;span class="token operator">+&lt;/span> &lt;span class="token string">' barks.'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span>
&lt;span class="token keyword">let&lt;/span> d &lt;span class="token operator">=&lt;/span> &lt;span class="token keyword">new&lt;/span> &lt;span class="token class-name">Dog&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'Mitzie'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
d&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span> &lt;span class="token comment" spellcheck="true">// Mitzie barks.&lt;/span></code>
```


It is important to know that classes cannot extend regular objects unless you use setPrototypeOf method to add the object as a method:

<pre class="brush: js line-numbers  language-js"><code class=" language-js">&lt;span class="token keyword">const&lt;/span> Animal &lt;span class="token operator">=&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  &lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    console&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">log&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name &lt;span class="token operator">+&lt;/span> &lt;span class="token string">' makes a noise.'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span>&lt;span class="token punctuation">;&lt;/span>
&lt;span class="token keyword">class&lt;/span> &lt;span class="token class-name">Dog&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  &lt;span class="token function">constructor&lt;/span>&lt;span class="token punctuation">(&lt;/span>name&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name &lt;span class="token operator">=&lt;/span> name&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span>
&lt;span class="token comment" spellcheck="true">// If you do not do this you will get a TypeError when you invoke speak&lt;/span>
Object&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">setPrototypeOf&lt;/span>&lt;span class="token punctuation">(&lt;/span>Dog&lt;span class="token punctuation">.&lt;/span>prototype&lt;span class="token punctuation">,&lt;/span> Animal&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
&lt;span class="token keyword">let&lt;/span> d &lt;span class="token operator">=&lt;/span> &lt;span class="token keyword">new&lt;/span> &lt;span class="token class-name">Dog&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'Mitzie'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
d&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span> &lt;span class="token comment" spellcheck="true">// Mitzie makes a noise.&lt;/span></code>
```


## Calls with Super class

The **super keyword** is getting used to call the super class methods. In this example it is used to call the speak method of the parent class:

<pre class="brush: js line-numbers  language-js"><code class=" language-js">&lt;span class="token keyword">&lt;strong>class&lt;/strong>&lt;/span></code><code class=" language-js">&lt;strong>&lt;span class="token class-name">Cat&lt;/span> &lt;span class="token punctuation">{&lt;/span> 
  &lt;span class="token function">constructor&lt;/span>&lt;span class="token punctuation">(&lt;/span>name&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    &lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name &lt;span class="token operator">=&lt;/span> name&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
  
  &lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    console&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">log&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token template-string">&lt;span class="token string">`&lt;/span>&lt;span class="token interpolation">&lt;span class="token interpolation-punctuation punctuation">${&lt;/span>&lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name&lt;span class="token interpolation-punctuation punctuation">}&lt;/span>&lt;/span>&lt;span class="token string"> makes a noise.`&lt;/span>&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span>
&lt;span class="token keyword">class&lt;/span> &lt;span class="token class-name">Lion&lt;/span> &lt;span class="token keyword">extends&lt;/span> &lt;span class="token class-name">Cat&lt;/span> &lt;span class="token punctuation">{&lt;/span>
  &lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    &lt;span class="token keyword">super&lt;/span>&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
    console&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">log&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token template-string">&lt;span class="token string">`&lt;/span>&lt;span class="token interpolation">&lt;span class="token interpolation-punctuation punctuation">${&lt;/span>&lt;span class="token keyword">this&lt;/span>&lt;span class="token punctuation">.&lt;/span>name&lt;span class="token interpolation-punctuation punctuation">}&lt;/span>&lt;/span>&lt;span class="token string"> roars.`&lt;/span>&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span>
&lt;span class="token keyword">let&lt;/span> l &lt;span class="token operator">=&lt;/span> &lt;span class="token keyword">new&lt;/span> &lt;span class="token class-name">Lion&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token string">'Fuzzy'&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span>
l&lt;span class="token punctuation">.&lt;/span>&lt;span class="token function">speak&lt;/span>&lt;span class="token punctuation">(&lt;/span>&lt;span class="token punctuation">)&lt;/span>&lt;span class="token punctuation">;&lt;/span> 
&lt;span class="token comment" spellcheck="true">// Fuzzy makes a noise.&lt;/span>
&lt;span class="token comment" spellcheck="true">// Fuzzy roars.&lt;/span>&lt;/strong></code></pre>

It was a brief about classes and their definition in Javascript ES6.However In future posts we will build some applications using ES6 classes. 
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
  <code class=" language-js"><span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span><br />

</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js"><span class="token function">  constructor</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span><br />

</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js"><span class="token keyword">   this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span><br />
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span><br />

</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js"><span class="token punctuation">  }</span><br />

</p>

<p class="brush: js line-numbers  language-js">
  <code class=" language-js"><span class="token punctuation">}</span>
</p>

Here we actually declare it with class keyword.

### Class expressions

<pre class="brush: js line-numbers  language-js"><code class=" language-js"><span class="token comment" spellcheck="true">// unnamed</span>
<span class="token keyword">let</span> Rectangle <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Rectangle<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// output: "Rectangle"</span>
<span class="token comment" spellcheck="true">// named</span>
<span class="token keyword">let</span> Rectangle <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle2</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Rectangle<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// output: "Rectangle2"</span>
```


The name given to a named class expression is local to the class&#8217;s body. It can be retrieved through the class&#8217;s (not an instance&#8217;s) [.name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property, though)

## Class body and method definitions {#Class_body_and_method_definitions}

The body of a class is executed in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), i.e., code written here is subject to stricter syntax for increased performance.

The `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor">constructor</a>` method is a special method for creating and initialising an object created with a `class`.A constructor can use the `super` keyword to call the constructor of the super class. ( As in react) In the below class we have a constructor and a method.

<pre class="brush: js line-numbers  language-js"><code class=" language-js"><span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment" spellcheck="true">// Getter</span>
  <span class="token keyword">get</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">calcArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment" spellcheck="true">// Method</span>
  <span class="token function">calcArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> square <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>square<span class="token punctuation">.</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 100</span>
```


The interesting thing about classes in ES6 is that there is no function keyword to declare one. We could use the name right away.

## Class Extension

We could use extends keyword to create a new child class (of both types explained above) of another class.In the example below, the Dog class extends Animal class and using super to call class constructor and pass in the name.

<pre class="brush: js line-numbers  language-js"><code class=" language-js"><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span> 
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">' makes a noise.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// call the super class constructor and pass in the name parameter</span>
  <span class="token punctuation">}</span>

  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">' barks.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">'Mitzie'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Mitzie barks.</span>
```


**Note: **If there is a constructor present in subclass, it needs to first call super() before using &#8220;this&#8221;. This is very useful in react application classes.

You could also use class inheritence to extend old defined functions:

<pre class="brush: js line-numbers  language-js"><code class=" language-js"><span class="token keyword">function</span> Animal <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

Animal<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>speak <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">' makes a noise.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">' barks.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">'Mitzie'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Mitzie barks.</span>
```


It is important to know that classes cannot extend regular objects unless you use setPrototypeOf method to add the object as a method:

<pre class="brush: js line-numbers  language-js"><code class=" language-js"><span class="token keyword">const</span> Animal <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">' makes a noise.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment" spellcheck="true">// If you do not do this you will get a TypeError when you invoke speak</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>Dog<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">'Mitzie'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Mitzie makes a noise.</span>
```


## Calls with Super class

The **super keyword** is getting used to call the super class methods. In this example it is used to call the speak method of the parent class:

<pre class="brush: js line-numbers  language-js"><code class=" language-js"><span class="token keyword">class</span><code class=" language-js"><span class="token class-name">Cat</span> <span class="token punctuation">{</span> 
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> makes a noise.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Lion</span> <span class="token keyword">extends</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> roars.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Lion</span><span class="token punctuation">(</span><span class="token string">'Fuzzy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
l<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment" spellcheck="true">// Fuzzy makes a noise.</span>
<span class="token comment" spellcheck="true">// Fuzzy roars.</span>
```


It was a brief about classes and their definition in Javascript ES6.However In future posts we will build some applications using ES6 classes. 
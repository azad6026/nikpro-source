---
id: 31762
title: What is spread syntax in ES6 and how to use it?
date: 2018-06-30T21:04:28+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31762
permalink: /what-is-spread-syntax-in-es6-and-how-to-use-it/
# image: ../../static/images/spread-syntax.jpeg
categories:
  - JAVASCRIPT
tags:
  - arrays
  - objects
  - soread syntax
  - spraed operator
---
Continuing <a href="http://www.nikpro.com.au/for-loop-in-javascript-and-es6-explained/" target="_blank" rel="noopener noreferrer">our explanation for ES6 new features</a>, we will review the spread operator. What is the magic spread syntax in ES6? The spread syntax is simply three dots: <code class="markup--code markup--li-code">...

<strong class="markup--strong markup--li-strong">It allows an iterable to expand in places where 0 or more arguments likeIndefinite number of arguments (function calls) or  elements (array literals) or key-value pairs (object literals) are expected.

Let us have a look at some of its usages to get a better idea:

## Calling functions without Apply

To call a function with array argument we needed to use apply and use this syntax:

<p class=" language-js">
  <span class="token keyword">function</span> doSomething <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><br />

</p>

<p class=" language-js">
  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span><br />

</p>

<p class=" language-js">
  <span class="token comment" spellcheck="true">// Call the function, passing args</span><br />

</p>

<p class=" language-js">
  <span class="token punctuation">doSomething.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
</p>

This old problem has been solved using the spread operator. So we can now omit apply and use the spread syntax to call the function like this:

**`<span class="token punctuation">doSomething</span><span class="token punctuation">(...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>`**

It is that simple and fun!

## Copying arrays

To copy an array we pass a reference to the second one so they will have same values:

<div class="source-cell" data-reactid="10">
  <div class="source-editor" data-reactid="11">
    <div class="CodeMirror cm-s-runkit-light CodeMirror-wrap">
      <div class="CodeMirror-scroll" tabindex="-1">
        <div class="CodeMirror-sizer">
          <div class="CodeMirror-lines" role="presentation">
            <div role="presentation">
              <div class="CodeMirror-code" role="presentation">
                <div>
                  <p class=" CodeMirror-line " role="presentation">
                    <span role="presentation"><span class="cm-keyword">var</span> <span class="cm-def">arr</span> <span class="cm-operator">=</span> [<span class="cm-string">'a'</span>, <span class="cm-string">'b'</span>, <span class="cm-string">'c'</span>];</span>
                  </p>
                </div>
                
                <pre class=" CodeMirror-line " role="presentation"><span role="presentation"><span class="cm-keyword">var</span> <span class="cm-def">arr2</span> <span class="cm-operator">=</span> <span class="cm-variable">arr</span>;

</span>console.<span class="cm-property">log</span>(<span class="cm-variable">arr2</span>);
```

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div class="queriable-output-wrapper" data-displayed-checksum="8182c6308fc7af0093e78351b885deaeea9e2aba" data-input-checksum="checksum-8182c6308fc7af0093e78351b885deaeea9e2aba">
    <div class="embedStyle_1ki8n3b object-description">
      <div class="value_142hmgp-o_O-monospace_5jrb82 flexBox">
        <p>
          <span class="normal_t5s8ur"><span class="fixme-test-wrapper">output: [<span class="type-string">"a"</span>, <span class="type-string">"b"</span>, <span class="type-string">"c"</span>]</span></span>
        </p>
        
        <p>
          As expected. And if we add an item to the second array like this:
        </p>
        
        <p>
          arr2.push('d');
        </p>
        
        <p>
          console.log(arr);
        </p>
        
        <p>
          output: ['a', 'b', 'c', 'd']
        </p>
        
        <p>
          Not expected. We want this to be added only to array 2 so spread operator is here just in he right place:
        </p>
        
        <p>
          var arr = ['a', 'b', 'c'];
        </p>
        
        <p>
          var arr2 = [...arr]; // this is where the magic happens
        </p>
        
        <p>
          console.log(arr2);
        </p>
        
        <p>
          output: ['a', 'b', 'c']
        </p>
        
        <p>
          Now we add the item:
        </p>
        
        <p>
          arr2.push('d');
        </p>
        
        <p>
          console.log(arr);
        </p>
        
        <p>
          output: ['a', 'b', 'c']
        </p>
        
        <p>
          And as expected, we get the right results. The first array hasn&#8217;t changed now.
        </p>
        
        <h2 id="fa14" class="graf graf--h4 graf-after--p">
          Convet string to array
        </h2>
        
        <p>
          We could use spread syntax to convert string to an array:
        </p>
        
        <p>
          var str = "hello";
        </p>
        
        <p>
          var chars = [...str];
        </p>
        
        <p>
          console.log(chars);
        </p>
        
        <p>
          output: [<span class="type-string">"h"</span>, <span class="type-string">"e"</span>, <span class="type-string">"l"</span>, <span class="type-string">"l"</span>, <span class="type-string">"o"</span>]
        </p>
        
        <h2>
          Combine arrays
        </h2>
        
        <p>
          We used to combine arrays or insert an array into another as shown in this example:
        </p>
        
        <p>
          var mid = [3, 4];
        </p>
        
        <p>
          var arr = [1, 2, mid, 5, 6];
        </p>
        
        <p>
          console.log(arr);
        </p>
        
        <p>
          output: [1, 2, [3, 4], 5, 6]
        </p>
        
        <p>
          But this is not quiet satisfying but with spread operator you could get the expected result:
        </p>
        
        <p>
          <span style="font-family: georgia, palatino, serif;">var mid = [3, 4];</span>
        </p>
        
        <p>
          <span style="font-family: georgia, palatino, serif;">var arr = [1, 2, ...mid, 5, 6];</span>
        </p>
        
        <p>
          <span style="font-family: georgia, palatino, serif;">console.log(arr);</span>
        </p>
        
        <p id="2b6d" class="graf graf--pre graf-after--p">
          <span style="font-family: georgia, palatino, serif;">output: [1, 2, 3, 4, 5, 6]</span><br />

        </p>
        
        <p class="graf graf--pre graf-after--p">
          As we expected. Also there are other ways of using spread operator to combine arrays:<br />

        </p>
        
        <p class=" language-js">
           // Adds arr2 items to end of array
        </p>
        
        <p>
          arr1.push(...arr2)
        </p>
        
        <p class=" language-js">
          //Adds arr2 items to the beginning of array
        </p>
        
        <p class=" language-js">
          arr1.unshift(...arr2) 
        </p>
        
        <h2>
          Using spread syntax in Math functions
        </h2>
        
        <p>
          Spread operator &#8220;spreads&#8221; an array into different arguments, so any function where spread is used as the argument can be used by functions that can accept any number of arguments. <code class="markup--code markup--p-code">Math.max() returns the largest of zero or more numbers. 
        </p>
        
        <p class=" language-js">
          <span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span><br />

        </p>
        
        <p class=" language-js">
          Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// outputs: 9</span>
        </p>
        
        <p>
          The Math object&#8217;s set of functions are a perfect example of the spread operator as the only argument to a function.
        </p>
        
        <h2>
          Destructing with spread operator
        </h2>
        
        <p>
          With spread operator we can destruct an array using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters" target="_blank" rel="noopener noreferrer">rest</a> and spread syntax at the same time:
        </p>
        
        <p>
          let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
        </p>
        
        <p>
          console.log(x); // 1
        </p>
        
        <p>
          console.log(y); // 2
        </p>
        
        <p>
          console.log(z); // { a: 3, b: 4 } 
        </p>
        
        <p>
          The rest of the properties are assigned to the variable after the spread operator!
        </p>
        
        <p>
          With spread syntax in our hands, Javascript is more fun than ever!
        </p>
      </div>
    </div>
  </div>
</div>
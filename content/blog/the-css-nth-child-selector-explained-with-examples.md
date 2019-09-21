---
id: 31932
title: The CSS :nth-child selector explained with examples
date: 2018-07-28T22:13:45+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31932
permalink: /the-css-nth-child-selector-explained-with-examples/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/nth-child.jpg
categories:
  - CSS
  - CSS3
tags:
  - CSS selectors
  - nth-child
---
The CSS3<code class=" language-undefined">:nth-child selector is a pseudo class used to select elements by a numeric expression. Lets take a look at how nth-child works.

## The nth-child syntax

This is how the nth-child selector syntax looks like:

`li:nth-child(expression); {}`

In the parentheses it accepts **number**, **odd** and **even** and an **expression**.As <code class=" language-undefined">:nth-child can be used to select a range of different elements under different circumstances, it’s difficult to explain how it works and what it’s for. We show this with some examples.

### A simple expression

In the above syntax we could simply write:

`li:nth-child(4); {}`

Which means select the 4th list item from the list. Or select odd or even elements like this:

`li:nth-child(odd); {} ` //selects odd list items

`li:nth-child(even); {}` //selects even list items

### The <code class=" language-undefined">an+b expression {#the-anb-expression}

Our expression could be an+b which means it will selects groups of a elements. b can be zero as well. Lets assume we want to select the list items above 5:

`<span class="token selector">li<span class="token pseudo-class">:nth-child(n+6)</span> </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>`

with replacing n by zero the first element it selects is six. With n being one, the second selected element is seven and etc.

Alternatively if we want to select only the first five elements we use a negative n:

`<span class="token selector">li<span class="token pseudo-class">:nth-child(-n+5)</span> </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>`

which starting n by zero selects the firs five list items.

Perhaps we need to select every nth element sometimes. Like every fifth element starting at the first element:

`<span class="token selector">li<span class="token pseudo-class">:nth-child(5n-4)</span> </span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* or 5n+1 */</span> <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>`

#### Some more examples from MDN

`tr:nth-child(odd) or tr:nth-child(2n+1)`  
Represents the odd rows of an HTML table: 1, 3, 5, etc.

`tr:nth-child(even) or tr:nth-child(2n)`  
Selects the even rows of an HTML table: 2, 4, 6, etc.

`p:nth-child(1) or p:nth-child(0n+1)`  
Represents every <p> that is the first element in a group of siblings. This is the same as the :first-child selector (and has the same specificity).

`p:nth-child(n+8):nth-child(-n+15)`  
selects the eighth through the fifteenth <p> elements of a group of siblings.

### :nth child best practices

Obviously do not overuse nth child when you can. Follow some best practices 

  * Use :first-child and :last-child for first and last elements instead of nth-child.
<li id="tip-4-avoid-weird-and-complex-nth-childnbspexpressions">
  Avoid weird and complex <code class=" language-undefined">nth-childexpressions
</li>

Check out this example to alternate table background colours:

`/* do this and alternate colours by nth-child */`  
`.data-table tr {`  
`  background: white;`  
`}`  
`.data-table tr:nth-child(even) {`  
`  background: lightgrey;`  
`}`

`/* do not do this */`  
`.data-table tr:nth-child(odd) {`  
`  background: white;`  
`}`  
`.data-table tr:nth-child(even) {`  
`  background: lightgrey;`  
`}`

You can check the :nth tester from CSS tricks to make you understand better and deeper <a href="https://css-tricks.com/examples/nth-child-tester/" target="_blank" rel="noopener noreferrer">here</a>. You can also play around with this pen from CSS tricks as well. Thanks for reading.

<p class="codepen" data-height="500" data-theme-id="0" data-slug-hash="ALiBx" data-default-tab="html,result" data-user="zakkain" data-pen-title="CSS-Tricks: :nth-child">
  See the Pen <a href="https://codepen.io/zakkain/pen/ALiBx/">CSS-Tricks: :nth-child</a> by Zachary Kain (<a href="https://codepen.io/zakkain">@zakkain</a>) on <a href="https://codepen.io">CodePen</a>.
</p>
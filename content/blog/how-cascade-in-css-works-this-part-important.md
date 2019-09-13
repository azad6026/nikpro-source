---
id: 32248
title: 'How cascade in CSS works? this part: important!'
date: 2018-09-19T21:59:57+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32248
permalink: /how-cascade-in-css-works-this-part-important/
xyz_twap:
  - "1"
# image: ../../static/images/css-rule.png
categories:
  - CSS
tags:
  - '!important'
  - Cascade in css
---
In a series of articles we will have a look at how cascade in [CSS](http://nikpro.com.au/category/css) works. Moreover we will show the importance of each part with examples. We will talk about a special syntax called !important.

## Cascade in CSS

Firstly we need to know that cascade means **the order of the rules** in CSS ( cascading style sheets) matter. But it means more than just that. Actually what CSS selectors apply or win over each other depends on three factors:

  * First: importance
  * Second: specificity
  * Third: source order

We will explain the first one which is the **!important**  syntax in this post.

### How **!important** works?

Practically **!important** special syntax wins over all the rules and orders and selectors.No matter where it has been declared in the CSS and with what kind of selector it will be applied to the element. 

Therefor the only way to override it is to add another rule for that property with **!important **syntax and put it in a later the first one in CSS or use a more specific selector to apply it . Then because of source order rule or specificity that one will be applied.

#### An example for !important syntax 

<p data-height="400" data-theme-id="0" data-slug-hash="PdXGPM" data-default-tab="css,result" data-user="azad6026" data-pen-title="!important in cascade" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/PdXGPM/">!important in cascade</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Basically we have three rules specified in this example. We have a generic tag selector called **p** which applies to all paragraphs in HTML. Secondly we have a class selector called .**better.**Thirdly we have an id selector called **#winner** which as we know can only belong to one element as ids should be unique in a HTML code.<figure class="wp-block-image">

<img src="http://www.nikpro.com.auid-vs-class.jpg" alt="" class="wp-image-32249" srcset="http://testgatsby.localid-vs-class.jpg 510w, http://testgatsby.localid-vs-class-300x200.jpg 300w" sizes="(max-width: 510px) 100vw, 510px" /> </figure> 

Lets break it down to some steps:

  * Order of the rules tell us that **p **rule as the last specified in the CSS code should win because it comes the last. But it does not.
  * Based on specificity rules which we cover later, the reason **p **rule will loose even it comes last in the code is that **.better** rule and **#winner** rule are more specific rules. Moreover **.better** rule is a class selector and **#winner** rule is an id selector for the same element which is the **p** tag. Therefor no matter where they are in the code they win over **p selector**.
  * On top of that **#winner** rule wins over **.better** rule  because id selectors are more specific than class selectors.
  * Finally and more importantly the **!important** syntax wins over all of them no matter where it has been declared even in p selector.

With that in mind lets explain the code.

### The code in details

We have the HTML and CSS here again:


```
<code><p class="better">This is a paragraph.</p>
<p class="better" id="winner">One selector to rule them all!</p></code>
```



```
#winner {<br />  background-color: red;<br />  border: 1px solid black;<br />  font-size: 30px;
}
.better {
  background-color: gray;
  border: none !important;
}
p {
  background-color: blue;
  color: white;
  padding: 5px;
  font-size: 20px !important;
}
```


  Similarly we gave both paragraphs a class and the second one has an id as well.

  * Both p tags have colour of white and padding of 5px as it has been applied in the p selector rule. No rule anywhere overrides them. 
  * More importantly the font-size of 20px has been declared and applied in the p selector. And as it is the latest selector in the code it will be applied. 
  * Note that the #winner selector specifies a font-size but it won&#8217;t apply as although it is an id selector and has more specificity over p selector but p selector has **!important** in its rule and it wins over all as mentioned.
  * Also the background colour has been applied with the .better selector for the first p tag as it wins over p selector and with the #winner selector for the second tag wins over the class selector.So the first one has gray and the second one has red background colour.
  * Finally with border property although in the id selector it has been declared but in class selector we have an **!important** syntax which wins over all rules as mentioned.

According to <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance" target="_blank" rel="noopener noreferrer">MDN</a>:

<blockquote class="wp-block-quote">
  <p>
    It is useful to know that <code>!important</code> exists so that you know what it is when you come across it in other people&#8217;s code. However, we strongly recommend that you never use it unless you absolutely have to. One situation in which you may have to use it is when you are working on a CMS where you can&#8217;t edit the core CSS modules, and you really want to override a style that can&#8217;t be overridden in any other way. But really, don&#8217;t use it if you can avoid it, because <code>!important</code> changes the way the cascade normally works, so it can make debugging CSS problems really hard to work out, especially in a large stylesheet.
  </p>
</blockquote>

We will check specificity and source order in the next articles. Thank you for reading.
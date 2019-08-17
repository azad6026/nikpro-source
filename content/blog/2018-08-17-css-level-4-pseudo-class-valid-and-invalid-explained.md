---
id: 32041
title: CSS level 4 pseudo-class :valid and :invalid explained
date: 2018-08-17T21:35:02+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32041
permalink: /css-level-4-pseudo-class-valid-and-invalid-explained/
image: /wp-content/uploads/2018/08/css4-invalid-valid.png
categories:
  - CSS
  - CSS4
tags:
  - pseudo-class :invalid
  - pseudo-class :valid
---
In [CSS level 4 pseudo-class](http://www.nikpro.com.au/the-css4-focus-within-selector-is-explained-with-examples/) **:valid and pseudo-class :invalid** have been introduced to show if a form&#8217;s input content is valid or not.

### The pseudo-class :valid 

The **`:valid`** selector allows you to select `<input>` elements that contain valid content, as determined by its `type` attribute. It represents any [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) or other [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) element whose contents [validate](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) successfully. It is great for highlighting the input status to the user while they are focused into the input.

<pre class="wp-block-preformatted"><strong><code>/* Selects any valid &lt;input> */
input:valid {
  background-color: green;
}</code></strong><br /></pre>

### The pseudo-class :invalid

The **`:invalid`**CSS pseudo-class represents any [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) or other [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) element whose contents fail to validate. It is great for highlighting form input errors:

<pre class="wp-block-preformatted"><strong><code>/* Selects any invalid &lt;input> */
input:invalid {
  background-color: red;
}</code></strong></pre>

#### An email field example

As an example imagine we have this email field in our form:

<pre class="wp-block-preformatted"><strong><code>Email: &lt;input type="email" required></code></strong></pre>

Therefor we add the relevant CSS to show the validity of data here:

<pre class="wp-block-preformatted"><strong><code>input[type=email]:invalid {
  outline: red solid 1px;
}

input[type=email]:valid {
  outline: green solid 1px;
}</code></strong></pre>

The input will have red outline until the user starts typing and enters a valid email. Then the outline turns to green.

**Notes to remember**

A regular “text” input type, which doesn’t require a specific format, is “valid” by default, but would be “invalid” without data if it has the `required` attribute set.

Also pseudo-class :valid  and pseudo-class :invalid work on the form element itself to show the validity of all inputs. They do not work on div or p or other tags though.

Both pseudo-class :valid and pseudo-class :invalid are supported in all browsers including IE10+.

**Accessibility concerns**

As these inputs are relying on colour change or background colour changes, for the sake of accessibility it is best practice to use a helper text of an icon to support the idea for colour blindness problem. 

**Check out this pen **

<p data-height="265" data-theme-id="0" data-slug-hash="mjNRdB" data-default-tab="css,result" data-user="azad6026" data-pen-title=":valid and :invalid Pseudo  classes" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/mjNRdB/">:valid and :invalid Pseudo classes</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

In this pen as you type in url it goes red until you type a valid url.  And the email input stays red as long as a valid email hasn&#8217;t been typed inside it. 

The pseudo-class :valid and :invalid are very interesting and useful if being used with care and considering the accessibility problems.They add an extra visual view to the forms and their inputs. Thanks for reading.
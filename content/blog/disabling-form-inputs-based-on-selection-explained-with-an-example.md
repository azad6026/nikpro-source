---
id: 32011
title: Disabling form inputs based on selection explained with an example
date: 2018-08-11T21:11:27+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32011
permalink: /disabling-form-inputs-based-on-selection-explained-with-an-example/
image: /images/Disabling-form-inputs.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - form inouts
---
In this post we have a look at a pen by Tommy Hodgins about disabling form inputs based on selection by Javascript. It is simple and really useful when it comes to radio buttons and checkboxes.

First have a look at the example here:

<p data-height="350" data-theme-id="0" data-slug-hash="errKZd" data-default-tab="html,result" data-user="tomhodgins" data-pen-title="Disabling form inputs" class="codepen">
  See the Pen <a href="https://codepen.io/tomhodgins/pen/errKZd/">Disabling form inputs</a> by Tommy Hodgins (<a href="https://codepen.io/tomhodgins">@tomhodgins</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

As a result if you select Yes of No from the top section the checkboxes from bottom section get enabled or disabled. We will explain that in short.

### The form inputs HTML

The interesting part for us are the inputs. First the radio buttons:

```<code>&lt;input name="iceCream" type="radio" value="yes">&lt;br/>&lt;code>&lt;input name="iceCream" type="radio" value="no"></code>&lt;/code>```

Firstly the name attribute and the value of inputs are of interest. Also the bottom form has checklists as below:

```<code>&lt;input name="flavour" type="checkbox" value="chocolate" disabled="">&lt;code> &lt;br/>&lt;input name="flavour" type="checkbox" value="vanilla" disabled=""></code><br /><code>&lt;input name="flavour" type="checkbox" value="strawberry" disabled=""></code>&lt;/code>```

Secondly name and disabled attribute are to be used in our code to apply the changes. Now lets take a look at the Javascript code.

### The form inputs Javascript

As we have two inputs by the **name of iceCream**, we use **querySelectAll** document method to select them both. And on each one using the **forEach** method we listen to any change event. Using the event **e** properties, we will change its value of the target input and apply the toggleFlavours function accordingly:

```document.querySelectorAll('input[name=iceCream]').forEach(tag =><br />
tag.addEventListener('change', e => toggleFlavours(e.target.value))<br />
)```

Here arrow function has been [used](http://www.nikpro.com.au/some-arrow-function-benefits-with-examples-explained/) and made it simpler to write and maintain.We could make it better by getting the value separately :

```let iceCreamSelection  = document.querySelectorAll('input[name=iceCream]');<br />iceCreamSelection.forEach(tag =><br />
tag.addEventListener('change', e => toggleFlavours(e.target.value))<br />
)```

After all this we need to write the toggleFavours function to disable and enable the checkboxes based on our choice above:

```function toggleFlavours(value) {<br />
// Find all input[name=flavour] tags<br />
  document.querySelectorAll('input[name=flavour]').forEach(tag =><br />
<code>// Set disabled attribute based on value of current input[name=iceCream]
value === 'no'
? tag.disabled = true
: tag.disabled = false</code><br />)<br />}```

In the function we check if the value is set to no or not. If it is then we set the **tag&#8217;s disabled attribute (**which by tag we mean the **input[name=flavour]** ) to true and will disable the checkboxes. And if the value from radio boxes is **not no** then the disabled attribute remains false.

Finally in this function again arrow function has been used and also the ternary operator is been [used](http://www.nikpro.com.au/the-ternary-operator-in-javascript-with-some-examples-explained/) instead of if statement here:

```tag => <code>value === 'no' ? tag.disabled = true : tag.disabled = false</code>```

Therefor the value is getting checked and using ternary operator the result gets set.

This was a simple example of form input selection and how to listen to them and apply changes. Interestingly we saw how we could use arrow functions and some new ES6 techniques to achieve the goal in just a few lines. Thanks for reading.
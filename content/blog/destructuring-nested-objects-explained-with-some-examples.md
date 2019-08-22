---
id: 32669
title: Destructuring nested objects explained with some examples
date: 2019-01-30T20:22:43+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32669
permalink: /destructuring-nested-objects-explained-with-some-examples/
xyz_twap:
  - "1"
image: /wp-content/uploads/2019/01/nestedobject.jpg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - destructuring nested arrays
---
One of the most useful and yet advanced aspects that ES6 introduced was [destructuring](http://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/) objects and arrays. But it is most interesting when we use it for nested objects and arrays. We will check out some examples.

## Destructuring definition in practice

Firstly we need to define how destructuring works.Take a look at this example:

<pre class="wp-block-preformatted"><strong>const user = {<br />  id: 339,<br />  name: 'Fred',<br />  age: 42<br />};<br />const {name} = user;<br />console.log(name); //prints: Fred</strong></pre>

Basically we have got an object called &#8220;user&#8221; and we have assigned some values to its variables. The line below:

<pre class="wp-block-preformatted"><strong>const {name} = user;</strong></pre>

Generally defines a variable called **name** and assigns the **user** object to it. Meaning we define the same variable called **name** using brackets and ask for its value out of its parent called **user**. 

Now if we print out the &#8220;name&#8221; we will see &#8220;Fred&#8221; which is what has been assigned to name inside &#8220;user&#8221; object.

## Destructure a nested object

What if we have a nested array? And we need to go deep and destructure some variables? We will use some <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank" rel="noreferrer noopener" aria-label="MDN (opens in a new tab)">MDN</a> examples:

<pre class="wp-block-preformatted"><strong>const metadata = {<br />     title: 'Scratchpad',<br />     translations: [<br />        {<br />         locale: 'de',<br />         localization_tags: [],<br />         last_edit: '2014-04-14T08:43:37',<br />         url: '/de/docs/Tools/Scratchpad',<br />         title: 'JavaScript-Umgebung'<br />        }<br />     ],<br />     url: '/en-US/docs/Tools/Scratchpad'<br /> };</strong></pre>

As an example we want to destructure the title and the locale variables:

<pre class="wp-block-preformatted"><strong>const { title,<br />     translations: [<br />         {<br />             locale,<br />         },<br />     ],<br /> } = metadata;<br /><br />console.log(title); // "Scratchpad"<br />console.log(locale);  // "de"</strong></pre>

Generally we can rename variables as we destructure them as well so it is more readable and less confusing at specific points like below:

<pre class="wp-block-preformatted"><strong>const {<br />     title: englishTitle,// rename<br />     translations: [<br />         {<br />             title: localeTitle,// rename<br />         },<br />     ],<br /> } = metadata;<br /> console.log(englishTitle); // "Scratchpad"<br /> console.log(localeTitle);  // "JavaScript-Umgebung"</strong></pre>

Practically we have got two titles but we rename them at definition point and we can use their new name to get the values. Pretty neat.<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2019/01/destructuring-complex@2x.png" alt="nested object" class="wp-image-32674" srcset="http://testgatsby.local/wp-content/uploads/2019/01/destructuring-complex@2x.png 934w, http://testgatsby.local/wp-content/uploads/2019/01/destructuring-complex@2x-300x85.png 300w, http://testgatsby.local/wp-content/uploads/2019/01/destructuring-complex@2x-768x217.png 768w" sizes="(max-width: 934px) 100vw, 934px" /> <figcaption>nested object destructuring</figcaption></figure> 

## Predefine destructured variables

Interestingly we can define variables as we destructure them by assigning default values. It is essential as if we don&#8217;t predefine the variable we will throw a Type Error. Here is an example of how to do it:

<pre class="wp-block-preformatted"><strong>const student = {<br />    name: 'John Doe',<br />    age: 16,<br />    scores: {<br />        maths: 74,<br />        english: 63<br />    }<br />};</strong><br /><strong><br />// We  predefine science as a new variable inside object while desructuring<br />const { name, scores: {maths, science = 50} } = student;<br />console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);<br />// John Doe scored 74 in Maths and 50 in Elementary Science.</strong></pre>

Therefore we defined &#8220;science&#8221; as a new variable inside &#8220;scores&#8221; object and output it at the end.

## Iterating over a destructured object

Here is another example when we do iterate over an object while destructuring its variables:

<pre class="wp-block-preformatted"><strong>var people = [<br />   {<br />     name: 'Mike Smith',<br />     family: {<br />       mother: 'Jane Smith',<br />       father: 'Harry Smith',<br />       sister: 'Samantha Smith'<br />     },<br />     age: 35<br />   },<br />   {<br />     name: 'Tom Jones',<br />     family: {<br />       mother: 'Norah Jones',<br />       father: 'Richard Jones',<br />       brother: 'Howard Jones'<br />     },<br />     age: 25<br />   }<br /> ];<br /> for (var {name: n, family: {father: f}} of people) {<br />   console.log('Name: ' + n + ', Father: ' + f);<br /> }<br /> // "Name: Mike Smith, Father: Harry Smith"<br /> // "Name: Tom Jones, Father: Richard Jones"</strong></pre>

[Using for &#8230; of](http://www.nikpro.com.au/converting-objects-to-arrays-and-looping-through-them-with-object-keys-and-object-values/) method we destructure people object and also rename its variables. The result is as we expected.

Object destructuring is a vast and major topic in [ES6 features.](http://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/) But nested objects can benefit of it the most.

Thank you for reading.
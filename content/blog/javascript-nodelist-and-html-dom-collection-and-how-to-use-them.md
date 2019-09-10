---
id: 31897
title: Javascript NodeList and HTML DOM collection and how to use them
date: 2018-07-22T21:36:18+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31897
permalink: /javascript-nodelist-and-html-dom-collection-and-how-to-use-them/
image: /images/dom-node.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - forEach
  - HTML colllection
  - NodeList
---
.When manipulating DOM with Javascript you will need to access NodeList and HTML DOM collection. There are different ways to access them and their individual items.

## NodeList

A **NodeList** object is a list (collection) of nodes extracted from a document.The best way to get a list of div nodes is this:

`<span class="kd">var</span> <span class="nx">divs</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s1">'div'</span><span class="p">);</span>`

The good thing about NodeLists is that their values in some cases are live meaning they give you the exact and live response. If you have one div and you add another on the fly with Javascript, they output will be updated as well. Have a look at this example:

`var nodes = document.getElementsByTagName('div');`

`// outputs 3`  
`console.log(nodes);`

`// create a new element`  
`var newDiv = document.createElement('div');`  
`document.body.appendChild(newDiv);`

`// outputs 4`  
`console.log(nodes);`

So although we created the fourth element inside the code, it has been reflected in the output. 

And the bad parts:

NodeList items can **only be accessed** by their index number. It might look like an array but it is not.You can loop through the node list and refer to its nodes like an array. However you cannot use Array Methods, like forEach(), valueOf(), push(), pop(), or join() on a node list.

## HTML DOM collections

You can get a HTML DOM collection like this:

`var x = document.getElementsByTagName("p");`

It also does not have access to any array methods as it is **not an array as well**.

## Similarities and differences

  * Both NodeList and HTM collection  have a length property defining the number of items in the list (collection).
  * The two provide an index (0, 1, 2, 3, 4, &#8230;) to access each item like an array.
  * HTMLCollection items can be accessed by their name, id, or index number but NodeList items can only be accessed by their index number.
  * Only the NodeList object can contain attribute nodes and text nodes.

Although in some cases, the **`NodeList` **is a _live collection_, which means that changes in the DOM are reflected in the collection. For example, [`Node.childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes "The Node.childNodes read-only property returns a live NodeList of child nodes of the given element where the first child node is assigned index 0.") is live:

`var parent = document.getElementById('parent');`  
`var child_nodes = parent.childNodes;`  
`console.log(child_nodes.length); // let's assume "2"`  
`parent.appendChild(document.createElement('div'));`  
`console.log(child_nodes.length); // should output "3"`

In other cases, the `NodeList` is a _static collection, _meaning any subsequent change in the DOM does not affect the content of the collection. [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll "The Element method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.")returns a static `NodeList`.

It&#8217;s good to keep this distinction in mind when you choose how to iterate over the items in the `NodeList`, and how you cache the length of the list in particular.

## How to use NodeLists as an array

To support all browsers including IE8 and below, the best way to convert a NodeList to an array is like this:

`var myNodeList = document.querySelectorAll('div');`  
`var myArray = []; // empty Array`  
`for (var i = 0; i < myNodeList.length; i++) {`  
`  var self = myNodeList[i];`  
`  myArray.push(self);`  
`}`

Which keeps the NodeList reference if you need it as well although `document.querySelectorAll `will not create a live collection.

The second way of converting them to array is using unshift method:

`var arr = [];`  
`var divs = document.querySelectorAll('div');`  
`for(var i = divs.length; i--; arr.unshift(divs[i]));`

If you do not care about IE8 and below, use this method which is neat and clean:

`// 'divs' is now an Array`  
`var divs = Array.prototype.slice.call(document.querySelectorAll('div'));`

Accessing the Prototype Object here, we grab the _slice()_ method, and pass our NodeList into it. It cleverly pushes each Node into a new Array.

Besides we can finally use forEach loop:

`var divs = Array.prototype.slice.call(document.querySelectorAll('div'));`  
`divs.forEach(function () {`  
`//...`  
`});`

### [ES6](http://www.nikpro.com.au/for-loop-in-javascript-and-es6-explained/) Array.form 

We could use the ES6 array.form method to complete the conversion:

`var divs = document.querySelectorAll('div');`  
`var arr = Array.from(divs); // Array of <div>s`

Apparently this is the newest version of doing so.

### On the fly method

One other way would be to convert the NodeList to an array using Array.prototype.foEach on the fly:

`var divs = document.querySelectorAll('div');`  
`Array.prototype.forEach.call(divs, function (item) {`  
`  // Individual access to element:`  
`  var elem = item;`  
`});`

Obviously we use call of forEach method here and we iterate through the NodeList in an array fashion.

NodeLists are very useful collection of DOM nodes. Converted to an array they could be iterated over and help to manipulate DOM in a better and reliable way.
---
id: 32576
title: Remove duplicate items from arrays using reduce() method explained with examples
date: 2018-11-24T20:18:54+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32576
permalink: /remove-duplicate-items-from-arrays-using-reduce-method-explained-with-examples/
xyz_twap:
  - "1"
image: ../../static/images/duplicate-files.jpg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - reduce
---
We have explained use cases of reduce() method in [this](http://www.nikpro.com.au/javascript-es6-reduce-method/) and [this](http://www.nikpro.com.au/how-to-group-an-array-of-objects-based-on-an-a-property-value-using-reduce/) article. Eventually there are lots of use cases like removing duplicate values from arrays. We will explain this case here with some examples.

## Remove duplicate value use case

We have had a situation while we needed to filter our array to get only unique items out of it and remove duplicate values. Obviously there are lots of different methods to do that. Here we will focus on using reduce() method with almost similar implementations.<figure class="wp-block-image">

<img src="http://www.nikpro.com.auarraysreducing.jpeg" alt="" class="wp-image-32577" srcset="http://testgatsby.localarraysreducing.jpeg 1000w, http://testgatsby.localarraysreducing-300x75.jpeg 300w, http://testgatsby.localarraysreducing-768x193.jpeg 768w" sizes="(max-width: 1000px) 100vw, 1000px" /> </figure> 

## Importance of initial value

To be able to iterate through all array items and check if an item has a duplicate value we need to compare the current value and items already in accumulator. But we need an initial value as an empty array to be filled in by the result ( accumulator) as well. This is the approach from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="noreferrer noopener" aria-label="To be able to iterate through all array items and check if an item has a duplicate value we need to compare the current value and items already in accumulator. But we need an initial value as an empty array to be filled in by the result ( accumulator) as well. This is the approach from MDN: (opens in a new tab)">MDN</a>:

```let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];<br />let result = arr.sort().reduce((accumulator, current) =&gt; {<br />    const length = accumulator.length<br />    if (length === 0 || accumulator[length - 1] !== current) {<br />        accumulator.push(current);<br />    }<br />    return accumulator;<br />}, []);<br />console.log(result); //[1,2,3,4,5]```

With **length**&nbsp;that is the accumulator&#8217;s array length, we check if that item&#8217;s value is equal to the current item or if we are just in the first item:

```length === 0 || accumulator[length - 1] !== current```

And if that was the case we **push** the item into the accumulator. But if not we just return accumulator itself and will not do anything.

At the end we will have a **sorted** array with unique values from the original array inside it.&nbsp;

## Using includes and concat

Also as with <a href="https://denizkumsal.com/programming/using-reduce-to-remove-duplicates/" target="_blank" rel="noreferrer noopener" aria-label="Also as with this method we can use includes method instead of length property to check the item's equality and concat the unique values at the end. Using ternary syntax will make it really short: (opens in a new tab)">this method</a> we can use [includes](http://www.nikpro.com.au/some-method-in-javascript-explained-with-examples/) method instead of length property to check the item&#8217;s equality and **concat** the unique values at the end. Using [ternary syntax](http://www.nikpro.com.au/the-ternary-operator-in-javascript-with-some-examples-explained/) will make it really short:

<pre class="wp-block-preformatted">const removeDuplicates = (theArray) =&gt; {<br />  return theArray.reduce((result,nextItem) =&gt; result.includes(nextItem) ? result : result.concat(nextItem),[]);<br />}</pre>

Here we check if the result which is the accumulator contains or includes the currentItem(calling it nextItem here just fo clarity). If it does we return the accumulator and if it does not include it, we concat that item to the result. <figure class="wp-block-image">

<img src="http://www.nikpro.com.auconcat-1024x608.png" alt="" class="wp-image-32578" srcset="http://testgatsby.localconcat-1024x608.png 1024w, http://testgatsby.localconcat-300x178.png 300w, http://testgatsby.localconcat-768x456.png 768w, http://testgatsby.localconcat.png 1280w" sizes="(max-width: 1024px) 100vw, 1024px" /> <figcaption>concat the items of array</figcaption></figure> 

Very neat and clean indeed. We could also use [push](http://www.nikpro.com.au/how-to-convert-an-array-of-objects-to-seperate-array-of-key-value-pairs-using-object-entries-method/) method. But unlike concat it changes the original arrays as push adds items to the array and concat just merge them. In our case it is the same result though if we use each one.

We could have return the method in one line not using explicit &#8220;return. We need to remove brackets and remove the return keyword:

<pre class="wp-block-preformatted">const removeDuplicates = (theArray) =&gt; <br />  theArray.reduce((result,nextItem) =&gt; result.includes(nextItem) ? result : result.concat(nextItem),[]);<br /><br /></pre>

Whichever approach we could use reduce in a reliable and easy way to remove duplicate items from an array. We could also use [filter](http://www.nikpro.com.au/practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/) and set methods in a different ways to complete the task but that is for another article.

Thank you for reading.
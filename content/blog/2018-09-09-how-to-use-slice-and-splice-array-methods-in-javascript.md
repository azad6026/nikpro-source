---
id: 32174
title: How to use slice and splice array methods in Javascript
date: 2018-09-09T21:00:30+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32174
permalink: /how-to-use-slice-and-splice-array-methods-in-javascript/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/09/slice-vs-splice.png
categories:
  - JAVASCRIPT
tags:
  - slice
  - splice
---
In this article we have a look at how to use slice and splice [array methods](http://www.nikpro.com.au/some-method-in-javascript-explained-with-examples/) in Javascript. They might look similar but they have different functionalities.

## Slice and Splice definition

Basically the **slice()** method slices out a piece of an array into a new array. It does not mutate the original array. It can take two arguments and then selects elements from the start argument, and up to (but not including) the end argument.

However the **splice()** method can be used to add new items to an array or remove items from it. It changes the original array itself. 

The first parameter of the method defines the position where new elements should be **added** (spliced in). The second parameter defines **how many** elements should be **removed**.The sliced array contains the first argument but not the last one. Lets dive into examples.

### Slice and  Splice first example

Firstly have a look at this example in both slice and splice methods:

<pre class="wp-block-preformatted"><strong>let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];</strong><br /><strong>let citrus = fruits.slice(1);</strong><br /><strong>// fruits : ["Banana", "Orange", "Lemon", "Apple", "Mango"];</strong><br /><strong>// citrus : ["Banana", "Orange", "Lemon", "Apple"]</strong><br /></pre>

As a result fruits is intact even when we apply the slice method. And what slice does is to take out all the array elements except the last element **Mango**. Because 1 here means remove 1 element from the end of the array.

Moreover if we do the slice with two arguments:

<pre class="wp-block-preformatted"><strong>citrus = fruits.slice(1, 3);<br />// citrus : ["Orange", "Lemon"]</strong></pre>

Then citrus array will contain the elements from index 1 which is Orange up to index 3 which is apple and as I mentioned it will not contain the last index.

Now lets try the same example of slice and splice with the splice method this time.

<pre class="wp-block-preformatted"><strong>let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];</strong><br /><strong>let citrus = fruits.splice(1);</strong><br /><strong>// citrus : ["Orange", "Lemon", "Apple", "Mango"];</strong><br /><strong>// fruits : ["Banana"]</strong></pre>

Now what happened?! Well that is the point. First of the splice method changes the original array so fruits has changed. Secondly when we specify one argument only it copies all array elements right after that index including that index which is Orange here.

Now if we do the two argument check with splice:

<pre class="wp-block-preformatted"><strong>citrus = fruits.slice(1, 3);<br />// citrus : ["Orange", "Lemon", "Apple"]<br />// fruits : ["Banana", "Mango"]</strong></pre>

Practically it copies array elements from index 1 up to 3 elements to citrus array and the rest will remain for fruits.

Comparing slice and splice we could also replace an element using splice in the array. If we specify a third parameter it would be the replaced element value specified by the second argument as its index:

<pre class="wp-block-preformatted"><strong><strong>let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];</strong><br />let citrus = fruits.splice(4, 1,'Kiwi');<br />// citrus : ["Mango"]<br />// fruits : ["Banana", "Orange", "Lemon", "Apple", "Kiwi"]</strong></pre>

Therefor it first splices out elements after index 4 and copies them to citrus array and then replaces the 4th index which is Mango with Kiwi.

With these simple but important examples of using slice and splice we learnt their differences and how they mutate the original array and how they behave with having different arguments.Thanks for reading.
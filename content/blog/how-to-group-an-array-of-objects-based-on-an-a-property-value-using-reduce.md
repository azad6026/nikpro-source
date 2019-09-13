---
id: 32465
title: How to group an array of objects based on an a property value using reduce()
date: 2018-10-26T20:16:08+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32465
permalink: /how-to-group-an-array-of-objects-based-on-an-a-property-value-using-reduce/
xyz_twap:
  - "1"
# image: ../../static/images/reduce.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - array of objects
  - reduce
---
We have [explained reduce() before](http://www.nikpro.com.au/javascript-es6-reduce-method/) and a great use case of it is to group array of objects based on a property value inside it. In this article I will use an example that I had to use reduce to achieve what I needed and I want to explain it here as it is very useful.

## An array of objects

Firstly we will have a look at our array which in my case was a nested array of data. This is the array example:

Basically it is an array of objects called persons which each person has an age and person information which is an object nested inside. And we have name and hobby of that person inside &#8220;person&#8221; object. 


```
const persons = [
      {
        "age": 15,
        "person": {
          name: 'John',
          hobby: 'ski'
        },
      },
      {
        "age": 23,
        "person": {
          name: 'Suzi',
          hobby: 'golf'
        },
      },
      {
        "age": 23,
        "person": {
          name: 'Joe',
          hobby: 'books'
        }
      },{
        "age": 25,
        "person": {
          name: 'Rosi',
          hobby: 'books'
        }
      },{
        "age": 15,
        "person": {
          name: 'Gary',
          hobby: 'books'
        }
      },
      {
        "age": 23,
        "person": {
          name: 'Kane',
          hobby: 'books'
        }
      }
 ]
```


### Group by age

Secondly we explain the use case. I needed to transform this array to some array that **groups it based on the age value.** Practically we have persons with same age in this array. So I wanted to have all &#8220;person&#8221; values with same age as one object of the array. Therefor I needed an array like this:


```
{ 
 23: [
    { name: 'Suzi', hoby: 'golf' }, 
    { name: 'Joe', hobby: 'books'},
    {name: "Kane", hobby: "books"}
  ], 
  15: [{ name: 'Gary', hobby: 'books' }] ,
  .
  .
  .
}
```


As a result all values of same age will be grouped in one array themselves as part of the big array.  However it is [not a filter](http://www.nikpro.com.au/practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/) but it is transforming the same array to another form.

## Reduce() to solve the problem

As <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="noreferrer noopener">we know</a> reduce method executes a **reducer** function (that you provide) on each member of the array resulting in a single output value. Therefor in our case we need to write a function that reduces the array based on what we provide as the callback function:

<pre class="wp-block-preformatted"><code><strong>function groupBy(OurArray, property) {  </strong></code>
<code><strong>  return OurArray.reduce(function (accumulator, object) { </strong></code>
<code><strong>    // get the value of our object(age in our case) to use for group    the array as the array key   </strong></code>
<code><strong>    const key = object[property]; </strong></code>
<code><strong>    // if the current value is similar to the key(age) don't accumulate the transformed array and leave it empty  </strong></code>
<code><strong>    if (!accumulator[key]) {      </strong></code>
<code><strong>      accumulator[key] = [];    </strong></code>
<code><strong>    }    </strong></code>
// add the value to the array
<code><strong>    accumulator[key].push(object);</strong></code>
<code><strong>    // return the transformed array</strong></code>
<code><strong>  return accumulator;  </strong></code>
// Also we also set the initial value of reduce() to an empty object
<code><strong>  }, {});</strong></code>
<code><strong>}</strong></code></pre>

Afterwards we can call in on our array:

<pre class="wp-block-preformatted"><code><strong>const groupedPeople = groupBy(persons, 'age');</strong></code></pre>

Therefor we get the desired result :


```
 23: [
    { name: 'Suzi', hoby: 'golf' }, 
    { name: 'Joe', hobby: 'books'},
    {name: "Kane", hobby: "books"}
  ], 
  15: [{ name: 'Gary', hobby: 'books' }] ,
  .
  .
  .
}
```
<figure class="wp-block-image">

<img class="wp-image-32469" src="http://www.nikpro.com.autransform.png" alt="transform the array" srcset="http://testgatsby.localtransform.png 550w, http://testgatsby.localtransform-300x205.png 300w" sizes="(max-width: 550px) 100vw, 550px" /> <figcaption>transform the array using reduce()</figcaption> </figure> 

We can use our [ES6](http://nikpro.com.au/category/es6) knowledge and change our code to be more readable [using arrow functions](http://www.nikpro.com.au/some-arrow-function-benefits-with-examples-explained/):


```
const groupBy = (<code><strong>OurArray, property</strong></code>) => {
return <code><strong>OurArray</strong></code>.reduce((<code><strong>accumulator, object</strong></code>) => {
const key = <code><strong>object</strong></code>[<code><strong>property</strong></code>];
// using ternary operator to make it shorter but in this case it is not necessary as it might look complicated
!<code><strong>accumulator</strong></code>[key] ? (<code><strong>accumulator</strong></code>[key] = []) : (<code><strong>accumulator</strong></code>[key].push(<code><strong>object</strong></code>));
return <code><strong>accumulator</strong></code>;
}, {});
};
```


Using reduce() in these cases makes it easier to implement and maintain. We can always use reduce() combining with other array methods to shape our array the way we need it.

Thank you for reading.
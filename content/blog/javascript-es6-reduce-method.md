---
id: 31925
title: Javascript ES6 reduce() method and how to use it
date: 2018-07-27T21:44:19+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31925
permalink: /javascript-es6-reduce-method/
image: ../../static/images/reduce-method.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - reduce
---
We will talk about Javascript ES6 reduce() method and how to use it in this article. Among [new ES6 features](http://www.nikpro.com.au/javascript-es6-maps-with-examples/), reduce() method is one of the good and sometimes confusing ones. First we need to understand its syntax.

## The ES6 reduce() syntax

Basically reduce() is used when we need to sum up an arrays values and get a total amount at the end. Its callback function(the function to be applied by reduce) will execute on each element and takes up to four arguments that two of them are required for reduce to wrk. We call it a reduction. Here is the syntax:

`<i>array</i>.<span class="color_h1">reduce</span>(<em>function(total, currentValue, currentIndex, arr), initialValue</em>);`

The total value is the initial value or returned value of the function. It is the first value of the array that we do the reduction for. We will explain it later.

The currentValue is the value of the current element. It is the right hand side of the latest element.

These two values are required for reduce to work. Time for some examples.

### A full example

This is an ES6 reduce example:

`[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {`  
`  return accumulator + currentValue;`  
`});`

We have applied reduce to an array of five elements. In the below table you will see what happens to all those elements inside the function:

<div style="overflow-x: auto;">
  <table>
    <tr>
      <th scope="col">
        <code>callback</code>
      </th>
      
      <th scope="col">
        <code>accumulator</code>
      </th>
      
      <th scope="col">
        <code>currentValue</code>
      </th>
      
      <th scope="col">
        <code>currentIndex</code>
      </th>
      
      <th scope="col">
        <code>array</code>
      </th>
      
      <th scope="col">
        return value
      </th>
    </tr>
    
    <tr>
      <th scope="row">
        first call
      </th>
      
      <td>
        <code></code>
      </td>
      
      <td>
        <code>1</code>
      </td>
      
      <td>
        1
      </td>
      
      <td>
        <code>[0, 1, 2, 3, 4]</code>
      </td>
      
      <td>
        <code>1</code>
      </td>
    </tr>
    
    <tr>
      <th scope="row">
        second call
      </th>
      
      <td>
        <code>1</code>
      </td>
      
      <td>
        <code>2</code>
      </td>
      
      <td>
        2
      </td>
      
      <td>
        <code>[0, 1, 2, 3, 4]</code>
      </td>
      
      <td>
        <code>3</code>
      </td>
    </tr>
    
    <tr>
      <th scope="row">
        third call
      </th>
      
      <td>
        <code>3</code>
      </td>
      
      <td>
        <code>3</code>
      </td>
      
      <td>
        3
      </td>
      
      <td>
        <code>[0, 1, 2, 3, 4]</code>
      </td>
      
      <td>
        <code>6</code>
      </td>
    </tr>
    
    <tr>
      <th scope="row">
        fourth call
      </th>
      
      <td>
        <code>6</code>
      </td>
      
      <td>
        <code>4</code>
      </td>
      
      <td>
        4
      </td>
      
      <td>
        <code>[0, 1, 2, 3, 4]</code>
      </td>
      
      <td>
        <code>10</code>
      </td>
    </tr>
  </table>
</div>

Clearly the accumulator which is called the total amount as well, is always the left value in the array and the current value is in the right side of it. Remember reduce applies he function to each element in the array so these values are changing upon each call until it reaches the last value.

And the best thing is to convert this to an [arrow function](http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) syntax. We leave off the currentIndex and array as they are optional:

`[0, 1, 2, 3, 4].reduce((accumulator, currentValue)=> accumulator + currentValue);`

### Initial value

If we were to have an initial value which we might incases, the code will change to this:

`[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) =>``accumulator + currentValue``, 10);`

And the reduction will add up by the initial value and in this case 10. So the output is 20 instead of 10 in the above example.

### An example with objects

We could apply reduce to objects in a similar away:

`var initialValue = 0;`  
`var sum = [{x: 1}, {x:2}, {x:3}].reduce( (accumulator, currentValue) => accumulator + currentValue.x`  
` ,initialValue`  
`);`

`console.log(sum) // logs 6`

Which accumulates the object values and print them out.

### <span class="highlight-span">Counting instances of values in an object</span> {#Counting_instances_of_values_in_an_object.highlight-spanned}

In the example below we want to count how many times a name has been repeated inside the names array. If the name was repeated meaning the current value (name) was the same as total value (allNames) , we increment the total count by one and if not, we just count it as one repeat:

`var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];`

`var countedNames = names.reduce(function (allNames, name) { `  
`  if (name in allNames) {`  
`    allNames[name]++;`  
`  }`  
`  else {`  
`    allNames[name] = 1;`  
`  }`  
`  return allNames;`  
`}, {});`  
`// countedNames is:`  
`// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }`

There are lots of different use cases for reduce as it is a very useful and multipurpose method. We have shown a few of them here. In the upcoming articles, we will challenge ourselves in some difficult examples around reduce and other ES6 array methods. Thanks for reading.
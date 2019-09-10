---
id: 31914
title: Practice with map filter and sort methods in Javascript the ES6 way
date: 2018-07-25T21:54:39+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31914
permalink: /practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/
image: /images/sort.jpg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - filter
  - map
  - sort
---
In this post we will practice some functional programming  using some examples around map filter and sort methods using ES6 syntax. We will complete some tasks over an object.

### Filter practice

Lets assume we have this object to work on:

`<strong> const inventors = [</strong>`  
`<strong>{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },</strong>`  
`<strong>{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },</strong>`  
`<strong>{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },</strong>`  
`<strong>{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },</strong>`  
`<strong>{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },</strong>`  
`<strong>{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },</strong>`  
`<strong>{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },</strong>`  
`<strong>{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },</strong>`  
`<strong>{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },</strong>`  
`<strong>{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },</strong>`  
`<strong>{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },</strong>`  
`<strong>{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }</strong>`  
`<strong>];</strong>`

We will complete some tasks over this object. 

First we want to generate a list of inventors who lived in the 1600&#8217;s. We need to get the inventors and apply filter over it via a function which with that function it loops through all data inside inventors and return the result via **inventor**. Inside the function, we use **inventor** object which has the information about **inventors** itself. Having inventor we can then choose the data we need based on our conditions:

`<strong>const sixteen = inventors.filter(function(inventor){</strong>`  
`<strong>  if (inventor.year >= 1600 && inventor.year <= 1699){</strong>`  
`<strong>    return true;</strong>`  
`<strong>  }</strong>`

`<strong>});</strong>`  
`<strong>console.table(sixteen);</strong>`

In our if statement we return true meaning we want o keep the data and then we show it in our console.We use **console.table** to show a nice and clean table of returned content.

However this is a long way of writing the code. Lets use some ES6 syntax and shorten it. We will use [arrow function](http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) and put the if condition all in one line :

`<strong>const sixteen = inventors.filter(inventor=></strong>`(`<strong>inventor.year >= 1600 && inventor.year));</strong>`

`<strong>console.table(sixteen);</strong>`

Nice and neat huh ! First problem solved.

### Sort practice

#### sort by birth

First sort is to sort them by birthday from youngest to oldest. Same as filter, we need a function that sort could use to sort people over:

`<strong>const SortByBirth = inventors.sort(function(firstInventor,secondInventor){</strong>`  
`<strong>  if (firstInventor.year < secondInventor.year){</strong>`  
`<strong>    return 1;</strong>`  
`<strong>  }else{</strong>`  
`<strong>    return -1;</strong>`  
`<strong>  }</strong>`  
`<strong>});</strong>`  
`<strong>console.table(SortByBirth);</strong>`

We return 1 as true and -1 as false. Again lets make it more readable and of course short by using arrow function and ternary operator:

`<strong>const SortByBirth = inventors.sort((firstInventor,secondInventor)=></strong>``<strong>(firstInventor.year < secondInventor.year ? 1 : -1);</strong>`  
`<strong>console.table(SortByBirth);</strong>`

Try it on your console and you get the same results.

#### sort by age

Now lets sort them by their age and the oldest comes first. We simply calculate their age and compare them like the previous function:

`<strong>const SortByAge = inventors.sort(function(a, b){</strong>`

`<strong>const otherInventor = a.passed - a.year;</strong>`

`<strong>const lastInventor = b.passed - b.year;</strong>`

```<strong>  if (otherInventor < lastInventor){</strong>`  
`<strong>    return 1;</strong>`  
`<strong>  }else{</strong>`  
`<strong>    return -1;</strong>`  
`<strong>  }</strong>`  
`<strong>});</strong>`  
`<strong>console.table(SortByAge);</strong>`

Lets make this one shorter and cleaner as well:

`<strong>const SortByAge = inventors.sort(function(a, b){</strong>`

`<strong>const otherInventor = a.passed - a.year;</strong>`

`<strong>const lastInventor = b.passed - b.year;</strong>`

```<strong>return otherInventor < lastInventor ? 1 : -1;</strong>`  
`<strong>});</strong>`  
`<strong>console.table(SortByAge);</strong>`

### Map practice

This is a really nice example using map and new ES6 syntax. We want to return the full name of all inventors. Map returns all data we pass into it unlike filter that obviously filter it for us. We write the function as we do as usual:

`<strong>const fullnames = inventors.map(function(inventor){</strong>`  
`<strong>  return inventor.first + " " + inventor.last;</strong>`  
`<strong>});</strong>`  
`<strong>console.table(fullnames);</strong>`

This works perfectly but lets make it more readable and modern using arrow function instead of the function and back-tick in [template literals](http://www.nikpro.com.au/template-literals-in-js6-explained/) in your return statement:

`<strong>const fullnames = inventors.map(inventor =></strong>```<strong>`{$<code>inventor.first}{$inventor.last}`);``</strong></code>  
`<strong>console.table(fullnames);</strong>`

And it now looks great. and works just the same.

In this post we had a few practices around map filter and sort using modern ES6 syntaxes like arrow functions and template literals and ternary operator. In the next post of this series, we will practice more on sorts and reduce methods. See more of these examples on <a href="http://wesbos.com" target="_blank" rel="noopener noreferrer">wesbos.com</a>. Thanks for reading.
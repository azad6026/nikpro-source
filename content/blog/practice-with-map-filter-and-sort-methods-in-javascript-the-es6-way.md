---
id: 31914
title: Practice with map filter and sort methods in Javascript the ES6 way
date: 2018-07-25T21:54:39+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=31914
permalink: /practice-with-map-filter-and-sort-methods-in-javascript-the-es6-way/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/sort.jpg
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

` const inventors = [`  
`{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },`  
`{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },`  
`{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },`  
`{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },`  
`{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },`  
`{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },`  
`{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },`  
`{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },`  
`{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },`  
`{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },`  
`{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },`  
`{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }`  
`];`

We will complete some tasks over this object. 

First we want to generate a list of inventors who lived in the 1600&#8217;s. We need to get the inventors and apply filter over it via a function which with that function it loops through all data inside inventors and return the result via **inventor**. Inside the function, we use **inventor** object which has the information about **inventors** itself. Having inventor we can then choose the data we need based on our conditions:

`const sixteen = inventors.filter(function(inventor){`  
`  if (inventor.year >= 1600 && inventor.year <= 1699){`  
`    return true;`  
`  }`

`});`  
`console.table(sixteen);`

In our if statement we return true meaning we want o keep the data and then we show it in our console.We use **console.table** to show a nice and clean table of returned content.

However this is a long way of writing the code. Lets use some ES6 syntax and shorten it. We will use [arrow function](https://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) and put the if condition all in one line :

`const sixteen = inventors.filter(inventor=>`(`inventor.year >= 1600 && inventor.year));`

`console.table(sixteen);`

Nice and neat huh ! First problem solved.

### Sort practice

#### sort by birth

First sort is to sort them by birthday from youngest to oldest. Same as filter, we need a function that sort could use to sort people over:

`const SortByBirth = inventors.sort(function(firstInventor,secondInventor){`  
`  if (firstInventor.year < secondInventor.year){`  
`    return 1;`  
`  }else{`  
`    return -1;`  
`  }`  
`});`  
`console.table(SortByBirth);`

We return 1 as true and -1 as false. Again lets make it more readable and of course short by using arrow function and ternary operator:

`const SortByBirth = inventors.sort((firstInventor,secondInventor)=>``(firstInventor.year < secondInventor.year ? 1 : -1);`  
`console.table(SortByBirth);`

Try it on your console and you get the same results.

#### sort by age

Now lets sort them by their age and the oldest comes first. We simply calculate their age and compare them like the previous function:

`const SortByAge = inventors.sort(function(a, b){`

`const otherInventor = a.passed - a.year;`

`const lastInventor = b.passed - b.year;`


```
  if (otherInventor < lastInventor){`  
`    return 1;`  
`  }else{`  
`    return -1;`  
`  }`  
`});`  
`console.table(SortByAge);`

Lets make this one shorter and cleaner as well:

`const SortByAge = inventors.sort(function(a, b){`

`const otherInventor = a.passed - a.year;`

`const lastInventor = b.passed - b.year;`


```
return otherInventor < lastInventor ? 1 : -1;`  
`});`  
`console.table(SortByAge);`

### Map practice

This is a really nice example using map and new ES6 syntax. We want to return the full name of all inventors. Map returns all data we pass into it unlike filter that obviously filter it for us. We write the function as we do as usual:

`const fullnames = inventors.map(function(inventor){`  
`  return inventor.first + " " + inventor.last;`  
`});`  
`console.table(fullnames);`

This works perfectly but lets make it more readable and modern using arrow function instead of the function and back-tick in [template literals](https://www.nikpro.com.au/template-literals-in-js6-explained/) in your return statement:

`const fullnames = inventors.map(inventor =>
```
`{$inventor.first}{$inventor.last}`);``  
`console.table(fullnames);`

And it now looks great. and works just the same.

In this post we had a few practices around map filter and sort using modern ES6 syntaxes like arrow functions and template literals and ternary operator. In the next post of this series, we will practice more on sorts and reduce methods. See more of these examples on <a href="https://wesbos.com" target="_blank" rel="noopener noreferrer">wesbos.com</a>. Thanks for reading.
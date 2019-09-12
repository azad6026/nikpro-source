---
id: 32314
title: Using object literals and map method instead of the old switch statement
date: 2018-09-30T20:38:40+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32314
permalink: /using-object-literals-and-map-method-instead-of-the-old-switch-statement/
xyz_twap:
  - "1"
# image: ../../static/images/switch-statement.jpeg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - map method
  - switch method
---
Implementing [ES6](http://nikpro.com.au/category/es6) features in our code it is best to use [object literals](http://www.nikpro.com.au/template-literals-in-js6-explained/) instead of switch statements in our codes. In this article we will explain it with some examples.

## First example: switch statement replaced

As an example take a look at <a href="https://scotch.io/tutorials/5-tips-to-write-better-conditionals-in-javascript" target="_blank" rel="noopener noreferrer">this</a> example which I want to explain:


```
<code>function test(color) {
  // use switch case to find fruits in colour
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
}

//test results
test(null); // []
test('yellow'); // ['banana', 'pineapple']</code>
```


Clearly we could see how switch statement works here. it finds or categorises fruits in colour. 

We know that switch statements, with their non standard syntax included, are difficult to read and contain extra **“syntactical sugar (not good sugar)”** that we really don’t want to be reading.<figure class="wp-block-image">

<img src="http://www.nikpro.com.ausynthatical-sugar.jpeg" alt="synthetical sugar" class="wp-image-32316" srcset="http://testgatsby.localsynthatical-sugar.jpeg 1600w, http://testgatsby.localsynthatical-sugar-300x202.jpeg 300w, http://testgatsby.localsynthatical-sugar-768x516.jpeg 768w, http://testgatsby.localsynthatical-sugar-1024x688.jpeg 1024w, http://testgatsby.localsynthatical-sugar-1568x1054.jpeg 1568w" sizes="(max-width: 1600px) 100vw, 1600px" /> </figure> 

## Object literals or map to help

Technically we could use object literals to replace the above switch statement like below:


```
<code>function test(color) {
  // use object literals to find fruits in colour
  const fruitColor = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum']
  };

  return fruitColor[color] || [];
}</code>
```


We have created a JSON object that contains our colours as keys and fruits and the value we want to select from the object. We have a much cleaner code which is not error prone either. Aa an alternative we could use map and set to define the switch statement instead:


```
<code>function test(color) {
  // use Map to find fruits in colour
  const fruitColor = new Map()
    .set('red', ['apple', 'strawberry'])
    .set('yellow', ['banana', 'pineapple'])
    .set('purple', ['grape', 'plum']);

  return fruitColor.get(color) || [];
}</code>
```


As a result we have similar outcomes from the three of the code snippets above. But using ES6 features like object literals saves a lot of time and code. Also we will have a more maintainable code. 

## Another example with object literals

Take a look at this similar example first with switch statement in the view:


```
let type = 'coke';
let drink;
switch(type) {
case 'coke':
  drink = 'Coke';
  break;
case 'pepsi':
  drink = 'Pepsi';
  break;
default:
  drink = 'Unknown drink!';
}
console.log(drink); // 'Coke'
```


Basically `switch` has lots of problems. from its procedural control flow to its non-standard-looking way it handles code blocks. AS the rest of JavaScript uses curly braces yet switch does not.

Using object literals it makes it easy to manage it all and have control over the code:


```
function getDrink (type) {
  let drinks = {
    'coke': 'Coke',
    'pepsi': 'Pepsi',
    'lemonade': 'Lemonade',
    'default': 'Default item'
  };
  return 'The drink I chose was ' + (drinks[type] || drinks['default']);
}

const drink = getDrink('coke');
// The drink I chose was Coke
console.log(drink);
```


As a result we have more readable code which can be expanded to much more complex code with different conditions. The concept remains the same though. 

Thank you for reading.
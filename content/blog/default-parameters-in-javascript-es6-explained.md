---
id: 31793
title: Default parameters in Javascript ES6 explained
date: 2018-07-05T22:42:29+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31793
permalink: /default-parameters-in-javascript-es6-explained/
image: es6-default-parameters.jpg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - default parameters
  - property shorthands
---
We have been learning about new features in Javascript ES6 in [this post](http://www.nikpro.com.au/for-loop-in-javascript-and-es6-explained/) and [this one](http://www.nikpro.com.au/template-literals-in-js6-explained/) and [this post](http://www.nikpro.com.au/what-is-spread-syntax-in-es6-and-how-to-use-it/) so far. Here we will explain default parameters in Javascript ES6 and its wide usage in our code practices.

## ES6 default parameters

A default parameter is used when an argument is omitted or &#8220;undefined&#8221;. It can be a static value like a number or a new function. This is how we implemented parameters prior to ES6:

```
function getInfo (name, year, color) {  
  year = (typeof year !== 'undefined') ? year : 2018;  
  color = (typeof color !== 'undefined') ? color : 'Blue';  
  // remainder of the function...  
}
```

  In this example, only the name is a mandatory parameter and the other two have default values. We will have these outputs:

```
getInfo('Chevy', 1957, 'Green');  
getInfo('Benz', 1965); // default for color is "Blue"  
getInfo('Honda'); // defaults are 2018 and "Blue"
```

So if we don&#8217;t put in all the check guards in the code, we will have undefined value for not initialised parameters.

Es6 has made it so much easier though. This is the function equivalent in ES6:

```
function getInfo (name, year = 2018, color = 'blue') {  
  // function body here...  
}
```

We still get the same results if we call the function but it is less code and easy to read and maintain.

### Dealing with optional values

If you do not initialise the optional default parameters, you would have to specify &#8220;undefined&#8221; as a word&#8221;.

```
function getInfo (name = 'Pat', year, color) {  
  // function body here...  
}
getInfo(undefined,1995, 'Orange')
;
```

because if you don&#8217;t , it will consider as name. It applies to other parameters (year and color)  as well:

```
getInfo('Charlie', undefined, 'Pink');
```

Also if you specify null as a parameter it might cause unexpected problems.:

```
getInfo('Frankie', null, 'Purple');
```
Null is considered as the absence of an object&#8217;s value but undefined is viewed as something that happens incidentally (like when function returns undefined)

### Property shorthands

In default parameters we are shortening the initialisation. This is another basic example of using default parameters with property shorthands syntax:

```
// Basic syntax  
function multiply (a, b = 2) {  
 return a * b;  
}  
multiply(5); // 10
```

Default parameters are also available to later default parameters:

```
function foo (num = 1, multi = multiply(num)) {  
 return [num, multi];  
}  
foo(); // [1, 2]  
foo(6); // [6, 12]
```

Here we have the first function as a parameter of the next one. Very neat and clean code that is far more readable this way.

Yet another example:

```
const a = 'foo', b = 42, c = function () {};
// Previously we would use these constants like this.  
const alphabet = {  
a: a,  
b: b,  
c: c  
};
```

But with the new shorthand we can actually do this now, which is equivalent to the above.

```
const alphabet = { a, b, c };
```

All in one single line.

There are lots of other examples and situations we could use them. Overall, default parameters increases the code readability and make initialisation easier and shorter as well. With big API codes and large applications it is essential to have clean and maintainable code along the way.

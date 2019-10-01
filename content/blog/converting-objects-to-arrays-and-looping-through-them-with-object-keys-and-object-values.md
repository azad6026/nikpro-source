---
id: 32319
title: Converting objects to arrays and looping through them with Object.keys and Object.values
date: 2018-10-01T21:29:30+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32319
permalink: /converting-objects-to-arrays-and-looping-through-them-with-object-keys-and-object-values/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/some-js.jpeg
categories:
  - ES6
  - JAVASCRIPT
---

## Object.keys and Object.values instead of for &#8230; in loop

Basically these two ES6 methods are great replacement for for &#8230; in loop. As we explained in [this](https://www.nikpro.com.au/for-loop-in-javascript-and-es6-explained/) article the for &#8230; loop is buggy and not the best option to loop through an array of object. Thankfully we can use Object.keys and Object.values as below examples  from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank" rel="noopener noreferrer">MDN</a>.

### Object.keys examples

Simply Object.keys takes an object of key-value pairs and loops through them and creates an array of its keys:

```
// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
const<span style="background-color: rgb(243, 244, 245);">t</span> anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

Also we can even use it to get keys from a non object argument as well. Although it is only in ES6 and in older version in gives a TypeError:

```
Object.keys('apple');
// TypeError: "apple" is not an object (ES5 code)

Object.keys('apple');
// ["0", "1", "2" , "3" , "4"]   (ES2015 code)

```

<figure class="wp-block-image">

<img src="https://www.nikpro.com.aues6-object-methods.png" alt="es6 object methods" class="wp-image-32321" srcset="https://testgatsby.locales6-object-methods.png 483w, https://testgatsby.locales6-object-methods-283x300.png 283w" sizes="(max-width: 483px) 100vw, 483px" /> </figure>

### Object.values examples

Here it comes the very useful Object.values. Although it is not supported in <a href="https://caniuse.com/#search=object.values" target="_blank" rel="noopener noreferrer">IE yet</a> but it is the easiest and neatest way to get values out of an array of objects.

Object.values returns an array of a given object&#8217;s own enumerable property values, in the same order as that provided by a [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)loop. We will take a look at some examples again:

```
const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
const an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('apple')); // ['a, 'p, 'p' , 'l' , 'e']
```

Clearly as mentioned about Object.keys as well , in the last example we see that we can even convert a string to object values as an array even though it is not an object. It is useful in some cases if needed.

## Using Object.values and map methods instead of Object.values

Technically we can combine Object.values and map method to produce the same result as Object.values if we care about IE. Take a look at these example:

```
const obj = { foo: 'bar', baz: 42 };
const values = Object.keys(obj).map(function(e) {
  return obj[e]
})

console.log(values)
```

Therefor we get an array of keys first using Object.keys and using map method get an array of values for those keys afterwards. Using arrow functions it will look like this:&#8217;

```
const values = Object.keys(obj).map(e => obj[e])
```

As a take away it is best ti use ES6 new techniques and methods whenever possible. It makes the code more maintainable and readable and give the desired outcome as well.

Thanks for reading.

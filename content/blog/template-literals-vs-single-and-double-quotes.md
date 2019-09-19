---
id: 31768
title: Template literals vs Single and double quotes
date: 2019-09-17T20:38:59+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31768
permalink: /template-literals-vs-single-and-double-quotes
# featuredImage: ../../static/images/design-with-code.jpg
featuredImage: ../../static/images/back-ticks-vs-single-double-quotes-string.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - backtick
  - single quotes
  - expressons
  - template literals
---

Since template literals being introduced, we have found many good use cases to replace single and double qoutes with them for the sake of maintainability. We will explain most common usages of each one in this article to hopefully understand their usability better.

## Best practices so far

Basically we break it down to two sections. Quotes and Literals (back-ticks in our case ) for clarity:

### Where to use single or double quotes

Generally you don't need to escape single quotes in double quotes, or double quotes in single quotes. The point is you should use whatever quotes are not present in the string. Also use "double" and 'single' quotes in the same string.

```
'A string that\'s single quoted'

"A string that's double quoted"
```

### Single Quotes

It is best to use single quotes for strings without new lines or interpolation

```
const name = 'Mark. Example surname';
```

Also it is best practice to use them for a very long string as below:

```
const lonsString = 'It is best to use single quotes for one long line string as debugging a problem in a long multi line sentence with concatenation is so painful';
```

Or to eliminate lots of escape characters along with double quotes:

```
const foo = '\'this\' is "quoted"';
```

### Double Quotes

If you're dealing with JSON, it should be noted that strictly speaking, JSON strings must be double quoted:

```
const person = { name: "John", age: 31, city: "New York" };
```

## Template lliterals

You can do multi-line strings and string interpolation features using them with back-ticks in hand:

```
`string text`

`string text line 1
string text line 2`
```

Use string literals with back ticks for functionality creation:

```
const helloMe = () => `Hello to ${myname}`;
```

As a result using it for a string containing template literals:

```
const foo = `my name is '${myname}'`;
```

Also you could put a backslash \ to escape back-tick and dollor brace sequence in a string literal :

```
alert(`Escape the \` back-tick character and the \${ dollar-brace sequence in a string`);
```

## Compare quotes and back-ticks

As an exmple here we use single quotes for text and concatenate:

```
const {a, b} = {5,10};
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
```

Comparingly the same example using back-ticks in template literals:

```
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Practically back-ticks have made it so easy to deal with the mix of text and variables in template literals. Also multiline strings or escaped characters.

With the backticks it will be written as it should.

Thank you for reading.

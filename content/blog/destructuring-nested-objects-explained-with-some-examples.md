---
id: 32669
title: Destructuring nested objects explained with some examples
date: 2019-01-30T20:22:43+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32669
permalink: /destructuring-nested-objects-explained-with-some-examples/
xyz_twap:
  - "1"
# image: ../../static/images/nestedobject.jpg
categories:
  - ES6
  - JAVASCRIPT
tags:
  - destructuring nested arrays
---
One of the most useful and yet advanced aspects that ES6 introduced was [destructuring](http://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/) objects and arrays. But it is most interesting when we use it for nested objects and arrays. We will check out some examples.

## Destructuring definition in practice

Firstly we need to define how destructuring works.Take a look at this example:

```
const user = {
  id: 339,
  name: 'Fred',
  age: 42
};
const {name} = user;
console.log(name); //prints: Fred
```

Basically we have got an object called &#8220;user&#8221; and we have assigned some values to its variables. The line below:

```
const {name} = user;
```

Generally defines a variable called **name** and assigns the **user** object to it. Meaning we define the same variable called **name** using brackets and ask for its value out of its parent called **user**. 

Now if we print out the &#8220;name&#8221; we will see &#8220;Fred&#8221; which is what has been assigned to name inside &#8220;user&#8221; object.

## Destructure a nested object

What if we have a nested array? And we need to go deep and destructure some variables? We will use some <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank" rel="noreferrer noopener" aria-label="MDN (opens in a new tab)">MDN</a> examples:

```
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung'
    }
  ],
  url: '/en-US/docs/Tools/Scratchpad'
 };
 ```

As an example we want to destructure the title and the locale variables:

```
const { 
  title,
  translations: [
    {
      locale,
    },
  ],
} = metadata;

console.log(title); // "Scratchpad"
console.log(locale);  // "de"
```

Generally we can rename variables as we destructure them as well so it is more readable and less confusing at specific points like below:

```
const {
  title: englishTitle,// rename
  translations: [
    {
      title: localeTitle,// rename
    },
  ],
 } = metadata;
 console.log(englishTitle); // "Scratchpad"
 console.log(localeTitle);  // "JavaScript-Umgebung"
 ```

Practically we have got two titles but we rename them at definition point and we can use their new name to get the values. Pretty neat.

## Predefine destructured variables

Interestingly we can define variables as we destructure them by assigning default values. It is essential as if we don&#8217;t predefine the variable we will throw a Type Error. Here is an example of how to do it:

```
const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63
  }
};
// We  predefine science as a new variable inside object while desructuring
const { name, scores: {maths, science = 50}} = student;
console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);
// John Doe scored 74 in Maths and 50 in Elementary Science.
```

Therefore we defined &#8220;science&#8221; as a new variable inside &#8220;scores&#8221; object and output it at the end.

## Iterating over a destructured object

Here is another example when we do iterate over an object while destructuring its variables:

```
var people = [
  {
  name: 'Mike Smith',
  family: {
      mother: 'Jane Smith',
    father: 'Harry Smith',
    sister: 'Samantha Smith'
  },
  age: 35
  },
  {
  name: 'Tom Jones',
  family: {
    mother: 'Norah Jones',
    father: 'Richard Jones',
    brother: 'Howard Jones'
  },
  age: 25
  }
 ];
 for (var {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
 }
 // "Name: Mike Smith, Father: Harry Smith"
 // "Name: Tom Jones, Father: Richard Jones"
 ```

[Using for &#8230; of](http://www.nikpro.com.au/converting-objects-to-arrays-and-looping-through-them-with-object-keys-and-object-values/) method we destructure people object and also rename its variables. The result is as we expected.

Object destructuring is a vast and major topic in [ES6 features.](http://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/) But nested objects can benefit of it the most.

Thank you for reading.

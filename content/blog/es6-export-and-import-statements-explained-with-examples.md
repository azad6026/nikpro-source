---
id: 32018
title: ES6 export and import statements explained with examples
date: 2018-08-12T20:34:25+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32018
permalink: /es6-export-and-import-statements-explained-with-examples/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/import-export.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - export
  - import
---
Continuing our [ES6 features](https://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) in this post the ES6 export and import statements explained with examples. Using export and import this is how you can write code in one file and share that code so it can be used by another file or files.

## The export statement

The **`export`** statement is used to create JavaScript modules to export functions, objects, or primitive values from the module. Therefor they can be used by other programs with the [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement.

There are two different types of export, **named** and **default**. You can have multiple named exports per module but only one default export.

Named exports are useful to export several values. During the import, it is mandatory to use the **same name** of the corresponding object. But a default export can be imported with any name and only once per module:


```
let k; <br/>export default k = 12; // in file test.js

import m from './test' // note that we have the freedom to use import m instead of import k, because k was default export

console.log(m);        // will log 12
```


Or just export the default:


```
export {default} from 'mod';<br />
```


Another example for export looks like this:


```
// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}<br/><br/>//In another module<br/>import cube from 'my-module';
console.log(cube(3)); // 27
```


## The import statement

The `import` statement is used to import bindings which are exported by another module. We can import modules in variety of ways. Take a look at these examples:


```
import {myExport} from '/modules/my-module.js';<br />import {foo, bar} from '/modules/my-module.js';<br />import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';
```


Additionally we could import defaults as in export. It is possible to have a default [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) (whether it is an object, a function, a class, etc.). The `import` statement may then be used to import such defaults:

```
import myDefault from '/modules/my-module.js';<br />// myModule used as a namespace<br />import myDefault, {foo, bar} from '/modules/my-module.js';
// specific, named imports
```


Finally have a look at these examples of both. First the named export and import:


```
//------ lib.js ------<br/>export const sqrt = Math.sqrt;<br/>export function square(x) {<br/>    return x * x;<br/>}<br/>export function diag(x, y) {<br/>    return sqrt(square(x) + square(y));<br/>}<br/><br/>//------ main.js ------<br/>import { square, diag } from 'lib';<br/>console.log(square(11)); // 121<br/>console.log(diag(4, 3)); // 5
```


And the default export and import example:


```
//------ myFunc.js ------<br/>export default function () { ... };<br/><br/>//------ main1.js ------<br/>import myFunc from 'myFunc';<br/>myFunc();
```


It was the basics of export and import in ES6 with a few example.We will see more of them in our [React components](https://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/) when we write them. Thanks for reading.<figure class="wp-block-image">

<img src="https://www.nikpro.com.auimport-export-image.jpeg" alt="export import body image" class="wp-image-32019" srcset="https://testgatsby.localimport-export-image.jpeg 1276w, https://testgatsby.localimport-export-image-300x160.jpeg 300w, https://testgatsby.localimport-export-image-768x410.jpeg 768w, https://testgatsby.localimport-export-image-1024x547.jpeg 1024w" sizes="(max-width: 1276px) 100vw, 1276px" /> </figure>
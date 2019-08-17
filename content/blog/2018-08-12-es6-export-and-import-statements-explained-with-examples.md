---
id: 32018
title: ES6 export and import statements explained with examples
date: 2018-08-12T20:34:25+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32018
permalink: /es6-export-and-import-statements-explained-with-examples/
image: /wp-content/uploads/2018/08/import-export.png
categories:
  - ES6
  - JAVASCRIPT
tags:
  - export
  - import
---
Continuing our [ES6 features](http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/) in this post the ES6 export and import statements explained with examples. Using export and import this is how you can write code in one file and share that code so it can be used by another file or files.

## The export statement

The **`export`** statement is used to create JavaScript modules to export functions, objects, or primitive values from the module. Therefor they can be used by other programs with the [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement.

There are two different types of export, **named** and **default**. You can have multiple named exports per module but only one default export.

Named exports are useful to export several values. During the import, it is mandatory to use the **same name** of the corresponding object. But a default export can be imported with any name and only once per module:

<pre class="wp-block-preformatted"><strong><code>let k; &lt;br/>export default k = 12; // in file test.js

import m from './test' // note that we have the freedom to use import m instead of import k, because k was default export

console.log(m);        // will log 12</code></strong></pre>

Or just export the default:

<pre class="wp-block-preformatted"><strong><code>export {default} from 'mod';</code></strong><br /></pre>

Another example for export looks like this:

<pre class="wp-block-preformatted"><strong><code>// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}&lt;br/>&lt;br/>//In another module&lt;br/>&lt;code>import cube from 'my-module';
console.log(cube(3)); // 27</code>&lt;/code></strong></pre>

## The import statement

The `<strong>import</strong>` statement is used to import bindings which are exported by another module. We can import modules in variety of ways. Take a look at these examples:

<pre class="wp-block-preformatted"><strong><code>import {myExport} from '/modules/my-module.js';</code></strong><br /><strong><code>import {foo, bar} from '/modules/my-module.js';</code></strong><br /><strong><code>import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';</code></strong></pre>

Additionally we could import defaults as in export. It is possible to have a default [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) (whether it is an object, a function, a class, etc.). The `import` statement may then be used to import such defaults:

<pre class="wp-block-preformatted"><code>import myDefault from '/modules/my-module.js';</code><br /><code>&lt;code>// myModule used as a namespace</code><br />import myDefault, {foo, bar} from '/modules/my-module.js';
// specific, named imports&lt;/code></pre>

Finally have a look at these examples of both. First the named export and import:

<pre class="wp-block-preformatted"><strong><code>//------ lib.js ------&lt;br/>export const sqrt = Math.sqrt;&lt;br/>export function square(x) {&lt;br/>    return x * x;&lt;br/>}&lt;br/>export function diag(x, y) {&lt;br/>    return sqrt(square(x) + square(y));&lt;br/>}&lt;br/>&lt;br/>//------ main.js ------&lt;br/>import { square, diag } from 'lib';&lt;br/>console.log(square(11)); // 121&lt;br/>console.log(diag(4, 3)); // 5</code></strong></pre>

And the default export and import example:

<pre class="wp-block-preformatted"><strong><code>//------ myFunc.js ------&lt;br/>export default function () { ... };&lt;br/>&lt;br/>//------ main1.js ------&lt;br/>import myFunc from 'myFunc';&lt;br/>myFunc();</code></strong></pre>

It was the basics of export and import in ES6 with a few example.We will see more of them in our [React components](http://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/) when we write them. Thanks for reading.<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/08/import-export-image.jpeg" alt="export import body image" class="wp-image-32019" srcset="http://testgatsby.local/wp-content/uploads/2018/08/import-export-image.jpeg 1276w, http://testgatsby.local/wp-content/uploads/2018/08/import-export-image-300x160.jpeg 300w, http://testgatsby.local/wp-content/uploads/2018/08/import-export-image-768x410.jpeg 768w, http://testgatsby.local/wp-content/uploads/2018/08/import-export-image-1024x547.jpeg 1024w" sizes="(max-width: 1276px) 100vw, 1276px" /> </figure>
---
id: 32440
title: Better Javascript with less nesting and return early when possible
date: 2018-10-20T21:13:26+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32440
permalink: /better-javascript-with-less-nesting-and-return-early-when-possible/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/Javascript-Best-Practices.jpg
categories:
  - ES6
  - JAVASCRIPT
---
[One of the best practices](https://www.nikpro.com.au/how-arrow-functions-fixed-this-keyword-problem-in-es6/) in Javascript is to avoid too much nesting and return the value or error as soon as possible. We will take a look at some examples around this scenario.

## Return early in if else statements

There is an article in <a href="https://dev.to/jenniferlynparsons/early-returns-in-javascript-5hfb" target="_blank" rel="noreferrer noopener">dev.to</a>&nbsp;that summarises all the articles around this topic. Look at this example with nested if else statements and a single return point:


```
//Single Exit Point
function foo(bar){
    value = '';            
if (bar > 0) {    
&nbsp; value = "YES";
} else if (bar == 0) {    
&nbsp; value = "MAYBE"
} else {    
&nbsp; value = "NO";
}
&nbsp; return value;
}
// Call the function 
foo(10);
```


The problem with nesting is we have to wait maybe until the last statement to get the value back. Besides there is only one return in the whole function and this is assumed as bad practice. 

These are some <a href="https://lecterror.com/articles/view/code-formatting-and-readability" target="_blank" rel="noreferrer noopener">good images from here</a> to show the case:<figure class="wp-block-image">

<img src="https://www.nikpro.com.aubadcode.png" alt="" class="wp-image-32441" srcset="https://testgatsby.localbadcode.png 717w, https://testgatsby.localbadcode-300x118.png 300w" sizes="(max-width: 717px) 100vw, 717px" /> <figcaption>This is what happens with only one return statement</figcaption></figure> 

Therefor the sooner we could return a value the earlier we could leave the function call and the better and faster the code is written and executed. Performance wise it is important to write clean and more readable and maintainable code. And this is one of the use cases. Lets improve it a bit:


```
//Early Returns with if/else
function foo(bar){
if (bar > 0) {    
&nbsp; return "YES";
} else if (bar == 0) {    
&nbsp; return "MAYBE"
} else {    
&nbsp; return "NO";}
}
foo(10);
```


We return value whenever a check is done. Even better we can remove the else as well:


```
//Early Returns with if/else
function foo(bar){
if (bar > 0) {
    return "YES";
}
if (bar == 0) {    
&nbsp; return "MAYBE";
}
&nbsp; return "NO";    
}
foo(10);
```


Also we clearly know what we return the value and when we should expect it:<figure class="wp-block-image">

<img src="https://www.nikpro.com.augoodcode.png" alt="" class="wp-image-32442" srcset="https://testgatsby.localgoodcode.png 356w, https://testgatsby.localgoodcode-207x300.png 207w" sizes="(max-width: 356px) 100vw, 356px" /> <figcaption>This is best practice to return as early as possible</figcaption></figure> 

## Less nesting to return early

Along with return early we need to make sure that we have less nesting in our code. Take a look at <a href="https://scotch.io/bar-talk/5-tips-to-write-better-conditionals-in-javascript#toc-2-less-nesting-return-early" target="_blank" rel="noreferrer noopener">this example</a>:


```
function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// condition 1: fruit must has value
  if (fruit) {
    // condition 2: must be red
    if (redFruits.includes(fruit)) {
      console.log('red');
  // condition 3: must be big quantity  if (quantity > 10) {    console.log('big quantity');  }}
} else {
    throw new Error('No fruit!');
  }
}
// test results
test(null); // error: No fruits
test('apple'); // print: red
test('apple', 20); // print: red, big quantity
```


Basically we have three levels of nesting and one if/else statement. We can return early when the error condition found which helps to leave the function early:


```
/_ return early when invalid conditions found _/
function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// condition 1: throw error early
  if (!fruit) throw new Error('No fruit!');
// condition 2: must be red
  if (redFruits.includes(fruit)) {
    console.log('red');
// condition 3: must be big quantity if (quantity > 10) {  console.log('big quantity');}
}
}
```


Then we will have less nested statements which is great. Practically the aim in the code should be the most possible readability and maintainability which helps in performance and less error prone code. Having less nesting and return early is one of those key things to accomplish this task.

Thank you for reading.
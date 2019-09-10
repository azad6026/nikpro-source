---
id: 31952
title: The ternary operator in Javascript with some examples explained
date: 2018-08-02T20:39:55+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31952
permalink: /the-ternary-operator-in-javascript-with-some-examples-explained/
image: ternary-operators.png
categories:
  - JAVASCRIPT
tags:
  - ternary operator
---
In this post I will explain the ternary operator in Javascript with some examples. We have been using it in some previous articles like the [CSS video article](http://www.nikpro.com.au/customise-html5-video-player-element-in-a-real-example/) and we want to get a better understanding of it in a seperate post.

## The ternary operator syntax

This operator has a very interesting and yet confusing syntax if you don&#8217;t understand it properly. It is a conditional operator that could be used mostly to shorten the if statements to only one line if code. Have a look at its syntax first:

`<strong>condition ? expression1 : expression2</strong>`

It is the only operator taking three statements. The **condition** is what the operator will evaluate against it. If it evaluates to true the first expression will execute. If not the second one ( expression2 ) will be the returning value from the operator. Expressions could be of any type. Take a look a these examples now.

<img class="wp-image-31954 size-full alignnone" src="http://www.nikpro.com.auternary.png" alt="" width="600" height="338" srcset="http://testgatsby.localternary.png 600w, http://testgatsby.localternary-300x169.png 300w" sizes="(max-width: 600px) 100vw, 600px" /> 

### Simple ternary operator

Consider this object:

    <strong>let person = {</strong> <strong>  name: 'tony',</strong> <strong>  age: 20,</strong> <strong>  driver: null</strong> <strong>};</strong>

We will check if the person can drive by its age in this object:

    <strong>if (person.age >= 16) {</strong> <strong>  
      person.driver = 'Yes';</strong> 
    <strong>} else {</strong> <strong>  
      person.driver = 'No';</strong> 
    <strong>}</strong>

We used an if statement. But we could use ternary operator and makes our life easier just by writing one line of code:

    <strong>person.driver = person.age >=16 ? 'Yes' : 'No';</strong>

Sweet isn&#8217;t it. We turned a five line code to just one. Besides it is more readable and maintainable. The ternary operator has the condition then the question marks which you can think of as a checker of which expression to be returned but it is just an operator and the colon separates the expression.

Here is another example:

    <strong>'The fee is ' + (isMember ? '$2.00' : '$10.00');</strong>

It checks the **isMember** variable and returns the result accordingly.

## Multiple ternary evaluations 

It is possible to have multiple ternary evaluations in one statement.Take a look at this example:

    <strong>var firstCheck = false,</strong> 
    <strong>secondCheck = false,</strong> 
    <strong>access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted';</strong> 
    <strong>console.log(access); // logs "Access granted"</strong>

This is a good example for when a few conditions need to be checked step by step. You can also use multiple conditions like in a multiple-conditions IF statement:

`<strong>var condition1 = true,</strong>`  
`<strong>condition2 = false,</strong>` 

`<strong>access = condition1 ? (condition2 ? "true true": "true false") : <br />
(condition2 ? "false true" : "false false");</strong>` `<strong>console.log(access); // logs "true false"</strong>` 

Here each expression contains a seperate ternary operator statement. Besides we can have more that only one operation per expression. We just need to seperate them with comma:

    <strong>var stop = false, 
    age = 23;</strong> 
    <strong>age > 18 ? (</strong> <strong>alert('OK, you can go.'),</strong> <strong>location.assign('continue.html')</strong> <strong>) : 
    (</strong> <strong>stop = true,</strong> <strong>alert('Sorry, you are much too young!')</strong> <strong>);</strong>

As you can see there are lots of use cases for ternary operation and if they been used in the proper place they save unnecessary  lines of code. Therefor will make the code cleaner and easy to maintain. Thanks for reading.
---
id: 32185
title: The CSS shape properties using function values explained with examples part 1
date: 2018-09-11T21:27:41+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32185
permalink: /the-css-shape-properties-using-function-values-explained-with-examples-part-1/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/shape-out.jpg
categories:
  - CSS
  - CSS3
---

In a series of short posts I will demonstrate CSS shape properties with some examples. We could use these properties anywhere in our code as long as the element we apply it to has been floated.

## CSS shape properties circle() value

Basically we could use different kind of values for CSS shape properties. W could use function values as the most common ones. Firstly check out this pen with circle() function value:

https://codepen.io/azad6026/pen/bxvGRK

AS a result of using shape-outside property we have a circle shape around the image that wraps the text around it beautifully. As we see the image is floated and this is the code ( shape-outside):

```
shape-outside: circle(50%);
```

## CSS shape properties ellipse() value

Secondly we could also use ellipse to make an oval shape of he container and  wrap the text around it. We will make the look pretty and it could be used in featured images and text around them. Take a look at this example from CSS tricks:

https://codepen.io/azad6026/pen/aaYzNJ

So the important part here is these lines of code:

```
shape-outside: ellipse(100px 200px at 50% 50%);
clip-path: ellipse(100px 200px at 50% 50%);
```

Therefor [the clip-path](https://www.nikpro.com.au/css-clip-path-property-basic-concept-explained-with-examples/) makes the oval shape and we use the shape-outside property as one of the CSS shape properties to shape the container as expected.

## CSS shape properties polygon() value

Finally we see an example from MDN making a polygon around the container. It looks more complex and flexible. This is the pen for this one:

https://codepen.io/azad6026/pen/ZMxYJp

Practically we use clip-path to shape the two right and left containers and then set the shape-outside to make the text wrap around those two boxes:

```
-webkit-shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);

```

The above is the code for the right floated box and we have a similar code for the other one.

In the next article we will have a look at other values of CSS shape properties stating shape-outside property. Thanks for reading.

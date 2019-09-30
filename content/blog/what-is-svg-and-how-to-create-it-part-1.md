---
id: 32062
title: "What is SVG and how to create it : Part 1"
date: 2018-08-21T21:36:21+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32062
permalink: /what-is-svg-and-how-to-create-it-part-1/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/svg.png
categories:
  - CSS
---

In this post I start explaining about what is SVG and how to create and use it. SVG is probably the most efficient way of creating images and icons in [HTML](https://www.nikpro.com.au/category/html/) and as the W3C strongly recommends using it whenever possible.

## What is SVG

SVG stands for Scalable Vector Graphics. It defines vector-based graphics in XML format. You can create lots of different shapes and images in SVG format. These are some of the advantages of using SVG:

- Every element and every attribute in SVG files can be animated
- It is a W3C recommendation as mentioned
- It integrates with other W3C standards such as the DOM and XSL
- Have small file sizes that compress well
- Scales to any size without losing clarity (except very tiny)
- The file looks great on retina displays
- You can control the design such as interactivity and filters
- SVG image can be created and edited with any text editor

- It can be searched, indexed, scripted, and compressed

Although there are other advantages as well but just keep these in mind for now. Let us see what we can create with it.

**What could we create with it**

Almost any shape. We can create line, circle, rectangle, ellipse, polyline, polygon, text, path and many complex shapes. Check this example:

https://codepen.io/azad6026/pen/vzYqeX

In this pen there is a rectangle and a circle and a text. Each one of SVG inner elements like rect or circle or text have different attibutes with values that specifies how the file should be drawn.

For example in the circle element the cx and cy attributes define the x and y coordinates of the centre of the circle. If cx and cy are omitted, the circle&#8217;s centre is set to (0,0). The r attribute defines the radius of the circle.

#### **Another example with ellipse**

Lets have a look at this example with three ellipses and see how it works:

https://codepen.io/azad6026/pen/eLYqzN

Similarly ellipse has x and y radius like circle. The difference is that an ellipse has an x and a y radius that differs from each other, while a circle has equal x and y radius:

### An example with path

Interestingly we can mix different elements and create more complex shapes. Take a look at this example:

https://codepen.io/azad6026/pen/MqWMqx

As a result we have a complex shape with he path element. The **path** element is used to define a path and create a shape.

Therefor the following commands are available for path data:

- M = moveto
- L = lineto
- H = horizontal lineto
- V = vertical lineto
- C = curveto
- S = smooth curveto
- Q = quadratic Bézier curve
- T = smooth quadratic Bézier curveto
- A = elliptical Arc
- Z = closepath

**Note:** All of the commands can also be lower letters. Capital letters means **absolutely positioned**, lower cases means **relatively positioned**.

The **g** element is a **container** used to group other SVG elements. And here it has been used to group small black circles and also text elements.

There are tools like <a href="https://inkscape.org/en/" target="_blank" rel="noopener noreferrer">inkspace</a> to create these graphics as SVG which worth trying. The best thing about SVG is that it is all code and text and you can create it absolutely in any text editor. We will show more examples and talk about complicated attributes of SV tags in the future articles. Thanks for reading.

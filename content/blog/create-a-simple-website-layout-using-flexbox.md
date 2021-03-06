---
id: 32100
title: Create a simple website layout using FlexBox
date: 2018-08-27T21:16:44+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32100
permalink: /create-a-simple-website-layout-using-flexbox/
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/website-kayout-using-FlexBox.png
categories:
  - CSS
  - CSS3
tags:
  - flexbox
  - website layout
---

In this article we quickly check how we can create a simple website layout using FlexBox. You can read about basics of FlexBox in [this](https://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-1/) and [this](https://www.nikpro.com.au/flexbox-explained-in-a-simple-way-with-examples-part-2/) article.

## The simple website layout using FlexBox

To create the simple website layout using FlexBox we create a simple markup first:

```
<body>
  <header>Header</header>
  <main>
    <article>Article</article>
    <nav>Nav</nav>
    <aside>Aside</aside>
  </main>
  <footer>Footer</footer>
</body>
```

Originally it is the holy grail layout as it is infamous for it. We can use a few solutions to make the desired website layout using FlexBox.

### The CSS for the website layout using FlexBox

Obviously the body should take care of the FlexBox as a container:

```
body {
  display: flex;
  flex-direction: column;
}
```

Because the child elements should stack from top to bottom, the default direction of the Flexbox must be changed to column here.

Therefor with that in place we only need to set the main tag style to make it flexible to hold aside and nav inside it as flex items. Therefor we do this:

```
main {
   flex: 1;
   display: flex;
}
```

However we set the flex-grow(flex) to 1 (`flex: 1` is equivalent to `flex-grow: 1` , `flex-shrink: 1` and `flex-basis: 0)` so that main can take the remaining space as it is. Although we give article flex : 1 as well to make sure it takes all the space available to it.

```
article {
   flex: 1;
}
```

Although we can change the position of the nav in the markup to make it to be the starting left tag but we don&#8217;t do this here.

We will use FlexBox order property instead. remember there are cases we cannot change the markup and best approach is to use CSS. Therefor we will do this  :

```
nav {
  order: -1
}
```

Which forces the nav element to be the first item inside its container. The result should look like this so far:

https://codepen.io/azad6026/pen/mGPqvZ/

## The website layout using FlexBox another way

As another approach to create the same website layout using FlexBox we can change the flex container. We don&#8217;t really need the body to be the container and we can leave off the header and footer from the FLexBox container as they don&#8217;t need it. We can use main as the flex container and just compute its height as in this way it needs to be calculated by us:

```
main {
  height: calc(100vh - 40vh);
}
```

The height of `main` must be equal to `calc(100vh — height of header — height of footer ).`You must give header and footer a height though.

Crating website layout has mede easy having FlexBox in hand. A better approach is to create layouts with CSS Grid layouts and use FlexBox for inner parts like menus. We will have a seperate article on that subject f=soon. Thanks for reading.

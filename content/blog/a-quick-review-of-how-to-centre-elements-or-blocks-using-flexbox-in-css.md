---
id: 32422
title: A quick review of how to centre elements or blocks using FlexBox in CSS
date: 2018-10-18T20:36:05+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32422
permalink: /a-quick-review-of-how-to-centre-elements-or-blocks-using-flexbox-in-css/
xyz_twap:
  - "1"
image: /images/centre-elements.png
categories:
  - CSS
  - CSS3
tags:
  - centre elements
  - flexbox
---

Generally we know lots of ways to centre elements of blocks anything in CSS using [FlexBox](http://www.nikpro.com.au/how-flexbox-and-auto-margin-work-together-with-examples/). In this article we will review centring elements with examples.

## Centre elements horizontally using FlexBox

Whenever we have **multiple columns of blocks in one row** and we need to centre elements horizontally FlexBox is the best option. I use some pens from CSS tricks which you can <a href="https://css-tricks.com/centering-css-complete-guide/" target="_blank" rel="noopener noreferrer">read the full article here as well</a>.

Here is a pen of multiple blocks being centred in x axis:

https://codepen.io/chriscoyier/pen/ebing

And this is the code to make our blocks centred:

```
.flex-center {
  display: flex;
  justify-content: center;
}
```

Using **justify-content: center;** in a FlexBox container we aligned items horizontally centred. Also we did notice that texts on the top has been centred inside their block using **text-align: center;** We use that to make any text centred.

## Centre elements vertically using FlexBox

Vertically centre elements is really easy in FlexBox. Practically we just need a few lines of code:

```
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

Therefor we will have items vertical changing the **flex-direction to column:**

---

https://codepen.io/chriscoyier/pen/FqDyi

## Centre in both directions using FlexBox

Typically this is what we are looking for. Centre everything. And the magic comes true pretty easily using the magic Box. The Flexible one!

```
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Except for justify-content property for horizontal alignment we need to use align-items property to centre things vertically:

https://codepen.io/chriscoyier/pen/msItD

Perfect balance. We can also use grid to centre elements :

```
body {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

According to <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-items" target="_blank" rel="noopener noreferrer">MDN</a> the [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`place-items`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) property sets both the [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) and [`justify-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items) properties. The first value is the `align-items` property value, the second the `justify-items` one.

But this property is a work in progress so if you want to use gris use the seperate properties for now.

Therefor we now have **centred elements in CSS using FlexBox** which is easy and complete. Of course in cases like texts that we can use just **text-align: center;** we should and there is no need to flexBox. We need to analyse the use case and decide accordingly.

Thank you for reading.

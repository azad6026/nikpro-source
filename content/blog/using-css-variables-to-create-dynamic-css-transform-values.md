---
id: 32592
title: Using CSS variables to create dynamic CSS transform values
date: 2018-12-08T21:25:52+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32592
permalink: /using-css-variables-to-create-dynamic-css-transform-values/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/css-transforms-using-variables.png
categories:
  - CSS3
  - JAVASCRIPT
---

One of the things that I hear a lot about is the ability to dynamically change CSS transform values by the power of CSS variables. So this way we can control our transform properties at any time as CSS variables are live in the browser.

## Change CSS transform rotate on hover

We will not go into basics here. You can read more about CSS variables in [this](https://www.nikpro.com.au/what-are-css-variables-and-their-differences-with-css-preprocessors/) and [this](https://www.nikpro.com.au/css-custom-properties-or-variables-with-more-examples/) articles. But we will have a look at some examples. In this first examples with this beautiful sky from&nbsp;<a rel="noreferrer noopener" aria-label="We will not go into basics here. You can read more about CSS variables in this and this articles. But we will have a look at some examples. In this first examples with this beautiful sky from&nbsp;Michael Gehrmann (opens in a new tab)" href="https://codepen.io/g12n/" target="_blank">Michael Gehrmann</a>&nbsp;we will see a live example:

https://codepen.io/g12n/pen/ZLYqyr

#### Defining variables

Basically all variables are defined in the root here. The variables are used to change the SVG attributes on demand:

```

:root {
  --trees-z1: hsl(20, 60%, 20%);
  --trees-z2: hsl(20, 60%, 30%);
  --trees-z3: hsl(20, 60%, 50%);
  --trees-z4: hsl(20, 60%, 60%);
  --rocket-1: #f00;
  --rocket-2: #b00;
  --hills: hsl(20, 60%, 40%);
  --mountains: #f90;
  --snow: #fa0;
  --sky: #f60;
  --sun: #f90;
  --angle: -20deg;
}

```

Except for the **&#8211;angle** they are all used to change the colours and saturation. The &#8211;angle though is the one to be used for the **#sky** angle in the SVG:

```

#sky {
  transform-origin: 250px 450px;
  transform: rotate(var(--angle));
}

```

Inside rotate the angle variable is declared so that we can dynamically change it on demand like hover:

```

svg:hover{
  --trees-z1: #0b3253;
  --trees-z2: #0c3b5b;
  --trees-z3: #1e566b;
  --trees-z4: #bcc7b0;
  --rocket-1: #bfe2cd;
  --rocket-2: #c5efd4;
  --hills: #486a72;
  --mountains: #bdd8ba;
  --snow: #d2e8cf;
  --sky: #a0cdb3;
  --sun: #fff;
  --angle: 20deg;
}

```

Therefore the values are changed on hover as well as **&#8211;angle**. And that makes the beautiful animation like effect one we hover over it.&nbsp;

## Dynamic CSS transform involving Javascript to change variables

Another example is by <a rel="noreferrer noopener" aria-label="Another example is by Dan Wilson (opens in a new tab)" href="https://codepen.io/danwilson/" target="_blank">Dan Wilson</a>&nbsp;which uses inputs to change the variables:

https://codepen.io/danwilson/pen/oBrOGW

Interestingly three properties inside transform have used CSS variables as their values. Also the duration of the transition is declared as a variable to make it more like an animation:

```

/* Defining variables */
:root {
  --tx: 0;
  --ty: 0;
  --scale: 1;
  --deg: 0deg;
 }

```

Therefore Javascript will use these variables to change them based on input value changes. Here is the important CSS code that defines behaviour of each box:

```

.mover {
  /* THIS is the important line */
  transform:
    translate3d(var(--tx), var(--ty), 0)
    scale(var(--scale))
    rotate(var(--deg));
  --hue: 120;
  --duration: 2000ms;
  transition: transform var(--duration) linear;
}

```

As a side note need to note that &#8211;**-duration** has been defined inside the box and no the :root. Not all variables need to be defined in the root as they might only be used inside that element only. Remember CSS variables are **scoped** to where they have been defined.

Finally using Javascript the values are changed dynamically:

```

// Use the input ranges to modify the individual transform properties on the fly, and see that they can be smooth even if you change a different property mid transition. There's no need to remember what the other properties are when you set the new individual value.
// We'll use this to change the CSS Variable values from JS
const style = document.documentElement.style;
/* control elements */
var ranges = {
  translate: document.getElementById('tx'),
  scale: document.getElementById('scale'),
  deg: document.getElementById('deg')
};
//Change the CSS Variable value here
function valueChange(id, value) {
  style.setProperty('--' + id, value);
}
ranges.translate.addEventListener('input', function(e) {
  valueChange(e.currentTarget.id, e.currentTarget.value + 'vw');
});
ranges.scale.addEventListener('input', function(e) {
  valueChange(e.currentTarget.id, e.currentTarget.value);
});
ranges.deg.addEventListener('input', function(e) {
  valueChange(e.currentTarget.id, e.currentTarget.value + 'deg');
});

```

Moreover [the Event listener](https://www.nikpro.com.au/event-handlers-and-event-listeners-in-javascript-part-1/)&nbsp;has been assigned to all properties of the element ( translate, scale, deg) to change the related style property using valueChange function. Very concise and useful.

With CSS variables it is easy and clever to change CSS transform properties based on user activity to create animations and effects. It is live in browser and more maintainable in code.

Thank you for reading.

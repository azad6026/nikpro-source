---
id: 32653
title: Similarities and differences between rem and em CSS units explained with examples
date: 2019-01-15T18:58:52+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32653
permalink: /similarities-and-differences-between-rem-and-em-css-units-explained-with-examples/
xyz_twap:
  - "1"
image: /images/hqdefault.jpg
categories:
  - CSS
tags:
  - em
  - rem
---

One of the most important take over in CSS is [units](http://www.nikpro.com.au/do-you-know-viewport-units-and-how-to-use-them/). Understanding how units and specifically rem and em work make a huge difference on how we write CSS. We will explain similarities and differences of rem and em with examples in this article.

## The all mighty pixel

Once and for all we better learn that all units are based on pixels at the end even if we don&#8217;t implicitly mention it. We define at least the HTML font based on pixels and then everything else will be based in that. So it is best to embrace this.<figure class="wp-block-image">

<img src="http://www.nikpro.com.aupx-sizing.png" alt="" class="wp-image-32657" srcset="http://testgatsby.localpx-sizing.png 500w, http://testgatsby.localpx-sizing-300x119.png 300w" sizes="(max-width: 500px) 100vw, 500px" /> </figure>

## Similarities

Although both em and rem are called relative units but they have a different behaviour in that regard. <figure class="wp-block-image">

<img src="http://www.nikpro.com.auemvsrem-1024x384.jpg" alt="" class="wp-image-32659" srcset="http://testgatsby.localemvsrem-1024x384.jpg 1024w, http://testgatsby.localemvsrem-300x113.jpg 300w, http://testgatsby.localemvsrem-768x288.jpg 768w, http://testgatsby.localemvsrem.jpg 1280w" sizes="(max-width: 1024px) 100vw, 1024px" /> <figcaption>em vs rem</figcaption></figure>

### Em as a container relative unit

Em is relative to its container. It means that it scales up and down calculating relative to its container. Take a look at this example:

```html { font-size: 16px } <br />h1 { font-size: 2em } /* 16px * 2 = 32px */```

We set up our font in HTML tag by 16 pixels. Therefore h1 gets twice of that size by 2em because in this case HTMl is its closest parent container that has set a font on it. In the below code:

```h1 {   font-size: 2em; /* 1em = 16px */   margin-bottom: 1em; /* 1em = 32px */ } <br />p {   font-size: 1em; /* 1em = 16px */   margin-bottom: 1em; /* 1em = 16px */ }```

Although we gave h1 tag a 1em as margin-bottom but that is equal to 32px as it is twice of HTML font-size. But it is equal to 16px for p tag as it is only 1em and HTML tag is the p tag parent as well.<figure class="wp-block-image">

<img src="http://www.nikpro.com.auex-example-1024x576.png" alt="" class="wp-image-32655" srcset="http://testgatsby.localex-example-1024x576.png 1024w, http://testgatsby.localex-example-300x169.png 300w, http://testgatsby.localex-example-768x432.png 768w, http://testgatsby.localex-example-1568x882.png 1568w" sizes="(max-width: 1024px) 100vw, 1024px" /> <figcaption>em example</figcaption></figure>

The great use case for ems is if user soom in and out in the browser user&#8217;s font overrides ems units. This is not the case if we use rems though.

## Rem is the root em

In terms of relativeness the story is the same for rem. But the big difference is rem is relative to the root as its name also suggests. It is the root em. Meaning whatever has been defined for HTML tag ( by default it is 16px), the rem unit is relative to that.

Therefore the above example has a different effect this time:

```h1 {   font-size: 2rem;   margin-bottom: 1rem; /* 1rem = 16px */ } <br />p {   font-size: 1rem;   margin-bottom: 1rem; /* 1rem = 16px */ }```

As the HTML is the root all calculations are based on that. So 1rem is always 16px no matter in which tag. <figure class="wp-block-image is-resized">

<img src="http://www.nikpro.com.aurootem.png" alt="" class="wp-image-32658" width="597" height="413" srcset="http://testgatsby.localrootem.png 400w, http://testgatsby.localrootem-300x208.png 300w" sizes="(max-width: 597px) 100vw, 597px" /> <figcaption>root em</figcaption></figure>

## Pixel and Em and Rem

Pixels are always the same.In browsers they always stay intact. See the below pen:

<p data-height="350" data-theme-id="0" data-slug-hash="bdxWbB" data-default-tab="html,result" data-user="tutsplus" data-pen-title="bdxWbB" class="codepen">
  See the Pen <a href="https://codepen.io/tutsplus/pen/bdxWbB/">bdxWbB</a> by Envato Tuts+ (<a href="https://codepen.io/tutsplus">@tutsplus</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Based on the slider font-size the boxes with em and rem units reflect and become relatively big and small. But the box with the pixel unit stays the same size at all times.

### Rem and scalability

Basically rem seems the practical option to use for a website. If units are based on rem then the site will be easily scalable and maintainable. We just need to change the HTML tag font-size and everything else will scale relatively.<figure class="wp-block-image">

<img src="http://www.nikpro.com.auremunit.jpg" alt="" class="wp-image-32656" srcset="http://testgatsby.localremunit.jpg 850w, http://testgatsby.localremunit-300x71.jpg 300w, http://testgatsby.localremunit-768x181.jpg 768w" sizes="(max-width: 850px) 100vw, 850px" /> <figcaption>Em in common</figcaption></figure>

### Em and relativeness

Besides if we need units to be based on a specific container and scale a section of the site based on that em is the go option. With em we have local control of our units if that is what we need.

No matter what units are used throughout the site or application, we shall understand that they are all based on pixels. Pixels work perfectly in browsers and screens are based on them. We need to decide how do we want to scale the site and how to manipulate elements units.

Thank you for reading.

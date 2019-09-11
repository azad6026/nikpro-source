---
id: 32414
title: Create modern sticky footer using CSS grid and FlexBox and calc() function
date: 2018-10-16T20:18:52+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32414
permalink: /create-modern-sticky-footer-using-css-grid-and-flexbox-and-calc-function/
xyz_twap:
  - "1"
image: ../../static/images/foter-sticky-1568x867.png
categories:
  - CSS
  - CSS3
tags:
  - calc()
  - flexbox
  - grid layout
---
There are couple of ways to create a modern sticky footer. Typically we are used to negative margins and absolute positioning. But we could use [CSS grid](http://www.nikpro.com.au/css-grid-layout-review-with-examples-part-1/) and [FlexBox](http://www.nikpro.com.au/how-flexbox-and-auto-margin-work-together-with-examples/) and [calc()](http://www.nikpro.com.au/the-css-calc-function-explained-with-examples/) function to build them along the way.

## Sticky footer with calc() function

Firstly we create a sticky fixed-height footer using calc() function to calculate the minimum height for the content in the page. Afterwards we reduce the footer&#8217;s height from that. Here is the HTML code for <a href="https://priteshgupta.com/2016/05/sticky-css-footer/" target="_blank" rel="noopener noreferrer">the idea</a>:

```<code>&lt;body>
  &lt;div class="content"> &lt;/div>
  &lt;footer>© 2016&lt;/footer>
&lt;/body></code>```

And the CSS with calc() function:

```.content {
  min-height: calc(100vh - 20px);
}
.footer {
  height: 20px;
}```

Also there is a pen in <a href="https://css-tricks.com/couple-takes-sticky-footer/" target="_blank" rel="noopener noreferrer">CSS tricks </a>that shows how it works:

<p data-height="500" data-theme-id="0" data-slug-hash="jqRXBz" data-default-tab="js,result" data-user="chriscoyier" data-pen-title="Sticky Footer with calc();" class="codepen">
  See the Pen <a href="https://codepen.io/chriscoyier/pen/jqRXBz/">Sticky Footer with calc();</a> by Chris Coyier (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Therefor no overlapping happens and two elements ( div.content and footer) will **stack on top of each other** making it 100% height. But the footer needs a fixed height.

## Sticky footer with FlexBox

We will solve the fixed height problem easily [using FlexBox](http://www.nikpro.com.au/create-a-simple-website-layout-using-flexbox/). We will have a variable height footer in this case. There are two ways for FlexBox option.

```&lt;body>
  &lt;div class="content">
    content
  &lt;/div>
  &lt;footer class="footer">&lt;/footer>
&lt;/body>```

We can use **margin-top: auto** for footer [to push it away as far as needed from the rest of the content](http://www.nikpro.com.au/how-flexbox-and-auto-margin-work-together-with-examples/).

```html, body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
.footer {
  margin-top: auto;
}```

Alternatively give the content a **flex: 1** so that it grows to fill the space:

```.content {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}```

<p data-height="500" data-theme-id="0" data-slug-hash="RRbKrL" data-default-tab="css,result" data-user="chriscoyier" data-pen-title="Sticky Footer with Flexbox" class="codepen">
  See the Pen <a href="https://codepen.io/chriscoyier/pen/RRbKrL/">Sticky Footer with Flexbox</a> by Chris Coyier (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

## Sticky footer with CSS Grid

With CSS grid we can use more modern code to create sticky flexible footer. CSS grid is <a href="https://caniuse.com/#search=grid" target="_blank" rel="noopener noreferrer">88% supported globally</a> and is ready to use for production. Here is the CSS code using grid:

```html {
  height: 100%;
}
body {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
.footer {
  grid-row-start: 1;
  grid-row-end: 2;
}```

Using **grid-row-start** we specify where the footer starts as we have a two row layout. And with **grid-row-end** we specify the ending of footer. Also using  **grid-template-rows: 1fr auto;** we make a flexible height grid layout.

<p data-height="500" data-theme-id="0" data-slug-hash="YWKNrE" data-default-tab="js,result" data-user="chriscoyier" data-pen-title="Sticky Footer with Grid" class="codepen">
  See the Pen <a href="https://codepen.io/chriscoyier/pen/YWKNrE/">Sticky Footer with Grid</a> by Chris Coyier (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

We can also <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Sticky_footers" target="_blank" rel="noopener noreferrer">simply remove footer</a> code and only set **grid-template-rows:**

```grid-template-rows: auto 1fr auto;```

As we mentioned at the beginning there are other ways like **absolute positioning footer** on the bottom or giving it **negative top margins** or give content **negative bottom margin equal to footer height.** Although they are still valid solutions but we need to write more code with fixed footer heights and less maintainable. Set aside they are not modern approaches. Lets get modernised.

Thank you for reading.
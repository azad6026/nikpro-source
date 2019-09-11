---
id: 32163
title: CSS custom properties or variables with more examples
date: 2018-09-08T21:12:43+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32163
permalink: /css-custom-properties-or-variables-with-more-examples/
image: ../../static/images/css-custo-properties.jpg
categories:
  - CSS
  - CSS3
  - Uncategorised
tags:
  - CSS custom properties
---
We explain CSS custom properties or variables with more examples in this article. We had another article [here](http://www.nikpro.com.au/how-to-update-css-variables-using-javascript-with-examples/) with an example from Wes Bos. In this article we use some [more examples](http://www.nikpro.com.au/another-look-at-css-variables-features-with-some-examples/) around this topic.

## Theming a site with CSS custom properties

This example is from <a href="https://css-tricks.com/css-custom-properties-theming/" target="_blank" rel="noopener noreferrer">Chris Coyier</a> and we will check how we can change the colour of the site as the theme colour via Javascript using CSS custom properties:

<p data-height="265" data-theme-id="0" data-slug-hash="ybgNKP" data-default-tab="css,result" data-user="chriscoyier" data-pen-title="Theming a site with CSS Custom Properties" class="codepen">
  See the Pen <a href="https://codepen.io/chriscoyier/pen/ybgNKP/">Theming a site with CSS Custom Properties</a> by Chris Coyier (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Practically we could use CSS variables anywhere we like. One of the good options is where we let the user to change the site&#8217;s theme for example. In the example above we have a main colour which we potentially want to use around the site. Generally in the title and subtitle and the footer background:

```<code>:root {&lt;br/>  --mainColor: #f06d06;&lt;br/>}</code>```

Therefor we have an input to make the changes:

```&lt;input type="color" />```

Thankfully we are able to change the colours via Javascript just like we do with styling but this time we dynamically change the colour using CSS custom properties:

<pre class="wp-block-preformatted"><br /></pre>

Moreover as you see here we could store the colour in a local storage or a database for later usage. This is a great simple example on how to use CSS custom properties for theming your application or site.

## Using CSS custom properties for animation

As a good example for animation I am referring to this one from <a href="https://www.sitepoint.com/practical-guide-css-variables-custom-properties/" target="_blank" rel="noreferrer noopener">sitepoint</a>. Here we have SVG to create the fish:

<p data-height="400" data-theme-id="0" data-slug-hash="zzBrNV" data-default-tab="html,result" data-user="SitePoint" data-pen-title="Simple Animation with CSS Variables and SVG" class="codepen">
  See the Pen <a href="https://codepen.io/SitePoint/pen/zzBrNV/">Simple Animation with CSS Variables and SVG</a> by SitePoint (<a href="https://codepen.io/SitePoint">@SitePoint</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

As an explanation to animate an `<ellipse>` element with the class of `.bubble` inside an SVG graphic we would do this:

```<code>.bubble {
--direction-y: 30px;
--transparency: 0;
animation: bubbling 3s forwards infinite;
}

@keyframes bubbling {
0% {
transform: translatey(var(--direction-y));
opacity: var(--transparency);
}
40% {
opacity: calc(var(--transparency) + 0.2);
}
70% {
opacity: calc(var(--transparency) + 0.1);
}
100% {
opacity: var(--transparency);
}
}</code>```

So we define the CSS custom properties in the target element and then we refer to them in the keyframe like above. We also use the calc() function to add more flexibility to the property change at some points.

Also this is the code for the small fishes moving around. Each one with different delays:

```<code>.small-fish {&lt;br/>  --dir-left: -800px;&lt;br/>  --dir-right: 800px;&lt;br/>  --transparency: 0;&lt;br/>}&lt;br/>  0% {&lt;br/>    transform: translatex(var(--dir-right));&lt;br/>  }&lt;br/>  50% {&lt;br/>    opacity: calc(var(--transparency) + 0.3);&lt;br/>  }&lt;br/>  100% {&lt;br/>    transform: translatex(var(--dir-left));&lt;br/>    opacity: var(--transparency);&lt;br/>  }&lt;br/>}</code>```

The neat thing about using CSS variables in this case is that you can tweak your animations simply by modifying the variables’ values inside the appropriate selectors. No need to look for each of the properties inside all the `@keyframes` directives.

In this article we had a look at two great examples of having CSS custom properties too be used as theming and in animations. You can read more on <a href="https://css-tricks.com/css-custom-properties-theming/" target="_blank" rel="noreferrer noopener">this awesome article</a> and <a href="https://www.sitepoint.com/practical-guide-css-variables-custom-properties/" target="_blank" rel="noreferrer noopener">this</a> one as mentioned. Thanks for reading.
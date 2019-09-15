---
id: 32716
title: "Create a dropdown menu using details tag with no Javascript"
date: 2019-03-24T13:33:17+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32716
permalink: /create-a-dropdown-menu-using-details-tag-with-no-javascript/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/nice-details.jpg
categories:
  - HTML5
tags:
  - details tag
  - summary tag
---

Did you know we could create a dropdown menu using only [HTML5 tag](http://www.nikpro.com.au/html5-best-practices-and-what-to-avoid/) called details? If you don&#8217;t then read on as it is getting more attention and there is no Javascript involved. But what is details tag and how it works.

## Details tag as a descriptive element

According to <a rel="noreferrer noopener" aria-label="MDN (opens in a new tab)" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details" target="_blank">MDN</a> :

> The&nbsp;HTML Details Element (<details>)&nbsp;creates a disclosure widget in which information is visible only when the widget is toggled into an &#8220;open&#8221; state.&nbsp;A summary or label can be provided using the&nbsp;<a rel="noreferrer noopener" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary"><summary></a>&nbsp;element.

This is a simple semantic of how it looks like:


```

<details><br /> &nbsp; &nbsp; <summary>System Requirements</summary><br /> &nbsp; &nbsp; Something small enough to escape casual notice.<br /> </details> 

```


Basically the details tag always comes with summary tag as a label. If you remove summary, the &#8220;Details&#8221; text will be shown instead. Also we will see a triangle as a symbol of a disclosure widget which can be open and close.

Therefore they can be very useful creating dropdown menus inside the navigation bar. This is a pen I created to demonstrate it a bit more:

https://codepen.io/azad6026/pen/drayzp

We could click on any of the triangles and it opens up the sub menu. Each of the menu links are wrapped by a details tag. The summary holds the label of the tag which could be a link itself.

In the above example contact tab is not a link itself but it has a dropdown menu with a link inside.

The services tab has a dropdown called about us and that as well has a dropdown with links. We see how flexible it could be and will solve problems we used to have with non clickable menu links or having menu labels also clickable as well.

## Summary tag

In addition to details tag we need to know about summary tag. We specify the label of the details tag inside summary tag. In other words, summary tag defines what the details tag about. By the way details tag is an element to give us more information about something that is not visible by default and could be shown on demand.

Therefore we could actually use details and summary tag to create powerful and semantic accordions. Without writing extra Javascript codes we are able to create menus and accordions when needed.

Thank you for reading.

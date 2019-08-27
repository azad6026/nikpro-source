---
id: 32763
title: Collapsible margin, definition explained with some examples
date: 2019-07-07T21:16:44+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32763
permalink: /create-a-simple-website-layout-using-flexbox/
image: /wp-content/uploads/2019/07/margin-in-element-1140x622.png
categories:
  - CSS
tags:
  - margins
---

You might have faced[ Collapsible margins ](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)as they are a common yet misleading pattern. We will share some ideas and examples in this article to understand it better.

### What is Collapsible margin

Firstly Collapsible margin only apply to [block level elements](http://www.nikpro.com.au/html5-semantic-tags-and-where-to-use-them/). Secondly it is about top and bottom margins of two block level elements sitting on top of each other.

Collapsible margin happens when the top element have a margin-bottom value and the bottom element have a top-margin value. Definitively the space between them will be the biggest margin between these two values.

Therefore the smaller margin kind of gets eaten by the bigger one. This is the rule for both positive and negative margins.

### Simple example of two siblings

Basically here is a simple example:

&lt;h1&gt;This has a margin-bottom&lt;/h1&gt;
&lt;p&gt; This has a margin-top&lt;/p&gt;

We define the margins in CSS as below:

h1 {  
 margin-bottom: 25px;
}
p {  
 margin-top: 50px
}

The expectation is to have 75px of margin between the two but we will have 50px as the actual distance. Therefore the biggest margin has won. Hooray!

But wait. This is confusing in cases. Yes that is right. Especially in typography. So [some articles ](https://csswizardry.com/2012/06/single-direction-margin-declarations/)recommend to have only one direction margin for everything and make the other one zero. Well, good idea and you can override that whenever needed.

### Example with a parent and child situation

We might expect the same rule in the case of parent child. But it is different here. The child’s margin will be overriden by parent. So the parent is the dominent in this case.

But if we add some padding or border to the parent, this rule will go away as well. [See the pen below from CSS tricks](https://css-tricks.com/what-you-should-know-about-collapsing-margins/):

The top parent has no padding, so it will all collapse and we will only see the purple colour child.

However, the bottom parent has some padding , therefore we can see the margin is applied to the bottom and the top. There is 1px of padding for each child just to see the colours. It does have no effect on the matter though.

Collapsible margins are an interesting and misleading topic and understanding them really helps to design better layouts and write less and more effective codes in general.

Thank you for reading.

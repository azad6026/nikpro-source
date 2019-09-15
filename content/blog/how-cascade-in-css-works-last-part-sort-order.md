---
id: 32286
title: 'How cascade in CSS works? last part: sort order'
date: 2018-09-25T21:44:43+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32286
permalink: /how-cascade-in-css-works-last-part-sort-order/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/cascade-ss.jpg
categories:
  - CSS
tags:
  - cascade
  - sort order
  - specificity
---
In the last part of this series following [first](http://www.nikpro.com.au/how-cascade-in-css-works-this-part-important/) and [second](http://www.nikpro.com.au/how-cascade-in-css-works-this-partspecificity/) part we will explain sort order in CSS. Technically this is the third important point that affects cascade in CSS.

## Sort order in cascade

Basically sort order is the definition of in what sequence CSS stylesheets are being applied to the web document. 

According to cascade in CSS if **all the rules** from different CSS stylesheets have the **same !importance and specificity** then sort order decides which style should be applied. **And styles declared later win.**

### Different origins of CSS

Upon MDN definition we have different origins for CSS declarations : the **[User-agent stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#User-agent_stylesheets)**, the **[Author stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#Author_stylesheets)**, and the **[User stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#User_stylesheets)**.

  * User-agent stylesheet is the browser styles
  * Author stylesheets is the web document design styles
  * User stylesheets are the reader/use of the web styles

Generally **based on the above order** I mentioned them they overwrite the styles. Meaning in case of same rules in specificity the user style wins over author style. also the author style overwrites user-agent styles.

#### Example with same specificity

Technically we will have cases like this which we normally do not recognise as we are busy writing styles. But in reality these styles exist:


```
User-agent CSS:<br />li { padding: 10px }<br />Author CSS 1:<br />li { padding: 0 } /* This is like a reset */<br />Author CSS 2:<br />@media screen {
  li { padding: 3px }
}

@media print {
  li { padding: 1px }
}<br />User CSS:<br />.specific { padding: 1em }<br /><br />HTML:<br /><ul>
  <li class="specific">1<sup>st</sup></li>
  <li>2<sup>nd</sup></li>
</ul>
```


Firstly based on specificity [rules](http://www.nikpro.com.au/how-cascade-in-css-works-this-partspecificity/)  declarations inside `li` and `.specific` rules should apply. No declaration is marked as `!important`, so the precedence order is author style sheets before user style sheets or user-agent stylesheet.

Therefor we have these three styles to win:


```
margin-left: 0<br/><br />margin-left: 3px<br/><br />margin-left: 1px
```


As we have the second style specifying the media on screen the last style is ignored on screens. As a result the second style beats the first style as well because although they have the same specificity but based on sort order the later rule wins.<figure class="wp-block-image">

<img src="http://www.nikpro.com.aucascade-it.jpg" alt="cascade rules" class="wp-image-32289" srcset="http://testgatsby.localcascade-it.jpg 1480w, http://testgatsby.localcascade-it-300x185.jpg 300w, http://testgatsby.localcascade-it-768x473.jpg 768w, http://testgatsby.localcascade-it-1024x631.jpg 1024w" sizes="(max-width: 1480px) 100vw, 1480px" /> </figure> 

### All rules apply

Practically in CSS once all the style for one element in different stylesheets will apply to that property. Then based on importance and specificity and sort order the winner style remains for the element or actually will apply:


```
<p>I'm bold</p><br/><br />/* higher specificity */
p strong {
  background-color: khaki;
  color: green;
}

/* lower specificity */
strong {
  text-decoration: underline;
  color: red;
}
```


Although the first rule has a higher specificity but the strong tag will have an underline as well which comes from the second rule. Also it will be bold as the user-agents have a default bold style for strong tag. See the pen <a href="https://codepen.io/pen/" target="_blank" rel="noopener noreferrer">here</a>. 

### Inheritance in CSS

Inheritance in CSS is essential to decide what kind of style an element will get based on it.

We know that it makes sense for [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) and [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) to be inherited, as that makes it easy for us to set a site-wide base.

Also it makes sense for [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin), [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding), [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border), and [`background-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) to NOT be inherited. As it is not possible to change them in all elements in the stylesheet.

There are four values for specifying inheritance on the supported properties:

  * **inherit:** value same as its parent element.
  * **initial:** value same as the value in the browser&#8217;s default style sheet
  * **unset:** if the property is naturally inherited it acts like `inherit`, otherwise it acts like `initial`.
  * **revert:** value is set to the user stylesheet&#8217;s value for the property (if one is set), otherwise, the property&#8217;s value is same as user agent&#8217;s default stylesheet.

#### Inheritance example


```
<ul>
  <li>Default <a href="#">link</a> color</li>
  <li class="my-class-1">Inherit the <a href="#">link</a> color</li>
  <li class="my-class-2">Reset the <a href="#">link</a> color</li>
  <li class="my-class-3">Unset the <a href="#">link</a> color</li>
</ul><br/><br/>// And the CSS<br/><br />body {
  color: green;
}

.my-class-1 a {
  color: inherit;
}

.my-class-2 a {
  color: initial;
}

.my-class-3 a {
  color: unset;
}
```


According to styles the first link will have natural inheritance which should be green but browsers set the colour of links to blue by default instead of allowing the natural inheritance of the color property the browser link colour which is naturally blue. 

Also the second link inherits the colour based on the style so it will be green as like its parent (body tag).

Thirdly the third element have the initial value which comes from the browser and browser&#8217;s initial colour for links are black.

Finally the last one has an inset value for its color property which makes it act like inherit as the color property in naturally an inherited property. Check out the pen <a href="https://codepen.io/pen/" target="_blank" rel="noopener noreferrer">here</a>.

In this article we investigated around the last important section in CSS cascade which is sort order. Also we learnt how to consider all notable points to decide which rules should apply to an element in the CSS.

Thank you for reading.
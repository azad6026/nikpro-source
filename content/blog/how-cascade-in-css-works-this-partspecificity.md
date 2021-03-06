---
id: 32263
title: How cascade in CSS works? this part:specificity
date: 2018-09-22T21:54:08+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32263
permalink: /how-cascade-in-css-works-this-part-specificity/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/cascade.jpeg
categories:
  - CSS
  - CSS3
tags:
  - Cascade in css
  - specificity
---
Following the previous article in part 1 about [!important](https://www.nikpro.com.au/how-cascade-in-css-works-this-part-important/) in cascade we explain how specificity affect the cascade meaning. We will use some examples to elaborate this very essential topic.

## Specificity in words

Basically by specificity we mean how browsers decide to apply the most relevant CSS in the stylesheet files to an element. Therefor it depends on the matching rules which are composed by different CSS selectors.

## Specificity list order

Technically we can calculate the order of applying specificity like below from highest to lowest order:

  * !important (although it is not part of specificity but it breaks the rules in CSS and has the highest order in CSS cascade anyway)
  * ID selectors (e.g., `#example`).
  * Class selectors (e.g., `.example`), attributes selectors (e.g., `[type="radio"]`) 
  * Type selectors (e.g., `h1`) and pseudo-elements (e.g., `::before`)

Inline styles added to an element (e.g., `style="font-weight:bold"`) always overwrite any styles in external stylesheets, and thus can be thought of as having the highest specificity.


<img src="https://www.nikpro.com.auspecificity1.png" alt="specificity rules" class="wp-image-32265" srcset="https://testgatsby.localspecificity1.png 712w, https://testgatsby.localspecificity1-300x126.png 300w" sizes="(max-width: 712px) 100vw, 712px" /> 
 

### Never use !important as much as possible

As a rule don&#8217;t use !important unless you have no other choice. It breaks the CSS and is hard to maintain. Instead make more specific rules by mixing different cases:


```
<div id="test">
  <span>Text</span>
</div><br/>
div#test span { color: green; }
div span { color: blue; }
span { color: red; }
```


Practically the very first rule here wins. Because it is more specific. It hasa general selector targeting with an ID as the parent of the span element. Although it is first in the order but it wins. Also the second order wins over the last one as it is more specific. Order comes last.

#### How to override !important

As mentioned in the [previous](https://www.nikpro.com.au/how-cascade-in-css-works-this-part-important/) post and acording to MDN simply add another CSS rule with `!important`, and either give the selector a higher specificity (adding a tag, id or class to the selector), or add a CSS rule with the same selector at a later point than the existing one:


```
table tr td   { width: 50px !important; }
.myTable tr td { width: 50px !important; }
#myTable tr td { width: 50px !important; }

// Or add the same selector later on
tr td { width: 50px !important; }

```


### Direct target wins over inheritance

We need to know that directly target an element is more specific over inheritance in the code:


```
<div>
  <article id="parent">
    <h1>Here is a title!</h1>
  </article>
</div><br/><br/>#parent {
  color: green;
}
h1 {
  color: purple;
}
```


The title colour will be purple and will not be inherited from its parent element.

Moreover in the same HTML if we write the below CSS:


```
article h1 {
  color: green;
}
div h1 {
  color: blue;
}
```


Although article looks closer to h1 as a direct parent but because the second rule is the last one in order it wins.

<div class="wp-block-image">
  <figure class="aligncenter"><img src="https://www.nikpro.com.auineritance.jpg" alt="inheritance" class="wp-image-32268" srcset="https://testgatsby.localineritance.jpg 1920w, https://testgatsby.localineritance-300x169.jpg 300w, https://testgatsby.localineritance-768x432.jpg 768w, https://testgatsby.localineritance-1024x576.jpg 1024w, https://testgatsby.localineritance-1568x882.jpg 1568w" sizes="(max-width: 1920px) 100vw, 1920px" /><figcaption>Cascade</figcaption>

</div>

In addition the negation pseudo-class `:not` is _not_ considered a pseudo-class in the specificity calculation. But selectors placed into the negation pseudo-class count as normal selectors when determining the count of [selector types](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#Selector_Types).

Also specificity is based on the **form** of a selector. Therefor the selector `*[id="foo"]` counts as an **attribute** selector even though it selects an ID.

We covered the most important rules of specificity here although there are minor things as well. But understanding how it works and where to use which selector is essential to write a better and more efficient CSS.
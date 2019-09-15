---
id: 32503
title: Difference between overflow-wrap and word-break with examples
date: 2018-11-02T21:33:26+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32503
permalink: /difference-between-overflow-wrap-and-word-break-with-examples/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/overflow-wrap.png
categories:
  - CSS
tags:
  - overflow-wrap
  - word-break
---
Generally we could use overflow-wrap and word-break properties to break he words where needed. We will demonstrate the difference here and explain the different use cases.

<!-- /wp:core-embed/wordpress -->

<!-- wp:heading -->

## Overflow-wrap property

<!-- /wp:heading -->

<!-- wp:paragraph -->

Basically we have two values for this property:

<!-- /wp:paragraph -->

<!-- wp:preformatted -->

```
/* Keyword values */ overflow-wrap: normal; overflow-wrap: break-word;
```


<!-- /wp:preformatted -->

<!-- wp:paragraph -->

Using **normal** the word might only breaks if it needed to when having a space between two word for example.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

However with **break-word **as per MDN , to prevent overflow, normally unbreakable words may be broken at arbitrary points if there are no otherwise acceptable break points in the line. Have a look at this pen <a href="https://css-tricks.com/almanac/properties/o/overflow-wrap/" target="_blank" rel="noreferrer noopener">from CSS-tricks</a>:

<!-- /wp:paragraph -->

<!-- wp:html -->

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="ZLBvav" data-default-tab="css,result" data-user="impressivewebs" data-pen-title="overflow-wrap/word-wrap demo">
  See the Pen <a href="https://codepen.io/impressivewebs/pen/ZLBvav/">overflow-wrap/word-wrap demo</a> by Louis Lazaris (<a href="https://codepen.io/impressivewebs">@impressivewebs</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



<!-- /wp:html -->

<!-- wp:paragraph -->

Once we toggle the button we clearly see that the break-word will be broken so that it can fit in the container and broken down to multiple lines.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Practically it can help the web pages from breaking down because of a long url or strings. A string of non-breaking space characters (` `) would be treated the same way and would also break at an appropriate spot.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Word-break property

<!-- /wp:heading -->

<!-- wp:paragraph -->

Actually word-break does similar thing to overflow-wrap. But we most commonly use it for non-English and mostly East Asian languages.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Based on CSS specification it specifies soft wrap opportunities between letters commonly associated with languages like Chinese, Japanese, and Korean (CJK).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Therefore `word-break` is great for  **non-English content** that requires specific word-breaking rules, while `overflow-wrap` should be used to avoid **broken layouts** due to long strings, regardless of the language used.

<!-- /wp:paragraph -->

<!-- wp:preformatted -->

```
/* Keyword values */ word-break: normal;  word-break: break-all;  word-break: keep-all; word-break: break-word;
```


<!-- /wp:preformatted -->

<!-- wp:paragraph -->

According to MDN In contrast to `word-break: break-word`** and **`overflow-wrap: break-word`** **, `word-break: break-all`** **will create a break at the exact place where text would otherwise overflow its container

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Here is a pen to demonstrate this:

<!-- /wp:paragraph -->

<!-- wp:html -->

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="avavBY" data-default-tab="html,result" data-user="css-tricks" data-pen-title="Fixing links with word-break">
  See the Pen <a href="https://codepen.io/team/css-tricks/pen/avavBY/">Fixing links with word-break</a> by CSS-Tricks (<a href="https://codepen.io/css-tricks">@css-tricks</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



<!-- /wp:html -->

<!-- wp:paragraph -->

As a result to make the word break at certain points. Also we will not have problems with non-English languages we better use overflow-wrap. Word-break will come as an alternative.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Thank you for reading.

<!-- /wp:paragraph -->
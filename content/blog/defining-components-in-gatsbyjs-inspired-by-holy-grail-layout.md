---
description: Building websites <a rel="noreferrer noopener" aria-label="with Gatsbyjs (opens in a new tab)" href="https://gastbyjs.org" target="_blank">with Gatsbyjs</a> started as such an interesting and inspiring experience for me. As a matter of fact what I found exciting is how holy grail layout has made me [understand components](http://www.nikpro.com.au/nested-components-in-react-how-to-render-a-child-component-inside-a-parent-componentpart-2/). Surprisingly in a better and deeper way in React land here in Gatsby.
id: 32754
title: Defining components in Gatsbyjs inspired by holy grail layout
date: 2019-05-19T15:17:12+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32754
permalink: /defining-components-in-gatsbyjs-inspired-by-holy-grail-layout/
xyz_twap:
  - "1"
image: /wp-content/uploads/2019/05/building-blocks.jpg
categories:
  - HTML
  - React
tags:
  - components
  - react components
---

Building websites <a rel="noreferrer noopener" aria-label="with Gatsbyjs (opens in a new tab)" href="https://gastbyjs.org" target="_blank">with Gatsbyjs</a> started as such an interesting and inspiring experience for me. As a matter of fact what I found exciting is how holy grail layout has made me [understand components](http://www.nikpro.com.au/nested-components-in-react-how-to-render-a-child-component-inside-a-parent-componentpart-2/). Surprisingly in a better and deeper way in React land here in Gatsby. Here is a summary.

## Holy grail components

No matter what you use to build a site, you will need a structure. And the most simple and yet important one is the [holy grail layout](http://www.nikpro.com.au/create-a-simple-website-layout-using-flexbox/):<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2019/05/holy-grail-layout.png" alt="" class="wp-image-32755" srcset="http://testgatsby.local/wp-content/uploads/2019/05/holy-grail-layout.png 600w, http://testgatsby.local/wp-content/uploads/2019/05/holy-grail-layout-300x207.png 300w" sizes="(max-width: 600px) 100vw, 600px" /> <figcaption>Simple Holy Grial Layout</figcaption></figure>

Basically in the first glance we see our major components here:

<pre class="wp-block-preformatted"><strong>&lt;Layout>  
    &lt;Header/>
    &lt;Content>
      &lt;Nav/>
      &lt;Main/>
      &lt;Sidebar/>
    &lt;/Content>
    &lt;Footer/>
&lt;/Layout></strong></pre>

As a result we named them capitalised just as [components in react](http://www.nikpro.com.au/more-on-react-components-with-examples/) to better understand the application. Layout is the main component of the application and Content includes the main content of the site. Including Navigation, Sidebar and Main.

Generally these are the building blocks of any web application. And understanding this basic concept is the key for more complex structures. Lets talk about each main component in depth.<figure class="wp-block-image is-resized">

<img src="http://www.nikpro.com.au/wp-content/uploads/2019/05/components.jpeg" alt="" class="wp-image-32756" width="589" height="310" srcset="http://testgatsby.local/wp-content/uploads/2019/05/components.jpeg 310w, http://testgatsby.local/wp-content/uploads/2019/05/components-300x158.jpeg 300w" sizes="(max-width: 589px) 100vw, 589px" /> <figcaption>Components</figcaption></figure>

### Header

Preferably we will move navigation inside header as it is more suited there for most use cases. Most likely we will have a logo or brand on top of the application as well. As a result we will have a complete Header component like this:

<pre class="wp-block-preformatted"><strong>&lt;Header/>
    &lt;Brand>
    &lt;Nav/>
&lt;Header/></strong></pre>

### Main Content, main component tree

Speaking of the main component always mean the man content. It could be built of a massive component tree that is hard to maintain. But a good structure never fails even if it looks complex. Our main component here is the Content component:

<pre class="wp-block-preformatted"><strong>   &lt;Content>
      &lt;Main/>
      &lt;Sidebar/>
    &lt;/Content></strong></pre>

Surely we could break it down to inner components as we build the structure. Usually the **Main component** is the main article or story in the website. Alternatively it could be the loop of your blog posts. Either way it is content and needs a structure of content:

<pre class="wp-block-preformatted"><strong>   &lt;Main>
      &lt;Image/>
      &lt;Title/>
      &lt;Text/>
   &lt;/Main></strong></pre>

Absolutely no surprise that everything including image is a component. This is how Gatsby structures the applications and it is how it should be. Links are also components in gatsby. We could extend our content further:

<pre class="wp-block-preformatted"><strong>   &lt;Main>
      &lt;Image/>
      &lt;Title/>
      &lt;Article>
      &lt;SubTitle/>
        &lt;Paragraph>
          &lt;Link/>
        &lt;Paragraph/>
        &lt;Image/>
        &lt;Paragraph/>
     &lt;/Article>
   &lt;/Main></strong></pre><figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2019/05/main-blocks.png" alt="" class="wp-image-32757" srcset="http://testgatsby.local/wp-content/uploads/2019/05/main-blocks.png 512w, http://testgatsby.local/wp-content/uploads/2019/05/main-blocks-150x150.png 150w, http://testgatsby.local/wp-content/uploads/2019/05/main-blocks-300x300.png 300w" sizes="(max-width: 512px) 100vw, 512px" /> <figcaption>Component blocks</figcaption></figure>

Therefore it goes on and on. But we know it is maintainable and easy to understand. And here is a simplified Image component in React:

<pre class="wp-block-preformatted"><strong>// Part of an Image component
const Image = props => (
  &lt;img src={props.src} alt={props.alt}/>
)</strong></pre>

Practically we use it like below. Simple but powerful:

<pre class="wp-block-preformatted"><strong>&lt;Image src="http://link.com" alt ="some text"/></strong></pre>

And this is applicable for all other components as building blocks of the application.

## Everything is a component

Truely every block of content or every piece of the structure is a component. Holy grail layout is the best presenter of a highly structured layout in its own scale.

What I learnt is if we make our layouts based on right concept and structure the blocks wisely, then we will end up in a readable, sustainable and elegant application. Therefore we can build it on any tech that we are interested in as it really doesn&#8217;t matter.

The most important take on is that HTML is the core of application no matter what technology we use to build our sites and application. We need to make the components right. And components are built of HTML elements and markup.The starting point to build great applications.

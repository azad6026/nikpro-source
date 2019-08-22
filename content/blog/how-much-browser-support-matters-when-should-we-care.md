---
id: 32456
title: How much browser support matters? When should we care?
date: 2018-10-24T21:18:00+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32456
permalink: /how-much-browser-support-matters-when-should-we-care/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/10/frowny-guy-in-front-of-browsers.png
categories:
  - CSS
  - CSS3
  - CSS4
---
Probably we do care about browser support more than we could think of sometimes. In all applications and websites that we build it is an essential factor without a doubt.

In my opinion there are seperate sections that we should care about browser support: **Development** and **Production.**<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/10/browsers-in-one-shot.jpg" alt="browsers in one shot" class="wp-image-32459" srcset="http://testgatsby.local/wp-content/uploads/2018/10/browsers-in-one-shot.jpg 2000w, http://testgatsby.local/wp-content/uploads/2018/10/browsers-in-one-shot-300x116.jpg 300w, http://testgatsby.local/wp-content/uploads/2018/10/browsers-in-one-shot-768x297.jpg 768w, http://testgatsby.local/wp-content/uploads/2018/10/browsers-in-one-shot-1024x396.jpg 1024w, http://testgatsby.local/wp-content/uploads/2018/10/browsers-in-one-shot-1568x607.jpg 1568w" sizes="(max-width: 2000px) 100vw, 2000px" /> </figure> 

## Development phase

Surely there are projects that we work on as a demo or just in case of creating a portfolio or to simple tests. They never go to production and deployment.

Therefor this is a perfect place to try every new skills that we want to check out. For example the most important ones are [grid system](http://www.nikpro.com.au/css-grid-layout-review-with-examples-part-1/) and [CSS variables or custom properties](http://www.nikpro.com.au/css-custom-properties-or-variables-with-more-examples/). Also [focus-within property](http://www.nikpro.com.au/the-css4-focus-within-selector-is-explained-with-examples/) or new HTML elements like [dialog](http://www.nikpro.com.au/how-to-create-pop-ups-or-a-modal-using-the-new-html-dialog-element/). Browser support will not affect your application in this case.

Trying new things will not harm in any way and it will help to see how we possibly could build an application if we could use everything available in our palate. So the answer here is try everything and don&#8217;t worry about browser support at all.

## Production phase<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/10/production-phase.jpg" alt="" class="wp-image-32460" srcset="http://testgatsby.local/wp-content/uploads/2018/10/production-phase.jpg 1024w, http://testgatsby.local/wp-content/uploads/2018/10/production-phase-300x150.jpg 300w, http://testgatsby.local/wp-content/uploads/2018/10/production-phase-768x384.jpg 768w" sizes="(max-width: 1024px) 100vw, 1024px" /> </figure> 

But what about production? My answer is it depends. There are variety of parameters you need to check and examine while building something for production. First and foremost are the target users.

### Target users

All we do is about user experiences. Definitely we want then to have a great experience while using our app or browsing our website. 

### How much browser support needed?

Therefor we might think we need to only use well supported techniques and properties and elements. But I do not agree with that.<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/10/all-browsers.jpg" alt="" class="wp-image-32458" srcset="http://testgatsby.local/wp-content/uploads/2018/10/all-browsers.jpg 600w, http://testgatsby.local/wp-content/uploads/2018/10/all-browsers-300x158.jpg 300w" sizes="(max-width: 600px) 100vw, 600px" /> </figure> 

Having a good browser support is enough to make something ready to be used in production. Meaning there is no need for 100% support for everything which is not possible. In that case we are forced to stop coding forever.

I do believe that a good browser support means **you should cover your target users first.** Of course if you have to support IE9 because the organisation you are building the app for are using it then you should care about IE9.&nbsp;

But if you need to have a good support then you need to well support major browsers in desktop and phone. How well? It depends on the type of your application and those properties or elements you need there.

#### Grid and FlexBox

As an example using FlexBox is a must these days. Bu it wasn&#8217;t a few years back as it wasn&#8217;t well supported. But now here is the support around 92% globally:<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/10/flexboxsupport.png" alt="" class="wp-image-32461" srcset="http://testgatsby.local/wp-content/uploads/2018/10/flexboxsupport.png 1272w, http://testgatsby.local/wp-content/uploads/2018/10/flexboxsupport-300x144.png 300w, http://testgatsby.local/wp-content/uploads/2018/10/flexboxsupport-768x370.png 768w, http://testgatsby.local/wp-content/uploads/2018/10/flexboxsupport-1024x493.png 1024w" sizes="(max-width: 1272px) 100vw, 1272px" /> <figcaption>FlexBox in caniuse.com</figcaption></figure> 

But grid system does not have the same support. It has around 84% global support:<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/10/grid-support.png" alt="" class="wp-image-32462" srcset="http://testgatsby.local/wp-content/uploads/2018/10/grid-support.png 1254w, http://testgatsby.local/wp-content/uploads/2018/10/grid-support-300x143.png 300w, http://testgatsby.local/wp-content/uploads/2018/10/grid-support-768x366.png 768w, http://testgatsby.local/wp-content/uploads/2018/10/grid-support-1024x488.png 1024w" sizes="(max-width: 1254px) 100vw, 1254px" /> <figcaption>grid in caniuse.com</figcaption></figure> 

Does this mean we should not use it in production and&nbsp; wait for 100% support?**Absolutely not**. Because **it has a good support in all major browsers and that is well enough.** And using it more and more will force other minor browsers to catch up supporting it. **This is how a new technology evolves and grows. The more we use them the better they will be used and developed.**

Therefor even in production we need to take some further steps and try out things that we have always wanted maybe with some backups. 

For example while defining CSS variables we can define a duplicate at the same line just in case if the browser didn&#8217;t support it. But we should use CSS custom properties as they add huge benefits to out code.And the browsers will thank us for that at the end.

Thank you for reading.
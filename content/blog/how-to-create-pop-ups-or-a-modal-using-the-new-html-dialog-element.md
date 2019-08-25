---
id: 32408
title: 'How to create pop ups or a modal using the new HTML  dialog element'
date: 2018-10-15T20:28:47+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32408
permalink: /how-to-create-pop-ups-or-a-modal-using-the-new-html-dialog-element/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/10/dialog-element.png
categories:
  - HTML
  - HTML5
tags:
  - dialog box
  - modal
  - popup
---
Finally we can use a new HTML tag called dialog element to create pop ups and modals in our design. The browser support is <a href="https://caniuse.com/#search=dialog" target="_blank" rel="noopener noreferrer">around</a> 70% which is not too bad.It will increase quickly as it is a new element in 2018.

## The dialog element

Typically we can use dialog element to create modals and popups using Javascript to set the behaviour. Here is a simple dialog tag:

<pre class="wp-block-preformatted"><strong><code>&lt;dialog open>
  &lt;p>A simple dialog box which is open by default!&lt;/p>
&lt;/dialog></code></strong></pre>

As the above example shows we have an open attribute in dialog element. The open attribute indicates that the dialog is active and available for user interaction.

### Specifications of dialog box

Basically these are some specifications of the dialog box:

  *  Easy to show and hide, including an `open` boolean attribute
  * Having  a **::backdrop pseudo element** for modal types.
  * Includes two version of popup and modals
  * In Dom it has methods like** `show` , `showModal` , and `close` and open** attribute.

### Standard popup

Surprisingly we could create a simple popup using dialog tag with a short Javascript code:

<pre class="wp-block-preformatted"><strong>&lt;dialog id="popup">
  &lt;h1>I am a simple popup&lt;/h1>
&lt;/dialog><br />&lt;button id="showPopup" onClick="showPopup()">show simple popup&lt;/button>

&lt;script>
  const showPopup = ()  => { 
    const popup = document.getElementById('popup');
    popup.show();
 }
&lt;/script></strong></pre>

Using show method we now have a simple dialog box using pure HTML and Javascript.<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/10/icon-popup.png" alt="" class="wp-image-32410" srcset="http://testgatsby.local/wp-content/uploads/2018/10/icon-popup.png 284w, http://testgatsby.local/wp-content/uploads/2018/10/icon-popup-150x150.png 150w" sizes="(max-width: 284px) 100vw, 284px" /> <figcaption>popup or modal!</figcaption></figure> 

### Modal box

However we need to use **showModal** method to create a modal box with dialog tag. It will also **shows up on top of all elements** no matter what z-index is. It will have a **dialog::backdrop** for stying and it could be **closed using ESC key.**

****

<pre class="wp-block-preformatted"><strong>&lt;dialog id="modal">
  &lt;h1>I am a Modal&lt;/h1>
&lt;/dialog><br />&lt;button id="showModal" onClick="showModal()">show simple popup&lt;/button>

&lt;script>
  const showModal = ()  => { 
    const modal = document.getElementById('modal');
    modal.showModal();
 }
&lt;/script></strong></pre>

### Using dialog attribute in a form

Greatly we are able to use an attribute called method=&#8221;dialog&#8221;  in our forms that are within a dialog elements. Specifying the attribute provides the contents of the **submit button&#8217;s `value` attribute** to the dialog element itself. 

<pre class="wp-block-preformatted"><strong>&lt;dialog id="form">
  &lt;form method="dialog">
    &lt;p>Would you like to continue?&lt;/p>
    &lt;button type="submit" value="no">No&lt;/button>
    &lt;button type="submit" value="yes">Yes&lt;/button>
  &lt;/form>
&lt;/dialog>
&lt;button id="showForm" onClick="showForm()">show form&lt;/button><br /><br />&lt;script><br />const form = document.getElementById('form');
const showForm = () => form.showModal();
form.addEventListener('close',  (event) => {
    if (dialog.returnValue === 'yes') { /* … */ }
  });<br />&lt;/script>

</strong></pre>

I have created a pen to demonstrate them all. We can manipulate them. Add cancel button to close them as well.

<p data-height="350" data-theme-id="0" data-slug-hash="WaXrZa" data-default-tab="html,result" data-user="azad6026" data-pen-title="The dialog element" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/WaXrZa/">The dialog element</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Great. We now know about a great element which can solve our problems to create popups or modals inside HTML code. 

Thank you for reading.
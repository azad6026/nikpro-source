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
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/dialog-element.png
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


```
<dialog open>
  <p>A simple dialog box which is open by default!</p>
</dialog>
```


As the above example shows we have an open attribute in dialog element. The open attribute indicates that the dialog is active and available for user interaction.

### Specifications of dialog box

Basically these are some specifications of the dialog box:

  *  Easy to show and hide, including an `open` boolean attribute
  * Having  a **::backdrop pseudo element** for modal types.
  * Includes two version of popup and modals
  * In Dom it has methods like** `show` , `showModal` , and `close` and open** attribute.

### Standard popup

Surprisingly we could create a simple popup using dialog tag with a short Javascript code:


```
<dialog id="popup">
  <h1>I am a simple popup</h1>
</dialog><br /><button id="showPopup" onClick="showPopup()">show simple popup</button>

<script>
  const showPopup = ()  => { 
    const popup = document.getElementById('popup');
    popup.show();
 }
</script>
```


Using show method we now have a simple dialog box using pure HTML and Javascript.<figure class="wp-block-image">

<img src="http://www.nikpro.com.auicon-popup.png" alt="" class="wp-image-32410" srcset="http://testgatsby.localicon-popup.png 284w, http://testgatsby.localicon-popup-150x150.png 150w" sizes="(max-width: 284px) 100vw, 284px" /> <figcaption>popup or modal!</figcaption></figure> 

### Modal box

However we need to use **showModal** method to create a modal box with dialog tag. It will also **shows up on top of all elements** no matter what z-index is. It will have a **dialog::backdrop** for stying and it could be **closed using ESC key.**

****


```
<dialog id="modal">
  <h1>I am a Modal</h1>
</dialog><br /><button id="showModal" onClick="showModal()">show simple popup</button>

<script>
  const showModal = ()  => { 
    const modal = document.getElementById('modal');
    modal.showModal();
 }
</script>
```


### Using dialog attribute in a form

Greatly we are able to use an attribute called method=&#8221;dialog&#8221;  in our forms that are within a dialog elements. Specifying the attribute provides the contents of the **submit button&#8217;s `value` attribute** to the dialog element itself. 


```
<dialog id="form">
  <form method="dialog">
    <p>Would you like to continue?</p>
    <button type="submit" value="no">No</button>
    <button type="submit" value="yes">Yes</button>
  </form>
</dialog>
<button id="showForm" onClick="showForm()">show form</button><br /><br /><script><br />const form = document.getElementById('form');
const showForm = () => form.showModal();
form.addEventListener('close',  (event) => {
    if (dialog.returnValue === 'yes') { /* … */ }
  });<br /></script>


```


I have created a pen to demonstrate them all. We can manipulate them. Add cancel button to close them as well.

<p data-height="350" data-theme-id="0" data-slug-hash="WaXrZa" data-default-tab="html,result" data-user="azad6026" data-pen-title="The dialog element" class="codepen">
  See the Pen <a href="https://codepen.io/azad6026/pen/WaXrZa/">The dialog element</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>

Great. We now know about a great element which can solve our problems to create popups or modals inside HTML code. 

Thank you for reading.
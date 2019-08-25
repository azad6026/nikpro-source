---
id: 31840
title: How to connect to an API with Javascript in a real APP
date: 2018-07-11T22:18:04+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31840
permalink: /how-to-connect-to-an-api-with-javascript-in-a-real-app/
image: /wp-content/uploads/2018/07/api-connect.jpg
categories:
  - API
  - JAVASCRIPT
tags:
  - JSON API
---
We all have heard of APIs and might wonder how to connect to an API with Javascript in a real application. There are different ways of making the connection. Sometimes the API document will provide instructions of how to connect to it.

We will be using ghibliAPI from <a href="https://ghibliapi.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a> and the original idea is from <a href="https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/" target="_blank" rel="noopener noreferrer">here. </a>We are going to take the title and description of each film and show it in the frontend. However I have simplified it and combined it with most useful information needed to learn how to connect to an API with Javascript. I have created a pen for it s well:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="xJbdEV" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="ghibliAPI">
  See the Pen <a href="https://codepen.io/azad6026/pen/xJbdEV/">ghibliAPI</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



As you can see the HTML is pretty much just a div element. The rest of it (to display each film information as a card) will be created on the fly by Javascript by modifying the DOM. 

## Retrieve the data From The API

In the API documentation beside the films section you see the`GET /films`. It will show us the URL of our API endpoint, <a href="https://ghibliapi.herokuapp.com/films" target="_blank" rel="noopener noreferrer">https://ghibliapi.herokuapp.com/films</a>. Clicking on that link will display an array of objects in JSON. Try it. 

We will need to fetch data from this JSON file.  This is how it is done:

`<strong>// Create a request variable and assign a new XMLHttpRequest object to it.</strong>`  
`<strong>var request = new XMLHttpRequest();</strong>`

`<strong>// Open a new connection, using the GET request on the URL endpoint, first argument: GET is our method to get data, second argument is the API url, third argument is to makeit asyncronous </strong>`  
`<strong>request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);</strong>`

`<strong>//Begin access data</strong>`

`<strong>request.onload = function () {</strong>`  
`<strong>// Begin accessing JSON data here</strong>`  
`<strong>}</strong>`  
`<strong>}</strong>`

`<strong>// Send request</strong>`  
`<strong>request.send();</strong>`

## Display the response

### Create the DOM

To display the data we need to make the front end first. We have a div with container class as the film card container and a logo:

&nbsp;

`<strong>// Get the div element inside HTML</strong>`

`<strong>const app = document.getElementById('root');</strong>`

`<strong>// Add the logo and its source</strong>`

`<strong>const logo = document.createElement('img');</strong>`  
`<strong>logo.src = '<a href="https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png" target="_blank" rel="noopener noreferrer">logo.png</a>';</strong>`

`<strong>// Create the film container and add its class</strong>`

`<strong>const container = document.createElement('div');</strong>`  
`<strong>container.setAttribute('class', 'container');</strong>`

`<strong>// Append/ add them to the DOM</strong>`

`<strong>app.appendChild(logo);</strong>`  
`<strong>app.appendChild(container);</strong>`

### Access the data

We begin accessing theJSON data then by parsing the information and fetching the individual movie information:

`<strong><span class="token comment" spellcheck="true">// Begin accessing JSON data here</span> </strong>`

`<strong><span class="token keyword">var</span> data <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span></strong>`

Before looping through data we have an if staatement which checks if the API response is not empty (404) and if its server status is OK (200):

`<strong><span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&&</span> request<span class="token punctuation">.</span>status <span class="token operator"><</span> <span class="token number">400</span><span class="token punctuation">)</span> </strong>`

if this become false, it throws an error. But if all is good, we will have our movie data which we take care of. I have explained what each line does:

`<strong>// Loop through each movie object ( using <a href="http://www.nikpro.com.au/all-you-need-to-know-about-arrow-functions-in-javascript/" target="_blank" rel="noopener noreferrer">arrow functions</a>)</strong>`

`<strong>data.forEach(movie => {</strong>`

`<strong>  // Create a div element as the container of each movie data and assign class card to it</strong>`  
`<strong>  const card = document.createElement('div');</strong>`  
`<strong>  card.setAttribute('class', 'card');</strong>`

`<strong>      // Create a h2 title for each movie and assign the title data to its textContent property </strong>`

`<strong>  const h1 = document.createElement('h1');</strong>`  
`<strong>  h1.textContent = movie.title;</strong>`

`<strong>      // Create a p title for each movie and assign the description data to its textContent property. We use substring before             //assigning to force all descriptions to same same length</strong>`

`<strong>  const p = document.createElement('p');</strong>`  
`<strong>  movie.description = movie.description.substring(0, 300);</strong>`  
``<strong>  p.textContent = `${movie.description}...`;</strong>``

`<strong>   // And we append them all to the DOM</strong>`

`<strong>  container.appendChild(card);</strong>`  
`<strong>  card.appendChild(h1);</strong>`  
`<strong>  card.appendChild(p);</strong>`  
`<strong>  });</strong>`  
`<strong>}</strong>`

And it is done.We have connected to the API via Javascript using GET request method and modified the DOM with the response information.

Now practice with any other APIs with more complex JSON responses and try to make different applications. I Hope it helped to learn the concept. Here is our example again:

<p class="codepen" data-height="265" data-theme-id="0" data-slug-hash="xJbdEV" data-default-tab="css,result" data-user="azad6026" data-embed-version="2" data-pen-title="ghibliAPI">
  See the Pen <a href="https://codepen.io/azad6026/pen/xJbdEV/">ghibliAPI</a> by Azadeh Faramarzi (<a href="https://codepen.io/azad6026">@azad6026</a>) on <a href="https://codepen.io">CodePen</a>.
</p>
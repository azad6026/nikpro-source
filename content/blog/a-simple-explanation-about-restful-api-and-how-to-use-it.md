---
id: 31875
title: A simple explanation about Restful API and how to use it
date: 2018-07-18T22:20:02+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=31875
permalink: /a-simple-explanation-about-restful-api-and-how-to-use-it/
# image: ../../static/images/restap.png
categories:
  - API
tags:
  - request
  - response
  - rest api
---

Continuing our talk about API&#8217;s from [this post](http://www.nikpro.com.au/how-to-connect-to-an-api-with-javascript-in-a-real-app/), we will have a deeper understanding about Rest API in this article.

If you’ve thought about getting data from another source on the internet, such as Twitter or Github, you need to know about Restful API and how to use them.

## A Rest API

A Rest API works the same way as if you search for something in youtube and get some result back. You request about something like Ironman and you will get a list as a response.

An **API** is an application programming interface. It is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it.

**REST** stands for “Representational State Transfer”. It is a set of rules that developers follow when they create their API. One of the rules is that you should be able to get data called a resource once you link to a specific url.

Each URL is called a **request** while the data sent back to you is called a **response**.

## What is an actual request

It is made up four things:

1. **The endpoint**
2. **The method**
3. **The headers**
4. **The data (or body)**

#### The endpoint

It is the url you request for and has this structure:

```
root-endpoint/?
```

For example The root-endpoint of [Github’s API](https://developer.github.com/v3/) is **https://api.github.com**while the root-endpoint [Twitter’s API](https://dev.twitter.com/rest/reference) is **https://api.twitter.com. **For example, let’s say you want to get a list of repositories by a certain user through Github’s API. The docs tells you to use the the following path to do so:

```
/users/:username/repos
```

Any colons (:) on a path denotes a variable. So you need to replicate the username with the one you are looking for.

The final part of an endpoint is **query parameters**. hey always begin with a question mark (?). Each parameter pair is then separated with an ampersand (&), like this:

```
?query1=value1&query2=value2
```

When you try to get a list of a user’s repositories on Github, you could add value pairs query parameters to your url:

```
https://api.github.com/users/:username/repos?sort=pushed
```

Here we used sort=pushed as query parameter to see the list of recent repositories pushed by the username.

#### The method

It is the request type to be sent to the server. We could have five types of requests:

- GET
- POST
- PUT
- PATCH
- DELETE

They are used to perform four possible actions: Create(with POST), Read (wit GET), Update (with PUT and PATCH) and Delete (with DELEE) (CRUD).

- GET is used to get a resource from a server and performs a \READ\ operation. This is the default request method.
- POST creates a new resource in the server and performs an \CREATE\ operation.
- PUT and PATCH are used to update a resource on a server. They perform an \UPDATE\ operation.
- DELETE  is used to delete a resource from a server and performs a \DELETE\ operation.

Except for GET all the other request will need authentication from the server. Even for GET, you will need authentication s= in cases like accessing the balance of a bank account.

#### The header

Headers are used to provide information to both the client and server. It can be used for many purposes, such as authentication and providing information about the body content.  **HTTP Headers are property-value pairs** that are separated by a colon:

```
"Content-Type: application/json". Missing the opening ".
```

#### The Data (Or “Body”)

The data (sometimes called “body” or “message”) contains information you want to be sent to the server and could be used with POST, PUT, PATCH or DELETE requests.

### JSON {#json}

JSON (JavaScript Object Notation) a common format for sending and requesting data through a REST API. The response that Github sends back to you is also formatted as JSON.

## Some real examples of Rest APIs

The Instagram API allows your applications to retrieve user accounts, photos, tags and more! For example, here’s a GET request that you might make to the Instagram API for photo locations from a set of longitude and latitude coordinates for New York City (40.7127° N, 74.0059° W):

```
GET /v1/locations/search?access_token=ACCESS_TOKEN&lat=40.7127&lng=74.0059
```

Here’s the JSON response from Instagram:

```
HTTP/1.1 200 OK

{  
 "meta": {  
   "code": 200  
 },  
 "data": [  
   {  
     "latitude": 40.714198749,  
     "id": "93496093",  
     "longitude": 74.006001183,  
     "name": "John's Pizzeria 278 Bleecker St NY, NY"  
   },  
   {  
     "latitude": 40.7142,  
     "id": "46371155",  
     "longitude": 74.0064,  
     "name": "Thunderpocalypse 2012"  
   },  
   {  
     "latitude": 40.714201754,  
     "id": "35932492",  
     "longitude": 74.006397137,  
     "name": "Avenue of the Americas, New York"  
   },  
   {  
     "latitude": 40.71296389,  
     "id": "1023103828",  
     "longitude": 74.00388611,  
     "name": "Manhattan Municipal Building"  
   },  
   {  
     "latitude": 40.71322,  
     "id": "92582758",  
     "longitude": 74.003963,  
     "name": "Sleepers Filming Location"  
   },  
   {  
     "latitude": 40.716833,  
     "id": "97921846",  
     "longitude": 74.005833,  
     "name": "Atera"  
   }  
 ]  
}
```

As a GitHub example, if we want all the details on a certain user, you’d set up your application to ping the GitHub API with the HTTP GET method to retrieve a certain user:

```
GET /users/:username
```

And the response:

```
{  
"login": "sample",  
"id": 1,  
"avatar_url": "https://github.com/images/error/sample.gif",  
"gravatar_id": "",  
"url": "https://api.github.com/users/sample",  
"html_url": "https://github.com/sample",  
"followers_url": "https://api.github.com/users/sample/followers",  
"following_url": "https://api.github.com/users/sample/following{/other_user}",  
"gists_url": "https://api.github.com/users/sample/gists{/gist_id}",  
"starred_url": "https://api.github.com/users/sample/starred{/owner}{/repo}",  
"subscriptions_url": "https://api.github.com/users/sample/subscriptions",  
"organizations_url": "https://api.github.com/users/sample/orgs",  
"repos_url": "https://api.github.com/users/sample/repos",  
"events_url": "https://api.github.com/users/sample/events{/privacy}",  
"received_events_url": "https://api.github.com/users/sample/received_events",  
"type": "User",  
"site_admin": false,  
"name": "sample",  
"company": "GitHub",  
"blog": "https://github.com/blog",  
"location": "San Francisco",  
"email": "sample@github.com",  
"hireable": false,  
"bio": "There once was...",  
"public_repos": 2,  
"public_gists": 1,  
"followers": 20,  
"following": 0,  
"created_at": "2008-01-14T04:33:35Z",  
"updated_at": "2008-01-14T04:33:35Z",  
"total_private_repos": 100,  
"owned_private_repos": 100,  
"private_gists": 81,  
"disk_usage": 10000,  
"collaborators": 8,  
"plan": {  
"name": "Medium",  
"space": 400,  
"private_repos": 20,  
"collaborators": 0  
}  
}
```

We talked about almost everything around API request and responses here. In future articles, we will learn more of how to get data from these aPI responses and how to parse them and use them in our applications.

Thank you for reading.

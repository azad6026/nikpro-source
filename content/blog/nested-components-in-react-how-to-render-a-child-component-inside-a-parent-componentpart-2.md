---
id: 32529
title: Nested components in React; How to render a child component inside a parent component:Part 2”
date: 2018-11-10T18:54:15+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32529
permalink: /nested-components-in-react-how-to-render-a-child-component-inside-a-parent-componentpart-2/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/nested.jpg
categories:
  - React
tags:
  - arrays
  - nested components
  - react components
---
In the [previous article](https://www.nikpro.com.au/nested-components-in-react-how-to-render-a-child-component-inside-a-parent-componentpart-1/) we learned how to render a child component inside a parent component with a simple example.

However we need to demonstrate nested components using a more complex example. We will use our example from [this article](https://www.nikpro.com.au/how-to-group-an-array-of-objects-based-on-an-a-property-value-using-reduce/) where we grouped an array of objects based on a value with some modification.

## A nested array as an example

I have changed the array to make it more complex so that we need nested components to display it:


```
const persons = [
      {
        "age": 25,
        "person": {
          name: 'John',
          hobby: {
              sport: "football",
              movie: "king speech",
              site: "CSS tricks",
          },
        },
      },
      {
        "age": 18,
        "person": {
          name: 'Suzi',
          hobby: {
              sport: "hockey",
              movie: "king kong",
              site: "google",
          },
        },
      },
      {
        "age": 23,
        "person": {
          name: 'Joe',
          hobby: {
              sport: "football",
              movie: "iron lady",
              site: "nikpro",
          },
        }
      },{
        "age": 25,
        "person": {
          name: 'Rosi',
          hobby: {
              sport: "football",
              movie: "martian",
              site: "nikpro",
          },
        }
      },{
        "age": 25,
        "person": {
          name: 'Gary',
          hobby: {
              sport: "swimming",
              movie: "GOD father",
              site: "google",
          },
        }
      },
      {
        "age": 23,
        "person": {
          name: 'Kane',
          hobby: {
              sport: "football",
              movie: "interstellar",
              site: "google",
          },
        }
      }
 ]
```


Basically we still have a persons array with some information about some people. Possibly we could get such an array from any API. I got it from a real world API and now we want to extract it into React components.

## Reduction to value

Our goal is to show a list of persons&#8217; information grouped by their age. Therefore we need to use reduce as explained in [this post](https://www.nikpro.com.au/how-to-group-an-array-of-objects-based-on-an-a-property-value-using-reduce/) to have a grouped array:


```
const groupBy = (OurArray, property) => {
  return OurArray.reduce((accumulator, object) => {
    const key = object[property];
    // using ternary operator to make it shorter but in this case it   is not necessary as it might look complicated
    !accumulator[key] ? (accumulator[key] = []) : (accumulator[key].push(object));
    return accumulator;
  }, {});
};
```


Using reduce() we create an array with the &#8220;age&#8221; as the key and group the data based on that:


```
23: [
    {
      name: 'Kane',
      hobby: {
          sport: "football",
          movie: "interstellar",
          site: "google",
      }
    }, 
    {
      name: 'Joe',
      hobby: {
          sport: "football",
          movie: "iron lady",
          site: "nikpro",
      }
    }
  ], 
  18: [
  {
      name: 'Suzi',
      hobby: {
          sport: "hockey",
          movie: "king kong",
          site: "google",
      },
    }
    ] ,
  .
  .
  .
}
```


As a result we get another nested array! But at least it is grouped by a value that we need here which is **age**. Now we need to think about how we can feed our components with this array.

## Map it 

Probably [map is the most useful an important array method in React](https://www.nikpro.com.au/using-map-method-in-react-components-with-examples-explained/). Therefore as usual we will use map to loop through array and be able to feed our component. Just do a map and see the result in console:


```
const personsInfo = persons.map((person, index) => {
    return (
      <Persons
	 key={index}
	 {...person}
      />
    );
});
```


However what map gives us is seperate arrays based on the age. so we will get **three arrays as we have three different ages** in the original array. This is how the array look like for age 18:


```
[
  {
      name: 'Suzi',
      hobby: {
          sport: "hockey",
          movie: "king kong",
          site: "google",
      },
    }
 ]
```


Great. But we cannot use just Persons component to show the data. Why? Because we have a nested array per age.

To reach the hobby object inside the array we need to do another map through each one of those **three(3)** arrays.

Therefore the best approach here is to use a **child component called Person to show the details of each person** while the Persons component handles the state ( in a real API) and build the result to feed the child component.  This is how Persons component look like. We use the passed props which is called person to map through array:


```
const Persons = props => {
    // map through the individual array we have got from the first map
    const personDetails = props.person.map((details, index) => {
        return(
          <Person
            key={index}
	    {...details}
	  />
        );
    });
    return(
      <React.Fragment>
	 {personDetails}
      <React.Fragment>	
    
    );
}
```
<figure class="wp-block-image">

<img class="wp-image-32533" src="https://www.nikpro.com.aunestedararay.png" alt="" srcset="https://testgatsby.localnestedararay.png 1192w, https://testgatsby.localnestedararay-300x158.png 300w, https://testgatsby.localnestedararay-768x403.png 768w, https://testgatsby.localnestedararay-1024x538.png 1024w" sizes="(max-width: 1192px) 100vw, 1192px" /> <figcaption>pass props from parent to child component</figcaption> </figure> 

Now we could use the **{&#8230;details} as the desired  non nested array **and create our child component to show persons&#8217; info based on their age:


```
const Person = props => {
  return (
    <React.Fragment>
       <div class="person-info">
	 <data>Name: {props.name}</data>
	 <data>Favourite Movie: {props.hobby.movie}</data>
	 <data>Favourite Sport: {props.hobby.sport}</data>
	 <data>Favourite book: {props.hobby.book}</data>
       </div>
    </React.Fragment>
  );
}
```


Generally we access nested info using dots as they are objects. So **{props.hobby.movie}** will let us get their favourite movie from a hobby object. And we now have reached the gaol.Showing each person&#8217;s info based on and listed by their age.

We can improve our code by [destructuring our props](https://www.nikpro.com.au/using-es6-destructuring-in-react-application-codes/) and make it look more modern. But we will leave that for a later example. 

Thank you for reading.
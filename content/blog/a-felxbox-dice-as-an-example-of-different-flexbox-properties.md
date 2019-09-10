---
id: 32113
title: A FelxBox dice as an example of different FlexBox properties
date: 2018-08-30T20:16:45+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32113
permalink: /a-felxbox-dice-as-an-example-of-different-flexbox-properties/
image: /images/flexbox-dice-1568x781.png
categories:
  - CSS
  - CSS3
tags:
  - flexbox properties
---

As I was checking some CodePen Examples I came across A FelxBox dice  example using different FlexBox properties. Then I thought I will use it to practice some FlexBox properties in this article.

## A dice made with FlexBox properties

Firstly I show you the codePen first to get the idea and then explain it in details:

https://codepen.io/LandonSchropp/pen/KpzzGo

All dice faces have been styled with FlexBox definitions. Lets check the code.

## The first three faces

Generally the first three faces follow the same rule. The flex-direction is row by default meaning each face pip (point) is in one row and its alignment FlexBox proprties has been changed.

### First face

As an example the first face has everything centred so it is very simple:

```
.first-face{
  display: flex;
  justify-content: center;
  align-items: center;
}
```

As a result **justify-content and align-items** FlexBox properties have been used to make the pip centred and aligned.

### Second face

We will have the second face by changing two properties. We change justify-content property to make them have the desired space. Also the second pip (nth-of-type(2)) has been aligned to the end.  We have the first one aligned as flex-start by default if we don&#8217;t change it:

```
.second-face{
  display: flex;
  justify-content: space-between;
}
.second-face .pip:nth-of-type(2) {
  align-self: flex-end;
}
```

### Third face

Generally this is very similar to the second face. As a difference we have the middle pip centred inside the container:

```
.third-face .pip:nth-of-type(2){
  align-self: center;
}
```

## The second three faces

As a rule we use flex-direction: column FlexBox properties for these three faces in their each column. Therefor face four and six have two column and face five has three columns.

### Fourth and Sixth face

They have two columns. We only change the justify-content property to space-between. Besides by default in this direction(column) FlexBox will take care of the alignment and pips will be aligned in the proper position:

```
.fourth-face, .sixth-face{
  display: flex;
  justify-content: space-between;
}
.fourth-face .column, .sixth-face .column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

### Fifth face

As a result we have three columns here. Therefor we have the second one centred so this is the only difference from fourth and sixth faces:

```
.fifth-face .column:nth-of-type(2) {
  justify-content: center;
}
```

Practically we can [use FlexBox](http://www.nikpro.com.au/custom-form-and-gird-layouts-with-flexbox/) properties in any type of things. It is very flexible and easy to use. We will practice some complex examples later on as well.

Thank you for reading.

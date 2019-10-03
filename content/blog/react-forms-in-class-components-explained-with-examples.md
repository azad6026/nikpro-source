---
id: 32281
title: React forms in class components explained with examples
date: 2018-09-24T20:25:44+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32281
permalink: /react-forms-in-class-components-explained-with-examples/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/react-again.png
categories:
  - ES6
  - React
---
Following these [series](https://www.nikpro.com.au/different-stateless-functional-component-in-react-explained/) of [articles](https://www.nikpro.com.au/react-fragment-the-new-way-to-wrap-multiple-react-elements-explained/) in React we will explain React forms  in this article. We will see how to manage React forms in [class](https://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/) components.

## React forms markup

Typically the React forms markup looks like HTML code. But we know it will be rendered as a [JSX](https://www.nikpro.com.au/explaining-jsx-with-some-examples/) code inside the component. Have a look at this example:


```
<form>
  <label>
    Title:
    <input type="text" name="title" />
  </label>
  <input type="submit" value="Submit" />
</form>
```


Basically it is a simple HTML form. We need to add the event handlers and value attribute to it to be able to maintain and manipulate it:


```
 <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
```


Firstly  we will put this code into the render method of the Form component. So &#8220;this&#8221; refers to the class object. 

Secondly on the form tag we add an onSubmit event which will be handled by an event handler called handleSubmit. We also add the onChange event for the title input to handle its changes. Moreover we give the input its value which comes from the state object.

### The React forms State example

Alright. We better take a look at the state of our component in this case:


```
state = {
    title: ""
}
```


Considerably I am using the React 16 ES6 version of state. You can also use a constructor for this which is less recommended as it makes it difficult to read and we need to take care of &#8220;this&#8221; in that case.


<img src="https://www.nikpro.com.aureact-logo.jpeg" alt="React forms" class="wp-image-32282" srcset="https://testgatsby.localreact-logo.jpeg 842w, https://testgatsby.localreact-logo-300x212.jpeg 300w, https://testgatsby.localreact-logo-768x543.jpeg 768w" sizes="(max-width: 842px) 100vw, 842px" /> 
 

<hr class="wp-block-separator" />

On top of that we will have our event handlers like below. We just alert user of the new value of input tag:


```
 handleChange(event) {
    this.setState({title: event.target.title});
  }

  handleSubmit(event) {
    alert('A title was submitted here: ' + this.state.title);
    event.preventDefault();
  }
```


Great. Lets now put it all together and make our component right:


```
class Form extends React.Component {
    state = {
        title: "",
    }

handleChange = (event) => {
    this.setState({ title : event.target.title });
}

handleSubmit = (event) => {
    alert( 'New title ' + this.state.posts.title + 'was submitted');
    event.preventDefault();
}
    render() {
        return (
        <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <lablel>
                    Title:<br/>                        <input type="text" name="title" <br/>                         value={this.state.title} <br/>                         onChange={this.handleChange}/>
                </lablel>
                <input type="submit" value="submit" />
            </form>
        </React.Fragment> ); } 
}
```


In addition [we use React.Fragment](https://www.nikpro.com.au/react-fragment-the-new-way-to-wrap-multiple-react-elements-explained/) to wrap our code instead of a div element to make sure a new tag element will not be our container. 

That is a complete component with a form. Of course we will have React forms with lots of inputs which you can check the rules in <a href="https://reactjs.org/docs/forms.html" target="_blank" rel="noopener noreferrer">React docs</a>. We will check out complex forms later on.

Thank you for reading.
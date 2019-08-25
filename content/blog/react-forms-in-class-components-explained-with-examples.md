---
id: 32281
title: React forms in class components explained with examples
date: 2018-09-24T20:25:44+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32281
permalink: /react-forms-in-class-components-explained-with-examples/
xyz_twap:
  - "1"
image: /wp-content/uploads/2018/09/react-again.png
categories:
  - ES6
  - React
---
Following these [series](http://www.nikpro.com.au/different-stateless-functional-component-in-react-explained/) of [articles](http://www.nikpro.com.au/react-fragment-the-new-way-to-wrap-multiple-react-elements-explained/) in React we will explain React forms  in this article. We will see how to manage React forms in [class](http://www.nikpro.com.au/react-component-building-blocks-simple-explanation-part-1/) components.

## React forms markup

Typically the React forms markup looks like HTML code. But we know it will be rendered as a [JSX](http://www.nikpro.com.au/explaining-jsx-with-some-examples/) code inside the component. Have a look at this example:

<pre class="wp-block-preformatted"><strong><code>&lt;form>
  &lt;label>
    Title:
    &lt;input type="text" name="title" />
  &lt;/label>
  &lt;input type="submit" value="Submit" />
&lt;/form></code></strong></pre>

Basically it is a simple HTML form. We need to add the event handlers and value attribute to it to be able to maintain and manipulate it:

<pre class="wp-block-preformatted"><strong><code> &lt;form onSubmit={this.handleSubmit}>
        &lt;label>
          Title:
          &lt;input type="text" value={this.state.title} onChange={this.handleChange} />
        &lt;/label>
        &lt;input type="submit" value="Submit" />
      &lt;/form></code></strong></pre>

Firstly  we will put this code into the render method of the Form component. So &#8220;this&#8221; refers to the class object. 

Secondly on the form tag we add an onSubmit event which will be handled by an event handler called handleSubmit. We also add the onChange event for the title input to handle its changes. Moreover we give the input its value which comes from the state object.

### The React forms State example

Alright. We better take a look at the state of our component in this case:

<pre class="wp-block-preformatted"><strong>state = {
    title: ""
}</strong></pre>

Considerably I am using the React 16 ES6 version of state. You can also use a constructor for this which is less recommended as it makes it difficult to read and we need to take care of &#8220;this&#8221; in that case.<figure class="wp-block-image">

<img src="http://www.nikpro.com.au/wp-content/uploads/2018/09/react-logo.jpeg" alt="React forms" class="wp-image-32282" srcset="http://testgatsby.local/wp-content/uploads/2018/09/react-logo.jpeg 842w, http://testgatsby.local/wp-content/uploads/2018/09/react-logo-300x212.jpeg 300w, http://testgatsby.local/wp-content/uploads/2018/09/react-logo-768x543.jpeg 768w" sizes="(max-width: 842px) 100vw, 842px" /> </figure> 

<hr class="wp-block-separator" />

On top of that we will have our event handlers like below. We just alert user of the new value of input tag:

<pre class="wp-block-preformatted"><strong><code> handleChange(event) {
    this.setState({title: event.target.title});
  }

  handleSubmit(event) {
    alert('A title was submitted here: ' + this.state.title);
    event.preventDefault();
  }</code></strong></pre>

Great. Lets now put it all together and make our component right:

<pre class="wp-block-preformatted"><strong>class Form extends React.Component {</strong><strong>
    state = {</strong><strong>
        title: "",</strong><strong>
    }</strong><br /><strong>
handleChange = (event) => {</strong><strong>
    this.setState({ title : event.target.title });</strong><strong>
}</strong><br /><strong>
handleSubmit = (event) => {</strong><strong>
    alert( 'New title ' + this.state.posts.title + 'was submitted');</strong><strong>
    event.preventDefault();</strong><strong>
}</strong><strong>
    render() {</strong><strong>
        return (</strong><br /><strong><code>        &lt;React.Fragment>
            &lt;form onSubmit={this.handleSubmit}>
                &lt;lablel>
                    Title:&lt;br/>                        &lt;input type="text" name="title" &lt;br/>                         value={this.state.title} &lt;br/>                         onChange={this.handleChange}/>
                &lt;/lablel>
                &lt;input type="submit" value="submit" />
            &lt;/form>
        &lt;/React.Fragment></code> );</strong><strong> }</strong><strong> <br />}</strong></pre>

In addition [we use React.Fragment](http://www.nikpro.com.au/react-fragment-the-new-way-to-wrap-multiple-react-elements-explained/) to wrap our code instead of a div element to make sure a new tag element will not be our container. 

That is a complete component with a form. Of course we will have React forms with lots of inputs which you can check the rules in <a href="https://reactjs.org/docs/forms.html" target="_blank" rel="noopener noreferrer">React docs</a>. We will check out complex forms later on.

Thank you for reading.
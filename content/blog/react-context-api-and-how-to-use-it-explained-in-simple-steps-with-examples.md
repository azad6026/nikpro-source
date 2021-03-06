---
id: 32610
title: React Context API and how to use it explained in simple steps with examples
date: 2018-12-25T20:06:46+00:00
author: admin
layout: post
guid: https://www.nikpro.com.au/?p=32610
permalink: /react-context-api-and-how-to-use-it-explained-in-simple-steps-with-examples/
xyz_twap:
  - "1"
featuredImage: ../../static/images/design-with-code.jpg
# featuredImage: ../../static/images/reactcontextapilearn.jpg
categories:
  - React
---

React Context API is getting a lot of attention after the latest updates. Because in some cases that the application is not too complicated and using Redux to manage states seems an overkill this API looks prefect. In this article we will have a look at how it works with some examples.

## React Context API concepts

Generally we are used to pass state from parent components to children [via props](https://www.nikpro.com.au/explaining-props-and-state-in-react-components/). When it gets complicated and we have multiple level of data it is hard to control. Have a look at this example in steps. The App component renders the Parent component which is TopComponent here:


```
const App = () => <TopComponent />;
```


The TopComponent renders the MiddleComponent which is the child of the TopComponent and passes the state to this component:


```
class TopComponent extends React.Component {
  state = {
    name: "Azadeh"
  };

  render() {
    return <MiddleComponent <em>name</em>={<em>this</em>.state.name} />;
  }
}
```


The MiddleComponent renders the BottomComponent which is the last component and passes the props as its data to be used:


```
const MiddleComponent = ({ name }) => {
  return <BottomComponent <em>name</em>={name} />;
};
```


The BottomComponent renders the name in a p tag and that is what will be shown as the output:


```
const BottomComponent = ({ name }) => {
  return <p>My name is : {name}</p>;
};
```


Typically it is great that we could pass props like this in our application. But what if we to reuse components? Or have more levels of passing props? Using Context API makes sense then. Therefore we convert our application to utilise it.


<img src="https://www.nikpro.com.aureact-context-api-1024x576.jpg" alt="" class="wp-image-32613" srcset="https://testgatsby.localreact-context-api-1024x576.jpg 1024w, https://testgatsby.localreact-context-api-300x169.jpg 300w, https://testgatsby.localreact-context-api-768x432.jpg 768w, https://testgatsby.localreact-context-api.jpg 1280w" sizes="(max-width: 1024px) 100vw, 1024px" /> <figcaption>Context API</figcaption>


## Using Context API in action

Firstly we will create a Context object using its own method:


```
const SharedContext = React.createContext({});
const SharedProvider = FamilyContext.Provider;
const SharedConsumer = FamilyContext.Consumer;

```


Then we wrap our upper level component using the Provider. The Context Provider is used so that lower level component can be wrapped in one Provider and can subscribe to it for <a href="https://reactjs.org/docs/context.html#reactcreatecontext" target="_blank" rel="noreferrer noopener" aria-label="context (opens in a new tab)">context</a> changes.


```
class TopComponent extends React.Component {
    state = {
        name: "Azadeh"
    };

    render() {
        return (
            <SharedProvider <em>value</em>={<em>this</em>.state.name}>
              <MiddleComponent  />
            </SharedProvider>);
            }
}
```


Then through _**value**_ which could be named anything we pass the data to the consumer components. Therefore we change our BottomComponent accordingly. We don&#8217;t need to pass props to MiddleComponent anymore as we have access to state via Context.

### Render Props

Here is the change in the BottomComponent using render props method:


```
const BottomComponent = () => {
  return (
      <SharedConsumer>
      // context is the object with name on it. It gets passed as an
      argument
      {context => <p>{context}</p>}
      </SharedConsumer>
  );
};
```


Using render porps makes the component reusable. According to Reactjs every Consumer needs a function to render props:

<blockquote class="wp-block-quote">
  <p>
    Requires a <a href="https://reactjs.org/docs/render-props.html#using-props-other-than-render">function as a child</a>. The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().
  </p>
</blockquote>

Typically we could create our context using a default value as well:


```
const SharedContext = React.createContext('Azadeh');
```


Therefore in case of no close Provider it still works and takes the default value.


<img src="https://www.nikpro.com.augloball-state.png" alt="global state" class="wp-image-32614" srcset="https://testgatsby.localgloball-state.png 389w, https://testgatsby.localgloball-state-300x100.png 300w" sizes="(max-width: 389px) 100vw, 389px" /> 


### Another example

Here is another full example from Reactjs with comments:


```
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
    render() {
        // Use a Provider to pass the current theme to the tree below.
        // Any component can read it, no matter how deep it is.
        // In this example, we're passing "dark" as the current value.
        return (
            <ThemeContext.Provider <em>value</em>="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render() {
        return <Button <em>theme</em>={<em>this</em>.context} />;
    }
}
```


In the above example we create a reusable ThemedButton component that returns the theme passed from the context object. It uses a direct value for Context instead of state for the theme but the concept remains the same. Globally using data across the component tree and make reusable components using Context API.

In this article we learnt about Context API and important use cases of it. In the future articles we will learn about new React hooks and useContext() hook separately.

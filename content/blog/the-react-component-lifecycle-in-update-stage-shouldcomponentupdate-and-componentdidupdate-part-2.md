---
id: 32343
title: 'The React component lifecycle in update stage: shouldComponentUpdate() and componentDidUpdate(): part 2'
date: 2018-10-04T21:39:35+00:00
author: admin
layout: post
guid: http://www.nikpro.com.au/?p=32343
permalink: /the-react-component-lifecycle-in-update-stage-shouldcomponentupdate-and-componentdidupdate-part-2/
xyz_twap:
  - "1"
image: /images/full-llifecycle-hooks-1568x724.png
categories:
  - React
tags:
  - componentDidUpdate()
  - shouldComponentUpdate()
---
Following [previous article](http://www.nikpro.com.au/react-component-lifecycle-explained-with-examples-first-part/) about mounting stage in React component lifecycle, here we explain two important methods in the update stage. We will have a look at **shouldComponentUpdate() and componentDidUpdate()**.

## shouldComponentUpdate()

Generally shouldComponentUpdate() is considered a useful but tricky and sometimes confusing lifecycle method. We must know when should we use it and when not. Typically its use case is when we want to let React know that the component has not been affected by current state and props changes. So we tell React that the component may not need to re render:

```<code>shouldComponentUpdate(nextProps, nextState)</code>```

Technically by default in React component will re render in every state or props change. We need to remember `shouldComponentUpdate()` is invoked before rendering when new props or state are being received. Defaults to `true`. This method is not called for the initial render or when `forceUpdate()` is used.<figure class="wp-block-image">

<img src="http://www.nikpro.com.aulifecycle_props.png" alt="update stage" class="wp-image-32346" srcset="http://testgatsby.locallifecycle_props.png 1020w, http://testgatsby.locallifecycle_props-300x115.png 300w, http://testgatsby.locallifecycle_props-768x295.png 768w" sizes="(max-width: 1020px) 100vw, 1020px" /> <figcaption>updating stages</figcaption></figure> 

Practically we should not use shouldComponentUpdate() to prevent rendering. This method only exists as a **[performance optimization](https://reactjs.org/docs/optimizing-performance.html).** 

Instead we should use PureComponents which performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.

### Use cases

However we may compare this.props with nextProps and this.state with nextState and return `false` to tell React the update can be skipped.  We could return `false`  but it does not prevent child components from re-rendering when **their** state changes.

Therefor if it returns false **render() and componentDidUpdate()** will not be invoked:

```<code>shouldComponentUpdate(nextProps, nextState) {
  return this.state.value != nextState.value;
}</code>```

As an example we might have a state with large object with several properties. But we have a specific component that cares about a single property or a small portion of the state. Therefor we can check for that change to determine if the component needs to re-render:

```<code>shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
}</code>```

## componentDidUpdate()

Additionally we have `componentDidUpdate()` which is invoked immediately after updating occurs and is not called for the initial render:

```<code>componentDidUpdate(prevProps, prevState, snapshot)</code>```

Practically we can manipulate the DOM in componentDidUpdate() method. In addition we can create side effects and do network requests. However we should compare current props to the previous props for that matter:

```<code>componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}</code>```

But remember if we **update state in componentDidUpdate() it should be wrapped in a condition** like the example above to prevent infinite loops.<figure class="wp-block-image">

<img src="http://www.nikpro.com.aucomponentlife.png" alt="" class="wp-image-32345" srcset="http://testgatsby.localcomponentlife.png 975w, http://testgatsby.localcomponentlife-300x154.png 300w, http://testgatsby.localcomponentlife-768x395.png 768w" sizes="(max-width: 975px) 100vw, 975px" /> <figcaption>component lifecycle metods</figcaption></figure> 

Obviously just like [`componentDidMount()`](http://www.nikpro.com.au/react-component-lifecycle-explained-with-examples-first-part/), the `componentDidUpdate()` is called after all of the children are updated

```<code>componentDidUpdate(prevProps, prevState) {
  // only update chart if the data has changed
  if (prevProps.data !== this.props.data) {
    this.chart = c3.load({
      data: this.props.data
    });
  }
}</code>```

As a result we better be careful when we decide which lifecycle method we need. Although shouldComponentUpdate() could help with the performance but it can be buggy. Certainly we should limit our usage of this method.

Also componentDidUpdate() is a great place for network calls but we better not use it to update states as it depends on conditions and might cause infinite looping and reduce performance. We will check other lifecycle methods in the next article.

Thank you for reading.
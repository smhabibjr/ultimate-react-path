# Declare events and pass parameters.

#### common pattern

```js
// button
<button onClick={() => this.btnClickHandler("en-US")}>Click me!</button>;

btnHandler = (e, locale) => {
  e.preventDefault();
  this.setState({
    locale: locale,
  });
};
```

#### Using bind method

```js
// button
<button onClick={this.btnClickHandler.bind(this,"en-US") }>Click me!</button>

btnHandler(e, locale){
  e.preventDefault()
  this.setState({
    locale: locale
  })
}

```

Using an arrow function (() =>) within the onClick event handler in React is a common pattern. This is done to ensure that the function is called with the correct context and parameters.

Let me explain why this pattern is used:

Preserving the Context: When you directly call a method like this.btnClickHandler("en-US") within the onClick attribute, it will lose the context of this within the method. This is because the onClick event handler will be executed in the context of the DOM element that triggered the event, not the React component instance. By using an arrow function, you ensure that the context of this remains the same as the component instance.

Passing Parameters: If you need to pass parameters to the event handler function (in this case, the locale "en-US"), you need to use an arrow function or a function binding to capture the parameters correctly. If you directly call this.btnClickHandler("en-US") without using an arrow function, the method will be called immediately when the component renders, rather than waiting for the click event.

Therefore, using an arrow function (() =>) ensures that the event handler function is called with the correct context (this) and parameters when the event occurs.

### shouldComponentUpdate


The shouldComponentUpdate method is a lifecycle method in React that allows you to optimize performance by indicating whether a component should re-render or not. It is called before the render() method, and it can return true or false to indicate whether React should continue with the update process.

Performance Optimization, Preventing Unnecessary Renders, Avoiding Unwanted Side Effects

```js
shouldComponentUpdate(nextProps) {
    const { clickHandler: currentProps } = this.props;
    const { clickHandler: nextClickHandler } = nextProps;
    if (currentProps === nextClickHandler) {
      return false;
    } else {
      return true;
    }
  }
```

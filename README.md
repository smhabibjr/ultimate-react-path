# What is the difference between Element and Component?

Element:

An element is a plain JavaScript object that describes a DOM node or component instance in the React virtual DOM.

Elements are lightweight representations of components. They are created using JSX or React.createElement().

Component:

A component is a JavaScript function or class that returns a React element.

Components are the building blocks of a React application. They encapsulate logic and UI elements into reusable pieces.

Components can accept input data via props and manage their internal state (for class components or using hooks in functional components).

```javascript
// Function component

function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>;
}

// class Component
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>;
  }
}
```

### Typechecking With PropTypes

Step 1: yarn add prop-types

Step 2: import PropTypes from 'prop-types';

Step 3:

```js
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
```

### Default Prop Values

```js
MyComponent.defaultProps = {
  name: "John Doe",
  age: 30,
  isActive: false,
  onClick: () => {
    console.log("Default click handler");
  },
};
```

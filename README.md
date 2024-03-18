# React Form. Controlled vs Uncontrolled

```js
// Input element
<input
  type="text"
  placeholder="Enter your name"
  value={title}
  onChange={this.inputHandler}
/>;

// On change handler

inputHandler = (e) => {
  console.log(e.target.value);
  this.setState({
    title: e.target.value,
  });
};
```

#### Multiple input handling using the same function

```js
inputHandler = (e) => {
  if (e.target.type === "text") {
    this.setState({
      title: e.target.value,
    });
  } else if (e.target.type === "textarea") {
    this.setState({
      text: e.target.value,
    });
  } else if (e.target.type === "select-one") {
    this.setState({
      selectValue: e.target.value,
    });
  } else if (e.target.type === "checkbox") {
    this.setState({
      isAwesome: e.target.checked,
    });
  }
};
```

### React form with submit button

```js
<form onSubmit={this.submitHandler}>
  <label htmlFor="userName">Enter your name:</label>
  <input
    style={{ marginTop: "10px" }}
    type="text"
    id="userName"
    placeholder="Enter your name"
    value={title}
    onChange={this.inputHandler}
  />

  <input type="submit" />
</form>

// Form handler function
submitHandler = (e) => {
  e.preventDefault();
  alert(JSON.stringify(this.state));
};
```

# React conditional rendering, List and Keys

#### conditional (ternary) expression

```js
// Example 1:
<Button
  clickHandler={this.btnHandler}
  locale={locale === "bn-BD" ? "de-DE" : "bn-BD"}
  show={locale === "bn-BD"? true: false}
/>

// Example 2:

<button type="button" onClick={() => clickHandler(locale)}>
  {locale === "bn-BD" ? "Bangla clock" : "German clock"}
</button>
```

#### Conditional rendering based on boolean value.

```js
{
  show && <p>show subtitle of button</p>;
}
```

### Map, list, key

```js
const numberOfClock = [1, 2, 3];

{
  numberOfClock.map((key) => <Clock key={key} />);
}
```

### Implicit return and Explicit return

```js
{
  numberOfClock.map((key) => <Clock key={key} />);
}
```

Here, the arrow function body is enclosed in parentheses (). This syntax is often referred to as "implicit return" because it automatically returns the value inside the parentheses. In this case, it implicitly returns the <Clock key={key} /> component for each item in the numberOfClock array.

```js
{
  numberOfClock.map((key) => {
    return <Clock key={key} />;
  });
}
```

Here, the arrow function body is enclosed in curly braces {}. This syntax allows for multiple statements and an explicit return statement. In this case, the <Clock key={key} /> component is explicitly returned from the arrow function.

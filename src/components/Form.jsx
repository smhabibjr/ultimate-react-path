import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      selectValue: "",
      isAwesome: false,
    };
  }

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

  submitHandler = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };

  render() {
    const { title, text, selectValue, isAwesome } = this.state;
    return (
      <div>
        <h5>React Form with submit</h5>
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
          <br />
          <br />
          <label htmlFor="userOpinion">Your opinion:</label>
          <textarea
            style={{ marginTop: "10px" }}
            name="text"
            id="userOpinion"
            cols="20"
            rows="10"
            value={text}
            onChange={this.inputHandler}
          ></textarea>

          <br />
          <br />
          <select value={selectValue} onChange={this.inputHandler}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>

          <br />
          <br />

          <input
            id="isAgree"
            type="checkbox"
            checked={isAwesome}
            onChange={this.inputHandler}
          />
          <label htmlFor="isAgree">Do you like JavaScript?</label>

          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

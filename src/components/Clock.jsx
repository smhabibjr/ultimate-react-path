import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0,
    };
  }
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState((state, props) => {
        
      state.counter++;
    });

    if (this.state.counter >= 10) {
      this.setState({
        counter: 0,
      });
    }
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    return (
      <div>
        <h6>
          <span>
            It is {this.state.date.toLocaleTimeString(this.props.locale)}
          </span>
        </h6>
        <p> {this.state.counter} </p>
      </div>
    );
  }
}

import React from "react";
import Button from "./Button";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0,
      locale: "bn-BD",
    };
  }
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState((state) => {
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

  btnHandler = (locale) => {
    this.setState({
      locale: locale,
    });
  };

  render() {
    const { date, counter, locale } = this.state;

    return (
      <div>
        <h6>
          <span>It is {date.toLocaleTimeString(locale)}</span>
        </h6>
        <p> {counter} </p>

        <Button
          clickHandler={this.btnHandler}
          locale={locale === "bn-BD" ? "de-DE" : "bn-BD"}
          show={locale === "bn-BD"? true: false}
        />
      </div>
    );
  }
}

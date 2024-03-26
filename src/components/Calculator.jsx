import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  onTemperatureChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;

    function toFahrenHeit(temperature) {
      if (temperature === "") {
        return "";
      }
      return (temperature * 9) / 5 + 32;
    }

    function toCelsius(temperature) {
      if (temperature === "") {
        return "";
      }

      return ((temperature - 32) * 5) / 9;
    }

    const tempInFahrenheit =
      scale === "c" ? toFahrenHeit(temperature) : temperature;

    const tempToCelsius = scale === "f" ? toCelsius(temperature) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={tempToCelsius.toString()}
          onTemperatureChange={this.onTemperatureChange}
        />

        <TemperatureInput
          temperature={tempInFahrenheit.toString()}
          scale="f"
          onTemperatureChange={this.onTemperatureChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

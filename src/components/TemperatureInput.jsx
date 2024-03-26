import PropTypes from "prop-types";

const scaleName = {
  c: "Celsius",
  f: "Farenheit",
};

export default function TemperatureInput({
  temperature,
  scale,
  onTemperatureChange,
}) {
  return (
    <div>
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]} :</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </div>
  );
}

TemperatureInput.propTypes = {
  temperature: PropTypes.string.isRequired,
  onTemperatureChange: PropTypes.func.isRequired,
  scale: PropTypes.string.isRequired,
};

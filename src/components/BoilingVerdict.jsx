import PropTypes from "prop-types";

export default function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <div>The water would boil!</div>;
  }
  return <p>The water would not boil</p>;
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.number.isRequired,
};

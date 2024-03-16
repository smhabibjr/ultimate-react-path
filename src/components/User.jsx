import PropTypes from "prop-types";

export default function User({ name, age, children }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {children}
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  children: PropTypes.node,
};
User.defaultProps = {
  name: "There is no name!",
  age: "There is no age!",
};

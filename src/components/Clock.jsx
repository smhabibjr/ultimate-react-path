import PropTypes from "prop-types"
export default function Clock({locale}) {
  return <div>
    <h1>
        <span>
            Now {new Date().toLocaleTimeString(locale)}
        </span>
    </h1>
  </div>;
}

Clock.propTypes = {
    locale: PropTypes.string,
}

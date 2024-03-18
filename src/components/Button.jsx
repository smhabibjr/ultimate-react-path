import PropsTypes from "prop-types";
import React from "react";

export default class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { clickHandler: currentProps, locale: currentLocale } = this.props;
    const { clickHandler: nextClickHandler, locale: nextLocale } = nextProps;
    if (currentProps === nextClickHandler && currentLocale === nextLocale) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { clickHandler, locale } = this.props;
    return (
      <button type="button" onClick={() => clickHandler(locale)}>
        Button
      </button>
    );
  }
}

Button.propTypes = {
  clickHandler: PropsTypes.func,
  locale: PropsTypes.string,
};

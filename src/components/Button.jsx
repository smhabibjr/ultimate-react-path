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
    const { clickHandler, locale, show } = this.props;
    return (
      <>
        <button type="button" onClick={() => clickHandler(locale)}>
          {locale === "bn-BD" ? "Bangla clock" : "German clock"}
        </button>
        {show && <p>show subtitle of button</p>}
      </>
    );
  }
}

Button.propTypes = {
  clickHandler: PropsTypes.func,
  locale: PropsTypes.string,
  children: PropsTypes.any,
  show: PropsTypes.bool,
};

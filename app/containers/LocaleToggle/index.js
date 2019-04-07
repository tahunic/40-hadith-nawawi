/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CountryFlag from './CountryFlag';
import { changeLocale } from '../LanguageProvider/actions';

/* eslint-disable react/prefer-stateless-function */
export class LocaleToggle extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <div className="nav-item nav-link ml-auto">
              <CountryFlag
                onClick={() => this.props.onLocaleToggle('en')}
                src="https://cdn1.iconfinder.com/data/icons/ensign-11/512/273_Ensign_Flag_Nation_kingdom-512.png"
                alt="eng"
              />
            </div>
            <div className="nav-item nav-link ml-auto">
              <CountryFlag
                onClick={() => this.props.onLocaleToggle('bs')}
                src="https://cdn1.iconfinder.com/data/icons/ensign-11/512/36_Ensign_Flag_Nation_bosnia_and_herzegovina-512.png"
                alt="bos"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: locale => dispatch(changeLocale(locale)),
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(LocaleToggle);

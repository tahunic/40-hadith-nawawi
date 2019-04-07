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
      <div className="row">
        <div className="offset-10 col-1">
          <CountryFlag
            onClick={() => this.props.onLocaleToggle('en')}
            src="https://cdn1.iconfinder.com/data/icons/ensign-11/512/273_Ensign_Flag_Nation_kingdom-512.png"
            alt="eng"
          />
        </div>
        <div className="col-1">
          <CountryFlag
            onClick={() => this.props.onLocaleToggle('bs')}
            src="https://cdn1.iconfinder.com/data/icons/ensign-11/512/36_Ensign_Flag_Nation_bosnia_and_herzegovina-512.png"
            alt="bos"
          />
        </div>
      </div>
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

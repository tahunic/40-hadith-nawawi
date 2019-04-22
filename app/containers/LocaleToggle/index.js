/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CountryFlag from './CountryFlag';
import { changeLocale } from '../LanguageProvider/actions';
import { loadHadiths } from '../HadithList/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

/* eslint-disable react/prefer-stateless-function */
export class LocaleToggle extends React.PureComponent {
  render() {
    const { locale, onLocaleToggle } = this.props;

    return (
      <div className="navbar-nav ml-auto">
        <div className="nav-item nav-link">
          <CountryFlag
            onClick={() => onLocaleToggle('en')}
            src="https://cdn1.iconfinder.com/data/icons/ensign-11/512/273_Ensign_Flag_Nation_kingdom-512.png"
            alt="en"
            opacity={locale === 'en' ? 1 : 0.3}
          />
        </div>
        <div className="nav-item nav-link">
          <CountryFlag
            onClick={() => onLocaleToggle('bs')}
            src="https://cdn1.iconfinder.com/data/icons/ensign-11/512/36_Ensign_Flag_Nation_bosnia_and_herzegovina-512.png"
            alt="bs"
            opacity={locale === 'bs' ? 1 : 0.3}
          />
        </div>
      </div>
    );
  }
}

LocaleToggle.propTypes = {
  locale: PropTypes.string,
  onLocaleToggle: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: locale => {
      dispatch(changeLocale(locale));
      dispatch(loadHadiths());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LocaleToggle);

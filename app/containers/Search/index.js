/**
 *
 * Search
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { injectIntl } from 'react-intl';
import { makeSelectTerm } from './selectors';
import reducer from './reducer';
import messages from './messages';
import { changeTerm } from './actions';
import { loadHadiths } from '../HadithList/actions';
import { makeSelectLocation } from '../App/selectors';

/* eslint-disable react/prefer-stateless-function */
export class Search extends React.PureComponent {
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { term, onChangeTerm, intl, location } = this.props;

    if (location.pathname === '/') {
      return (
        <form className="form-inline my-2 my-lg-0" onSubmit={e => this.handleSubmit(e)}>
          <input
            value={term}
            onChange={onChangeTerm}
            className="form-control mr-sm-2"
            type="search"
            placeholder={intl.formatMessage({ id: messages.placeholder.id })}
            aria-label="Search"
          />
        </form>
      );
    }

    return null;
  }
}

Search.propTypes = {
  term: PropTypes.string,
  onChangeTerm: PropTypes.func,
  intl: PropTypes.any,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  term: makeSelectTerm(),
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeTerm: e => {
      dispatch(changeTerm(e.target.value));
      dispatch(loadHadiths());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'search', reducer });

export default compose(
  withReducer,
  withConnect,
)(injectIntl(Search));

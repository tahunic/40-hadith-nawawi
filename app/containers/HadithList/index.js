/**
 *
 * HadithList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHadithList from './selectors';
import reducer from './reducer';
import saga from './saga';
import hadiths from '../../data/hadiths.json';
import Hadith from '../../components/Hadith';

/* eslint-disable react/prefer-stateless-function */
export class HadithList extends React.PureComponent {
  render() {
    return hadiths.map(h => <Hadith key={h.title} props={h} />);
  }
}

HadithList.propTypes = {};

const mapStateToProps = createStructuredSelector({
  hadithList: makeSelectHadithList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'hadithList', reducer });
const withSaga = injectSaga({ key: 'hadithList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HadithList);

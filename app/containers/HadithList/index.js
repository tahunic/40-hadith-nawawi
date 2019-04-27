/**
 *
 * HadithList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { FormattedMessage } from 'react-intl';
import reducer from './reducer';
import saga from './saga';
import HadithListItem from './HadithListItem';
import { loadHadiths } from './actions';
import LoadingIndicator from '../../components/LoadingIndicator';
import { makeSelectError, makeSelectHadiths, makeSelectLoading } from './selectors';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HadithList extends React.PureComponent {
  componentDidMount() {
    this.props.getHadiths();
  }

  render() {
    const { loading, error, hadiths } = this.props;

    if (loading) {
      return <LoadingIndicator />;
    }

    if (error) {
      return <h3>Something went wrong.</h3>;
    }

    if (hadiths && hadiths.length === 0) {
      return (
        <div className="text-center">
          <h3>
            <FormattedMessage {...messages.noHadithsFound} />
          </h3>
          <p>
            <FormattedMessage {...messages.tryChangingSearch} />
          </p>
        </div>
      );
    }

    if (hadiths && hadiths.length > 0) {
      return hadiths.map(h => <HadithListItem key={h.hadithBase.index} hadith={h} />);
    }

    return null;
  }
}

HadithList.propTypes = {
  getHadiths: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  hadiths: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  hadiths: makeSelectHadiths(),
});

function mapDispatchToProps(dispatch) {
  return {
    getHadiths: () => dispatch(loadHadiths()),
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

/**
 *
 * HadithDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import LoadingIndicator from '../../components/LoadingIndicator';
import Bismillah from './Bismillah';
import { loadHadith } from './actions';
import { makeSelectHadith } from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class HadithDetails extends React.PureComponent {
  componentDidMount() {
    const { index } = this.props.match.params;
    this.props.getHadith(index);
  }

  render() {
    const { hadith } = this.props;

    if (!hadith) {
      return <LoadingIndicator />;
    }

    return (
      <div>
        <h1>{hadith.title}</h1>
        <Bismillah>
          <FormattedMessage {...messages.bismillah} />
        </Bismillah>

        <p>{hadith.summary}</p>

        <iframe
          title="audio"
          src={hadith.hadith.audioUrl}
          width="500"
          height="30"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    );
  }
}

HadithDetails.propTypes = {
  hadith: PropTypes.object,
  getHadith: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  hadith: makeSelectHadith(),
});

function mapDispatchToProps(dispatch) {
  return {
    getHadith: index => dispatch(loadHadith(index)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'hadithDetails', reducer });
const withSaga = injectSaga({ key: 'hadithDetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HadithDetails);
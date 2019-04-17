/**
 *
 * HadithListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';
import messages from './messages';

function HadithListItem(props) {
  const { hadith } = props;
  return (
    <div className="card my-2">
      <div className="card-header">{hadith.header}</div>
      <div className="card-body">
        <h5 className="card-title">{hadith.title}</h5>
        <p className="card-text">
          {hadith.summary.substr(0, 250)}
          {hadith.summary.length > 250 ? '...' : null}
        </p>
        <Link className="router-link" to={`/hadith/${hadith.hadith.index}`}>
          <button type="button" className="btn btn-primary">
            <FormattedMessage {...messages.details} />{' '}
          </button>
        </Link>
      </div>
    </div>
  );
}

HadithListItem.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default HadithListItem;

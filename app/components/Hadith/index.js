/**
 *
 * Hadith
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function Hadith(props1) {
  const { props } = props1;
  return (
    <div className="card my-2">
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button type="button" onClick={props.onLoadHadith} className="btn btn-primary">
          <FormattedMessage {...messages.details} />{' '}
        </button>
      </div>
    </div>
  );
}

Hadith.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onLoadHadith: PropTypes.func,
};

export default Hadith;

/**
 *
 * Navbar
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import LocaleToggle from '../../containers/LocaleToggle';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Navbar extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <div className="nav-item nav-link">
              <Link className="router-link" to="/">
                <button type="button" className="nav-link">
                  Home
                </button>
              </Link>
            </div>
          </div>
          <LocaleToggle />
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;

/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HadithDetails from 'containers/HadithDetails/Loadable';

import GlobalStyle from '../../global-styles';
import Navbar from '../../components/Navbar';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Al-Nawawi's Forty Hadith" defaultTitle="Al-Nawawi's Forty Hadith">
        <meta name="description" content="Al-Nawawi's Forty Hadith application" />
      </Helmet>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hadith/:index" component={HadithDetails} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

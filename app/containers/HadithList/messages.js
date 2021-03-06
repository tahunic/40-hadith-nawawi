/*
 * HadithList Messages
 *
 * This contains all the text for the HadithList container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.HadithList';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HadithList container!',
  },
  details: {
    id: `${scope}.details`,
    defaultMessage: 'Details',
  },
  noHadithsFound: {
    id: `${scope}.noHadithsFound`,
    defaultMessage: 'No hadiths found.',
  },
  tryChangingSearch: {
    id: `${scope}.tryChangingSearch`,
    defaultMessage: 'Try changing search criteria.',
  },
});

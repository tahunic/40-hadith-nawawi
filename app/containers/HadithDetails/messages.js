/*
 * HadithDetails Messages
 *
 * This contains all the text for the HadithDetails container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.HadithDetails';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HadithDetails container!',
  },
  bismillah: {
    id: `${scope}.bismillah`,
    defaultMessage: 'In the name of Allah, the Most Gracious, the Most Merciful.',
  },
  comment: {
    id: `${scope}.comment`,
    defaultMessage: 'Comment:',
  },
});

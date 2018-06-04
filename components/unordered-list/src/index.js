// https://govuk-static.herokuapp.com/component-guide/government_navigation

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  SPACING,
  NTA_LIGHT,
} from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const StyledList = styled('ul')(
  {
    margin: 0,
    padding: 0,
    paddingLeft: SPACING.SCALE_4,
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    textTransform: 'none',
    fontSize: FONT_SIZE.SIZE_14,
    lineHeight: LINE_HEIGHT.SIZE_14,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_16,
      lineHeight: LINE_HEIGHT.SIZE_16,
    },
  },
  ({ listStyleType }) => ({
    listStyleType: listStyleType || undefined,
    marginLeft: listStyleType === 'none' ? 0 : undefined,
    paddingLeft: listStyleType === 'none' ? 0 : undefined,
  }),
);

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * import ListItem from '@govuk-react/list-item';
 *
 * <UnorderedList>
 *   <ListItem>Lorem ipsum dolor sit.</ListItem>
 *   <ListItem>Consectetur adipiscing elit.</ListItem>
 *   <ListItem>Curabitur et libero nec.</ListItem>
 * </UnorderedList>
 * ```
 *
 * with Square
 * ```jsx
 * import ListItem from '@govuk-react/list-item';
 *
 * <UnorderedList listStyleType="square">
 *   <ListItem>Lorem ipsum dolor sit.</ListItem>
 *   <ListItem>Consectetur adipiscing elit.</ListItem>
 *   <ListItem>Curabitur et libero nec.</ListItem>
 * </UnorderedList>
 * ```
 *
 * ### References
 * - https://govuk-static.herokuapp.com/component-guide/government_navigation
 */
// TODO use Context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
// listStyleType: normal HTML property values are used here
// e.g., listStyleType="circle", listStyleType="upper-alpha", listStyleType="none"
const UnorderedList = ({ listStyleType, ...props }) => (
  <StyledList listStyleType={listStyleType} {...props} />
);

UnorderedList.defaultProps = {
  listStyleType: undefined,
};

UnorderedList.propTypes = {
  listStyleType: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 0 })(UnorderedList);

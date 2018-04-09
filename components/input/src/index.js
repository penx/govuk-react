// https://github.com/alphagov/govuk-frontend/tree/master/src/components/
import glamorous from 'glamorous';
import React from 'react';
import PropTypes from 'prop-types';

import { BLACK, YELLOW, ERROR_COLOUR } from 'govuk-colours';
import {
  FONT_SIZE,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';

const GInput = glamorous.input(
  {
    boxSizing: 'border-box',
    fontFamily: NTA_LIGHT,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontWeight: 400,
    textTransform: 'none',
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: '20px',
    width: '100%',
    padding: '5px 4px 4px',
    border: `2px solid ${BLACK}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: '50%',
      fontSize: FONT_SIZE.SIZE_19,
      lineHeight: '25px',
    },
    '[disabled]': {
      cursor: 'auto',
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`,
      outlineOffset: 0,
    },
  },
  ({ error, errorColor }) => ({
    border: error ? `4px solid ${errorColor || ERROR_COLOUR}` : undefined,
  }),
);

const Input = props => <GInput {...props} />;

Input.defaultProps = {
  value: undefined,
  onChange: undefined,
  type: 'text',
  errorColor: undefined,
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  errorColor: PropTypes.string,
};

export default Input;

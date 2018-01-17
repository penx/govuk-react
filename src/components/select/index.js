// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss

import React from 'react'
import glamorous from 'glamorous'

import * as COLOUR from 'govuk-colours'
import { BREAKPOINTS, SITE_WIDTH } from '../../constants/index'

const mediaQueries = {
	largeScreen: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`,
}

const Label = glamorous.label({
  display: 'flex',
  flexDirection: 'column',
  [mediaQueries.largeScreen]: {
    maxWidth: SITE_WIDTH
  }},
  ({ errorText }) => ({
    borderLeft: errorText ? `4px solid ${COLOUR.ERROR_COLOUR}` : '',
    marginRight: errorText ? `15px` : '0',
    paddingLeft: errorText ? `10px` : '0',
  })
)

const LabelText = glamorous.span({
  fontFamily: '"nta", Arial, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '20px',
  color: `${COLOUR.BLACK}`,
  display: 'block',
  paddingBottom: '2px',
  [mediaQueries.largeScreen]: {
    fontSize: '19px',
    lineHeight: '1.31579'
  }
},
  ({ errorText }) => ({
    fontWeight: errorText ? 700 : LabelText.fontWeight,
  })
)

const HintText = glamorous.span({
  fontFamily: '"nta", Arial, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.25',
  color: `${COLOUR.GREY_1}`,
  [mediaQueries.largeScreen]: {
    fontSize: '19px',
    lineHeight: '1.31579'
  }
}
)

const ErrorText = glamorous.span({
  display: 'inline-block',
  fontFamily: '"nta", Arial, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.25',
  color: `${COLOUR.ERROR_COLOUR}`,
  paddingTop: '4px',
  paddingBottom: '2px',
  [mediaQueries.largeScreen]: {
    fontSize: '19px',
    lineHeight: '1.31579'
  }
})

const Input = glamorous.select({
	boxSizing: 'border-box',
	fontFamily: '"nta", Arial, sans-serif',
  fontWeight: 400,
	textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.25',
  width: '100%',
  padding: '5px 4px 4px',
  border: `2px solid ${COLOUR.BLACK}`,
  [mediaQueries.largeScreen]: {
    width: '50%',
    fontSize: '19px',
    lineHeight: '1.31579'
  },
  '[disabled]': {
    cursor: 'auto',
  },
  ':focus': {
    outline: `3px solid ${COLOUR.YELLOW}`,
    outlineOffset: 0
  }
},
  ({ errorText }) => ({
    border: errorText ? `4px solid ${COLOUR.ERROR_COLOUR}` : `2px solid ${COLOUR.BLACK}`,
  })
)

const Select = ({children, ...props}) => (
  <Label {...props}>
    <LabelText {...props}>{props.label}</LabelText>
    <HintText>{props.hintText}</HintText>
    <ErrorText>{props.errorText}</ErrorText>
    <Input {...props}>{children}</Input>
  </Label>
)

export default Select ;

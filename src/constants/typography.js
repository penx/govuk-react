// https://govuk-elements.herokuapp.com/typography/#typography-headings
// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
// https://github.com/alphagov/govuk-frontend/blob/master/src/globals/scss/core/_typography.scss
// https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss

const FONT_80 = {
  lineHeight: 80 / 80,
  fontSize: 80,
  640: {
    lineHeight: 55 / 53,
    fontSize: 53
  },
  print: {
    fontSize: 28
  }
};

const FONT_48 = {
  lineHeight: 50 / 48,
  fontSize: 48,
  640: {
    lineHeight: 35 / 32,
    fontSize: 32
  },
  print: {
    fontSize: 18
  }
};

const FONT_36 = {
  lineHeight: 40 / 36,
  fontSize: 36,
  640: {
    lineHeight: 25 / 24,
    fontSize: 24
  },
  print: {
    fontSize: 18
  }
};

const FONT_27 = {
  lineHeight: 30 / 27,
  fontSize: 27,
  640: {
    lineHeight: 20 / 18,
    fontSize: 20
  },
  print: {
    fontSize: 16
  }
};

const FONT_24 = {
  lineHeight: 30 / 24,
  fontSize: 24,
  640: {
    lineHeight: 24 / 20,
    fontSize: 18
  },
  print: {
    fontSize: 16
  }
};

const FONT_19 = {
  lineHeight: 25 / 19,
  fontSize: 19,
  640: {
    lineHeight: 20 / 16,
    fontSize: 16
  },
  print: {
    fontSize: 14
  }
};

const FONT_16 = {
  lineHeight: 20 / 16,
  fontSize: 16,
  640: {
    lineHeight: 16 / 14,
    fontSize: 14
  },
  print: {
    fontSize: 12
  }
};

// Association between 'xsmall' format used by https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss
// and core-xx format used by https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
//
// core-80 is misleading as it is not always 80px, therefore xsmall format is preferred, but lookup to original mixin values is kept for clarity.
const XXLARGE = FONT_80;
const XLARGE = FONT_48;
const LARGE = FONT_36;
const MEDIUMLARGE = FONT_27;
const MEDIUM = FONT_24;
const SMALL = FONT_19;
const XSMALL = FONT_16;

// all available font sizes
export const FONT_SIZES = {
  XXLARGE,
  XLARGE,
  LARGE,
  MEDIUMLARGE,
  MEDIUM,
  SMALL,
  XSMALL
};

// Lookup between numerical header level and associated html element
export const LEVEL_TAG = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6"
};

// Lookup between a header level (1-6) and the associated default font size
export const LEVEL_SIZE = {
  1: "XLARGE",
  2: "LARGE",
  3: "MEDIUM",
  4: "SMALL",
  5: "XSMALL",
  6: "XSMALL"
};

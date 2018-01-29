// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import PropTypes from "prop-types";
import { FieldRenderProps } from "react-final-form-prop-types";

import Label from "../Label/index";
import LabelText from "../LabelText/index";
import ErrorText from "../ErrorText/index";
import HintText from "../HintText/index";
import Input from "../Input/index";

const InputField = props => (
  <Label errorText={props.errorText}>
    <LabelText errorText={props.errorText}>{props.children}</LabelText>
    {props.hintText ? <HintText>{props.hintText}</HintText> : <span />}
    {props.errorText ? (
      <ErrorText errorText={props.errorText}>{props.errorText}</ErrorText>
    ) : (
      <span />
    )}
    <Input type="text" {...props.input} />
  </Label>
);

InputField.defaultProps = {
  hintText: null,
  errorText: null,
  onChange: null,
  value: undefined
};

InputField.propTypes = {
  ...FieldRenderProps,
  children: PropTypes.node.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default InputField;

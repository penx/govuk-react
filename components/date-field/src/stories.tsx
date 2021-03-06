import React from 'react';
import PropTypes from 'prop-types';

import { action } from '@storybook/addon-actions';

import DateField from '.';

export default {
  title: 'Form/Date field',
  component: DateField,
};
class ManagedDateField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        day: 0,
        month: 1,
        year: 2,
      },
    };
  }

  render() {
    const { input: inputProp } = this.props;
    const { value: valueState } = this.state;

    const input = {
      ...inputProp,
      value: valueState,
      onChange: (value) => {
        this.setState({
          value,
        });
      },
    };
    return <DateField {...this.props} input={input} />;
  }
}

ManagedDateField.defaultProps = {
  input: {},
};

ManagedDateField.propTypes = {
  input: PropTypes.shape({}),
};

export const Default = () => (
  <ManagedDateField
    input={{
      onFocus: action('date-focus'),
      onBlur: action('date-blur'),
      onChange: action('date-change'),
    }}
    inputNames={{ day: 'dayInputName' }}
  >
    What is your date of birth?
  </ManagedDateField>
);

export const DateWithHintText = () => (
  <DateField hintText="For example, 31 03 1980">What is your date of birth?</DateField>
);

export const DateWithDefaultValues = () => (
  <DateField defaultValues={{ day: '01', month: '02', year: '2018' }}>What is your date of birth ?</DateField>
);

export const DateWithHintTextError = () => (
  <DateField hintText="For example, 31 03 1980" errorText="Error message goes here">
    What is your date of birth?
  </DateField>
);

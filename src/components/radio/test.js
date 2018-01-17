import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './';

import { shallow, mount, render } from 'enzyme';

describe('Radio', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Radio>Example</Radio>, div);
  });

});


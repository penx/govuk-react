import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BackLink from '.';

describe('Back Link', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<BackLink>example</BackLink>);

    expect(getByText('example')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const clickHandler = jest.fn();
    const { getByText } = render(<BackLink onClick={clickHandler}>example</BackLink>);

    expect(clickHandler).not.toHaveBeenCalled();

    userEvent.click(getByText('example'));

    expect(clickHandler).toHaveBeenCalled();
  });
});

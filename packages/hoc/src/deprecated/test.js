import React from 'react';
import { mount } from 'enzyme';

import deprecated from '.';

describe('deprecated HOC', () => {
  const OLD_ENV = process.env;
  // eslint-disable-next-line no-console
  const nativeWarn = console.warn;
  let warnCallCount;
  /**
   * Make sure the setup is the same for every test
   */
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    // eslint-disable-next-line no-console
    console.warn = () => { warnCallCount += 1; };
    warnCallCount = 0;
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.warn = nativeWarn;
    process.env = OLD_ENV;
  });

  it('should warn when using a deprecated component when in development', () => {
    process.env.NODE_ENV = 'development';
    const Comp = deprecated(() => <div>Test</div>);

    mount(<Comp />);

    expect(warnCallCount).toEqual(1);
  });

  it('should not warn when using a deprecated component, unless in development', () => {
    process.env.NODE_ENV = 'definitely-not-development';
    const Comp = deprecated(() => <div>Test</div>);

    mount(<Comp />);

    expect(warnCallCount).toEqual(0);
  });
});
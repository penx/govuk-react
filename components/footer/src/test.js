import React from 'react';
import { mount } from 'enzyme';

import Footer, {
  FooterWithSingleMetaLink,
  FooterWithMetaLinks,
  FooterWithMetaCustom,
  FooterWithMetaLinksAndCustom,
  FooterWithSingleNavigationLink,
  FooterWithNavigation,
  FooterWithNavigationAndMeta,
} from './fixtures';

describe('Footer', () => {
  it('matches default snapshot', () => {
    expect(mount(<Footer />)).toMatchSnapshot('Footer');
  });

  it('matches with single meta link snapshot', () => {
    expect(mount(<FooterWithSingleMetaLink />)).toMatchSnapshot('FooterWithSingleMetaLink');
  });

  it('matches with meta links snapshot', () => {
    expect(mount(<FooterWithMetaLinks />)).toMatchSnapshot('FooterWithMetaLinks');
  });

  it('matches with meta custom snapshot', () => {
    expect(mount(<FooterWithMetaCustom />)).toMatchSnapshot('FooterWithMetaCustom');
  });

  it('matches with meta links and custom snapshot', () => {
    expect(mount(<FooterWithMetaLinksAndCustom />)).toMatchSnapshot('FooterWithMetaLinksAndCustom');
  });

  it('matches with single navigation link snapshot', () => {
    expect(mount(<FooterWithSingleNavigationLink />)).toMatchSnapshot('FooterWithSingleNavigationLink');
  });

  it('matches with navigation snapshot', () => {
    expect(mount(<FooterWithNavigation />)).toMatchSnapshot('FooterWithNavigation');
  });

  it('matches with navigation and meta snapshot', () => {
    expect(mount(<FooterWithNavigationAndMeta />)).toMatchSnapshot('FooterWithNavigationAndMeta');
  });
});

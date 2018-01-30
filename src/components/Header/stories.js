import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Header, { H1, H2, H3, H4, H5, H6 } from ".";

storiesOf("Header", module).add("default", () => <Header>Default</Header>);
storiesOf("Header", module).add("Levels 1-6", () => (
  <div>
    <Header level={1}>h1</Header>
    <Header level={2}>h2</Header>
    <Header level={3}>h3</Header>
    <Header level={4}>h4</Header>
    <Header level={5}>h5</Header>
    <Header level={6}>h6</Header>
  </div>
));
storiesOf("Header", module).add("Shortcuts 1-6", () => (
  <div>
    <H1>h1</H1>
    <H2>h2</H2>
    <H3>h3</H3>
    <H4>h4</H4>
    <H5>h5</H5>
    <H6>h6</H6>
  </div>
));
storiesOf("Header", module).add("Differing sizes", () => (
  <div>
    <Header level={6} size="XXLARGE">
      h6 with XXLARGE style
    </Header>
    <Header level={6} size="XSMALL">
      h2 with XSMALL style
    </Header>
  </div>
));
storiesOf("Header", module).add("Props pass through", () => (
  <div>
    <Header onClick={action("header-click")}>Click me</Header>
  </div>
));

import React from "react";
import { mount } from "enzyme";

import Link from ".";

describe("Breadcrumb Link", () => {
  it("renders without crashing", () => {
    mount(<Link href="#id">Example</Link>);
  });
});

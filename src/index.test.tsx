import RerenderTest from "./index";
import React from "react";

import { render, logDOM } from "@testing-library/react";

describe("RerenderTest", () => {
  it("is truthy", () => {
    expect(RerenderTest).toBeTruthy();
  });
});

describe("App", () => {
  test("renders App component", () => {
    render(<RerenderTest />);
    logDOM();
  });
});

describe("App with Props", () => {
  test("renders App component", () => {
    render(<RerenderTest console name='Jest' />);
    logDOM();
  });
});

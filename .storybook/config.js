import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";
import { addDecorator } from "@storybook/react";
import "carbon-components/css/carbon-components.css";
import "../styles/css/styles.css";
import "../styles/css/cap-grid.css";
import "./styles.css";
import React from "react";
import { ThemeProvider } from "../src/support/theme";
import DefaultTheme from "../src/support/themes/other-products";
import excludedPropTypes from "./excludedPropTypes";
import StoryRouter from "storybook-react-router";

setOptions({
  name: "Capital Components",
  url: "https://github.ibm.com/watson-finance/wfss-components",
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true
});

addDecorator(story => <ThemeProvider theme={DefaultTheme}>{story()}</ThemeProvider>);
addDecorator(StoryRouter());
addDecorator(
  withInfo({
    source: false,
    inline: false,
    excludedPropTypes
  })
);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.(js|ts)x?$/);
const req2 = require.context("../src", true, /\/stories.(js|ts)x?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  req2.keys().forEach(filename => req2(filename));
}

configure(loadStories, module);

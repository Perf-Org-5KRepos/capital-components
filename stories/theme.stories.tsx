import React from "react";
import { storiesOf } from "@storybook/react";
import { Block, InlineBlock } from "capital-components/lib/primitives/elements";
import { withTheme, themeContext } from "capital-components/lib/support/theme";

const stories = storiesOf("Themes", module);

stories.add("All Colors", () => {
  const Comp = withTheme(({ theme }) => (
    <div css="overflow: auto">
      {Object.keys(theme.color).map(key => (
        <Block>
          {key}:{" "}
          <InlineBlock
            css={`
              background-color: ${theme.color[key]};
              width: 30px;
              height: 30px;
              border: 1px solid black;
            `}
          />
          {theme.color[key]}
        </Block>
      ))}
    </div>
  ));

  return <Comp />;
});

stories.add("Primitives", () => (
  <React.Fragment>
    <Block cssWithTheme={({ theme }) => `background-color: ${theme.color.brand01};`}>Brand01</Block>
    <Block cssWithTheme={({ theme }) => `background-color: ${theme.color.brand02};`}>Brand02</Block>
  </React.Fragment>
));

stories.add("WithTheme enhancer", () => {
  const Comp = withTheme(({ theme }) => (
    <Block>
      {theme.color.brand01}:{" "}
      <InlineBlock
        css={`
          background-color: ${theme.color.brand01};
          width: 30px;
          height: 30px;
          border: 1px solid black;
        `}
      />
      {theme.color.brand01}
    </Block>
  ));

  return <Comp />;
});

stories.add("With useContext", () => {
  const theme = React.useContext(themeContext);

  return Object.keys(theme.color).map(key => (
    <Block>
      {key}:{" "}
      <InlineBlock
        css={`
          background-color: ${theme.color[key]};
          width: 30px;
          height: 30px;
          border: 1px solid black;
        `}
      />
      {theme.color[key]}
    </Block>
  ));
});

import { Icon, Popover } from "capital-components";
import NotificationBell from "../../fss-icons/notification-bell_24";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { WithState } from "../../internal/storyHelpers";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

const stories = storiesOf("Components|Popover", module).addDecorator(withReadme([Readme]));

stories.add(
  "Basic",
  withInfo({
    text: `
    Popover provides the bare essential for a popover element. No additional
    styling is applied.
  `
  })(() => (
    <Popover
      reference={({ ref }) => (
        <Icon size="large" title="Mandatory Title (for accessibility)" ref={ref}>
          <NotificationBell />
        </Icon>
      )}
      show={true}
      placement="bottom-end"
      onClickOutside={action("Click outside")}
    >
      Some item Some other item
    </Popover>
  ))
);

stories.add(
  "With State",
  withInfo({
    text: `
    Popover provides the bare essential for a popover element. No additional
    styling is applied.
  `
  })(() => (
    <WithState initialState={{ open: true }}>
      {({ state, setState }) => (
        <Popover
          reference={({ ref }) => (
            <Icon
              size="large"
              title="Mandatory Title (for accessibility)"
              ref={ref}
              onClick={() => setState({ open: !state.open })}
            >
              <NotificationBell />
            </Icon>
          )}
          show={state.open}
          placement="bottom-end"
          onClickOutside={action("Click outside")}
        >
          Some item Some other item
        </Popover>
      )}
    </WithState>
  ))
);

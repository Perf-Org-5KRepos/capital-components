import { FlexDirectionProperty } from "csstype";
import { css, cx } from "emotion";
import React, { ComponentType } from "react";
import { buildAlignment } from "../../layout/alignment";
import { IBreakPointDescriptor } from "../../layout/mediaQueries";
import { buildSpacing } from "../../layout/spacing";
import { styled, Theme, withTheme } from "../../support/theme";

export interface ISharedElementProps {
  /* How to render the padding for this element. Use predefined xs, sm, md, etc padding variables or define a size. */
  padding?: string | IBreakPointDescriptor<string>;
  margin?: string | IBreakPointDescriptor<string>;
  cssWithTheme?: (props: { theme: Theme }) => string;
}

const buildSpacingStyles = ({ padding, margin }: ISharedElementProps) => {
  const paddingStr = buildSpacing(padding);
  const marginStr = buildSpacing(margin, "margin");
  if (paddingStr && marginStr) {
    return `${paddingStr}; ${marginStr}`;
  }

  return paddingStr || marginStr || "";
};

export const addCssWithTheme = ({
  cssWithTheme,
  theme
}: ISharedElementProps & { theme?: Theme }) => {
  if (cssWithTheme && theme) {
    return cssWithTheme({ theme });
  }
  return "";
};

export const buildSharedPropsStyles = (props: ISharedElementProps & { theme?: Theme }) => `
  ${buildSpacingStyles(props)};
  ${addCssWithTheme(props)};
`;

export const makeBaseElement: <Props extends { className?: string }>(
  element: React.ComponentType<Props> | string,
  additionalClassNames?: string[]
) => ComponentType<ISharedElementProps & { className?: string } & Props> = (
  element,
  additionalClassNames = []
) =>
  withTheme(props => {
    const { padding, margin, cssWithTheme, theme, className, ...otherProps } = props;
    const classes = cx(
      css`
        ${buildSharedPropsStyles({ padding, margin, cssWithTheme, theme })};
      `,
      ...additionalClassNames,
      className
    );
    const Element = element as any;
    return <Element className={classes} {...otherProps} />;
  });

// Basic flex dentered box.
export const CenteredBlock = styled("div")<ISharedElementProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${buildSharedPropsStyles};
`;

export const Block = Object.assign(styled("div")<ISharedElementProps>(buildSharedPropsStyles), {
  formatter: buildSharedPropsStyles
});

export const Inline = Object.assign(styled("div")<ISharedElementProps>(buildSharedPropsStyles), {
  formatter: buildSharedPropsStyles
});

const inlineBlockStyleFormatter = (props: FlexProps) => `
  display: inline-block;
  ${buildSharedPropsStyles(props)};
`;

export const InlineBlock = Object.assign(
  styled("div")<ISharedElementProps>(inlineBlockStyleFormatter),
  {
    formatter: inlineBlockStyleFormatter
  }
);

type FlexProps = {
  direction?: FlexDirectionProperty;
  alignment?: string;
} & ISharedElementProps;

const flexStyleFormatter = (props: FlexProps) => `
  display: flex;
  flex-direction: ${props.direction || "row"};
  ${props.alignment ? buildAlignment(props.direction || "row", props.alignment) : ""};
  ${buildSharedPropsStyles(props)};
`;

// Use Object.assign to add additional properties to this component,
// allowing other components to use it's stylings
export const Flex = Object.assign(styled("div")<FlexProps>(flexStyleFormatter), {
  formatter: flexStyleFormatter
});

const SeperatorWrapper = styled("div")`
  position: relative;
`;

const SeperatorInternal = styled("div")<{ inverse?: boolean; fullWidth?: boolean }>`
  background-color: ${({ inverse, theme }) => (inverse ? theme.color.ui01 : theme.color.ui04)};
  height: 1px;
  ${({ fullWidth }) => fullWidth && `position: absolute; width: 120vw; left: -10%;`};
`;

// Seperator is a nested element so we can support a 'fullwidth' line, meaning it
// ignores padding and always crosses
export const Seperator = ({
  inverse,
  fullWidth,
  padding = "md 0",
  className,
  hideBar,
  withinGrid
}: {
  inverse?: boolean;
  fullWidth?: boolean;
  padding?: string | IBreakPointDescriptor<string>;
  className?: string;
  hideBar?: boolean;
  withinGrid?: boolean;
}) => (
  <SeperatorWrapper
    className={cx(className, css(buildSpacing(padding)), {
      "cap-padding--horizontal": withinGrid
    })}
  >
    {!hideBar && <SeperatorInternal inverse={inverse} fullWidth={fullWidth} />}
  </SeperatorWrapper>
);

const VerticalSeperatorInternal = styled("div")<{ inverse?: boolean }>`
  background-color: ${({ inverse, theme }) => (inverse ? theme.color.ui01 : theme.color.ui04)};
  width: 1px;
  position: absolute;
  top: 0;
  bottom: 0;
`;

// Require's parent element to have position relative
// adjust top/bottom of internal element to add top/bottom padding
// TODO: parse padding to convert it into top/bottom adjustments.
export const VerticalSeperator = ({
  inverse,
  padding = "md 0",
  className
}: {
  inverse?: boolean;
  padding?: string | IBreakPointDescriptor<string>;
  className?: string;
}) => (
  <div className={cx(className, css(buildSpacing(padding), css("position: relative;")))}>
    <VerticalSeperatorInternal inverse={inverse} />
  </div>
);

export const ContentWrapper = styled.div<{ forcedBottomPadding?: string | null }>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: auto;

  > * {
    flex-shrink: 0;
  }
  ${({ forcedBottomPadding = "6rem" }) =>
    forcedBottomPadding
      ? `
    > *:last-child {
      ::after {
        min-height: ${forcedBottomPadding};
        height: ${forcedBottomPadding};
        flex: 0 0 ${forcedBottomPadding};
        display: block;
        content: '';
      }
    }
  `
      : ""};
`;

export const MainWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: hidden;
  min-width: 100vw;
`;

// Be careful, the following element cannot be a flex item that wraps a grid element
// This is due to a very annoying bug in safari that causes general weirdness if a
// grid is contained in an expanding flexbox.
export const VerticalScrollableContent = styled.div`
  flex: 1 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  > .cap-container {
    overflow: hidden;
  }
  @supports (-webkit-overflow-scrolling: touch) {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
`;

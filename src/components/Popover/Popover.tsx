import ClickListener from "carbon-components-react/lib/internal/InnerClickListener";
import empty from "empty";
import PopperJS from "popper.js";
import React, { Ref } from "react";
import ReactDOM from "react-dom";
import styled from "react-emotion";
import { Manager, Popper, Reference } from "react-popper";

// Adding this div to get around some madness with IE: https://github.com/philipwalton/flexbugs/issues/216
const IEFixer = styled("div")`
  display: flex;
  flex-direction: row;
`;

export interface IProps {
  /** The reference element. Make sure to pass the ref into the appropriate element. This ref will be used to measure and place the popover */
  reference: (args: { ref: Ref<any> }) => React.ReactNode;
  /** The placement/orientation of the popover. See PopperJS docs for details. */
  placement: PopperJS.Placement;
  /** The contents of the popover. */
  children: React.ReactNode;
  /** To show or hide the popover. */
  show: boolean;
  /** css classname */
  className?: string;
  /** event to trigger on clicking outside of popover when open. */
  onClickOutside?: (ev: MouseEvent) => void;
  /** If edge of popover is invisible, push into view. */
  preventOverflow?: boolean;
  /** Adjust offset from top. */
  offsetTop?: number;
  /** Adjust offset from left. */
  offsetLeft?: number;
  /** Node to use to determine boundaries. */
  boundariesElement?: PopperJS.Boundary | HTMLElement;
}

export const Popover: React.SFC<IProps> = ({
  reference,
  children,
  show,
  placement: outerPlacement,
  onClickOutside = empty.func,
  preventOverflow = true,
  offsetTop = 0,
  offsetLeft = 0,
  boundariesElement = "viewport"
}) => (
  <Manager>
    <Reference>{reference}</Reference>
    {show &&
      ReactDOM.createPortal(
        <Popper
          placement={outerPlacement}
          modifiers={{
            preventOverflow: { enabled: preventOverflow, boundariesElement },
            offset: {
              offset: `${offsetLeft}, ${offsetTop}`
            }
          }}
        >
          {({ ref, style, placement, outOfBoundaries }) => (
            <div
              ref={ref}
              style={{ ...style, zIndex: 9999 }}
              data-placement={placement}
              data-out-of-boundaries={outOfBoundaries}
            >
              <ClickListener onClickOutside={onClickOutside} refKey="innerRef">
                <IEFixer>{children}</IEFixer>
              </ClickListener>
            </div>
          )}
        </Popper>,
        document.querySelector("body")
      )}
  </Manager>
);

export default Popover;

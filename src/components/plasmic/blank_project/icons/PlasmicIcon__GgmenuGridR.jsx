// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GgmenuGridRIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 8h8v8H8V8zm0 12h8v8H8v-8zm8 12H8v8h8v-8zm4-24h8v8h-8V8zm8 12h-8v8h8v-8zm-8 12h8v8h-8v-8zM40 8h-8v8h8V8zm-8 12h8v8h-8v-8zm8 12h-8v8h8v-8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GgmenuGridRIcon;
/* prettier-ignore-end */

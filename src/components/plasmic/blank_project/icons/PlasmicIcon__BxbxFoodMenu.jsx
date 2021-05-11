// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BxbxFoodMenuIcon(props) {
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
        d={"M6 4h4v40H6V4zm14 8h14v4H20v-4zm0 8h14v4H20v-4z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M38 4H12v40h26c2.206 0 4-1.794 4-4V8c0-2.206-1.794-4-4-4zm0 36H16V8h22v32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BxbxFoodMenuIcon;
/* prettier-ignore-end */

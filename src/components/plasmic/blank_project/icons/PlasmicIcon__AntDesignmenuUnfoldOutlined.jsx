// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AntDesignmenuUnfoldOutlinedIcon(props) {
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
          "M19.125 20.719h22.5a.376.376 0 00.375-.375v-2.625a.376.376 0 00-.375-.375h-22.5a.376.376 0 00-.375.375v2.625c0 .206.169.375.375.375zm-.375 9.562c0 .207.169.375.375.375h22.5a.376.376 0 00.375-.375v-2.625a.376.376 0 00-.375-.375h-22.5a.376.376 0 00-.375.375v2.625zM42.375 7.5H5.625a.376.376 0 00-.375.375V10.5c0 .206.169.375.375.375h36.75a.376.376 0 00.375-.375V7.875a.376.376 0 00-.375-.375zm0 29.625H5.625a.376.376 0 00-.375.375v2.625c0 .206.169.375.375.375h36.75a.376.376 0 00.375-.375V37.5a.376.376 0 00-.375-.375zm-35.7-7.027l7.327-5.77a.413.413 0 000-.651l-7.327-5.775a.416.416 0 00-.675.323V29.77a.417.417 0 00.675.328z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignmenuUnfoldOutlinedIcon;
/* prettier-ignore-end */

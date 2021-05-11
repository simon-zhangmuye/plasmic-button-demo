// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AntDesignmenuFoldOutlinedIcon(props) {
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
          "M19.125 20.719h22.5a.376.376 0 00.375-.375v-2.625a.376.376 0 00-.375-.375h-22.5a.376.376 0 00-.375.375v2.625c0 .206.169.375.375.375zm-.375 9.562c0 .207.169.375.375.375h22.5a.376.376 0 00.375-.375v-2.625a.376.376 0 00-.375-.375h-22.5a.376.376 0 00-.375.375v2.625zM42.375 7.5H5.625a.376.376 0 00-.375.375V10.5c0 .206.169.375.375.375h36.75a.376.376 0 00.375-.375V7.875a.376.376 0 00-.375-.375zm0 29.625H5.625a.376.376 0 00-.375.375v2.625c0 .206.169.375.375.375h36.75a.376.376 0 00.375-.375V37.5a.376.376 0 00-.375-.375zM5.409 24.323l7.327 5.77a.416.416 0 00.675-.323V18.23a.415.415 0 00-.675-.324l-7.327 5.77a.41.41 0 000 .647z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignmenuFoldOutlinedIcon;
/* prettier-ignore-end */

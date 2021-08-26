import React from "react";
import antd from "antd";
import Border from "../border";

function Button(props: any) {
  return (
    <Border {...props} className={` ${props.className || ""}`}>
      <antd.Button {...props} className="hx-button">
        {props.children}
      </antd.Button>
    </Border>
  );
}

Button.Group = antd.Button.Group;
Button.__ANT_BUTTON = true;

export default Button;

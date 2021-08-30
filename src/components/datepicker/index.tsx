import React from "react";
import antd from "antd";
import classNames from "classnames";
import Border from "../border";
import "./index.scss";

function DatePicker(props: any) {
  const className = classNames(
    "hx-picker",
    { [`hx-button-${props.type}`]: props.type },
    props.className
  );

  return (
    <div className={className}>
      <Border corner={0}>
        <antd.DatePicker
          {...props}
          bordered={false}
          allowClear={false}
          inputReadOnly={true}
        />
      </Border>
    </div>
  );
}

export default DatePicker;

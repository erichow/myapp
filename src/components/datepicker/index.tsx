import React from "react";
import antd from "antd";
import Border from "../border";
import "./index.scss";

function DatePicker(props: any) {
  return (
    <Border type="primary">
      <antd.DatePicker bordered={false} {...props} className="hx-picker" />
    </Border>
  );
}

export default DatePicker;

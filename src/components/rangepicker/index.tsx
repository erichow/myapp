import React from "react";
import Border from "@/components/border";
import { DatePicker } from "antd";
import { SwapRightOutlined } from "@ant-design/icons";

function RangePicker(props: any) {
  const startRef = React.useRef(null);
  const endRef = React.useRef(null);

  function handleStart(mdate: Object, sdate: String) {
    props.onChange([mdate, endRef.current.props.value]);
  }

  function handleEnd(mdate: Object, sdate: String) {
    props.onChange([startRef.current.props.value, mdate]);
  }

  return (
    <Border corner={0}>
      <DatePicker
        ref={startRef}
        className="hx-picker"
        value={props.value[0]}
        bordered={false}
        onChange={handleStart}
        suffixIcon={<SwapRightOutlined />}
        allowClear={false}
      />
      <DatePicker
        ref={endRef}
        className="hx-picker"
        value={props.value[1]}
        bordered={false}
        onChange={handleEnd}
        allowClear={false}
        style={{ marginLeft: "-11px" }}
      />
    </Border>
  );
}

export default RangePicker;

import * as React from "react";
import { Form, Tooltip } from "antd";
import "./index.scss";

type tooltipType = {
  color: String;
  placement: String;
};

const defaultTooltipProps = {
  color: "red",
  placement: "right",
};

function str2tooltip(
  msg: String,
  props: TooltipTypePropsWithOverlay = defaultTooltipProps
) {
  return <Tooltip visible title={msg} {...props}></Tooltip>;
}

function fn(props: tooltipType = defaultTooltipProps) {
  return <div {...props}>123</div>;
}

function tran(props: {
  rules: Array<{ message: String }>;
  placement: String;
  color: String;
}) {
  const { rules } = props;
  if (!rules) return;
  return rules.map((rule: { message: String }) => {
    return {
      ...rule,
      message: str2tooltip(rule.message, { ...defaultTooltipProps }),
    };
  });
}

function Item(props: any) {
  return (
    <Form.Item {...props} rules={tran(props)} className="hx-form-item">
      {props.children}
    </Form.Item>
  );
}

export default Item;

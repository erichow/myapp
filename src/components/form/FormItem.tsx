import * as React from "react";
import classNames from "classnames";
import { Form, Tooltip, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "./index.scss";

type tooltipType = {
  color: String;
  placement: String;
};

const defaultTooltipProps = {
  color: "red",
  placement: "right",
};

function str2tooltip(msg: String, props: tooltipType = defaultTooltipProps) {
  return <Tooltip visible title={msg} {...props}></Tooltip>;
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
  const className = classNames(
    "hx-form-item",
    { [`hx-form-item-${props.type}`]: props.type },
    props.className
  );
  let cloneChildren = React.Children.map(props.children, (child) =>
    React.cloneElement(child)
  );
  const hasTooltip = (
    <Form.Item noStyle>
      <Form.Item
        label={props.label}
        name={props.name}
        className={className}
        rules={tran(props)}
        style={{ marginRight: 0 }}
      >
        {props.children}
      </Form.Item>
      <Tooltip placement="right" title={props.desc} color="red">
        <ExclamationCircleOutlined
          style={{
            cursor: "pointer",
            color: "orange",
            marginRight: "16px",
            marginLeft: "5px",
          }}
        />
      </Tooltip>
    </Form.Item>
  );
  const noTooltip = (
    <Form.Item {...props} rules={tran(props)} className={className}>
      {props.children}
    </Form.Item>
  );
  return <>{props.desc ? hasTooltip : noTooltip}</>;
}

export default Item;

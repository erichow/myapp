import { Form, Tooltip } from "antd";
import "./index.scss";

const defaultProps = {
  visible: true,
  placement: "right",
  color: "red",
};

function str2tooltip(msg: String, props = defaultProps) {
  if (typeof msg === "string") {
    return <Tooltip title={msg} {...props}></Tooltip>;
  }
  return msg;
}

function tranRule(rule: any) {
  return { ...rule, message: str2tooltip(rule.message) };
}

function tranRules(rules: any) {
  return rules.map((rule: Object) => tranRule(rule));
}

function tran(rules: Array<{ message: String }>) {
  const type = Object.prototype.toString.call(rules).slice(8, -1);
  switch (type) {
    case "Array":
      return tranRules(rules);
    default:
      return rules;
  }
}

function Item(props: any) {
  return (
    <Form.Item {...props} rules={tran(props.rules)} className="hx-form-item">
      {props.children}
    </Form.Item>
  );
}

export default Item;

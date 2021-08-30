import antd from "antd";
import classNames from "classnames";

function Col(props) {
  return <antd.Col {...props}>{props.children}</antd.Col>;
}

export default Col;

import antd from "antd";

function Space(props) {
  return <antd.Space {...props}>{props.children}</antd.Space>;
}

export default Space;

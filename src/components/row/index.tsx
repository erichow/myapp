import antd from "antd";

function Row(props) {
  return <antd.Row {...props}>{props.children}</antd.Row>;
}

export default Row;

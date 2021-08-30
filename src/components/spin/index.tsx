import antd from "antd";

function Spin(props) {
  return <antd.Spin {...props}>{props.children}</antd.Spin>;
}

export default Spin;

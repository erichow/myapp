import antd from "antd";
import Border from "../border";
import classNames from "classnames";
import "./index.scss";

const className = classNames("hx-input");
function Input(props: any) {
  return <antd.Input {...props} className={className} />;
}

Input.Group = antd.Input.Group;
Input.Search = antd.Input.Search;
Input.TextArea = antd.Input.TextArea;
Input.Password = antd.Input.Password;

export default Input;

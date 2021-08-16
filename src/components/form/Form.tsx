import antd from "antd";
import Item from "@/components/Form.tem";
import styles from "./index.scss";

function Form(props: any) {
  return <antd.Form {...props}>{props.children}</antd.Form>;
}

export default Form;

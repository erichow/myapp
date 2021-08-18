import antd from "antd";
import Item from "@/components/Form.tem";
import styles from "./index.scss";

function Form(props: any) {
  return (
    <antd.Form {...props} className="hx-form">
      {props.children}
    </antd.Form>
  );
}

export default Form;

import antd from "antd";
import classNames from "classnames";
import Item from "@/components/Form.tem";
import styles from "./index.scss";

function Form(props: any) {
  const className = classNames(
    "hx-form",
    { [`hx-form-${props.layout}`]: props.layout },
    props.className
  );
  return (
    <antd.Form {...props} className={className}>
      {props.children}
    </antd.Form>
  );
}

export default Form;

import { Input } from "antd";
import { Layout, Form, Tabs } from "@/components/index";

function tranItem(props: any) {
  function tran(props: any) {
    props.rules = props.rules || [];
    const rules = props.required
      ? [{ required: true, message: "必填" }, ...props.rules]
      : [...props.rules];
    return { ...props, rules };
  }
  return <Form.Item {...tran(props)}>{props.children || <Input />}</Form.Item>;
}

function tranForm(params: any) {
  const { fields, props } = params;
  return (
    <Form {...props}>
      {fields.map((item: any) => {
        return item.content || tranItem(item);
      })}
    </Form>
  );
}

export { tranItem, tranForm };

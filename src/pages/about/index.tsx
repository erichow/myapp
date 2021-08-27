import styles from "./index.scss";
import React from "react";
import moment from "moment";
import { SwapRightOutlined } from "@ant-design/icons";
import { Form, Button, RangePicker, DatePicker } from "@/components";

export default function IndexPage() {
  return (
    <div>
      <Form
        onFinish={console.log}
        layout="inline"
        initialValues={{
          aa: [moment(), moment().add(1, "days")],
          bb: moment(),
        }}
      >
        <Form.Item
          name="aa"
          label="日期"
          rules={[{ required: true, message: "必填" }]}
        >
          <RangePicker />
        </Form.Item>
        <Form.Item
          name="bb"
          label="日期"
          rules={[{ required: true, message: "必填" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" ghost htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

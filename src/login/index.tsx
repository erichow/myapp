import React from "react";
import {
  Layout,
  Row,
  Col,
  Button,
  Spin,
  Space,
  Tabs,
  Tooltip,
  Input,
} from "antd";
import Form from "@/components/form";
import styles from "./index.scss";

const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;

const index = (props) => {
  const [errorMsg, setErrorMsg] = React.useState("123");
  const [form] = Form.useForm();
  function callback(key) {
    console.log(key);
    debugger;
    form.setFieldsValue({ type: key });
  }
  return (
    <Layout id="layout" className={styles.layout}>
      <Header>Header</Header>
      <Layout>
        <Content>
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Row>
              <Col
                span={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                logo
              </Col>
              <Col
                span={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div style={{ border: "1px solid red", padding: "0 20px" }}>
                  <Tabs defaultActiveKey="0" onChange={callback}>
                    <TabPane tab="EVI用户" key="0">
                      <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ width: "300px" }}
                        initialValues={{ type: 0 }}
                        onFinish={console.log}
                        // onFinishFailed={onFinishFailed}
                      >
                        <Form.Item hidden label="type" name="type">
                          <Input />
                        </Form.Item>

                        <Form.Item
                          label="用户名"
                          name="username"
                          rules={[{ required: true, message: "必填" }]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          label="Password"
                          name="password"
                          rules={[{ required: true, message: "必填" }]}
                        >
                          <Input.Password />
                        </Form.Item>

                        <Form.Item label="captchid">
                          <Space>
                            <Form.Item
                              noStyle
                              name="captchid"
                              rules={[{ required: true, message: "必填" }]}
                            >
                              <Input
                                style={{
                                  width: "70px",
                                  display: "inline-block",
                                }}
                              />
                            </Form.Item>
                            <Spin spinning={false}>
                              <img
                                alt="验证码"
                                src=""
                                style={{
                                  width: "70px",
                                  border: "1px solid red",
                                  display: "inline-block",
                                }}
                              />
                            </Spin>
                          </Space>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button type="primary" htmlType="submit">
                            登入
                          </Button>
                        </Form.Item>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Button type="link">忘记密码</Button>
                        </div>
                        <p style={{ textAlign: "center" }}>三一集团华兴数字</p>
                      </Form>
                    </TabPane>
                    <TabPane tab="域用户" key="1">
                      <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{
                          width: "300px",
                        }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                      >
                        <Form.Item hidden label="type" name="type">
                          <Input />
                        </Form.Item>

                        <Form.Item
                          label="用户名"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: (
                                <Tooltip
                                  title="必填"
                                  visible
                                  placement="right"
                                  color="red"
                                ></Tooltip>
                              ),
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          label="Password"
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>

                        <Form.Item label="captchid">
                          <Space>
                            <Form.Item
                              noStyle
                              name="captchid"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your password!",
                                },
                              ]}
                            >
                              <Input
                                style={{
                                  width: "70px",
                                  display: "inline-block",
                                }}
                              />
                            </Form.Item>
                            <Spin spinning={false}>
                              <img
                                alt="验证码"
                                src=""
                                style={{
                                  width: "70px",
                                  display: "inline-block",
                                }}
                              />
                            </Spin>
                          </Space>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button type="primary" htmlType="submit">
                            登入
                          </Button>
                        </Form.Item>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Button type="link">忘记密码</Button>
                        </div>
                        <p style={{ textAlign: "center" }}>三一集团华兴数字</p>
                      </Form>
                    </TabPane>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        易维讯系统ICP备案号：沪ICP备15026710号-3
      </Footer>
    </Layout>
  );
};

export default index;

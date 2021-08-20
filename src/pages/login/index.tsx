import _ from "lodash";
import { tranItem, tranForm } from "@/components/tool";
import React from "react";
import {
  Row,
  Col,
  Spin,
  Space,
  Tooltip,
  Input,
  // Button,
  // Layout,
  // Form,
  // Tabs,
} from "antd";
import { Button, Layout, Form, Tabs } from "@/components/index";
import "./index.scss";

const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;

const index = (props) => {
  const [form] = Form.useForm();
  function callback(key) {
    form.setFieldsValue({ type: key });
  }

  return (
    <Layout className="full">
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
              <Col span={12} className="center">
                logo
              </Col>
              <Col span={12} className="center">
                <div className="loginform">
                  <Tabs defaultActiveKey="0" onChange={callback}>
                    <TabPane tab="EVI用户" key="0">
                      {tranForm({
                        props: {
                          form: form,
                          layout: "vertical",
                          style: { width: "250px" },
                          initialValues: { type: 0 },
                          onFinish: console.log,
                        },
                        fields: [
                          { hidden: true, label: "type", name: "type" },
                          { label: "用户名", name: "username", required: true },
                          {
                            label: "密码",
                            name: "password",
                            required: true,
                            children: <Input.Password />,
                          },
                          {
                            content: [
                              <Form.Item label="captchid">
                                <Space>
                                  {tranItem({
                                    noStyle: true,
                                    name: "captchid",
                                    required: true,
                                  })}
                                  <Spin spinning={false}>
                                    <img
                                      alt="验证码"
                                      style={{ width: "82px" }}
                                      src="https://evidev.sanyevi.cn/api/generateCaptcha"
                                    />
                                  </Spin>
                                </Space>
                              </Form.Item>,
                              <div className="center">
                                <Button type="primary" htmlType="submit">
                                  登入
                                </Button>
                              </div>,
                              <div className="right">
                                <Button type="link">忘记密码</Button>
                              </div>,
                              <p className="center">三一集团华兴数字</p>,
                            ],
                          },
                        ],
                      })}
                    </TabPane>
                    <TabPane tab="域用户" key="1">
                      <Form
                        layout="vertical"
                        style={{
                          width: "250px",
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

                        <div className="center">
                          <Button type="primary" htmlType="submit">
                            登入
                          </Button>
                        </div>
                        <div className="right">
                          <Button type="link">忘记密码</Button>
                        </div>
                        <p className="center">三一集团华兴数字</p>
                      </Form>
                    </TabPane>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
      <Footer className="center">
        易维讯系统ICP备案号：沪ICP备15026710号-3
      </Footer>
    </Layout>
  );
};

export default index;

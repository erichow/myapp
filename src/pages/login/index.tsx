import _ from "lodash";
import { tranItem, tranForm } from "@/components/tool";
import React from "react";
import {
  Row,
  Col,
  Space,
  Spin,
  Tooltip,
  Input,
  Button,
  Layout,
  Form,
  Tabs,
} from "@/components/index";
import "./index.scss";

const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;

enum AccountType {
  "1VI用户",
  "域用户",
}

const index = (props: any) => {
  const [form] = Form.useForm();
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
                <Tooltip title="...">logo</Tooltip>
              </Col>
              <Col span={12} className="center">
                <div className="loginform">
                  <Tabs
                    defaultActiveKey={AccountType["1VI用户"]}
                    onChange={(type: number) => form.setFieldsValue({ type })}
                  >
                    <TabPane
                      tab="1VI用户"
                      key={AccountType["1VI用户"]}
                    ></TabPane>
                    <TabPane tab="域用户" key={AccountType["域用户"]}></TabPane>
                  </Tabs>
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
                                  src=""
                                />
                              </Spin>
                            </Space>
                          </Form.Item>,
                          <Form.Item style={{ paddingTop: 0 }}>
                            <Button type="primary" ghost htmlType="submit">
                              登 入
                            </Button>
                          </Form.Item>,
                          <div className="right">
                            <Button type="link">忘记密码</Button>
                          </div>,
                          <p className="center">XXXX集团XXXXX数字</p>,
                        ],
                      },
                    ],
                  })}
                </div>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
      <Footer className="center">
        XXXXXX系统ICP备案号：沪ICP备15021100号-3
      </Footer>
    </Layout>
  );
};

export default index;

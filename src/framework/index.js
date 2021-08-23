import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "umi";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const index = (props) => {
  return _jsxs(
    Layout,
    {
      children: [
        _jsx(Header, { children: "Header" }, void 0),
        _jsxs(
          Layout,
          {
            children: [
              _jsx(
                Sider,
                {
                  children: _jsxs(
                    Menu,
                    Object.assign(
                      {
                        defaultSelectedKeys: ["/about"],
                        defaultOpenKeys: ["sub1"],
                        mode: "inline",
                        theme: "dark",
                      },
                      {
                        children: [
                          _jsx(
                            Menu.Item,
                            Object.assign(
                              { icon: _jsx(PieChartOutlined, {}, void 0) },
                              {
                                children: _jsx(
                                  Link,
                                  Object.assign(
                                    { to: "/about" },
                                    { children: "about" }
                                  ),
                                  void 0
                                ),
                              }
                            ),
                            "/about"
                          ),
                          _jsx(
                            Menu.Item,
                            Object.assign(
                              { icon: _jsx(DesktopOutlined, {}, void 0) },
                              {
                                children: _jsx(
                                  Link,
                                  Object.assign(
                                    { to: "/market" },
                                    { children: "market" }
                                  ),
                                  void 0
                                ),
                              }
                            ),
                            "/market"
                          ),
                          _jsx(
                            Menu.Item,
                            Object.assign(
                              { icon: _jsx(ContainerOutlined, {}, void 0) },
                              { children: "Option 3" }
                            ),
                            "3"
                          ),
                          _jsxs(
                            SubMenu,
                            Object.assign(
                              {
                                icon: _jsx(MailOutlined, {}, void 0),
                                title: "Navigation One",
                              },
                              {
                                children: [
                                  _jsx(
                                    Menu.Item,
                                    { children: "Option 5" },
                                    "5"
                                  ),
                                  _jsx(
                                    Menu.Item,
                                    { children: "Option 6" },
                                    "6"
                                  ),
                                  _jsx(
                                    Menu.Item,
                                    { children: "Option 7" },
                                    "7"
                                  ),
                                  _jsx(
                                    Menu.Item,
                                    { children: "Option 8" },
                                    "8"
                                  ),
                                ],
                              }
                            ),
                            "sub1"
                          ),
                          _jsxs(
                            SubMenu,
                            Object.assign(
                              {
                                icon: _jsx(AppstoreOutlined, {}, void 0),
                                title: "Navigation Two",
                              },
                              {
                                children: [
                                  _jsx(
                                    Menu.Item,
                                    { children: "Option 9" },
                                    "9"
                                  ),
                                  _jsx(
                                    Menu.Item,
                                    { children: "Option 10" },
                                    "10"
                                  ),
                                  _jsxs(
                                    SubMenu,
                                    Object.assign(
                                      { title: "Submenu" },
                                      {
                                        children: [
                                          _jsx(
                                            Menu.Item,
                                            { children: "Option 11" },
                                            "11"
                                          ),
                                          _jsx(
                                            Menu.Item,
                                            { children: "Option 12" },
                                            "12"
                                          ),
                                        ],
                                      }
                                    ),
                                    "sub3"
                                  ),
                                ],
                              }
                            ),
                            "sub2"
                          ),
                        ],
                      }
                    ),
                    void 0
                  ),
                },
                void 0
              ),
              _jsx(Content, { children: props.children }, void 0),
            ],
          },
          void 0
        ),
        _jsx(Footer, { children: "Footer" }, void 0),
      ],
    },
    void 0
  );
};
export default index;
//# sourceMappingURL=index.js.map

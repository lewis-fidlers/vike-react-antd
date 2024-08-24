import "./style.css";

import React, { useState } from "react";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}

import {
  StarOutlined,
  CheckSquareOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Flex, Layout, Menu, theme, Typography } from "antd";
import { usePageContext } from "vike-react/usePageContext";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const { Title } = Typography;

const items: MenuItem[] = [
  getItem(<Link href="/">Welcome</Link>, "welcom", <CoffeeOutlined />),
  getItem(<Link href="/todo">Todo</Link>, "todo", <CheckSquareOutlined />),
  getItem(
    <Link href="/star-wars">Star wars</Link>,
    "star-wars",
    <StarOutlined />,
  ),
];
const getActiveKeyFromUrl = (pathname: string): string => {
  if (pathname === "/") {
    return "welcom";
  }
  if (pathname.startsWith("/todo")) {
    return "todo";
  }
  if (pathname.startsWith("/star-wars")) {
    return "star-wars";
  }
  return "";
};

const LayoutDefault: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { urlPathname } = usePageContext();

  // Get the active key based on the current URL path
  const activeKey = getActiveKeyFromUrl(urlPathname);
  console.info(activeKey);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical">
          <Flex vertical={false} justify="center">
            <Logo />
          </Flex>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          selectedKeys={[activeKey]}
          items={items}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              marginTop: 16,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutDefault;

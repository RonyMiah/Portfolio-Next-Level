"use client";



import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import {
  UploadOutlined,
 
} from "@ant-design/icons";
import { FaSkiing } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { RiBloggerFill } from "react-icons/ri";
import ProjectPage from "../addproject/page";
import AddBlog from "../addblog/page";
import AddSkills from "../addskills/page";
import AddExprence from "../addexprence/page";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <AiFillProject />,
    label: "Add Project",
    component: <ProjectPage />,
  },
  {
    key: "2",
    icon: <RiBloggerFill />,
    label: "Add Blog",
    component: <AddBlog />,
  },
  {
    key: "3",
    icon: <FaSkiing />,
    label: "Add Skills",
    component: <AddSkills />,
  },
  {
    key: "4",
    icon: <UploadOutlined />,
    label: "Add Experience",
    component: <AddExprence />,
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("1"); // State to track selected menu item

  const handleMenuClick = (e: any) => {
    setSelectedMenuItem(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical text-center py-4"> DashBoard </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenuItem]}
          onClick={handleMenuClick}
        >
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, background: colorBgContainer }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Render the selected component */}
            {items.find((item) => item.key === selectedMenuItem)?.component}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Design ©{new Date().getFullYear()} Created by Rony Miah
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;

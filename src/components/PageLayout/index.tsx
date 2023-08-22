"use client";

import { Layout } from "antd";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";

const { Sider, Content } = Layout;

const PageLayout = ({ children }: any) => {
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9"
  };

  return (
    <Layout>
      <Sider width={250}>
        <Sidebar />
      </Sider>

      <Layout>
        <Header />
        <Content style={contentStyle}>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default PageLayout;

import AppHeader from '@/components/AppHeader';
import AppSider from '@/components/AppSider';
import AppTitle from '@/components/AppTitle';
import { Outlet } from 'umi';

import { Layout } from 'antd';
import React from 'react';
import './index.less';

const { Header, Footer, Sider, Content } = Layout;

const appHeaderStyle: React.CSSProperties = {
  height: 72,
  lineHeight: '72px',
  padding: 0,
  backgroundColor: '#f7f9fc',
};

const contentStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '#f7f9fc',
};

const siderStyle: React.CSSProperties = {
  padding: 0,
  height: '100%',
  backgroundColor: '#f0f3f6',
};

const siderHeaderStyle: React.CSSProperties = {
  padding: 0,
  backgroundColor: '#f0f3f6',
  height: 72,
};

const siderContentStyle: React.CSSProperties = {
  padding: 0,
  backgroundColor: '#f0f3f6',
  overflow: 'hidden',
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#fafafa',
  height: 80,
};

export default function layout() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Layout>
        <Layout>
          <Sider width="230" style={siderStyle}>
            <Layout>
              <Header style={siderHeaderStyle}>
                <AppTitle />
              </Header>
              <Content style={siderContentStyle}>
                <AppSider />
              </Content>
            </Layout>
          </Sider>
          <Layout>
            <Header style={appHeaderStyle}>
              <AppHeader />
            </Header>
            <Content style={contentStyle}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  );
}

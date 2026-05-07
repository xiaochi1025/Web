import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd'
import { Home } from '@/pages/home'
import { About } from '@/pages/about'
import {
  HomeOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import './Router.css'

const { Header, Content, Footer } = Layout

export const AppRouter: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <BrowserRouter>
      <Layout className="app-layout" style={{ minHeight: '100vh' }}>
        <Header className="app-header">
          <div className="logo">React App</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['/']}
            items={[
              {
                key: '/',
                icon: <HomeOutlined />,
                label: <a href="/">首页</a>,
              },
              {
                key: '/about',
                icon: <InfoCircleOutlined />,
                label: <a href="/about">关于</a>,
              },
            ]}
          />
        </Header>
        <Content style={{ padding: '2rem', background: colorBgContainer }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          React App ©{new Date().getFullYear()} Created with Ant Design
        </Footer>
      </Layout>
    </BrowserRouter>
  )
}


import React from 'react';
import {Layout, } from 'antd'
import AppHeader from '../components/header';
import AppNavigationBar from '../components/navigationBar'
import AppFooter from '../components/footer'

const {Content} = Layout

const layoutStyle = {
  minHeight: '100vh',
}
const contentStyle = {
  display: 'flex',
  height: '100%'
}
/**
 * Layout component used to generate header and footer component
 */
 // <AppFooter></AppFooter>
function AppLayout({children, style}) {
  return (
    <Layout style={layoutStyle}>
    <AppHeader></AppHeader>
    <AppNavigationBar ></AppNavigationBar>
    <Content style={{...contentStyle, ...style}}>{children}</Content>
    </Layout>
  )
}

export default AppLayout;

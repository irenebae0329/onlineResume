import { Layout, theme, Button } from 'antd';
import HeaderMenu from '@src/components/Menu'
import SiderMenu from './Sider';
import RContent from './Content';
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Footer } from 'antd/es/layout/layout';
import './index.scss'
const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 992);
  const marginLeft = collapsed ? '80px':`${150 / 11.25}vw`
  console.log(marginLeft)
  return (
    <Layout className='page resume'>
      <Header className='header' style={{ backgroundColor: ' #27292c' }}>
        <div className="demo-logo" />
        <HeaderMenu />
      </Header>
      <Layout hasSider >
        <Sider
          className='sider'
          trigger={null}
          collapsible collapsed={collapsed}
          onBreakpoint={() => {
            setCollapsed(window.innerWidth < 992);
          }}
          breakpoint='lg'
          theme='light'
          width= {collapsed ? '80px':`${150 / 11.25}vw`}
        >
          <SiderMenu collapsed={collapsed}></SiderMenu>
        </Sider>
        <Layout className='resumeContent' style={{
          width:'975vw',
          marginLeft:marginLeft
        }}>
          <Header className='content-header'>
          <Button
              style={collapsed && window.innerWidth < 992  ? { display:'none'} : {} }
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />

            <Button type='primary'
              style={{
                float: 'right',
                marginTop: '15px',
                marginRight: '12px'
              }}
              className='button'
            >导出pdf</Button>
          </Header>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
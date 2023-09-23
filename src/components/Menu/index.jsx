import React, { useEffect, useState } from 'react';
import {  MailOutlined, SettingOutlined,GithubOutlined,BackwardFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import useRouter from '@src/hook/useRouter';
import './index.scss'
const items = [
  {
    label:'后退',
    key:'back',
    icon:<BackwardFilled></BackwardFilled>
  },
  {
    label: '简历',
    key: 0,
    icon: <MailOutlined />,
  },
  {
    label: '关于',
    key: 1,
    icon: <SettingOutlined />,
  },
  {
    label: '源码',
    key:2,
    icon:<GithubOutlined />
  },
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const jumpTo=useRouter() 
  const onClick = ({key}) => {
    console.log(key)
    jumpTo(key)
  };
  return (
  <>
  <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='menu' style={{backgroundColor: ' #27292c',color:'#f0f0f0'}}/>
  </>)
};
export default App;
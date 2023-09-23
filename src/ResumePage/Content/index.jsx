import './index.scss'
import { Layout, Space } from 'antd';
import ResumeSider from './Component/ResumeSider';
const { Header, Footer, Sider, Content } = Layout;
const RContent=()=>{  
    return (
    <>
      <div className='contentBox'
          style={{
           }}
      >
      <Layout style={{
         minHeight:'100vh'
        }}
         >
        <Sider theme='light'>
          <ResumeSider></ResumeSider>
        </Sider>
      <Layout>
        <Content >Content</Content>
      </Layout>
    </Layout>
  </div>
    </>
)
}

export default RContent
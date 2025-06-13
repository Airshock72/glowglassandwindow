import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import AppHeader from 'src/modules/header/views/IndexPage.tsx'

const { Content } = Layout

const PrivateLayout = () => {
  return (
    <Layout className='h-dvh'>
      <Layout>
        <AppHeader />
        <Content className='bg-slate-100 p-5 overflow-auto'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default PrivateLayout

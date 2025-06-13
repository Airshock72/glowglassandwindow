import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import AppHeader from 'src/modules/header/views/IndexPage.tsx'

const { Content } = Layout

const PrivateLayout = () => {
  return (
    <Layout className='h-dvh'>
      <Layout>
        <AppHeader />
        <Content className='overflow-auto min-h-screen bg-[#c8e3fb]!'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default PrivateLayout

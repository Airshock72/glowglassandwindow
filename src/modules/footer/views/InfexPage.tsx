import { useMemo } from 'react'
import { Layout, Typography } from 'antd'

const { Footer } = Layout
const { Text } = Typography

const AppFooter = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <Footer className='text-center p-4 bg-slate-800!'>
      <Text type='secondary' className='block! text-slate-100!'>
                © {currentYear} Glow Glass & window Enterprises Inc. All rights reserved.
      </Text>
    </Footer>
  )
}

export default AppFooter
import './index.css'
import '@ant-design/v5-patch-for-react-19'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/ka'
import locale from 'antd/locale/ka_GE'

dayjs.locale('ka')

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>
  </HashRouter>
)

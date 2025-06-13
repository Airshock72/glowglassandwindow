import { Divider } from 'antd'
import RequestCall from 'src/modules/home/views/RequestCall.tsx'
import FeaturedServices from 'src/modules/home/views/FeaturedServices.tsx'
import AppFooter from 'src/modules/footer/views/InfexPage.tsx'
import ServicesAndResources from 'src/modules/home/views/ServicesAndResources.tsx'


const Home = () => {
  return (
    <>
      <RequestCall />
      <Divider size='large' />
      <FeaturedServices />
      <Divider size='large' />
      <ServicesAndResources />
      <AppFooter />
    </>
  )
}

export default Home

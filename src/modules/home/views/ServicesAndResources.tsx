import { Col, Flex, List, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'
import MainLogo from '../../../../logo.svg?react'


const { Title } = Typography

const ServicesAndResources = () => {
  return (
    <Flex vertical className='w-7xl! mx-auto! py-10!'>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <Flex vertical className='space-y-15!' align='center' justify='center'>

            <MainLogo className='w-35! h-35! mb-0!' />

            <Flex vertical justify='center' align='center'>
              <Title level={2} className='mb-0! font-bold!'>Glow Glass</Title>
              <Title level={1} className='mt-0! mb-4! font-bold!'>& Window</Title>
            </Flex>

          </Flex>
        </Col>

        <Col xs={24} md={5}>
          <Title level={5} className='mb-4 font-bold'>Services</Title>
          <List
            dataSource={['My Store', 'Free Quote', 'Financing', 'Reviews']}
            renderItem={(item) => (
              <List.Item className='p-0 mb-2'>
                <Link to='#' className='text-base'>{item}</Link>
              </List.Item>
            )}
          />
        </Col>

        <Col xs={24} md={5}>
          <Title level={5} className='mb-4 font-bold'>Company</Title>
          <List
            dataSource={['Home', 'Locations', 'Franchise', 'Contact']}
            renderItem={(item) => (
              <List.Item className='p-0 mb-2'>
                <Link to='#' className='text-base'>{item}</Link>
              </List.Item>
            )}
          />
        </Col>

        <Col xs={24} md={5}>
          <Title level={5} className='mb-4 font-bold'>Resources</Title>
          <List
            dataSource={['Consumer Blog', 'Search', 'Privacy Policy', 'Sitemap']}
            renderItem={(item) => (
              <List.Item className='p-0 mb-2'>
                <Link to='#' className='text-base'>{item}</Link>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Flex>
  )
}

export default ServicesAndResources
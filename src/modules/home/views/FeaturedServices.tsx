import { Button, Card, Col, Flex, Row, Typography } from 'antd'
import workingImage from 'src/assets/media/images/working.png'
import windowImage from 'src/assets/media/images/window.png'
import petDoorImage from 'src/assets/media/images/petdoor.png'
import mirrorFrameImage from 'src/assets/media/images/mirror-frame.png'

const { Title, Paragraph, Text } = Typography

const services = [
  {
    key: 'window-door-glass',
    title: 'Window & Door Glass',
    image: workingImage,
    description: (
      <>
        <Text strong>When glass breaks, our expert technicians can replace just the glass in your windows and doors</Text>, saving you both time and money compared to a full replacement. We focus on quick, efficient service to ensure everything looks and works perfectly.
      </>
    ),
    buttonText: 'Go to Window & Door Glass'
  },
  {
    key: 'foggy-window-repair',
    title: 'Foggy Window Repair',
    image: windowImage,
    description: (
      <>
        <Text strong>Unlike other companies who try to sell you an entire package of new windows</Text>, our team of skilled technicians can fix just the glass in your existing windows and doors, saving you the cost and hassle of a full replacement. We’re all about getting the job done quickly and making sure it looks just right.
      </>
    ),
    buttonText: 'Go to Foggy Window Repair'
  },
  {
    key: 'in-glass-pet-doors',
    title: 'In-Glass/Screen Pet Doors',
    image: petDoorImage,
    description: (
      <>
        <Text strong>Our uniquely designed in-glass and in-screen pet doors</Text>, offer a clean, modern look that complements your sliding glass patio, French or screen doors, providing an elegant solution that maintains the visual appeal of your space.
      </>
    ),
    buttonText: 'Go to In-Glass/Screen Pet Doors'
  },
  {
    key: 'custom-mirror-frames',
    title: 'Custom Mirror Frames',
    image: mirrorFrameImage,
    description: (
      <>
        <Text strong>Our custom mirror frames at The Glass Guru are a simple and affordable way to refresh your home or business.</Text>, Adding a frame to a bathroom vanity mirror or any wall mirror is an easy and affordable upgrade that can significantly enhance the look and feel of a room.
      </>
    ),
    buttonText: 'Go to Mirror Frames'
  }
]

const ServiceCard = ({ title, image, description, buttonText }: typeof services[number]) => (
  <Card
    hoverable
    cover={<img src={image} alt={title} className='object-cover w-full h-64' />}
  >
    <Flex vertical className='h-50!' justify='space-between'>
      <Flex vertical>
        <Title level={4} className='mb-4'>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Flex>
      <Button type='primary' block>{buttonText}</Button>
    </Flex>
  </Card>
)

const FeaturedServices = () => {
  return (
    <Row className='w-7xl! mx-auto!' align='middle'>
      <Title level={2} className='mb-2'>Featured Services</Title>
      <Row gutter={[40, 40]}>
        {services.map(service => (
          <Col xs={24} md={12} key={service.key}>
            <ServiceCard {...service} />
          </Col>
        ))}
      </Row>
    </Row>
  )
}

export default FeaturedServices
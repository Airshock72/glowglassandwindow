import { Button, Card, Col, Form, Input, Row } from 'antd'

const RequestCall = () => {
  const [form] = Form.useForm()
  return (
    <Row className='w-7xl! mx-auto! h-80!' align='middle'>
      <Card
        title='Let Us Call You'
        className='w-full! text-white! h-52!'
      >
        <Form
          form={form}
          layout='vertical'
          onFinish={values => console.info(values)}
        >
          <Row gutter={[16, 16]}>
            <Col span={3}>
              <Form.Item
                label='First Name'
                name='firstName'
                rules={[{ required: true, message: 'First Name is required' }]}
              >
                <Input placeholder='Enter your first name' />
              </Form.Item>
            </Col>

            <Col span={3}>
              <Form.Item
                label='Last Name'
                name='lastName'
                rules={[{ required: true, message: 'Last Name is required' }]}
              >
                <Input placeholder='Enter your last name' />
              </Form.Item>
            </Col>

            <Col span={4}>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  { required: true, message: 'Email is required' },
                  { type: 'email', message: 'Enter a valid email address' }
                ]}
              >
                <Input placeholder='Enter your email' />
              </Form.Item>
            </Col>

            <Col span={4}>
              <Form.Item
                label='Phone Number'
                name='phone'
                rules={[
                  { required: true, message: 'Phone Number is required' },
                  {
                    pattern: /^\d{10}$/,
                    message: 'Enter a valid 10-digit phone number'
                  }
                ]}
              >
                <Input
                  placeholder='e.g. 1234567890'
                  addonBefore='+1'
                />
              </Form.Item>
            </Col>

            <Col span={3}>
              <Form.Item
                label='ZIP/Postal Code'
                name='zip'
                rules={[{ required: true, message: 'ZIP/Postal Code is required' }]}
              >
                <Input placeholder='Enter your ZIP/Postal Code' />
              </Form.Item>
            </Col>

            <Col span={6} className='self-baseline!'>
              <Form.Item className='mt-[30px]!'>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='bg-red-600 text-white w-full'
                >
                                    Request a Call
                </Button>
              </Form.Item>
            </Col>
          </Row>

        </Form>
      </Card>
    </Row>
  )
}

export default RequestCall
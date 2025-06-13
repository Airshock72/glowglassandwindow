import { Header } from 'antd/es/layout/layout'
import MainLogo from '../../../../logo.svg?react'
import { Flex, Menu, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const { Text } = Typography

const renderLabelWithArrow = (label: string) => (
  <span className='group cursor-pointer inline-flex items-center select-none'>
    {label}
    <DownOutlined
      className='
        ml-1!
        transition-transform!
        duration-300!
        ease-in-out!
        group-hover:rotate-180!
      '
    />
  </span>
)

const items = [
  {
    key: 'glass',
    label: renderLabelWithArrow('Glass'),
    children: [
      { key: 'window-door-glass', label: 'Window & Door Glass' },
      { key: 'foggy-window-repair', label: 'Foggy Window Repair' },
      { key: 'foggy-window-restoration', label: 'Foggy Window Restoration' },
      { key: 'custom-cut-glass', label: 'Custom Cut Glass' },
      { key: 'decorative-glass', label: 'Decorative Glass' },
      { key: 'glass-panels-partitions', label: 'Glass Panels & Partitions' },
      { key: 'glass-stain-removal', label: 'Glass Stain Removal' }
    ]
  },
  {
    key: 'mirrors',
    label: renderLabelWithArrow('Mirrors'),
    children: [
      { key: 'mirrors-child', label: 'Mirrors' },
      { key: 'mirror-frames', label: 'Mirror Frames' }
    ]
  },
  {
    key: 'showers-bath',
    label: renderLabelWithArrow('Showers & Bath'),
    children: [
      { key: 'shower-bath-glass', label: 'Shower & Bath Glass' },
      { key: 'glass-shower-restoration', label: 'Glass Shower Restoration Services' }
    ]
  },
  {
    key: 'windows',
    label: renderLabelWithArrow('Windows'),
    children: [
      { key: 'replacement-windows', label: 'Replacement Windows' },
      { key: 'window-styles', label: 'Window Styles' },
      { key: 'window-repair', label: 'Window Repair' },
      { key: 'window-restoration', label: 'Window Restoration' },
      { key: 'wood-window-rot-repair', label: 'Wood Window Rot Repair' }
    ]
  },
  {
    key: 'doors',
    label: renderLabelWithArrow('Doors'),
    children: [
      { key: 'entry-doors', label: 'Entry Doors' },
      { key: 'exterior-doors', label: 'Exterior Doors' },
      { key: 'patio-doors', label: 'Patio Doors' },
      { key: 'in-glass-pet-doors', label: 'In-Glass Pet Doors' },
      { key: 'door-repair', label: 'Door Repair' },
      { key: 'door-glass-inserts', label: 'Door Glass Inserts' }
    ]
  },
  {
    key: 'screens',
    label: renderLabelWithArrow('Screens'),
    children: [
      { key: 'window-screens', label: 'Window Screens' },
      { key: 'screen-doors', label: 'Screen Doors' },
      { key: 'solar-screens', label: 'Solar Screens' },
      { key: 'in-screen-pet-doors', label: 'In-Screen Pet Doors' }
    ]
  },
  {
    key: 'commercial',
    label: renderLabelWithArrow('Commercial'),
    children: [
      { key: 'commercial-storefront', label: 'Commercial Storefront' },
      { key: 'commercial-glass-panels-partitions', label: 'Glass Panels and Partitions' }
    ]
  }
]



const AppHeader = () => {
  return (
    <Header>
      <Flex className='w-5xl! mx-auto!' align='center' justify='space-between'>
        <Flex className='cursor-pointer!'>
          <MainLogo />
          <Text className='ml-3! max-w-2/5! text-white! font-family-noto-sans! text-base! font-bold! tracking-wide! drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]!'>
                        GlowGlass<span className='text-blue-400!'>&</span>Window
          </Text>
        </Flex>

        <Menu
          theme='dark'
          mode='horizontal'
          items={items}
          className='min-w-0!'
          style={{ flex: 1 }}
        />
      </Flex>
    </Header>
  )
}

export default AppHeader
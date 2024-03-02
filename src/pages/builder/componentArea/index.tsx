import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import * as components from './components'
import { componentIconMap, componentTextMap } from './staticUtil/iconList'
import './style'

const onChange = (key: string) => {
  console.log(key);
};

const renderComponent = () => {
  return (
    <div className='componetGroup'>
      {
        Object.keys(components).map((name: string, index: number) => {
          const Icon = componentIconMap[name]
          const Text = componentTextMap[name]
          return (
            <div key={index} draggable='true' className='componentItem'>
              <div style={{ display: 'inline-block' }}>
                <span><Icon style={{ marginRight: '10px' }} /></span>
                <span>{Text}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <div style={{ fontSize: '18px', width: '100px', textAlign: 'center' }}>组件</div>,
    children: renderComponent(),
  },
  {
    key: '2',
    label: <div style={{ fontSize: '18px', width: '100px', textAlign: 'center' }}>数据</div>,
    children: 'Content of Tab Pane 2',
  },
];

const ComponentArea: React.FC = () => {
  return (
    <div className='componentArea'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
};

export default ComponentArea
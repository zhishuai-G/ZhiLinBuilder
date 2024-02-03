import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import * as components from './components'
import './style'

const onChange = (key: string) => {
  console.log(key);
};

const renderComponent = () => {
  return (
    <div>
      {
        Object.keys(components).map((name: string, index: number) => {
          return (
            <div key={index} draggable='true' className='componentItem'>
              <div style={{ display: 'inline-block' }}><span>{name}</span></div>
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
    label: <div style={{fontSize:'18px',width:'100px',textAlign:'center'}}>组件</div>,
    children: renderComponent(),
  },
  {
    key: '2',
    label: <div style={{fontSize:'18px',width:'100px',textAlign:'center'}}>组件</div>,
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
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import * as components from './components'
import { componentIconMap, componentTextMap } from './staticUtil/iconList'
import store from '../../../store'
import './style'

const ComponentArea: React.FC = () => {

  const onDragStart = (name: any) => {
    store.dispatch({ type: 'changeNowCom', value: name })
  }

  const renderComponent = () => {
    return (
      <div className='componetGroup'>
        {
          // components是一个对象，因此用Object.keys返回components对象的所有属性，返回值是数组，数组的每一项就是components的属性
          Object.keys(components).map((name: string, index: number) => {
            const Icon = componentIconMap[name]
            const Text = componentTextMap[name]
            return (
              <div key={index} draggable='true' className='componentItem' onDragStart={() => { onDragStart(name) }}>
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
  return (
    <div className='componentArea'>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
};

export default ComponentArea
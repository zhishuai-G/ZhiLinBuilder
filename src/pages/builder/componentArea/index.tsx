import React from 'react';
import { Tabs, Collapse } from 'antd';
import type { TabsProps, CollapseProps } from 'antd';
import * as components from './components'
import { componentIconMap, componentTextMap } from './staticUtil/iconList'
import './style'
import { useDispatch } from 'react-redux';
import { setDragCom } from '../../../store/slices/comSlice';

const ComponentArea: React.FC = () => {

  const dispatch = useDispatch()

  const onDragStart = (name: any) => {
    dispatch(setDragCom(name))
  }

  // 渲染组件
  const renderComponent = (comTypeList: string[]) => {
    // components是一个对象，因此用Object.keys返回components对象的所有属性，返回值是数组，数组的每一项就是components的属性
    const list = Object.keys(components).filter(item => comTypeList.includes(item))

    return (
      <div className='componetGroup'>
        {
          list.map((name: string, index: number) => {
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

  // 渲染折叠面板，对组件进行分组
  const renderCollapse = () => {

    const items: CollapseProps['items'] = [
      {
        key: 'universalComponents',
        label: '通用组件',
        children: renderComponent(['Button', 'Icon']),
      },
      {
        key: 'dataEntryComponents',
        label: '数据录入组件',
        children: renderComponent(['Input', 'Checkbox', 'Radio', 'Switch', 'Rate']),
      },
      {
        key: 'layouContainer',
        label: '布局容器',
        children: renderComponent(['Form']),
      },
    ];

    return (
      <Collapse items={items} bordered={false} defaultActiveKey={['universalComponents']} />
    )
  }


  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <div style={{ fontSize: '18px', width: '100px', textAlign: 'center' }}>组件</div>,
      children: renderCollapse(),
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
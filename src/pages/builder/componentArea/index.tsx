import React, { useState } from 'react';
import { Tabs, Collapse, Tree, Dropdown } from 'antd';
import type { TabsProps, CollapseProps } from 'antd';
import * as components from './components'
import { componentIconMap, componentTextMap } from './staticUtil/iconList'
import './style'
import { useDispatch, useSelector } from 'react-redux';
import { setDragCom } from '../../../store/slices/comSlice';
import { EditJson } from '../../modal';

const ComponentArea: React.FC = () => {

  const comReducer = useSelector((state: any) => state.comReducer)
  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合
  const dispatch = useDispatch()

  const [showJson, setShowJson] = useState(false) // 控制是否显示协议的弹窗
  const [jsonComId, setJsonComId] = useState('') // 保存要查看协议的组件ID

  // 下拉菜单展示的内容
  const dropItems = [
    {
      label: '查看JSON',
      key: 'showJson'
    }
  ]

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
        children: renderComponent(['Button', 'Icon', 'FloatButton']),
      },
      {
        key: 'dataEntryComponents',
        label: '数据录入组件',
        children: renderComponent(['Input', 'Checkbox', 'Radio', 'Switch', 'Rate']),
      },
      {
        key: 'layouContainer',
        label: '布局容器',
        children: renderComponent(['Form', 'Card', 'Badge']),
      },
      {
        key: 'feedbackComponent',
        label: '反馈组件',
        children: renderComponent(['Alert', 'Progress']),
      },
      {
        key: 'dataDisplaycomponent',
        label: '数据展示组件',
        children: renderComponent(['QRCode', 'Tag', 'Avatar']),
      }
    ];

    return (
      <Collapse items={items} bordered={false} defaultActiveKey={['universalComponents']} />
    )
  }

  // 右键触发下拉菜单内容的点击事件
  const menuOnClick = (comId: string) => {
    return (menuItem: any) => {
      if (menuItem.key === 'showJson') {
        setShowJson(true)
        setJsonComId(comId)
      }
    }
  }

  // 渲染数据部分
  const renderTreeList = () => {

    const toTreeData = (arr: []) => {
      return arr?.map((item: any) => {
        const node: any = {
          title: (
            <div>
              <Dropdown
                menu={{ items: dropItems, onClick: menuOnClick(item.comId) }}
                // contextMenu：右键点击触发
                trigger={['contextMenu']}
              >
                <span>{item.caption}</span>
              </Dropdown>
            </div>
          ),
          key: item.comId,
        }
        if (item?.childList) {
          node.children = toTreeData(item.childList)
        }
        return node
      })
    }

    const treeData = [
      {
        title: '组件协议',
        key: 'component-protocol',
        children: toTreeData(comList)
      }
    ]

    return (
      <Tree
        className='treeList'
        showLine={true}
        treeData={treeData}
      />
    );
  }

  const items: TabsProps['items'] = [
    {
      key: 'components',
      label: <div style={{ fontSize: '18px', width: '100px', textAlign: 'center' }}>组件</div>,
      children: renderCollapse(),
    },
    {
      key: 'data',
      label: <div style={{ fontSize: '18px', width: '100px', textAlign: 'center' }}>数据</div>,
      children: renderTreeList(),
    },
  ];
  return (
    <div className='componentArea'>
      <Tabs defaultActiveKey="1" items={items} />
      <EditJson jsonComId={jsonComId} showJson={showJson} setShowJson={setShowJson}></EditJson>
    </div>
  )
};

export default ComponentArea

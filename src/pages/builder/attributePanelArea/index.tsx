import { Tabs, TabsProps, Input } from 'antd';
import './style'
import { attributeMap } from './staticUtil/attributeMap';
import { useState } from 'react';
import ComponentType from './staticComponent';

const AttributePanelArea: React.FC = () => {
  const renderAttribute = () => {

    const name = window?.renderCom?.name // 拿到组件类型
    const comAttributeList = attributeMap[name] || [] // 拿到当前组件对应的属性

    const changeComAttribute = (value: string) => {
      return (e: any) => {
        let attribute = typeof e === 'object' ? e.target.value : e;
        window.renderCom[value] = attribute; // 把当前的属性绑定到组件renderCom上
        window.setComList([...window.comList]) // 因为renderCom发生了变化，所以重新更改comList
        console.log(window.renderCom);
      }
    }

    return (
      <div>
        {
          comAttributeList?.map((item: { label: string, value: string }, index: number) => {
            return (
              <div className='attributeItem' key={index}>
                <label className='attributeLabel'>{item.label}</label>
                <div className='attributeItemValue'>
                  <ComponentType {...item} onChange={changeComAttribute(item.value)} />
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
      label: <div style={{ fontSize: '18px', width: '100px', textAlign: 'center' }}>属性</div>,
      children: renderAttribute(),
    },
    {
      key: '2',
      label: <div style={{ fontSize: '18px', width: '100px', textAlign: 'center' }}>样式</div>,
      children: 'Content of Tab Pane 2',
    },
  ];

  const [update, setUpdate] = useState({})

  const onChange = (value: string) => {
    setUpdate({ value })
  }

  return (
    <div className='attributePanelArea'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
};

export default AttributePanelArea
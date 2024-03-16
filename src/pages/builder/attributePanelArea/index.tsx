import { Tabs, TabsProps } from 'antd';
import './style'
import { attributeMap } from './staticUtil/attributeMap';
import ComponentType from './staticComponent';
import store from '../../../store'
import { subscribeHook } from '../../../store/subscribe'

const AttributePanelArea: React.FC = () => {

  const comList = JSON.parse(JSON.stringify(store.getState().comList))  // 拖拽到画布区的组件的集合
  const selectCom = store.getState().selectCom // 在画布区点击选中的组件的comId
  const selectComNode = comList.find((item: any) => item.comId === selectCom) // 在画布区点击选中的组件的对象

  // 当store中的数据发生变化,重新渲染AttributePanelArea组件,意思就是我们拖动组件到画布区时,就在右侧渲染出当前组件对应的属性,样式等数据
  subscribeHook()

  const renderAttribute = () => {

    const name = selectComNode?.name // 拿到组件类型
    const comAttributeList = attributeMap[name] || [] // 拿到当前组件对应的属性数组

    const changeComAttribute = (value: string) => {
      return (e: any) => {
        let attribute = typeof e === 'object' ? e.target.value : e;
        selectComNode[value] = attribute  // 把当前的属性绑定到对应组件的selectComNode对象上
        // 因为当前点击选中组件的对象selectComNode发生了变化,所以更新store里面的comList
        store.dispatch({ type: 'changeComList', value: comList })
      }
    }

    return (
      <div>
        {
          comAttributeList?.map((item: any, index: number) => {
            return (
              <div className='attributeItem' key={index}>
                {/* 属性标题 */}
                <label title={item.label} className='attributeLabel'>{item.label}</label>
                {/* 属性的展现形式,如开关,下拉框,文本框等 */}
                {/* 比如按钮的属性数组buttonAttribute,item里面包含了label,value,type,options等内容,item对应的就是buttonAttribute的每一项 */}
                <div className='attributeItemValue'>
                  {/* 把当前选中的组件对象传递给渲染属性区的ComponentType */}
                  <ComponentType selectComNode={selectComNode} {...item} onChange={changeComAttribute(item.value)} />
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

  return (
    <div className='attributePanelArea'>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
};

export default AttributePanelArea
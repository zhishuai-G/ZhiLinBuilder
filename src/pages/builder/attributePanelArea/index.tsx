import { Tabs, TabsProps } from 'antd';
import './style'
import { attributeMap } from './staticUtil/attributeMap';
import ComponentType from './staticComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setComList } from '../../../store/slices/comSlice';
import { getComById } from '../../../utils/nodeUtils';
import { styleMap } from './staticUtil/styleMap';

const AttributePanelArea: React.FC = () => {

  const comReducer = useSelector((state: any) => state.comReducer)
  const dispatch = useDispatch()

  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合
  const selectCom = comReducer.selectCom // 在画布区点击选中的组件的comId
  const selectComNode = getComById(selectCom, comList) // 在画布区点击选中的组件的对象

  // 渲染属性面板
  const renderAttribute = () => {

    const name = selectComNode?.name // 拿到组件类型
    const comAttributeList = attributeMap[name] || [] // 拿到当前组件对应的属性数组

    const changeComAttribute = (value: string) => {
      return (e: any) => {
        let attribute = typeof e === 'object' ? e?.target?.value : e;
        selectComNode[value] = attribute  // 把当前的属性绑定到对应组件的selectComNode对象上
        // 因为当前点击选中组件的对象selectComNode发生了变化,所以更新store里面的comList
        dispatch(setComList(comList))
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
                {/* 比如按钮的属性数组buttonAttribute,item里面包含了label,value,type,options等内容,item对应的就是buttonAttribute的每一项,item.value就是当前的属性名 */}
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

  // 渲染样式面板
  const renderStyle = () => {

    const name = selectComNode?.name || '' // 拿到组件类型
    const comStyleList = styleMap[name] || [] // 拿到当前组件对应的属性数组

    const changeComStyle = (value: string) => {
      return (e: any) => {
        let attribute = e;
        if (typeof e === 'object') {
          if (['color', 'backgroundColor'].includes(value)) {
            attribute = e?.toHexString()
          } else {
            attribute = e?.target?.value
          }
        }
        if (['width', 'height'].includes(value)) {
          attribute += 'px'
        }
        if (!selectComNode?.comStyle) {
          selectComNode.comStyle = {}
        }
        selectComNode.comStyle[value] = attribute // 把当前的属性绑定到对应组件的selectComNode对象上
        // 因为当前点击选中组件的对象selectComNode发生了变化,所以更新store里面的comList
        dispatch(setComList(comList))
      }
    }

    return (
      <div>
        {
          comStyleList?.map((item: any, index: number) => {
            return (
              <div className='attributeItem' key={index}>
                <label title={item.label} className='attributeLabel'>{item.label}</label>
                <div className='attributeItemValue'>
                  <ComponentType selectComNode={selectComNode} {...item} onChange={changeComStyle(item.value)} />
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
      key: 'Attribute',
      label: <div style={{ fontSize: '18px', width: '100px', textAlign: 'center' }}>属性</div>,
      children: renderAttribute(),
    },
    {
      key: 'Style',
      label: <div style={{ fontSize: '18px', width: '100px', textAlign: 'center' }}>样式</div>,
      children: renderStyle(),
    },
  ];

  return (
    <div className='attributePanelArea'>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
};

export default AttributePanelArea
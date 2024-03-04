import { Tabs } from 'antd';
import { TabsProps, Input } from 'antd';
import './style'

const renderAttribute = () => {

  const changeComAttribute = (e: any) => {
    console.log(e.target.value);
    window.renderCom.caption = e.target.value // 把当前的标题值绑定到组件renderCom上的caption
    window.setComList([...window.comList]) // 因为renderCom发生了变化，所以重新更改comList
  }

  return (
    <div>
      <div className='attributeItem'>
        <label>按钮文字：</label>
        <div className='attributeItemValue'>
          <Input onChange={changeComAttribute} />
        </div>
      </div>
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

const AttributePanelArea: React.FC = () => {
  return (
    <div className='attributePanelArea'>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
};

export default AttributePanelArea
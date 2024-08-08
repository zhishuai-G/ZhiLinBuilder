import { Select, Switch, Input, InputNumber, Button, ColorPicker } from 'antd';
import { useState } from 'react';
import * as modalObj from '../../../modal';

export default function ComponentType(props: any) {

  const { onChange, type, defaultValue, options, value, selectComNode, modalType = 'IconSelect' } = props
  // 拿到弹窗类型对应弹窗的组件，比如modalType为IconSelect，就对应IconSelect组件
  const ModalComponent = modalObj[modalType as keyof typeof modalObj]
  // 控制是否展示弹窗
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const getComponent = () => {
    switch (type) {
      case 'input': {
        return <Input value={selectComNode?.[value] || ''} style={{ width: '120px' }} defaultValue={defaultValue} onChange={onChange} />
      }
      case 'switch': {
        return <Switch value={selectComNode?.[value] || defaultValue} defaultValue={defaultValue} onChange={onChange} />
      }
      case 'select': {
        return <Select value={selectComNode?.[value] || selectComNode?.comStyle?.[value] || defaultValue} style={{ width: '120px' }} options={options} defaultValue={defaultValue} onChange={onChange}></Select>
      }
      case 'number': {
        return <InputNumber value={selectComNode?.[value] || parseInt(selectComNode?.comStyle?.[value]) || defaultValue} style={{ width: '120px' }} defaultValue={defaultValue} onChange={onChange}></InputNumber>
      }
      case 'modal': {
        return <Button style={{ width: '120px' }} onClick={showModal}>选择图标</Button>
      }
      case 'entityModal': {
        return <Button style={{ width: '120px' }} onClick={showModal}>选择实体</Button>
      }
      case 'color': {
        return <ColorPicker value={selectComNode?.comStyle?.[value] || "#FFFFFF"} defaultValue={defaultValue} showText style={{ width: '120px' }} onChangeComplete={onChange} />
      }
      case 'attributeColor': {
        return <ColorPicker value={selectComNode?.[value] || "#FFFFFF"} defaultValue={defaultValue} showText style={{ width: '120px' }} onChangeComplete={onChange} />
      }
      case 'button': {
        return <Button style={{ width: '120px' }}>{value || ''}</Button>
      }
    }
  }
  return (
    <div>
      {getComponent()}
      <ModalComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></ModalComponent>
    </div>
  )
}
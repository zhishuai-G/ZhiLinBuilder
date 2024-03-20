import { Select, Switch, Input, InputNumber, Button } from 'antd';
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
        return <Input value={selectComNode[value] || ''} style={{ width: '120px' }} defaultValue={defaultValue} onChange={onChange} />
      }
      case 'switch': {
        return <Switch value={selectComNode[value] || false} defaultValue={defaultValue} onChange={onChange} />
      }
      case 'select': {
        return <Select value={selectComNode[value] || defaultValue} style={{ width: '120px' }} options={options} defaultValue={defaultValue} onChange={onChange}></Select>
      }
      case 'number': {
        return <InputNumber value={selectComNode[value] || defaultValue} style={{ width: '120px' }} defaultValue={defaultValue} onChange={onChange} min={0} max={360}></InputNumber>
      }
      case 'modal': {
        return <Button style={{ width: '120px' }} onClick={showModal}>选择图标</Button>
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
import { ComAttribute } from '../attributeMap'

const iconAttribute: ComAttribute[] = [
  {
    label: '图标旋转角度',
    value: 'rotate',
    type: 'number',
    defaultValue: 0
  },
  {
    label: '是否有旋转动画',
    value: 'spin',
    type: 'switch'
  },
  // 新增弹窗类型， modalType是弹窗的类型（确定是哪种类型的弹窗）
  {
    label: '选择图标',
    value: 'iconType',
    type: 'modal',
    modalType: 'IconSelect'
  }
]

export default iconAttribute
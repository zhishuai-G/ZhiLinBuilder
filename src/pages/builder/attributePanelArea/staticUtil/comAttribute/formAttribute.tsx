import { ComAttribute } from "../attributeMap"

const formAttribute: ComAttribute[] = [
  {
    label: '设置表单组件禁用',
    value: 'disabled',
    type: 'switch'
  },
  {
    label: '选择实体',
    value: 'entityCode',
    type: 'entityModal',
    modalType: 'EntitySelect'
  },
  {
    label: '文本对齐方式',
    value: 'labelAlign',
    type: 'select',
    options: [
      {
        value: 'left'
      },
      {
        value: 'right'
      }
    ],
    defaultValue: 'right'
  },
  {
    label: '设置字段组件的尺寸',
    value: 'size',
    type: 'select',
    options: [
      {
        value: 'small'
      },
      {
        value: 'middle'
      },
      {
        value: 'large'
      }
    ],
    defaultValue: 'middle'
  },
  {
    label: '标题显示冒号',
    value: 'colon',
    type: 'switch'
  }
  
]

export default formAttribute
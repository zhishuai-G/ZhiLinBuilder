import { ComAttribute } from "../attributeMap";

const switchAttribute: ComAttribute[] = [
  {
    label: '选中时的内容',
    value: 'checkedChildren',
    type: 'input'
  },
  {
    label: '非选中时的内容',
    value: 'unCheckedChildren',
    type: 'input'
  },
  {
    label: '是否禁用',
    value: 'disabled',
    type: 'switch'
  },
  {
    label: '开关大小',
    value: 'size',
    type: 'select',
    options: [
      {
        value: 'default'
      },
      {
        value: 'small'
      }
    ],
    defaultValue: 'default'
  },
]

export default switchAttribute
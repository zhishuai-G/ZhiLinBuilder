import { ComAttribute } from "../attributeMap";

const inputAttribute: ComAttribute[] = [
  {
    label: '设置后置标签',
    value: 'addonAfter',
    type: 'input'
  },
  {
    label: '设置前置标签',
    value: 'addonBefore',
    type: 'input'
  },
  {
    label: '显示清除图标',
    value: 'allowClear',
    type: 'switch'
  },
  {
    label: '默认值',
    value: 'defaultValue',
    type: 'input'
  },
  {
    label: '禁用',
    value: 'disabled',
    type: 'switch'
  },
  {
    label: '标签',
    value: 'label',
    type: 'input'
  }
]

export default inputAttribute
import { ComAttribute } from "../attributeMap";

const rateAttribute: ComAttribute[] = [
  {
    label: '是否允许再次点击后清除',
    value: 'allowClear',
    type: 'switch'
  },
  {
    label: '是否允许半选',
    value: 'allowHalf',
    type: 'switch'
  },
  {
    label: 'star总数',
    value: 'count',
    type: 'number'
  },
  {
    label: '只读',
    value: 'disabled',
    type: 'switch'
  }
]

export default rateAttribute
import { ComAttribute } from "../attributeMap"

const qrCodeAttribute: ComAttribute[] = [
  {
    label: '设置标题',
    value: 'caption',
    type: 'input'
  },
  {
    label: '扫描后的文本',
    value: 'value',
    type: 'input'
  },
  {
    label: '二维码大小',
    value: 'size',
    type: 'number'
  },
  {
    label: '二维码颜色',
    value: 'color',
    type: 'attributeColor'
  },
  {
    label: '二维码背景颜色',
    value: 'bgColor',
    type: 'attributeColor'
  },
  {
    label: '是否有边框',
    value: 'bordered',
    type: 'switch'
  },
]

export default qrCodeAttribute

import { Style } from "../styleMap";

const buttonStyle: Style[] = [
  {
    label: '设置宽度',
    value: 'width',
    type: 'number'
  },
  {
    label: '设置高度',
    value: 'height',
    type: 'number'
  },
  {
    label: '按钮文字大小',
    value: 'fontSize',
    type: 'number'
  },
  {
    label: '字体颜色',
    value: 'color',
    type: 'color'
  },
  {
    label: '背景颜色',
    value: 'backgroundColor',
    type: 'color'
  }
]

export default buttonStyle
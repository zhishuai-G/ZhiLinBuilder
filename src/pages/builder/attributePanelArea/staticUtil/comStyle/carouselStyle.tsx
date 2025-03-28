import { Style } from "../styleMap"
const carouselStyle: Style[] = [
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
    label: '背景颜色',
    value: 'backgroundColor',
    type: 'color'
  },
  {
    label: '边框宽度',
    value: 'borderWidth',
    type: 'number'
  },
  {
    label: '边框颜色',
    value: 'borderColor',
    type: 'color'
  },
  {
    label: '边框样式',
    value: 'borderStyle',
    type: 'select',
    options: [
      {
        value: 'solid',
        label: '实线'
      },
      {
        value: 'dotted',
        label: '点线'
      },
      {
        value: 'dashed',
        label: '虚线'
      }
    ],
    defaultValue: 'solid'
  }
]

export default carouselStyle